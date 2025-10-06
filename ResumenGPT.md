# Resumen Extenso Estructurado (Generado por GPT)

## 1. Propósito del Documento
Documento de memoria orientado al desarrollo de una solución de visión computacional para conteo, segmentación y seguimiento de salmones (y especies en dataset DeepFish) con fines de: (a) estimación de biomasa futura, (b) monitoreo de salud (potencial detección de lesiones), (c) soporte a optimización productiva en sistemas de cultivo (jaulas). Se emplean arquitecturas modernas de detección/segmentación y técnicas de tracking para unir identidades a lo largo del tiempo.

## 2. Problema, Solución, Objetivos e Hipótesis (Estructura Futurizada según Correcciones)
- Problema: Dificultad para obtener mediciones fiables de conteo y dinámica de peces en entornos submarinos con ruido (reflejos, turbidez, iluminación variable), lo que afecta estimación precisa de biomasa y detección temprana de anomalías.
- Solución propuesta: Pipeline de detección/segmentación (YOLOv8/YOLOv9 + variantes, modelos de segmentación de instancias y posiblemente SAM2 para anotación asistida) + seguimiento multi‑objeto (tracking-by-detection) para asociar detecciones y generar trayectorias limpias evaluadas con métricas robustas (HOTA, AssA, IDF1, MOTA, etc.).
- Objetivo General (a refinar): Desarrollar y validar un sistema integrado de visión que permita segmentar y seguir peces de forma robusta para respaldar estimaciones confiables de biomasa y habilitar análisis posteriores de salud.
- Objetivos Específicos (resumidos):
  1. Curar y preparar datasets (DeepFish y propio de salmones) reduciendo ruido y redundancia.
  2. Entrenar y comparar modelos de detección/segmentación (mAP@50, mAP@50-95, F1, IoU).
  3. Implementar y evaluar módulos de tracking sobre secuencias (HOTA, AssA, IDF1, MOTA, MOTP, MT%, IDSW, Frag).
  4. Integrar métricas y análisis cualitativo para seleccionar configuraciones equilibradas (precisión vs robustez).
  5. Preparar base metodológica que permita futura extensión a estimación de biomasa/lesiones.
- Hipótesis (a formular explícita): "La combinación de un modelo de segmentación de instancias optimizado + un tracker basado en detección con ajuste de umbrales espaciales y temporales mejora simultáneamente (≥X%) la asociación de identidades (IDF1/HOTA) sin degradar significativamente la precisión de detección (mAP@50) respecto a un baseline sin afinamiento." (Valores X concretar tras resultados).

## 3. Marco Conceptual / Framework de Validación (Corrección [2])
Se requiere enfatizar un framework de validación multicapa:
1. Nivel detección/segmentación: F1, Precision, Recall, mAP@50, mAP@50-95, IoU.
2. Nivel tracking: HOTA (equilibrio exactitud detección + asociación), AssA (pure association), DetA (pure detection dentro de HOTA), IDF1, MOTA (enfatizar complementariedad, no reemplazo), MOTP (precisión espacial), MT%, IDSW, Frag.
3. Criterios de selección: Modelo/Tracker elegido debe maximizar HOTA e IDF1 bajo umbral mínimo de mAP@50 y controlar IDSW.
4. Reporte: Tablas deben incluir MOTA (Corrección [13]) y destacar mejores valores con negritas.

## 4. Reorganización Estructural Propuesta (Correcciones [7], [8], [14])
Capítulo 2 actual se dividirá en:
- 2.1 Soluciones existentes (estado del arte de métodos, arquitecturas, trabajos previos en conteo/segmentación/tracking de peces, enfoques de reducción de ruido, técnicas de data augmentation, comparaciones breves).
- 2.2 Herramientas y Métodos (frameworks utilizados, librerías, modelos seleccionados, descripción técnica de YOLOv8/v9, criterios de elección, mención de herramientas de anotación – SAM2, etc.).
- 2.3 Discusión (análisis crítico: limitaciones ambientales, trade-offs precisión/latencia, carencias de datasets, retos de transferencia dominio).
Nuevo Capítulo 4: Validación (mover definiciones de métricas, metodología experimental de evaluación, tablas de resultados segmentación y tracking, análisis comparativo incluyendo MOTA).
Resultados (antiguo Cap. 10) se ajusta para referenciar Cap. 4 y enfocarse en interpretación agregada / implicancias.
Conclusiones se mantienen concisas; parte de discusión técnica se centraliza en 2.3 y 4.

## 5. Dataset y Preparación (Corrección [10])
- Consistencia terminológica: usar "dataset" (masculino) y evitar alternancias ("el dataset", "los datasets").
- DeepFish: provee diversidad ambiental; se usa para experimentos base y transferencia.
- Dataset de salmones: requiere depuración (frames redundantes, iluminación, oclusiones). Cap. Depuración describe filtrado y balance.
- Futuro: documentación cuantitativa del impacto del filtrado (ej. % de frames removidos por criterio) puede fortalecer metodología.

## 6. Modelos y Entrenamiento
- Arquitecturas YOLO (v8, v9, YOLO11) y variantes de segmentación (Mask RCNN, Mask Scoring RCNN, SOLOv1/v2) exploradas teóricamente (figuras presentes). Selección final a concretar con resultados.
- Entrenamientos separados: DeepFish vs Salmones para observar transferencia.
- Posible uso de pruning/quantization (figura presente) para optimizar despliegue (no desarrollado en texto actual: potencial sección breve).

## 7. Tracking
- Enfoque tracking-by-detection: enlaza detecciones cuadro a cuadro.
- Métricas: HOTA recomendada como eje central (justificar: equilibra precisión detección y asociación). MOTA se reintroduce como métrica adicional (corrigiendo afirmación previa que minimizaba su relevancia). Incluir MOTP y desgloses de ID switches y fragmentaciones.
- Tablas deben incorporar MOTA y resaltar mejores HOTA/IDF1/MOTA en negrita.

## 8. Resultados (Estado Actual y Ajustes Necesarios)
- Aún faltan tablas consolidadas con MOTA. Existen menciones a métricas de segmentación y tracking pero con necesidad de homogeneizar criterios de presentación.
- Incluir sección de selección de modelo final: matriz de decisión (ponderaciones: HOTA 0.35, IDF1 0.25, mAP@50 0.2, IDSW (penalización), FPS 0.2) – ajustar pesos empíricamente.

## 9. Conclusiones (Aspectos a Reforzar)
- Enlazar explícitamente impacto en: gestión de biomasa, monitoreo de salud, escalabilidad operacional.
- Señalar limitaciones: variabilidad ambiental, dataset propio reducido, ausencia métrica directa de biomasa todavía.
- Trabajo futuro: estimación volumétrica, clasificación de lesiones, adaptación dominio cruzado, incorporación de modelos foundation (SAM2) para etiquetado semi-automático.

## 10. Mapeo Archivos .tex ↔ Capítulos / Secciones
- `1_portada.tex`: Portada (sin edición).
- `2_agradecimientos.tex`: Agradecimientos.
- `3_resumen.tex`: Resumen / Abstract (añadir alineación con problema/solución tras reestructurar).
- `4_glosario.tex`: Glosario.
- `5_indice.tex`: Índice (autogenerado con TOC).
- `6_introduccion.tex`: Cap. 1 Introducción (Contexto, Problema/Solución/Hipótesis a insertar, Objetivos, Motivación).
- `7_MarcoTeorico.tex`: Futuro 2.1 Soluciones existentes.
- `8_arte.tex`: Futuro 2.2 Herramientas y Métodos.
- (Nuevo) 2.3 Discusión: se formará desde síntesis crítica actualmente dispersa (parte de 7, 8, y notas en 9_TrabajoaRealizar).
- `9_TrabajoaRealizar.tex`: Renombrar a Desarrollo de la Solución (pipeline general, motivación extendida).
- `9-1_metodologia.tex`: Flujo metodológico general (parte migrará a Cap. 4 para validación detallada).
- `9-2_tools.tex`: Herramientas y datasets (permanecer en Cap. 2.2 tras ajuste, o consolidar).
- `9-3_metricasValidacion.tex`: Migrar a Cap. 4 Validación (definiciones de métricas).
- `9-4_depuracionSalmones.tex`: Preparación / curación dataset (quedaría en Desarrollo de la Solución, con referencias en Validación si se cuantifica impacto).
- `9-5_trainDeepfish.tex`: Experimentos segmentación (dividir: configuración en Cap. 2.2 vs resultados en Cap. 4).
- `9-6_trainSalmones.tex`: Experimentos específicos salmones (similar separación).
- `9-7_tracking.tex`: Resultados tracking (Cap. 4).
- `10_resultados.tex`: Síntesis integrada post-migración (puede reducirse; referencias cruzadas a Cap. 4).
- `11_conclusiones.tex`: Conclusiones.
- `12_referencias.tex`: Bibliografía.
- `13_anexos.tex`: Anexos.
- `template_imagenes.tex`: Plantilla figuras.

## 11. Cobertura de Correcciones y Archivos Anotados
| Corrección | Resumen | Archivos con TODO |
|------------|---------|-------------------|
| 1 | Ya indicada como hecha | (ninguno) |
| 2 | Enfatizar framework validación | 6_introduccion, 9-3_metricasValidacion, 9-7_tracking, 10_resultados |
| 3 | Separar Problema/Solución/Hipótesis | 6_introduccion, 9_TrabajoaRealizar |
| 4 | Reescribir Objetivo General | 6_introduccion |
| 5 | Contexto salmonicultura | 6_introduccion |
| 6 | Estructura de la memoria | 6_introduccion |
| 7 | Dividir Cap. 2 / remover Blender / agregar más técnicas | 7_MarcoTeorico, 8_arte |
| 8 | Precisión vocabulario (beneficios, tracking-by-detection) | 7_MarcoTeorico, 8_arte |
| 9 | Renombrar "Trabajo a realizar" + motivación biomasa/lesiones | 9_TrabajoaRealizar |
|10 | Consistencia "dataset" masculino | 9-2_tools |
|11 | Reposicionar MOTA (complemento) | 9-3_metricasValidacion, 9-6_trainSalmones, 9-7_tracking, 11_conclusiones |
|12 | Ortografía (idéntico, imágenes, %, formalizar expresiones) | 9-6_trainSalmones, 9-7_tracking |
|13 | Añadir MOTA resultados + negritas mejores métricas | 9-3_metricasValidacion, 9-7_tracking, 10_resultados, 11_conclusiones |
|14 | Reestructurar capítulos (Validación, mover secciones) | 9_TrabajoaRealizar, 9-1_metodologia, 9-3_metricasValidacion, 9-4_depuracionSalmones, 9-5_trainDeepfish, 9-6_trainSalmones, 9-7_tracking, 10_resultados, 11_conclusiones |

## 12. Ambigüedades / Decisiones Pendientes
- Falta definir cuantitativamente umbrales de aceptación (ej. HOTA mínimo aceptable, mAP@50 baseline) → proponer tabla criterios.
- No se han incluido aún valores concretos de MOTA/MOTP (requiere re-ejecución evaluación tracking).
- Hipótesis requiere cifra objetivo (≥X%).
- Ponderaciones de matriz de decisión no definidas en texto original.
- Diferenciación entre discusión y resultados: precisar qué análisis se traslada a 2.3 vs Cap. 4.

## 13. Recomendaciones Incrementales
1. Crear script reproducible de evaluación (Makefile o sección latexmkrc custom) para generar tablas con HOTA/IDF1/MOTA automáticamente.
2. Añadir citaciones específicas para definición de HOTA (Luiten et al.) y MOTChallenge para MOTA/MOTP.
3. Incluir breve subsección de riesgos: sobreajuste a condiciones de iluminación, sensibilidad a oclusiones densas.
4. Unificar estilo tablas: caption descriptivo + label consistente (tab:val_segmentacion_*, tab:val_tracking_*).
5. Aplicar paquete `siunitx` para porcentajes y consistencia numérica.

## 14. Próximos Pasos Ejecutables
- Redactar secciones nuevas: Problema, Solución, Hipótesis (Intro).
- Repartir contenido Cap. 2 en 2.1/2.2/2.3.
- Crear Cap. 4 Validación y mover definiciones métricas y resultados.
- Regenerar tablas incluyendo MOTA y resaltar mejores valores.
- Revisar estilo ortográfico (acentos, porcentajes, tecnicismos).
- Actualizar conclusiones con impacto biomasa/salud.

---
Documento generado automáticamente para asistir la reorganización y corrección estructural.
