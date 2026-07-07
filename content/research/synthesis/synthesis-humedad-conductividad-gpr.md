# Síntesis Técnica — ATLAS

<!-- ATLAS — Uso interno hasta aprobación explícita de Gabriel. -->

---

## Título interno

Cómo afecta la humedad del suelo a un estudio GPR

---

## ¿Puede publicarse?

**Sí** — aprobado por Gabriel el 2026-07-04.

---

## Pregunta que responde

¿Por qué un estudio GPR en terreno húmedo entrega resultados limitados, y cómo distinguir una limitación del terreno de un error del equipo o del operador?

---

## Fuentes utilizadas

| Ficha | Nivel | Contribución a esta síntesis |
|-------|-------|------------------------------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1-2 | Fundamento físico: humedad → conductividad → atenuación; nivel freático como barrera |
| `papers/2024-paredes-gpr-analisis-cuantitativo-brief.md` | 1-2 con zonas 3 | Refuerzo: estimación de humedad desde curva de atenuación; gradiente de conductividad |

---

## Síntesis original

La pregunta más incómoda después de un estudio GPR en terreno húmedo es si algo falló. La señal no llegó a la profundidad esperada, el radargrama no muestra lo que se buscaba, y el resultado parece insatisfactorio. Antes de concluir que el equipo falló o que el operador cometió un error, conviene entender qué ocurrió físicamente con la señal.

**La humedad actúa en dos frentes simultáneos.**

Cuando el suelo tiene agua libre, dos cosas cambian al mismo tiempo. Por un lado, la constante dieléctrica del material sube —el agua tiene una constante dieléctrica muy alta, cerca de 80, frente al 3 o 4 del suelo seco— lo que reduce la velocidad de propagación de la señal y altera la estimación de profundidades si no se calibra correctamente. Por otro, el contenido de agua libre aumenta la conductividad del suelo, que es la propiedad que determina cuánta energía de la señal se disipa por unidad de distancia recorrida.

El primer efecto cambia la geometría de los resultados. El segundo determina si la señal llega o no.

**Conductividad es la variable que decide.**

La atenuación de la señal GPR se mide en decibeles por metro. En suelos secos y favorables puede ser de menos de 1 dB/m; en arcilla húmeda puede superar los 100 dB/m. Esa diferencia no es marginal: es la diferencia entre alcanzar varios metros de profundidad o agotarse en los primeros centímetros. La conductividad eléctrica del suelo es el factor que explica ese salto.

El agua pura no es el problema. La conductividad del agua libre depende de su contenido de sales y minerales disueltos. Un suelo arenoso con lluvia reciente se comporta de forma muy distinta a un suelo arcilloso en zona minera con agua cargada de sulfatos. Ambos son "húmedos", pero su conductividad puede diferir en órdenes de magnitud.

**El efecto no es binario: hay un gradiente.**

La humedad no hace que el GPR "funcione o no funcione". Hay un gradiente continuo que depende del grado de saturación, del tipo de suelo, de la salinidad del agua y de la frecuencia usada. Un suelo con humedad moderada puede reducir la profundidad efectiva a la mitad sin eliminarla. Un suelo saturado de agua salina puede hacer que la señal no pase del primer metro, independientemente de la antena.

Ese gradiente importa porque permite calibrar las expectativas antes del estudio si se conocen las condiciones del sitio. No es lo mismo planificar un estudio en terreno desértico que en una llanura con nivel freático superficial.

**El nivel freático como barrera adicional.**

Cuando el nivel freático está a poca profundidad, no solo aumenta la conductividad de las capas superiores: puede actuar directamente como una interfaz reflectante fuerte. La mayor parte de la energía del radar se refleja en esa superficie y no continúa hacia mayor profundidad. Detectar objetivos ubicados por debajo del nivel freático puede ser difícil o imposible, dependiendo de la profundidad y de las condiciones.

**Qué puede obtenerse cuando el terreno es muy húmedo.**

Que la señal no alcance el objetivo principal no convierte automáticamente el estudio en inútil. En algunos casos, el GPR puede detectar alteraciones en las capas superiores: zonas de descompactación, interfaces irregulares, acumulaciones de agua localizada que sugieren procesos de subsecuente colapso o pérdida de soporte. Esa información tiene valor aunque no confirme directamente la anomalía buscada.

Además, la curva de atenuación de la señal en sí misma lleva información sobre las propiedades del terreno. En estudios orientados a caracterizar el suelo —no a detectar un objeto específico— la atenuación medida puede ser un indicador del contenido de humedad o de la conductividad del material, sin necesidad de llegar a mayor profundidad.

**Por qué una evaluación previa cambia el resultado.**

Conocer el tipo de suelo, el historial de lluvias recientes, la profundidad del nivel freático y la presencia de sales antes de un estudio permite tres cosas: calibrar las expectativas de forma realista, elegir la configuración de antena más adecuada para esas condiciones, y decidir si el GPR es suficiente o si conviene combinarlo con otra técnica desde el principio.

Un resultado de GPR limitado por terreno húmedo, documentado y explicado correctamente, sigue siendo información útil para la toma de decisiones. Lo que no ayuda es esperar resultados de suelo seco en un terreno saturado.

---

## Qué puede publicarse de esta síntesis

1. El mecanismo en tres pasos: humedad → conductividad → atenuación.
2. La distinción entre agua pura y agua con sales (conductividad es la variable, no la humedad en sí).
3. El gradiente de efecto: no es binario.
4. El nivel freático como barrera de penetración.
5. Qué puede obtenerse cuando el terreno es muy húmedo (detección indirecta, caracterización del suelo).
6. La importancia de la evaluación previa para calibrar expectativas.

---

## Qué debe quedar interno

1. Valores cuantitativos de atenuación según tipo de suelo específico.
2. Procedimientos para estimar conductividad desde la curva de atenuación del radargrama.
3. Criterios de interpretación de la curva envolvente como indicador de humedad.

---

## Posibles títulos públicos

1. Cómo afecta la humedad del suelo a un estudio con georradar
2. Por qué un suelo húmedo limita la señal del georradar y qué puede hacerse
3. Humedad y conductividad: los dos factores que más limitan un estudio GPR

---

## Tipo de activo recomendado

- [x] Artículo de biblioteca técnica — gestión de expectativas + mecanismo físico explicado.

---

## CTA recomendado si se publica

> Un estudio GPR en terreno húmedo requiere planificación específica. Si las condiciones de su sitio incluyen suelo arcilloso, nivel freático superficial o historial de humedad alta, una evaluación previa permite definir qué es posible obtener antes de comprometer recursos.

---

## Conexión con activos existentes

- Complementa (no duplica) "Qué hace que un suelo sea difícil para el GPR" — ese artículo cubre los materiales; este cubre el mecanismo y la gestión de expectativas.
- Complementa "Por qué la profundidad del georradar depende del terreno" — ese artículo cubre todos los factores; este profundiza solo en humedad/conductividad.
- Enlace saliente natural: calculadora de viabilidad GPR (input de humedad).

---

## Aprobación de publicación

- **Revisado por Gabriel:** sí
- **Fecha de aprobación:** 2026-07-04
- **Activo público creado:** `/biblioteca/como-afecta-la-humedad-al-georradar/`
- **Notas de la revisión:** aprobado, deuda saldada
