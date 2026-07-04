# Research Theme — ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

---

## Tema

Profundidad efectiva del GPR

---

## Pregunta central

¿Qué factores determinan hasta dónde puede llegar la señal de un georradar, y cómo explicarlo de forma útil a un profesional que necesita planificar una prospección o evaluar su viabilidad?

---

## Por qué importa para ATLAS

Es la pregunta más frecuente de cualquier cliente antes de contratar un estudio GPR. Una respuesta honesta y técnicamente sólida es la base para construir confianza sin sobreprometer. Si ATLAS explica bien este tema, reduce consultas mal calibradas, mejora la calidad de los leads y diferencia a Geo Radar Chile de competidores que ofrecen "X metros garantizados".

Cubre el vacío más visible en el Knowledge Map: la rama "Fundamentos físicos / Atenuación y profundidad máxima" de `CONTENT_STRATEGY.md §2` no tiene ningún artículo publicado todavía.

---

## Estado editorial del tema

- **Estado:** listo para síntesis
- **Prioridad:** muy alta
- **Fecha de apertura:** 2026-07-04

---

## Fuentes relacionadas

| Ficha | Nivel de frontera | Relevancia |
|-------|-------------------|------------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1-2 | muy alta |

_Tema con una sola fuente por ahora. Es suficiente para una síntesis inicial dado el alcance exhaustivo de la tesis. Buscar fuentes adicionales en futuras sesiones para consolidar._

---

## Principios públicos que podemos enseñar

1. La profundidad efectiva del GPR no es una cifra fija: depende del terreno, no solo del equipo.
2. Los dos factores más limitantes son la conductividad del suelo y su contenido de humedad.
3. Existe un compromiso permanente entre profundidad y resolución que depende de la frecuencia de la antena.
4. El nivel freático puede actuar como una barrera que impide detectar anomalías ubicadas debajo de él.
5. El tipo de objetivo buscado (tamaño, material, geometría) también afecta la distancia mínima a la que puede detectarse.
6. En términos generales, el GPR funciona bien en materiales dieléctricos (hormigón seco, arena, grava, roca); funciona peor en materiales conductivos (arcilla húmeda, suelo saturado, zonas con sales).

---

## Zona de riesgo de sobreexplicación

El riesgo de cruzar al Nivel 3 aparece cuando se empieza a describir cómo se estima la profundidad efectiva a partir del radargrama mismo (análisis de ganancia, decaimiento de amplitud, cálculo de velocidad en campo). Eso es criterio de interpretación experto. El artículo público puede explicar qué factores condicionan la profundidad; no debe enseñar cómo medirla o inferirla desde el registro.

---

## Conexión con activos ATLAS existentes

### Biblioteca técnica

- Artículo existente relacionado: "Cómo influye la frecuencia de una antena GPR en los resultados" — ya cubre parcialmente el compromiso frecuencia/resolución/profundidad. El artículo nuevo debe complementarlo, no duplicarlo.
- Artículo propuesto: "Por qué la profundidad del georradar depende del terreno" — cubre la variable del medio, que el artículo existente no desarrolla.

### Glosario

- "Atenuación" — ya existe. El artículo nuevo puede enlazarlo.
- "Conductividad eléctrica del suelo" — no existe. Candidato a agregar.
- "Permitividad dieléctrica" — no existe. Candidato a agregar (ver si hay solapamiento con "velocidad de propagación").

### Herramientas

- Calculadora de viabilidad GPR: agregar "tipo de suelo" y "humedad estimada" como inputs que ajusten el resultado narrativo. La síntesis de este tema provee el fundamento técnico para ese ajuste.
- Árbol "¿Necesito GPR?": la rama de "condiciones del terreno" puede mejorar con referencias concretas a conductividad y humedad.

### Casos reales

- Caso Espesador T5 (minería): el contexto de cavidades en suelo específico podría mencionar que condiciones de humedad afectan la penetración, sin revelar cómo se interpretó la señal en ese caso.
- Caso Aeropuerto Chacalluta (construcción): suelo arenoso desértico — buen conductor de señal, condiciones favorables. Mencionable en contraste con suelos húmedos.

### Páginas de servicio

- `/construccion/` — FAQ: "¿Puede el georradar ver a través de cualquier material?" puede mejorarse con referencia a este tema.
- `/mineria/` — sección proceso técnico: paso de evaluación previa podría incluir mención a condiciones de terreno que afectan viabilidad.

---

## Ideas de contenido derivadas de este tema

1. Artículo: "Por qué la profundidad del georradar depende del terreno, no solo del equipo"
2. FAQ universal: "¿Hasta qué profundidad llega el georradar?" con respuesta honesta y contextualizada
3. Mejora de calculadora: inputs de humedad y tipo de suelo → resultado narrativo más preciso

---

## Próximo paso

- [x] Crear síntesis en `synthesis/` → `synthesis-profundidad-efectiva-gpr.md`
