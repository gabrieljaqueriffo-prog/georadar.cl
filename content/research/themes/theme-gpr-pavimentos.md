# Research Theme — ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

---

## Tema

GPR en inspección de pavimentos y estructuras viales

---

## Estado editorial del tema

- **Estado:** LISTO PARA ARTÍCULO BASE
- **Prioridad:** alta (vacío editorial real, demanda activa, fuentes disponibles, enfoque editorial definido)
- **Fecha de apertura:** 2026-07-04
- **Fecha de actualización:** 2026-07-05

---

## Pregunta central

¿Qué puede y qué no puede detectar el georradar en un pavimento, y cómo explicarlo de forma que un profesional de la construcción o vialidad entienda el valor y los límites del método antes de contratarlo?

---

## Por qué importa para ATLAS

La inspección de pavimentos es una de las aplicaciones más frecuentes del GPR en obras civiles. Es un mercado con demanda activa en Chile: vialidad, concesionarias, municipios, constructoras buscan herramientas para evaluar el estado de la estructura vial sin cortes ni sondeos. La presencia de Geo Radar Chile en este segmento puede ampliarse si existe contenido técnico que explique qué es posible medir y qué no.

El módulo de construcción tiene un caso documentado (Aeropuerto Chacalluta) pero ningún artículo que explique qué detecta el GPR en estructuras de pavimento. Es un vacío editorial real con fuentes disponibles para fundamentarlo.

---

## Enfoque editorial del artículo base

El GPR aplicado a pavimentos no debe presentarse como una radiografía perfecta del pavimento. Es una herramienta de prospección no destructiva que ayuda a interpretar cambios internos en la estructura: espesores relativos, interfaces entre capas, humedad, posibles vacíos, pérdida de soporte, ductos o interferencias bajo la estructura vial.

El artículo debe explicar:

- Uso en pavimentos, caminos, losas, accesos industriales, aeródromos y obras civiles.
- Detección de interfaces entre capas (asfalto, base, subbase, subrasante) sin intervención.
- Estimación de espesores solo cuando existe calibración de velocidad de propagación.
- Anomalías por humedad, cambios de material, vacíos y pérdida de soporte.
- Valor para decidir dónde abrir calicatas o hacer ensayos destructivos.
- Límites técnicos por humedad, conductividad, sales, arcillas, acero, mallas o materiales atenuantes.

Mensaje central del artículo:

> "El GPR en pavimentos es más fuerte cuando se usa para decidir dónde mirar, dónde intervenir y dónde validar, no cuando se usa como sustituto absoluto de la ingeniería de pavimentos."

---

## Fuentes relacionadas

| Ficha | Nivel de frontera | Relevancia |
|-------|-------------------|------------|
| `papers/2024-paredes-gpr-analisis-cuantitativo-brief.md` | 1-2 con zonas 3 | muy alta — cubre aplicaciones en pavimentos en detalle |
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1-2 | alta — fundamentos de GPR en estructuras civiles |

---

## Principios públicos que podemos enseñar

1. El GPR puede identificar interfaces entre capas del pavimento sin necesidad de cortar o perforar la calzada.
2. La estimación del espesor de cada capa es posible a partir del tiempo de viaje de la señal entre interfaces, si se conoce o estima la velocidad de propagación en el material. Sin calibración, el espesor es relativo.
3. La presencia de agua en la estructura del pavimento modifica las propiedades eléctricas del material y es detectable como anomalía en el radargrama.
4. Las zonas de descompactación, pérdida de adherencia entre capas o deterioro avanzado producen reflexiones anómalas que pueden identificarse.
5. El GPR en pavimentos no reemplaza el ensayo de extracción de testigos (core): es un método complementario que permite priorizar dónde extraerlos y reducir el número de intervenciones.
6. La calidad del resultado depende de la velocidad de barrido, la frecuencia de antena elegida y la condición del pavimento en superficie. No todos los escenarios son igualmente favorables.
7. Materiales con alta conductividad (arcillas, sales, mallas metálicas densas) limitan la penetración del GPR y pueden hacer inútil el método en esa zona específica.

---

## Zona de riesgo de sobreexplicación

El cruce al Nivel 3 ocurre al describir cómo se identifica una capa específica en el radargrama, o los criterios concretos para estimar espesor a partir de la señal. Lo que puede publicarse es que estas mediciones son posibles, con qué nivel de precisión general y bajo qué condiciones. El procedimiento técnico concreto es criterio propietario.

---

## Conexión con activos ATLAS existentes

### Casos reales

- Caso Aeropuerto Chacalluta (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`) — prospección en estructura de pavimento de aeródromo activo. Es el caso más cercano y debe mencionarse en el artículo.

### Biblioteca técnica

- No existe ningún artículo sobre GPR en pavimentos. El artículo derivado de este tema es el primer activo en cubrir este vacío.
- Artículo candidato: "Qué puede detectar el georradar en una estructura de pavimento" — orientado a profesionales de vialidad y construcción.

### Páginas de servicio

- `/construccion/` — recibe enlace entrante desde el artículo. La página de construcción debe mencionar la inspección de pavimentos como aplicación del GPR.

### Herramientas

- Árbol "¿Necesito GPR?" — la rama de construcción puede incluir "inspección de pavimento" con criterios de cuándo el GPR es adecuado.

---

## Ideas de contenido derivadas de este tema

1. Artículo base: "Qué puede detectar el georradar en una estructura de pavimento" — para profesionales de vialidad y obras civiles.
2. Artículo futuro: "GPR para inspección vial: cuándo complementa al sondeo y cuándo no".
3. Posible FAQ en `/construccion/`: "¿Puede el georradar medir el espesor de una capa de asfalto?"

---

## Próximo paso

- [ ] Redactar artículo base con el enfoque editorial definido en este documento.
- [ ] El artículo debe tener al menos dos enlaces entrantes antes de publicarse: `/construccion/` y `/construccion/casos/prospeccion-aeropuerto-chacalluta/`.
- [ ] Confirmar con Gabriel si el caso Aeródromo Tobalaba (pavimento de pistas, 2020) tiene material suficiente para ser referenciado en el artículo.
