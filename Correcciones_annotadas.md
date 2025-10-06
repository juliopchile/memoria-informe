# Reporte de Correcciones Anotadas

Este documento consolida cada corrección solicitada, acción requerida y archivos donde se insertó un comentario `% TODO Corrección [N]:`.

## Leyenda
- Estado: (P) Pendiente de desarrollo de contenido, (A) Anotado con TODO, (C) Completado previamente.
- Impacto: Estructural (E), Contenido (T), Estilo/Redacción (S), Métricas/Resultados (M).

| Nº | Resumen Corrección | Acción Requerida Específica | Archivos | Estado | Impacto |
|----|--------------------|-----------------------------|----------|--------|---------|
| 1 | Ya realizada | Sin acción | — | C | — |
| 2 | Enfatizar framework validación | Añadir párrafo integrador y referencias cruzadas a métricas tracking/segmentación | 6_introduccion, 9-3_metricasValidacion, 9-7_tracking, 10_resultados | A | E/M |
| 3 | Separar Problema, Solución, Hipótesis | Crear subsecciones en Introducción | 6_introduccion, 9_TrabajoaRealizar | A | E/T |
| 4 | Reescribir Objetivo General | Ajustar redacción con foco biomasa y robustez | 6_introduccion | A | T |
| 5 | Contexto salmonicultura | Expandir impacto operativo y productivo | 6_introduccion | A | T |
| 6 | Estructura de la memoria | Insertar listado futuro de capítulos reorganizados | 6_introduccion | A | E |
| 7 | Dividir Cap.2 y remover Blender | Separar Soluciones vs Herramientas; eliminar referencias irrelevantes | 7_MarcoTeorico, 8_arte | A | E/T |
| 8 | Ajustar vocabulario beneficios y tracking | Reescribir frases ambiguas, precisar relación tracking-by-detection | 7_MarcoTeorico, 8_arte | A | T |
| 9 | Renombrar “Trabajo a realizar” y motivación biomasa/lesiones | Cambiar título y expandir justificación | 9_TrabajoaRealizar | A | E/T |
|10 | Consistencia “dataset” masculino | Revisar y unificar términos | 9-2_tools | A | S |
|11 | Reposicionar MOTA como complemento | Añadir explicación balance HOTA/AssA/IDF1 vs MOTA | 9-3_metricasValidacion, 9-6_trainSalmones, 9-7_tracking, 11_conclusiones | A | M/T |
|12 | Correcciones ortográficas y estilo | Acentos, reemplazar “porciento” por “%”, formalizar expresiones coloquiales | 9-6_trainSalmones, 9-7_tracking | A | S |
|13 | Añadir MOTA a tablas y negritas | Incluir columna/filas y resaltar mejores métricas | 9-3_metricasValidacion, 9-7_tracking, 10_resultados, 11_conclusiones | A | M |
|14 | Reestructurar capítulos (Validación, etc.) | Crear Cap.4, mover métricas/resultados, ajustar referencias | 9_TrabajoaRealizar, 9-1_metodologia, 9-3_metricasValidacion, 9-4_depuracionSalmones, 9-5_trainDeepfish, 9-6_trainSalmones, 9-7_tracking, 10_resultados, 11_conclusiones | A | E |

## Observaciones Generales
- Todas las correcciones (2–14) poseen al menos un comentario TODO.
- No se alteró contenido original; sólo se agregaron comentarios.
- Se sugiere realizar las modificaciones en el orden: (1) Reestructuración capítulos (7,14), (2) Inserción Framework (2), (3) Problema/Solución/Hipótesis (3), (4) Métricas/MOTA (11,13), (5) Ortografía y estilo (10,12), (6) Ajustes finales Conclusiones (5,4,9).

## Próximos Entregables Recomendados
1. Borrador Cap. 4 Validación con todas las métricas y tablas consolidadas.
2. Revisión lingüística integral posterior a re-escritura estructural.
3. Tablas regeneradas incluyendo MOTA y estilos tipográficos normalizados.
4. Actualización de `main.tex` para reflejar nueva jerarquía (cuando se implementen movimientos efectivos).

---
Reporte generado automáticamente.
