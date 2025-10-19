#!/usr/bin/env python3
"""
Generate README files for each language using data from translations.json.
This script creates language-specific README files in the readme/ subfolder.
"""

import json
import os

# Configuration
TRANSLATIONS_FILE = "docs/translations.json"
README_DIR = "docs/readme"
PDF_URL = "https://juliopchile.github.io/memoria-informe/main.pdf"

# Language metadata (badge colors and alert settings)
LANGUAGE_META = {
    "es": {
        "badge_color": "purple",
        "needs_alert": False,
        "setup_title": "Configuración",
        "setup_text": "Usar con la extensión de VsCode: [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstalar un compilador Text (ej. textlive en Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Resumen",
        "read_pdf": "**Leer PDF completo.**",
    },
    "en": {
        "badge_color": "blue",
        "needs_alert": False,
        "setup_title": "Setup",
        "setup_text": "Use with the VsCode extension: [Latex Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstall a Text compiler (eg. textlive in Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Abstract",
        "read_pdf": "**Read full PDF.**",
    },
    "ar": {
        "badge_color": "lightgrey",
        "needs_alert": True,
        "alert_text": (
            "**ملاحظة مهمة حول الترجمة**\n\n"
            "تمت ترجمة النص أدناه باستخدام أدوات الذكاء الاصطناعي (الترجمة الآلية). "
            "نظرًا لإمكانية احتواء هذه العملية على أخطاء أو عدم دقة، نوصي بالرجوع إلى النسخة "
            "الأصلية باللغة الإنجليزية أو الإسبانية لضمان دقة المعلومات.\n\n"
            "---"
        ),
        "setup_title": "الإعداد",
        "setup_text": "استخدم مع امتداد VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nثبّت مُجمّع TeX (مثل TeX Live على نظام لينكس).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "ملخص",
        "read_pdf": "**اقرأ المستند الكامل بصيغة PDF.**",
    },
    "de": {
        "badge_color": "blueviolet",
        "needs_alert": True,
        "alert_text": (
            "**Wichtiger Hinweis zur Übersetzung**\n\n"
            "Der nachfolgende Text wurde mithilfe von KI-Übersetzungstools (automatische Übersetzung) "
            "übersetzt. Da dieser Vorgang Fehler oder Ungenauigkeiten enthalten kann, empfehlen wir, "
            "zur Gewährleistung der Genauigkeit die Originalversion in Englisch oder Spanisch "
            "heranzuziehen.\n\n"
            "---"
        ),
        "setup_title": "Einrichtung",
        "setup_text": "Mit der VS Code-Erweiterung verwenden: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstallieren Sie einen TeX-Compiler (z. B. TeX Live unter Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Zusammenfassung",
        "read_pdf": "**Komplettes PDF lesen.**",
    },
    "fr": {
        "badge_color": "yellow",
        "needs_alert": True,
        "alert_text": (
            "**Note importante sur la traduction**\n\n"
            "Le texte ci-dessous a été traduit à l'aide d'outils d'IA (traduction automatique). "
            "Comme ce processus peut comporter des erreurs ou des imprécisions, nous recommandons de "
            "consulter la version originale en anglais ou en espagnol afin de garantir l'exactitude des "
            "informations.\n\n"
            "---"
        ),
        "setup_title": "Configuration",
        "setup_text": "À utiliser avec l’extension VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstallez un compilateur TeX (par exemple TeX Live sous Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Résumé",
        "read_pdf": "**Lire le PDF complet.**",
    },
    "he": {
        "badge_color": "teal",
        "needs_alert": True,
        "alert_text": (
            "**הערה חשובה לגבי התרגום**\n\n"
            "הטקסט הבא תורגם באמצעות כלים של בינה מלאכותית (תרגום אוטומטי). "
            "מכיוון שתהליך זה עלול לכלול שגיאות או חוסר דיוקים, אנו ממליצים לעיין "
            "בגרסה המקורית באנגלית או בספרדית כדי להבטיח את דיוק המידע.\n\n"
            "---"
        ),
        "setup_title": "הגדרה",
        "setup_text": "להשתמש עם התוסף ב־VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nהתקן מהדר TeX (כגון TeX Live בלינוקס).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "תקציר",
        "read_pdf": "**קרא את ה־PDF המלא.**",
    },
    "it": {
        "badge_color": "orange",
        "needs_alert": True,
        "alert_text": (
            "**Nota importante sulla traduzione**\n\n"
            "Il testo seguente è stato tradotto mediante strumenti di intelligenza artificiale "
            "(traduzione automatica). Poiché questo processo potrebbe contenere errori o imprecisioni, "
            "si consiglia di consultare la versione originale in inglese o in spagnolo per garantire "
            "l'accuratezza delle informazioni.\n\n"
            "---"
        ),
        "setup_title": "Configurazione",
        "setup_text": "Da usare con l’estensione di VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstalla un compilatore TeX (es. TeX Live su Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Riassunto",
        "read_pdf": "**Lire le PDF complet.**",
    },
    "ja": {
        "badge_color": "yellowgreen",
        "needs_alert": True,
        "alert_text": (
            "**翻訳に関する重要な注意事項**\n\n"
            "以下のテキストは AI（自動翻訳）ツールを使用して翻訳されています。"
            "この過程には誤りや不正確さが含まれる可能性があるため、情報の正確性を確保するには "
            "英語またはスペイン語の原文を参照することをお勧めします。\n\n"
            "---"
        ),
        "setup_title": "セットアップ",
        "setup_text": "VS Code 拡張機能 [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) と併用してください。.\n\nTeX コンパイラをインストール（例：Linux では TeX Live）。\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "概要",
        "read_pdf": "**PDF全文を読む。**",
    },
    "pt": {
        "badge_color": "brightgreen",
        "needs_alert": True,
        "alert_text": (
            "**Importante sobre a tradução**\n\n"
            "O texto abaixo foi traduzido usando ferramentas de IA (tradução automática). Como esse "
            "processo pode conter erros ou imprecisões, recomendamos consultar a versão original em "
            "inglês ou espanhol para garantir a precisão das informações.\n\n"
            "---"
        ),
        "setup_title": "Configuração",
        "setup_text": "Usar com a extensão do VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nInstale um compilador TeX (ex.: TeX Live no Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Resumo",
        "read_pdf": "**Ler o PDF completo.**",
    },
    "ru": {
        "badge_color": "lightblue",
        "needs_alert": True,
        "alert_text": (
            "**Важное примечание относительно перевода**\n\n"
            "Ниже приведён текст, переведённый с использованием инструментов искусственного интеллекта "
            "(автоматический перевод). Поскольку этот процесс может содержать ошибки или неточности, "
            "рекомендуется обратиться к оригиналу на английском или испанском языках для обеспечения точности информации.\n\n"
            "---"
        ),
        "setup_title": "Настройка",
        "setup_text": "Используйте с расширением VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nУстановите компилятор TeX (например, TeX Live в Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Аннотация",
        "read_pdf": "**Читать полный PDF.**",
    },
    "uk": {
        "badge_color": "skyblue",
        "needs_alert": True,
        "alert_text": (
            "**Важлива примітка щодо перекладу**\n\n"
            "Нижче наведено текст, перекладений за допомогою інструментів штучного інтелекту (автоматичний переклад). "
            "Оскільки цей процес може містити помилки або неточності, радимо звернутися до оригіналу англійською чи іспанською мовами "
            "для забезпечення точності інформації.\n\n"
            "---"
        ),
        "setup_title": "Налаштування",
        "setup_text": "Використовуйте з розширенням VS Code: [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\nВстановіть компілятор TeX (наприклад TeX Live у Linux).\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "Анотація",
        "read_pdf": "**Читати повний PDF.**",
    },
    "zh": {
        "badge_color": "darkred",
        "needs_alert": True,
        "alert_text": (
            "**重要提示：关于翻译**\n\n"
            "以下文本已通过 AI 工具（自动翻译）进行了翻译。由于该过程可能包含错误或不准确之处，我们建议参考英文或西班牙文原文，以确保信息的准确性。\n\n"
            "---"
        ),
        "setup_title": "设置",
        "setup_text": "配合 VS Code 扩展使用：[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\n安装 TeX 编译器（例如 Linux 下的 TeX Live）。\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "摘要",
        "read_pdf": "**阅读全文（PDF）。**",
    },
    "zh_TW": {
        "badge_color": "darkblue",
        "needs_alert": True,
        "alert_text": (
            "**關於翻譯的重要說明**\n\n"
            "以下文本已透過 AI 工具（自動翻譯）進行了翻譯。由於此過程可能包含錯誤或不精確之處，我們建議參考英文或西班牙文原文，以確保資訊的準確性。\n\n"
            "---"
        ),
        "setup_title": "設定",
        "setup_text": "請搭配 VS Code 擴充功能使用：[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)\n\n安裝 TeX 編譯器（例如 Linux 下的 TeX Live）。\n```bash\nsudo apt install texlive-full\n```",
        "abstract_title": "摘要",
        "read_pdf": "**閱讀完整 PDF。**",
    },
}

# Map language codes between translations.json and README filenames
LANG_CODE_MAP = {
    "ja": "jp",  # Japanese: translations.json uses "ja", README uses "jp"
    "zh": "zh_CN",  # Simplified Chinese
}


def load_translations():
    """Load translations from JSON file."""
    with open(TRANSLATIONS_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def get_readme_lang_code(json_lang_code):
    """Convert JSON language code to README filename language code."""
    return LANG_CODE_MAP.get(json_lang_code, json_lang_code)


def build_language_badges(translations):
    """Build language badge links for all languages."""
    badges = []
    
    # Define order for badges
    lang_order = ["en", "es", "fr", "zh", "zh_TW", "pt", "de", "it", "ja", "ar", "he", "ru", "uk"]
    
    for lang_code in lang_order:
        if lang_code not in translations:
            continue
            
        trans = translations[lang_code]
        meta = LANGUAGE_META.get(lang_code, {})
        readme_code = get_readme_lang_code(lang_code)
        
        badge_color = meta.get("badge_color", "lightgrey")
        label = trans.get("label", lang_code)
        
        badge = (
            f"[![{label}]"
            f"(https://img.shields.io/badge/lang-{label}-{badge_color})]"
            f"(README.{readme_code}.md)"
        )
        badges.append(badge)
    
    return "\n".join(badges)



# --- New helper to extract setup and PDF link from existing README files ---
import re

def extract_setup_and_pdf_from_readme(readme_path):
    """
    Extract the setup section (from first # header to next header) and PDF link text from a README file.
    Returns (setup_title, setup_text, pdf_link_text)
    """
    if not os.path.exists(readme_path):
        return (None, None, None)
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all headers
    headers = list(re.finditer(r"^# (.+)$", content, re.MULTILINE))
    if not headers:
        return (None, None, None)
    # Setup section is from first header to next header (or end)
    setup_title = headers[0].group(1).strip()
    start = headers[0].end()
    end = headers[1].start() if len(headers) > 1 else len(content)
    setup_text = content[start:end].strip()

    # Find last PDF link (e.g. [**Read full PDF.**](...))
    pdf_link_match = re.findall(r"\[(.+?)\]\([^)]+main.pdf\)", content)
    pdf_link_text = pdf_link_match[-1] if pdf_link_match else None
    return (setup_title, setup_text, pdf_link_text)


def generate_readme_content(lang_code, translations, badges, setup_title, setup_text, pdf_link_text):
    """Generate complete README content for a specific language, using extracted setup and PDF link text."""
    trans = translations[lang_code]
    meta = LANGUAGE_META.get(lang_code, {})
    content_parts = []
    # Add translation alert if needed
    if meta.get("needs_alert") and meta.get("alert_text"):
        content_parts.append(meta["alert_text"])
        content_parts.append("")
    # Add language badges
    content_parts.append(badges)
    content_parts.append("")
    # Add setup section (from README file if available, else fallback to metadata)
    meta_setup_title = meta.get("setup_title", "Setup")
    meta_setup_text = meta.get("setup_text", "")
    if setup_title and setup_text:
        content_parts.append(f"# {setup_title}")
        content_parts.append(setup_text)
        content_parts.append("")
    else:
        content_parts.append(f"# {meta_setup_title}")
        content_parts.append(meta_setup_text)
        content_parts.append("")
    # Add abstract section
    abstract_title = meta.get("abstract_title", trans.get("abstractTitle", "Abstract"))
    content_parts.append(f"# {abstract_title}")
    # Combine abstract paragraphs
    abstract_parts = []
    for key in ["abstract1", "abstract2", "abstract3"]:
        if key in trans:
            abstract_parts.append(trans[key])
    content_parts.append("\n\n".join(abstract_parts))
    content_parts.append("")
    # Add PDF link (from README file if available, else fallback to metadata)
    meta_pdf_link = meta.get("read_pdf", "**Read full PDF.**")
    if pdf_link_text:
        content_parts.append(f"[{pdf_link_text}]({PDF_URL})")
    else:
        content_parts.append(f"[{meta_pdf_link}]({PDF_URL})")
    return "\n".join(content_parts) + "\n"



def main():
    """Main function to generate all README files."""
    # Load translations
    print("Loading translations...")
    translations = load_translations()
    # Create readme directory if it doesn't exist
    os.makedirs(README_DIR, exist_ok=True)
    # Generate language badges
    print("Generating language badges...")
    badges = build_language_badges(translations)
    # Generate README for each language
    for lang_code in translations.keys():
        readme_code = get_readme_lang_code(lang_code)
        readme_path = os.path.join(README_DIR, f"README.{readme_code}.md")
        # Extract setup and PDF link from existing README, if available
        setup_title, setup_text, pdf_link_text = extract_setup_and_pdf_from_readme(readme_path)
        print(f"Generating {readme_path}...")
        content = generate_readme_content(lang_code, translations, badges, setup_title, setup_text, pdf_link_text)
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(content)
    print(f"\n✅ Successfully generated {len(translations)} README files!")


if __name__ == "__main__":
    main()
