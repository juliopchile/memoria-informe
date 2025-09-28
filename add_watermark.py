import os
import cv2
import numpy as np
from typing import TypedDict, cast
from collections.abc import Iterator

# --- Constantes y tipos ---
ALLOWED_EXTS = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".bmp", ".webp"}

class Config(TypedDict):
    logo1_path: str
    logo2_path: str
    scale1: float | None
    scale2: float | None
    padding: int
    alpha1: float | None
    alpha2: float | None
    pattern_mode: str
    pattern_logo: str
    pattern_gap: int
    pattern_place_corners: bool
    pattern_random_start: bool
    pattern_extend_outwards: bool
    random_seed: int | None

# --- Funciones utilitarias de carga y transformación ---
def read_with_alpha(path: str) -> np.ndarray:
    """Lee imagen preservando alfa; si no existe alfa lo añade."""
    img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    if img is None:
        raise FileNotFoundError(f"No se pudo leer: {path}")
    if img.ndim == 2:
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGRA)
    if img.shape[2] == 3:
        b, g, r = cv2.split(img)
        alpha = np.full_like(b, 255)
        img = cv2.merge((b, g, r, alpha))
    return img  # BGRA

def scale_logo(logo: np.ndarray, scale: float | None, base_w: int) -> np.ndarray:
    """Escala el logo relativo al ancho base si scale no es None."""
    if scale is None:
        return logo
    new_w = max(1, int(base_w * scale))
    aspect = logo.shape[0] / logo.shape[1]
    new_h = max(1, int(new_w * aspect))
    return cv2.resize(logo, (new_w, new_h), interpolation=cv2.INTER_AREA)

def apply_alpha(logo: np.ndarray, factor: float | None) -> np.ndarray:
    """Aplica factor multiplicativo al canal alfa (clamp 0..1)."""
    if factor is None:
        return logo
    f = float(max(0.0, min(1.0, factor)))
    if f >= 1.0:
        return logo
    out = logo.copy()
    out[:, :, 3] = (out[:, :, 3].astype(np.float32) * f).clip(0, 255).astype(np.uint8)
    return out

def overlay_rgba(base_bgr: np.ndarray, overlay_bgra: np.ndarray, x: int, y: int):
    """Superpone overlay BGRA sobre base BGR en posición (x,y) con alfa."""
    h, w = base_bgr.shape[:2]
    oh, ow = overlay_bgra.shape[:2]
    if x >= w or y >= h or x + ow <= 0 or y + oh <= 0:
        return
    x1_o = max(0, -x); y1_o = max(0, -y)
    x2_o = min(ow, w - x); y2_o = min(oh, h - y)
    x1_b = max(x, 0); y1_b = max(y, 0)
    x2_b = x1_b + (x2_o - x1_o); y2_b = y1_b + (y2_o - y1_o)
    roi_base = base_bgr[y1_b:y2_b, x1_b:x2_b]
    roi_over = overlay_bgra[y1_o:y2_o, x1_o:x2_o]
    overlay_rgb = roi_over[:, :, :3].astype(np.float32)
    alpha = (roi_over[:, :, 3].astype(np.float32) / 255.0)[..., None]
    base_rgb = roi_base.astype(np.float32)
    roi_base[:] = (alpha * overlay_rgb + (1 - alpha) * base_rgb).astype(np.uint8)

# --- Lógica de patrón ---
def random_offsets(step_x: int, step_y: int, enable: bool, rng: np.random.Generator) -> tuple[int, int]:
    if not enable:
        return 0, 0
    ox = 0 if step_x <= 1 else int(rng.integers(0, step_x))
    oy = 0 if step_y <= 1 else int(rng.integers(0, step_y))
    return ox, oy

def iter_pattern_coords(
    base_w: int,
    base_h: int,
    step_x: int,
    step_y: int,
    off_x: int,
    off_y: int,
    extend: bool,
) -> Iterator[tuple[int, int]]:
    if extend:
        start_x = -off_x - step_x
        end_x = base_w + step_x
        start_y = -off_y - step_y
        end_y = base_h + step_y
    else:
        start_x = -off_x
        end_x = base_w
        start_y = -off_y
        end_y = base_h
    for yy in range(start_y, end_y, step_y):
        for xx in range(start_x, end_x, step_x):
            yield xx, yy

def apply_pattern(
    base: np.ndarray,
    logo1: np.ndarray,
    logo2: np.ndarray,
    *,
    mode: str,
    selection: str,
    gap: int,
    random_start: bool,
    extend: bool,
    rng: np.random.Generator,
):
    """Aplica el patrón de teselación según parámetros."""
    if mode != "grid":
        return
    base_h, base_w = base.shape[:2]
    if selection in ("logo1", "logo2"):
        logo = logo1 if selection == "logo1" else logo2
        lh, lw = logo.shape[:2]
        step_x = max(1, lw + gap)
        step_y = max(1, lh + gap)
        off_x, off_y = random_offsets(step_x, step_y, random_start, rng)
        for x, y in iter_pattern_coords(base_w, base_h, step_x, step_y, off_x, off_y, extend):
            overlay_rgba(base, logo, x, y)
    else:  # both
        lh1, lw1 = logo1.shape[:2]
        lh2, lw2 = logo2.shape[:2]
        step_x = max(lw1, lw2) + gap
        step_y = max(lh1, lh2) + gap
        off_x, off_y = random_offsets(step_x, step_y, random_start, rng)
        for x, y in iter_pattern_coords(base_w, base_h, step_x, step_y, off_x, off_y, extend):
            use_first = ((y + off_y) // step_y + (x + off_x) // step_x) % 2 == 0
            overlay_rgba(base, logo1 if use_first else logo2, x, y)

# --- Salida y utilidades ---
def build_output_path(image_path: str, out_path: str) -> str:
    """Determina ruta final conservando nombre original (ajusta extensión si no soportada)."""
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    ext = os.path.splitext(os.path.basename(image_path))[1]
    if not ext or ext.lower() not in ALLOWED_EXTS:
        final_filename = f"{base_name}.png"
    else:
        final_filename = os.path.basename(image_path)
    treat_as_dir = (
        out_path.endswith(os.sep)
        or os.path.isdir(out_path)
        or not os.path.splitext(out_path)[1]
    )
    if treat_as_dir:
        os.makedirs(out_path, exist_ok=True)
        return os.path.join(out_path, final_filename)
    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    return out_path

def is_image_file(filename: str) -> bool:
    return os.path.splitext(filename)[1].lower() in ALLOWED_EXTS

# --- Proceso principal ---
def process(
    image_path: str,
    logo1_path: str,
    logo2_path: str,
    out_path: str,
    scale1: float | None,
    scale2: float | None,
    padding: int,
    alpha1: float | None = None,
    alpha2: float | None = None,
    pattern_mode: str = "none",
    pattern_logo: str = "logo1",
    pattern_gap: int = 80,
    pattern_place_corners: bool = True,
    pattern_random_start: bool = True,
    pattern_extend_outwards: bool = True,
    random_seed: int | None = None,
):
    """Aplica marcas de agua (patrón + esquinas) y guarda."""
    base = cv2.imread(image_path, cv2.IMREAD_COLOR)
    if base is None:
        raise FileNotFoundError(f"No se pudo leer: {image_path}")

    # Carga y preparación de logos
    logo1 = apply_alpha(scale_logo(read_with_alpha(logo1_path), scale1, base.shape[1]), alpha1)
    logo2 = apply_alpha(scale_logo(read_with_alpha(logo2_path), scale2, base.shape[1]), alpha2)

    # Patrón
    rng = np.random.default_rng(random_seed)
    apply_pattern(
        base,
        logo1,
        logo2,
        mode=pattern_mode,
        selection=pattern_logo,
        gap=pattern_gap,
        random_start=pattern_random_start,
        extend=pattern_extend_outwards,
        rng=rng,
    )

    # Esquinas
    if pattern_mode == "none" or pattern_place_corners:
        base_h, base_w = base.shape[:2]
        overlay_rgba(base, logo1, padding, padding)
        overlay_rgba(base, logo2, base_w - logo2.shape[1] - padding, base_h - logo2.shape[0] - padding)

    # Guardar
    final_path = build_output_path(image_path, out_path)
    cv2.imwrite(final_path, base)
    print(f"Guardado: {final_path}")
    return final_path

# --- Lote principal ---
if __name__ == "__main__":
    config = cast(Config, {
        "logo1_path": "logos/logo-wildsense.png",
        "logo2_path": "logos/logo-aquarov.png",
        "scale1": 0.17,
        "scale2": 0.17,
        "padding": 20,
        "alpha1": 0.5,
        "alpha2": 0.65,
        "pattern_mode": "grid",
        "pattern_logo": "both",
        "pattern_gap": 85,
        "pattern_place_corners": False,
        "pattern_random_start": True,
        "pattern_extend_outwards": True,
        "random_seed": None,  # fija un entero para reproducibilidad
    })

    input_dirs = [
        "figures_without_watermark/results",
        "figures_without_watermark/filter_examples",
    ]
    out_root = "figures"
    total = 0

    for in_dir in input_dirs:
        base_name = os.path.basename(os.path.normpath(in_dir))
        for root, _, files in os.walk(in_dir):
            rel_inside = os.path.relpath(root, in_dir)
            rel_inside = "" if rel_inside == "." else rel_inside
            dest_dir = os.path.join(out_root, base_name, rel_inside)
            for fname in files:
                if not is_image_file(fname):
                    continue
                src_path = os.path.join(root, fname)
                process(image_path=src_path, out_path=dest_dir, **config)
                total += 1

    print(f"Total procesadas: {total}")
