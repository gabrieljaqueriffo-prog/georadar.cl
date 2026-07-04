# Síntesis Técnica — ATLAS

<!-- ATLAS — Uso interno hasta aprobación explícita de Gabriel. -->

---

## Título interno

Qué puede decirnos una señal GPR además de una imagen

---

## ¿Puede publicarse?

**Sí** — pendiente de revisión final de Gabriel antes de crear el activo público.

---

## Pregunta que responde

¿La señal GPR solo produce imágenes del subsuelo, o contiene información que va más allá de lo visual?

---

## Fuentes utilizadas

| Ficha | Nivel | Contribución a esta síntesis |
|-------|-------|------------------------------|
| `papers/2024-paredes-gpr-analisis-cuantitativo-brief.md` | 1-2 con zonas 3 | Fuente principal: parámetros cuantitativos de la señal, variación espectral, aplicaciones |
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1-2 | Contexto de fundamentos: propagación, atenuación, propiedades del medio |

---

## Síntesis original

Cuando se entrega el resultado de un estudio GPR, lo que se ve primero es una imagen: el radargrama. Líneas horizontales que representan interfaces entre materiales, hipérbolas que indican objetos puntuales, zonas de alta o baja reflectividad. La interpretación visual de ese radargrama —identificar qué significan esas formas— es lo que la mayoría de las personas entiende como el resultado del estudio.

Pero la señal GPR contiene algo más.

**La señal lleva información sobre el medio que atravesó.**

Cada vez que una onda de radar viaja a través de un material, ese material deja una huella en la señal. No solo en la posición y forma de las reflexiones —lo que se ve en la imagen— sino en parámetros que no son directamente visibles: su amplitud, su distribución de frecuencias y el ritmo al que se atenúa a lo largo del recorrido.

Esos parámetros no son decorativos. Reflejan las propiedades eléctricas del material: su permitividad dieléctrica y su conductividad. Y esas propiedades, a su vez, están relacionadas con características físicas del terreno que son relevantes para la toma de decisiones, como el contenido de humedad.

**Lo que cambia en la señal cuando cambia el terreno.**

En materiales que absorben más energía electromagnética —suelos húmedos, arcillas, materiales conductivos— la señal se atenúa más rápido. Esa diferencia en el ritmo de atenuación es medible. La curva de atenuación de la señal a lo largo de un perfil no es ruido: contiene información sobre las propiedades del material atravesado.

Algo similar ocurre con el espectro de frecuencias de la señal. Una antena GPR no emite a una sola frecuencia: emite un pulso con un rango de frecuencias. Al atravesar materiales distintos, ese espectro se modifica: las frecuencias más altas se atenúan primero, y la frecuencia dominante de la señal se desplaza hacia valores más bajos en materiales con mayor pérdida de energía. Ese desplazamiento también refleja las propiedades del medio.

**La diferencia entre interpretación visual y cuantitativa.**

La interpretación visual extrae patrones reconocibles de la imagen del radargrama: la forma de una hipérbola, la continuidad de una interfaz, la presencia de una anomalía. Es una lectura experta e imprescindible, pero depende de la experiencia del intérprete y puede ser difícil de documentar de forma objetiva.

La interpretación cuantitativa extrae parámetros numéricos de la señal: la frecuencia dominante en un segmento del perfil, la pendiente de la curva de atenuación, el ancho de banda en una zona concreta. Esos parámetros son objetivos y reproducibles. No dependen de la lectura visual del operador. Y en ciertos contextos, permiten estimar propiedades del medio con mayor precisión que la sola observación visual.

Ambos enfoques son complementarios. El cuantitativo no reemplaza al visual: lo enriquece con una capa adicional de información que el análisis visual no puede extraer por sí solo.

**Qué aplicaciones habilita este enfoque.**

La estimación de humedad del suelo a partir de la señal GPR es una de las aplicaciones más directas. Si la atenuación de la señal correlaciona con la conductividad del medio, y la conductividad correlaciona con el contenido de agua, el GPR puede usarse como un sensor indirecto de humedad en estudios geotécnicos o ambientales, sin necesidad de perforar o muestrear.

La inspección de estructuras de pavimento es otra aplicación relevante. Las interfaces entre capas —asfalto, base, subbase— producen reflexiones con características espectrales distintas. Analizar esas diferencias permite no solo identificar las capas visualmente, sino estimar parámetros de la estructura con mayor objetividad.

La detección de suelos contaminados también entra en este marco. Ciertos contaminantes modifican las propiedades eléctricas del suelo de forma detectable en la señal GPR. Las anomalías no siempre son visibles como reflectores claros en el radargrama: pueden manifestarse como cambios en los parámetros de la señal que solo se detectan con análisis cuantitativo.

**Lo que no puede extraerse sin criterio especializado.**

Saber que la señal contiene información cuantitativa no equivale a poder extraerla. Los métodos para hacerlo —análisis espectral de la señal, procesamiento de la curva de atenuación, inversión de propiedades a partir de parámetros medidos— requieren formación técnica específica, condiciones de medición controladas y criterio interpretativo que no se improvisa.

Lo que puede entender cualquier profesional es que esa capacidad existe y que cambia el tipo de resultado que un estudio GPR puede entregar, cuando el operador la domina y el objetivo lo justifica.

---

## Qué puede publicarse de esta síntesis

1. Que la señal GPR contiene información cuantitativa sobre el medio, no solo imágenes.
2. La distinción entre interpretación visual e interpretación cuantitativa.
3. Que la curva de atenuación es sensible al contenido de humedad y a la conductividad.
4. Que el espectro de la señal se modifica al atravesar distintos materiales.
5. Las aplicaciones que habilita: humedad, pavimentos, contaminación.
6. Que extraer esa información requiere métodos y criterio especializado.

---

## Qué debe quedar interno

1. Los algoritmos específicos de análisis espectral.
2. Los procedimientos de deconvolución o inversión de propiedades.
3. Los criterios concretos para caracterizar capas a partir de parámetros de señal.
4. Cualquier protocolo de campo derivado de la tesis fuente.

---

## Aplicación práctica general

Un profesional que lea este contenido puede:
- Entender que el resultado de un estudio GPR puede ir más allá de la lectura visual del radargrama.
- Preguntar a su proveedor si el análisis incluye parámetros cuantitativos de señal, y en qué casos corresponde.
- Valorar la diferencia entre un operador que interpreta visualmente y uno que aplica análisis cuantitativo.

---

## Posibles títulos públicos

1. Qué puede decirnos una señal GPR además de una imagen
2. Más allá del radargrama: qué información cuantitativa lleva la señal GPR
3. Por qué la señal GPR no es solo una imagen del subsuelo

---

## Tipo de activo recomendado

- [x] Artículo de biblioteca técnica — concepto técnico diferenciador, explicado para profesionales no especialistas.

---

## CTA recomendado si se publica

> El análisis cuantitativo de la señal GPR no está disponible en todos los estudios ni es necesario para todos los objetivos. Si su proyecto requiere más que una lectura visual del radargrama, una consulta previa permite definir qué nivel de análisis corresponde.

---

## Referencias públicas sugeridas

> Paredes Palacios, D. (2024). _Nuevos métodos de análisis cuantitativo de datos de georradar mediante el estudio de la influencia de las propiedades electromagnéticas del medio_ [Tesis doctoral]. Universidad Politécnica de Madrid.

_(Citar solo cuando se confirme acceso público en repositorio UPM. Hasta entonces, omitir cita pública o usar formulación genérica "investigación reciente en análisis cuantitativo GPR".)_

---

## Conexión futura con BADR

Si un cliente menciona que necesita "medir" algo con el GPR —espesor de capa, nivel de humedad, grado de deterioro— en lugar de solo "detectar" una anomalía, este conocimiento orienta la conversación hacia una evaluación de qué tipo de análisis corresponde. Señal posible para BADR: "cliente usa palabras como medir, cuantificar, estimar valor → explorar si el objetivo requiere análisis cuantitativo de señal".

---

## Aprobación de publicación

- **Revisado por Gabriel:** pendiente
- **Fecha de aprobación:** —
- **Activo público creado:** —
- **Notas de la revisión:** —
