## Correcciones Memoria Julio López + Changelogs

1) _piscícola: si bien es un término preciso y correcto, no se usa mucho en la práctica… se utiliza más el término acuícola, aunque como digo está bien, puedes elegir con cuál quedarte._

Decidí cambiar piscícola por acuícola como me recomendó.

---
2) _Destaca en la memoria (incluido el Resumen) también el framework de validación de precisión en conjunto con métricas de tracking by detection._

Cambié el abstract para reflejar que las mejoras buscadas y obtenidas son en calidad de segmentación y mejor tracking. Pero no mostré números ni dije cuales son las métricas de validación usadas. Esto lo hice para no hacer el abstract más largo y no ocupe más de una página.

---
3) _Ahonda en el contexto acerca de la relevancia en la mejora en precisión para tareas específicas como la estimación de biomasa y detección de lesiones, junto con la relevancia del seguimiento de instancias para reducir el remuestreo y aumentar la cantidad de muestras por pez, lo cual permite mejorar la estimación de cada instancia en particular._

Moví el contenido de la sección **4. Trabajo realizado por WildSense y motivación de mejoras** que se encontraba en la parte de **Trabajo a realizar** a la ahora nueva subsección **1.1 Motivación de mejora** en la parte de **Introducción**. De esa manera explico en la introducción cómo funciona el proceso de estimación de biomasa de WildSense para luego indicar bien cuál es el problema (en la subsección siguiente) y como esto es relevante para la calidad de las estimaciones y el uso de muestras en detección de lesiones.

Además, incluí una figura que muestra un ejemplo de detección de enfermedades implementada por WildSense.

---
4) _En la introducción debes agregar antes de los objetivos 3 secciones:_

    _1.2 Problema a Resolver: explica el problema a resolver con el mayor detalle posible._

    _1.3 Acercamiento a la Solución: Resume para el lector la solución implementada._

    _1.4 Hipótesis: describe la hipótesis a validar en la memoria (se valida en el capítulo de Validación); también se describen preguntas de trabajo, que son aspectos de interés más específicos a validar (también en Validación)._

Creadas las subsecciones indicadas:

**1.2. Problema a resolver**: conecto la explicación previa en **1. Contexto general** y **1.1. Motivación de mejora**  indicando de forma general y también puntual cuales son los problemas principales con el flujo de trabajo actual. También indico por qué estos problemas nacen de la base de datos usada.

**1.3. Acercamiento a la solución**: explico la solución implementada en la memoria, resumiendo a grandes rasgos lo que se hizo en la misma: depurar el dataset de salmones; crear el dataset de seguimiento para salmones; hacer pruebas con diferentes modelos YOLO, optimización de hiperparámetros y exportación TensoRT; y las pruebas hechas con Deepfish con fines de replicación, al menos para la parte de segmentación de instancias.

```
[DUDA] ¿Debería de poner un resumen de lo que hice o solo un resumen de la solución implementada? siento que es casi lo mismo, pero no exactamente igual ya que al poner que hice queda algo más largo, pero igual me calzó bien. Digame que es lo que considera más apropiado.
```

**1.4. Hipótesis**: describo los resultados que espero obtener y con qué métricas voy a corroborar esto.

```
[COMENTARIO]
Debo de admitir que la inclusión de estas 3 subsecciones no es la más "elegante", incurro bastante en repetición de ideas y palabras. Quizá soy demasiado verboso en ellas. También tengo miedo de que la introducción quede demasiado larga.

Además, la sección de "Trabajo realizado por WildSense y motivación de mejoras" que moví a la sección de "Contexto General" en la introducción, originalmente iba a estar allí, pero leí por ahí un documento que explica el formato de las memorias para ELO y decía que la introducción + Marco Teórico y SOTA no pueden sobrepasar cierto largo, yo no respeté mucho eso, ya que igual me exedí, pero a fin de no exederme taaanto moví esa sección a la parte "Trabajo a realizar" (ahora llamada "Desarrollo de la Solución"). Además me parecía que era mejor poner la motivación luego del SOTA, ya que en el SOTA se explican terminologías y nombres utilizados en la otra sección, por ende ponerlas en la introducción podría ser muy intrusiva para el lector, al exponerlo a tantos conceptos que no han sido explicados aún. Pero finalmente la tuve que poner igualmente en la introducción, así que xD.
```

---
5) _En el objetivo general debes poner que es en el contexto de jaulas de cultivo de la salmonicultura (o acuicultura). El objetivo no es entrenar modelos, sino que mejorar la calidad de la segmentación y el seguimiento de instancias de peces (o de salmones siendo especifico), a través de lo que hiciste._

Mejoré la ahora subsección **1.5. Objetivo general** para especificar el contexto de jaulas de cultivo en acuicultura y que sea más coherente con los puntos especificados en las subsecciones anteriores. Además modifiqué los **1.6. Objetivo específicos** para que sean más coherentes con los cambios realizados.

---
6) _Luego de la Hipótesis, agrega una sección “Estructura de la Memoria” que explique brevemente el contenido de cada capítulo posterior._

```
[DUDA] Esto va luego de las subsecciones de "Objetivo general" y "Objetivos específicos"? o inmediatamente luego de "Hípotesis" y antes de los objetivos? asumí lo primero y los pondré luego de los objetivos para mantener orden en el texto.
```

---
7) _Estructura el Estado del Arte como capítulo de la memoria de la siguiente forma:_

    _2.1 Soluciones existentes (Competidores): describe las soluciones existentes al problema o aquellas que más se acercan a resolver el problema. Se deben citar in situ y referenciar al final._

    _2.2 Herramientas y Métodos (Marco Teórico): explica las técnicas y componentes de interés para resolver el problema, pudiendo ser tanto del estado del arte como del estado de la técnica. Se deben citar in situ y referenciar al final._

    _2.3 Discusión: Un par de párrafos indicando desde las soluciones existentes en qué se diferencia la solución propuesta en la memoria (contribuciones), describiendo en detalle utilizando los elementos del marco teórico cómo se estructura la solución, enfatizando las diferencias con lo existente._

    _La sección 2.1 que escribiste (Visión por computadora y su uso en la acuicultura) es 2.1 Soluciones existentes. El capítulo 3 de Estado del Arte que escribiste debiese ser 2.2 Herramientas y Métodos (ó Marco Teórico)._

Se cambió la sección **2. Marco Teórico** por la parte **Estado del Arte**.

Se cambió la subsección **2.1. Visión por computadora y su uso en la acuicultura** por la sección **2. Soluciones Existentes**.  Incluí unas imagenes de ejemplo donde se ve como miden peces de forma tradicional (a mano o con máquinas), para ilustrar mejor la idea de que estas técnicas son invasivas y estresantes para el animal. Además añadí un pequeño parrafo hablando de las proyecciones de WildSense en detección de enfermedades, inspección de mallas y monitoreo subacuático.

Se cambió la sección **3. Estado del arte** por **3. Herramientas y Métodos**, ya que "Estado del Arte" es ahora el nombre de la parte entera. El contenido no se cambió.

Se creó la sección de **4. Discusión** al final de la parte de **Estado del Arte**. Aquí menciono cual es la diferencia entre mi "solución" y otras soluciones existentes (WildSense) y por qué tiene valor mi propuesta. También justifico el uso de YOLO por sobre otras arquitecturas, eso se relaciona con las técnicas de entrenamiento y exportación.

---
8) _En el marco teórico que desarrollaste (que en realidad es “Soluciones Existentes”):_

- _En el segundo párrafo destaca también la relevancia de la estimación de biomasa._
- _“modelos tridimensionales generados en Blender, para la estimación de volumen y masa en peces”: ya no utilizamos Blender por lento, así que basta que digas: “modelos tridimensionales para la estimación de volumen y masa en peces”._
- _Si encuentras más técnicas que resuelven los problemas de la acuicultura incluso de forma parcial, debieses agregarlos en esta sección._

Modifiqué el segundo párrafo de la ahora sección **2. Soluciones Existentes** para destacar la relevancia de la estimación de biomasa. Puse a la estimación de biomasa como una de las formas de monitorear la salud de los peces entre parentesis. Además agregué otro parrafo entre ese y el tercero para mencionar porque es importante la visión por computadora en estas tareas.

Quité la referencia a Blender.

No encontré más técnicas que resuelvan problemas en acuicultura, prefiero no ahondar más en el tema por razones de tiempo. Pero como mencioné en el punto anterior, incluí un parrafo mencionando que WildSense está proyectandose para solucionar otros problemas en la acuicultura.

---
_En el estado del arte que desarrollaste (que en realidad es “Marco Teórico”):_

- _reducción en consumo energéticos. → reducción en consumo energético._
- _en la 3.5.1 creo relevante hacer el punto con lo previamente mencionado, que en el marco de esta memoria, dada la utilización de modelos de detección y segmentación de instancia, resulta adecuada la consideración de técnicas de tracking-by-detection, que es lo que finalmente presentas en esta sección._

Corregí el error de ortografía en la subsección **3.4. Técnicas de optimización**

En la sección **3.5 Seguimiento** Hago enfasis en como las técnicas de seguimiento basado en detección son interes particular para este proyecto.

---
9) _El título “Trabajo a realizar” desbiese ser el Capítulo 3 – Desarrollo de la Solución._

La parte de **Trabajo a realizar** se cambió a **Desarrollo de la Solución**

---
10) _En 6.3 (base de datos):_

    _“El primero de carácter público y con la finalidad de replicación de resultados. El segundo de carácter privado, que además es depurado en una versión más refinada para lograr mejores modelos.” → debieses hablar de dataset dado el caracter de información anotada para entrenamiento y validación. Así esta frase puede ser en “masculino”, pues hablas del “dataset” y no de la base de datos._

Reformulé el párrafo en **6.3. Bases de datos** para que sea sintacticamente más correcta.

---
11) _Cuidado con lo que dices en la sección 7, pues MOTA es de las mejoras métricas en representar directamente la calidad de las asociaciones al tener un énfasis en métricas de coincidencia de tamaño y número de tracks, que es finalmente lo más importante de la tarea de tracking (pues para la precisión tenemos métricas específicas de segmentación). Ve si es necesario ajustar la discusión de resultados a estas consideraciones._

Reformulé la sección para incluir MOTA como métrica utilizada y no excluirla.

---
12) _Correcciones ortográficas y de estilo_
- _identico → idéntico_
- _en como está definida → en cómo está definida_
- _imagenes → imágenes_
- _“o tomado con pinzas” : busca una manera más formal de decirlo_
- _porciento → %_

---
13) _Me interesa en particular que agregues los resultados de la métrica MOTA.
Agrega en la sección segmentación un recordatorio de qué métrica es mejor o peor, poniendo con negrita en cada columna el mejor valor para las tablas 11.20 en adelante. (tab:tracking\_promedio\_model)_

---
14) _Reestructura la memoria considerando un Capítulo de Validación:_

- _4. Validación: Se definen las pruebas y métricas asociadas para validar la hipótesis, las preguntas de trabajo y el logro de los objetivos. Se definen también los datasets de prueba si corresponde, o herramientas de evaluación para poder realizar la validación. Luego, se presentan los resultados obtenidos. Finalmente, se agrega una sección Discusión que explica si se logró o no, y en qué grado, validar la hipótesis, las preguntas de trabajo y el logro de los objetivos. En el contexto de lo desarrollado, dado que parte de tus objetivos de desarrollo es la depuración de la base de datos, desde el capítulo 7 de Métricas debisesen ser secciones del capítulo de Validación. El capítulo 12 que hiciste llámalo como sección “Discusión” donde, como hiciste, discutas los resultados más relevantes previos a la Conclusión de la memoria._
