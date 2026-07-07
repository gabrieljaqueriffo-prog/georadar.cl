# Research Theme — ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

---

## Tema

Frecuencia de antena, resolución y penetración en el GPR

---

## Pregunta central

¿Cómo se explica el compromiso fundamental entre frecuencia de antena, resolución y profundidad de penetración, de forma que un profesional no especialista pueda entender por qué no existe una "antena perfecta" y por qué la selección depende del problema concreto?

---

## Por qué importa para ATLAS

Este es el concepto que más preguntas genera en mentoría y en contactos de clientes. Es el núcleo de la selección de equipo, y su malentendido produce expectativas incorrectas ("¿por qué no usaron una antena más potente?"). Un artículo bien construido sobre este tema refuerza la autoridad técnica de ATLAS y reduce fricciones en el proceso de cotización.

Ya existe el artículo "Cómo influye la frecuencia de una antena GPR en los resultados". Este tema sirve como mapa temático para ver qué cubre ese artículo y qué podría complementarlo con mayor fundamento bibliográfico o con una perspectiva diferente (por ejemplo, orientada a aplicaciones específicas).

---

## Estado editorial del tema

- **Estado:** en investigación — artículo relacionado ya publicado; evaluar si se necesita un segundo artículo o solo mejora del existente
- **Prioridad:** media (el artículo existente cubre bien el tema; esta fuente puede enriquecerlo)
- **Fecha de apertura:** 2026-07-04

---

## Fuentes relacionadas

| Ficha | Nivel de frontera | Relevancia |
|-------|-------------------|------------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | 1 | alta |
| `papers/2024-paredes-gpr-analisis-cuantitativo-brief.md` | 1-2 con zonas 3 | media — aporta los conceptos de frecuencia dominante y ancho de banda como extensión natural del compromiso frecuencia/resolución |

---

## Principios públicos que podemos enseñar

1. Existe un compromiso físico permanente entre frecuencia, resolución y penetración. No se puede maximizar los tres simultáneamente.
2. Antenas de alta frecuencia ofrecen mejor resolución (pueden distinguir objetos más pequeños o más próximos entre sí), pero penetran menos.
3. Antenas de baja frecuencia penetran más profundo, pero con menor resolución: objetos pequeños pueden no ser distinguibles.
4. La frecuencia óptima depende del objetivo buscado: su profundidad, su tamaño y el nivel de detalle requerido.
5. No existe una "mejor antena" universal: existe la antena adecuada para cada combinación de terreno, objetivo y profundidad.
6. En hormigón, donde los objetivos (armaduras, cables, ductos) son superficiales y se busca alta resolución, se usan frecuencias altas. En detección de cavidades profundas en suelo, se usan frecuencias más bajas.

---

## Zona de riesgo de sobreexplicación

El riesgo de Nivel 3 aparece si se describen los criterios concretos para elegir una antena dado un conjunto de variables de terreno — eso es el criterio de selección que Geo Radar Chile aplica en cada proyecto. Lo que puede publicarse es la explicación del compromiso físico, no el proceso de decisión que un especialista sigue para resolverlo.

Esta es exactamente la razón por la que el artículo existente se reenfocó de "Guía de selección de antena" a "Cómo influye la frecuencia": ese cambio ya protege correctamente la frontera.

---

## Conexión con activos ATLAS existentes

### Biblioteca técnica

- Artículo existente: "Cómo influye la frecuencia de una antena GPR en los resultados" — cubre bien el tema. La tesis de Lorenzo Cimadevila puede añadirse como referencia bibliográfica en ese artículo si se actualiza.
- Segundo artículo posible (solo si se detecta vacío real): orientado a una aplicación específica como "frecuencia de antena en escaneo de hormigón" o "frecuencia de antena en detección de cavidades". Evaluar cuando haya demanda o vacío de búsqueda.

### Glosario

- "Antena (GPR)" — ya existe. Puede ampliarse con referencia al compromiso frecuencia/resolución/profundidad.
- "Resolución vertical" — no existe. Candidato de alta prioridad para agregar.

### Herramientas

- Calculadora de viabilidad: actualmente no pregunta por frecuencia de antena (correcto — es criterio propietario). Pero sí puede mejorar la explicación de su resultado mencionando que "la frecuencia adecuada se determina según las condiciones del estudio".

### Mentoría

- Este tema es contenido central para la mentoría 1:1: el compromiso frecuencia/resolución/profundidad es uno de los primeros conceptos que debe dominar cualquier operador GPR.

---

## Ideas de contenido derivadas de este tema

1. Mejora del artículo existente con cita bibliográfica que respalde la explicación física.
2. Ejercicio de mentoría: tres escenarios de campo → ¿qué frecuencia elegiría y por qué?
3. FAQ: "¿Por qué no se usa siempre la antena de mayor frecuencia?"

---

## Próximo paso

- [ ] Evaluar si el artículo existente puede actualizarse con cita a esta fuente (bajo riesgo, mejora de autoridad)
- [ ] No crear segundo artículo todavía — el existente cubre el territorio de forma suficiente
