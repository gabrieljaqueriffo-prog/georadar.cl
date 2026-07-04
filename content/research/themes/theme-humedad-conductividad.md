# Research Theme — ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

---

## Tema

Humedad y conductividad del suelo en el GPR

---

## Pregunta central

¿Cómo y por qué la presencia de agua y la conductividad eléctrica del suelo reducen el rendimiento del georradar, y cómo comunicarlo de forma técnicamente honesta sin generar expectativas incorrectas?

---

## Por qué importa para ATLAS

Es la causa más frecuente de estudios GPR que no logran el objetivo esperado. Un cliente que contrata un estudio en terreno húmedo sin haber sido advertido de las limitaciones queda insatisfecho aunque el equipo haya funcionado correctamente. Explicar este tema bien es una herramienta de gestión de expectativas y de construcción de confianza.

Además, tiene alto potencial SEO: preguntas como "¿el georradar funciona en suelo húmedo?" o "¿por qué el georradar no detectó la tubería?" son búsquedas reales de profesionales que no recibieron explicación técnica antes o después de un estudio.

---

## Estado editorial del tema

- **Estado:** listo para síntesis
- **Prioridad:** alta
- **Fecha de apertura:** 2026-07-04

---

## Fuentes relacionadas

| Ficha | Nivel de frontera | Relevancia |
|-------|-------------------|------------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1-2 | muy alta |

---

## Principios públicos que podemos enseñar

1. La humedad aumenta la constante dieléctrica del suelo, lo que modifica la velocidad de propagación de la señal.
2. La humedad también aumenta la conductividad del suelo, lo que incrementa la atenuación de la señal.
3. A mayor conductividad, mayor pérdida de energía por unidad de distancia: la señal llega más débil o no llega.
4. El nivel freático puede actuar como una interfaz reflectante fuerte que impide ver lo que hay debajo.
5. Suelos arcillosos húmedos, zonas con sales y suelos saturados son los casos más limitantes.
6. El efecto de la humedad no es binario (funciona / no funciona): hay un gradiente que depende del grado de saturación, del tipo de suelo y de la frecuencia usada.
7. En algunos casos, el GPR puede detectar indirectamente efectos de humedad o de cambios de compactación, aunque no el objetivo principal.

---

## Zona de riesgo de sobreexplicación

Cruzar al Nivel 3 ocurre si se explica cómo se identifica en el radargrama mismo el nivel de atenuación (por ejemplo, cómo se lee el decaimiento de amplitud a lo largo de un perfil para inferir conductividad). Eso es criterio experto de procesamiento e interpretación. Lo que puede publicarse es la relación causa-efecto (humedad → conductividad → atenuación → menor profundidad), no el procedimiento para inferirlo desde el registro.

---

## Conexión con activos ATLAS existentes

### Biblioteca técnica

- Artículo publicado: "¿Qué hace que un suelo sea difícil para el GPR?" — ya existe en `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`. Este tema lo enriquece con mayor fundamento bibliográfico. El siguiente artículo en este tema no debería duplicar ese, sino profundizar un aspecto específico (por ejemplo, solo el efecto de la humedad) o complementarlo con una perspectiva de gestión de expectativas.

### Glosario

- "Atenuación" — ya existe.
- "Conductividad eléctrica del suelo" — no existe. Alta prioridad para agregar.
- "Permitividad dieléctrica" — no existe. Candidato relevante para este tema.

### Herramientas

- Calculadora de viabilidad: el input "tipo de terreno" podría expandirse para distinguir entre suelo seco, húmedo y saturado, ajustando el resultado de viabilidad en consecuencia.
- Árbol "¿Necesito GPR?": la pregunta sobre condiciones del terreno puede beneficiarse de mayor especificidad sobre humedad y arcilla.

### Casos reales

- Caso Aeropuerto Chacalluta: suelo arenoso desértico — contexto favorable para comparación (bajo contenido de humedad, alta penetración esperada).

### Páginas de servicio

- `/utilities/` — FAQ: "¿El GPR puede fallar en ciertos terrenos?" puede mejorarse con referencia a conductividad y humedad.
- `/construccion/` — sección de proceso técnico: mención a evaluación preliminar de condiciones del terreno.

---

## Ideas de contenido derivadas de este tema

1. Artículo: "Cómo afecta la humedad del suelo a un estudio con georradar GPR"
2. FAQ: "¿El georradar funciona en suelos húmedos o arcillosos?"
3. Mejora del artículo existente "¿Qué hace que un suelo sea difícil para el GPR?" con cita bibliográfica respaldando la explicación

---

## Próximo paso

- [ ] Crear síntesis en `synthesis/` una vez que `synthesis-profundidad-efectiva-gpr.md` esté publicada — este tema es complementario y puede esperar a la segunda ronda
