## Correcciones Memoria Julio López

1) [DONE] piscícola: si bien es un término preciso y correcto, no se usa mucho en la práctica… se utiliza más el término acuícola, aunque como digo está bien, puedes elegir con cuál quedarte.

2) Destaca en la memoria (incluido el Resumen) también el framework de validación de precisión en conjunto con métricas de tracking by detection.

3) Ahonda en el contexto acerca de la relevancia en la mejora en precisión para tareas específicas como la estimación de biomasa y detección de lesiones, junto con la relevancia del seguimiento de instancias para reducir el remuestreo y aumentar la cantiddad de muestras por pez, lo cual permite mejorar la estimación de cada instancia en particular.

4) En la introducción debes agregar antes de los objetivos 3 secciones:

    1.2 Problema a Resolver: explica el problema a resolver con el mayor detalle posible.

    1.3 Acercamiento a la Solución: Resume para el lector la solución implementada.

    1.4 Hipótesis: describe la hipótesis a validar en la memoria (se valida en el capítulo de Validación); también se describen preguntas de trabajo, que son aspectos de interés más específicos a validar (también en Validación).

5) En el objetivo general debes poner que es en el contexto de jaulas de cultivo de la salmonicultura (o acuicultura). El objetivo no es entrenar modelos, sino que mejorar la calidad de la segmentación y el seguimiento de instancias de peces (o de salmones siendo especifico), a través de lo que hiciste.

6) Luego de la Hipótesis, agrega una sección “Estructura de la Memoria” que explique brevemente el contenido de cada capítulo posterior.

7) Estructura el Estado del Arte como capítulo de la memoria de la siguiente forma: 
    2.1 Soluciones existentes (Competidores): describe las soluciones existentes al problema o aquellas que más se acercan a resolver el problema. Se deben citar in situ y referenciar al final.

    2.2 Herramientas y Métodos (Marco Teórico): explica las técnicas y componentes de interés para resolver el problema, pudiendo ser tanto del estado del arte como del estado de la técnica. Se deben citar in situ y referenciar al final.

    2.3 Discusión: Un par de párrafos indicando desde las soluciones existentes en qué se diferencia la solución propuesta en la memoria (contribuciones), describiendo en detalle utilizando los elementos del marco teórico cómo se estructura la solución, enfatizando las diferencias con lo existente.

La sección 2.1 que escribiste (Visión por computadora y su uso en la acuicultura) es 2.1 Soluciones existentes. El capítulo 3 de Estado del Arte que escribiste debiese ser 2.2 Herramientas y Métodos (ó Marco Teórico). 

8) En el marco teórico que desarrollaste (que en realidad es “Soluciones Existentes”):
- En el segundo párrafo destaca también la relevancia de la estimación de biomasa.
- “modelos tridimensionales generados en Blender, para la estimación de volumen y masa en peces”: ya no utilizamos Blender por lento, así que basta que digas: “modelos tridimensionales para la estimación de volumen y masa en peces”.
- Si encuentras más técnicas que resuelven los problemas de la acuicultura incluso de forma parcial, debieses agregarlos en esta sección.
En el estado del arte que desarrollaste (que en realidad es “Marco Teórico”):
- reducción en consumo energéticos. → reducción en consumo energético.
- en la 3.5.1 creo relevante hacer el punto con lo previamente mencionado, que en el marco de esta memoria, dada la utilización de modelos de detección y segmentación de instancia, resulta adecuada la consideración de técnicas de tracking-by-detection, que es lo que finalmente presentas en esta sección.

9) El título “Trabajo a realizar” desbiese ser el Capítulo 3 – Desarrollo de la Solución.

10) En 6.3 (base de datos):
“El primero de carácter público y con la finalidad de replicación de resultados. El segundo de carácter privado, que además es depurado en una versión más refinada para lograr mejores modelos.” 
→ debieses hablar de dataset dado el caracter de información anotada para entrenamiento y validación. Así esta frase puede ser en “masculino”, pues hablas del “dataset” y no de la base de datos.

11) Cuidado con lo que dices en la sección 7, pues MOTA es de las mejoras métricas en representar directamente la calidad de las asociaciones al tener un énfasis en métricas de coincidencia de tamaño y número de tracks, que es finalmente lo más importante de la tarea de tracking (pues para la precisión tenemos métricas específicas de segmentación). Ve si es necesario ajustar la discusión de resultados a estas consideraciones.

12) Correcciones ortográficas y de estilo
- identico → idéntico
- en como está definida → en cómo está definida
- imagenes → imágenes
- “o tomado con pinzas” : busca una manera más formal de decirlo
- porciento → %

13) Me interesa en particular que agregues los resultados de la métrica MOTA.
Agrega en la sección segmentación un recordatorio de qué métrica es mejor o peor, poniendo con negrita en cada columna el mejor valor para las tablas 11.20 en adelante. (tab:tracking_promedio_model)

14) Reestructura la memoria considerando un Capítulo de Validación:

- 4. Validación: Se definen las pruebas y métricas asociadas para validar la hipótesis, las preguntas de trabajo y el logro de los objetivos. Se definen también los datasets de prueba si corresponde, o herramientas de evaluación para poder realizar la validación. Luego, se presentan los resultados obtenidos. Finalmente, se agrega una sección Discusión que explica si se logró o no, y en qué grado, validar la hipótesis, las preguntas de trabajo y el logro de los objetivos. En el contexto de lo desarrollado, dado que parte de tus objetivos de desarrollo es la depuración de la base de datos, desde el capítulo 7 de Métricas debisesen ser secciones del capítulo de Validación. El capítulo 12 que hiciste llámalo como sección “Discusión” donde, como hiciste, discutas los resultados más relevantes previos a la Conclusión de la memoria.
