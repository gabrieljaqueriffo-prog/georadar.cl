# PROJECT_VISION.md

> **Estado:** v1 — decisiones fundacionales cerradas
> **Última revisión:** 2026-06
> **Propósito:** Este es el documento *raíz* del proyecto. Define hacia dónde vamos y por qué.
> No cambia con frecuencia. Cuando una decisión futura entre en conflicto con este texto,
> gana este texto (o se actualiza este texto de forma explícita y consciente).

---

## Declaración de principios

> **Georadar no existe para mostrar lo que hacemos. Existe para convertirse en el lugar donde las personas aprenden a comprender el subsuelo antes de intervenirlo. Si logramos eso, los servicios y las mentorías serán una consecuencia natural de la confianza que habremos construido.**

Todo lo que sigue es el desarrollo de esa frase. Si alguna decisión la contradice, la decisión está mal.

**Lema interno** (no es para el usuario; es para nosotros): *No construimos páginas. Construimos activos digitales que generan conocimiento, confianza y valor acumulativo.*

---

## 1. Qué es Georadar

Georadar.cl es la **plataforma de referencia en español sobre Georadar (GPR — Ground Penetrating Radar)**.

Es un producto digital que combina conocimiento, herramientas, casos reales y mentorías, y que conduce de forma natural —no forzada— hacia la contratación de servicios y la venta de mentorías.

No es un sitio web que se "termina". Es un producto que evoluciona durante años. Cada página debe aportar valor por sí misma; cada componente debe poder reutilizarse; cada mejora debe fortalecer el ecosistema.

El modelo mental de referencia no es "web de empresa de ingeniería". Es **MDN, HubSpot Academy, Stripe Docs, Esri**: lugares donde entras a aprender algo útil, esa utilidad construye confianza, y cuando necesitas el servicio ya sabes a quién acudir.

## 2. Qué NO es Georadar

Definir lo que *no* somos frena más decisiones equivocadas que definir lo que sí somos.

- **No es un clon del sitio corporativo** (georadarchile.cl). Ese sitio existe para cotizar, demostrar experiencia y mantener autoridad SEO corporativa, y debe permanecer estable. Georadar.cl es la plataforma de conocimiento. La separación de responsabilidades entre ambos dominios y las reglas de cruce sin duplicación están registradas en `docs/adr/ADR-004-arquitectura-dos-dominios.md` y `CONTENT_STRATEGY.md §1.6`.
- **No es un catálogo de escaneos.** No vendemos "pasar una antena por el suelo".
- **No es otra web de empresa de ingeniería tradicional.** Si al entrar se siente como una empresa tradicional, fallamos.
- **No es una fintech.** Buscamos modernidad e innovación tecnológica, pero conservando la identidad ligada a la geociencia y al subsuelo. Tecnología especializada en geociencias, no startup genérica.

## 3. Propuesta de valor

Nunca vendemos únicamente un escaneo GPR. Vendemos lo que el escaneo hace posible:

- **Reducción de incertidumbre** antes de excavar o intervenir.
- **Reducción de riesgo** (económico, operacional, de seguridad).
- **Continuidad operacional.**
- **Mejor toma de decisiones**, basada en datos correctamente interpretados.
- **Interpretación experta** de radargramas: aquí está el verdadero valor.
- **Conocimiento especializado** que el cliente no tiene internamente.

El radar entrega datos. El valor está en transformar esos datos en decisiones útiles. Esa es la frase que debería estar detrás de cada página de servicios: *los datos sin interpretación no reducen el riesgo.*

**Por qué podemos reclamar "plataforma de referencia".** El reclamo no es marketing: se apoya en activos reales que debemos hacer visibles a lo largo del sitio —años de experiencia y volumen de proyectos ejecutados, casos reales publicables con datos y resultados, radargramas propios interpretados (material que casi nadie publica en español), y la trayectoria del fundador como figura de referencia. Cada uno de estos es, además, un pilar de contenido: la prueba *es* el contenido.

## 4. Personalidad de marca

La identidad visual se mantiene: **tonos tierra** (geología, subsuelo, ingeniería). No hay rebranding. Lo que evoluciona es el *lenguaje* de la experiencia hacia algo más moderno y refinado.

Cuatro adjetivos —cada uno con su límite, que es lo que de verdad guía cuando hay duda:

- **Experta**, pero no académica ni inaccesible.
- **Moderna**, pero no fría ni genérica (no fintech).
- **Confiable**, pero no corporativa acartonada.
- **Didáctica**, pero no condescendiente.

Esta es la "voz" que heredan el copy, el diseño y Claude Code.

**Registro lingüístico:** se trata de **tú** (cercanía, coherente con educación-primero) en **español neutro LatAm** (alcance regional, no solo Chile). Evitar chilenismos y localismos en el contenido público.

## 5. Públicos

Escribimos pensando en muchos perfiles —gerentes de proyecto, administradores de contrato, ingenieros (civiles, eléctricos, en minas), constructoras, utilities, minería, arqueología, consultores, profesionales independientes y estudiantes—, pero **no todos pueden liderar la portada ni el tono a la vez.**

Tres ejes prioritarios mandan en portada, tono y CTA. El resto de perfiles se atiende, pero no decide:

1. **Decisores de negocio** — gerentes de proyecto y administradores de contrato. Buscan reducir riesgo y respaldar decisiones. Son quienes compran servicios.
2. **Sectores industriales** — minería, utilities, construcción y arqueología. Definen el contexto y los casos de uso; el contenido se organiza también por industria.
3. **Aprendizaje** — profesionales independientes y estudiantes. Audiencia de la biblioteca técnica y futuros alumnos de mentorías.

El primer eje guía las páginas de servicios y los CTA; el segundo, la segmentación del contenido por industria; el tercero, la academia y las herramientas. Cada uno necesita su propio mensaje, pero todos comparten la misma voz (sección 4).

## 6. Pilares de contenido

Derivados de la arquitectura del producto (Servicios → Conocimiento → Herramientas → Mentorías → Comunidad). Cada pilar sirve a un público y empuja un objetivo:

1. **Servicios** — captura de leads. Público: decisores (gerentes, administradores de contrato).
2. **Academia / Mentorías** — formación y venta de mentorías. Público: profesionales y estudiantes. Modelo: **mentoría premium especializada** (precio alto, pocos alumnos, alta dedicación), que **arranca 1:1** y escala más adelante hacia cohortes o curso grabado a medida que haya demanda y material. El posicionamiento premium debe reflejarse en el tono y el diseño de esta sección: exclusividad y profundidad, no volumen.
3. **Biblioteca técnica** — autoridad temática y SEO. Público: todos los que investigan GPR en español.
4. **Herramientas** (calculadoras, comparadores, radargramas comentados) — utilidad que genera confianza y tráfico. Público: ingenieros y técnicos.
5. **Casos reales** — prueba y credibilidad. Público: decisores escépticos.

El detalle de funcionalidades vive en `BACKLOG.md`; la priorización en `ROADMAP.md`.

## 7. Filosofía de conversión

**Educación primero; la venta es una consecuencia de la confianza.** No escribimos para vender, escribimos para que aprendan. La venta llega porque, cuando el lector necesita el servicio, ya confía en quien le enseñó.

- **WhatsApp** es el canal principal de contacto.
- **Formularios estratégicos** se incorporan solo donde aportan valor (servicios, mentorías, descargas, recursos técnicos), y cada uno se propone antes de implementarse con su ubicación y objetivo de conversión.

Cada página debe poder responder, sin esfuerzo, cuatro preguntas: *¿qué problema resuelve? ¿por qué confiar? ¿qué evidencia existe? ¿qué acción tomar?*

## 8. Principios de diseño (alto nivel)

El sistema completo vive en `DESIGN_SYSTEM.md`. Aquí solo lo durable:

- Identidad tierra **evolucionada**: más espacio en blanco, mejor jerarquía, tipografía refinada, sombras elegantes, microinteracciones suaves.
- **Mobile-first real**: muchos usuarios entran desde faena (iPhone, Android, tablets). Botones grandes, buen rendimiento, todo usable en terreno.
- Un solo sistema de componentes: nada se "inventa" suelto.
- Sentirse como **un producto digital de geociencias**, no como una empresa tradicional ni como una fintech.

## 9. Horizonte

El arco durable del producto, en orden de maduración:

**Servicios → Conocimiento → Herramientas → Mentorías → Comunidad**

Las fases concretas, tareas y prioridades (impacto comercial / técnico / esfuerzo) se gestionan en `ROADMAP.md`, no aquí, para que este documento no se desactualice.

## 10. Definición de éxito

Qué significa "ganar" para Georadar. No son métricas operativas (esas viven en `NORTH_STAR.md`), sino el estado final que perseguimos:

- Georadar es **citado como referencia técnica en español sobre GPR** —por profesionales, en foros, en otros sitios.
- Los **ingenieros regresan** a consultar herramientas y contenido, no solo entran una vez.
- Los **servicios se contratan gracias a la confianza** generada por el conocimiento, no por presión comercial.
- Las **mentorías atraen alumnos por la calidad del contenido abierto**: lo gratuito demuestra el valor de lo premium.
- El sitio **crece mediante activos reutilizables**, no mediante páginas aisladas.

Si dentro de tres años estas cinco frases describen la realidad, ganamos.

## 11. Relación con los demás documentos

Este documento responde **por qué** y **hacia dónde**. Los demás heredan de él:

- `NORTH_STAR.md` → el criterio único para decidir cuando hay dudas.
- `DECISION_FRAMEWORK.md` → cómo decide Georadar: principios y heurísticas de construcción.
- `CLAUDE.md` → cómo se comporta Claude Code.
- `ARCHITECTURE.md` → la estructura técnica.
- `DESIGN_SYSTEM.md` → identidad visual y componentes.
- `CONTENT_STRATEGY.md` → autoridad temática y SEO.
- `BACKLOG.md` / `ROADMAP.md` → qué se construye y en qué orden.

---

## Decisiones fundacionales (cerradas en v1)

Registro de las decisiones que dan forma a este documento. El registro vivo de decisiones futuras va en `DECISIONS.md`.

1. **Públicos prioritarios:** tres ejes — decisores de negocio, sectores industriales y aprendizaje (sección 5).
2. **Mentorías:** modelo premium especializado, inicio 1:1 con escalado posterior (sección 6).
3. **Prueba de autoridad:** experiencia y proyectos, casos publicables, radargramas propios interpretados y trayectoria del fundador (sección 3).
4. **Registro lingüístico:** tú + español neutro LatAm (sección 4).
5. **Personalidad:** confirmados los cuatro pares adjetivo/anti-adjetivo (sección 4).

---

## Compromiso del proyecto

Cada decisión que tomemos debe responder **sí** a, al menos, una de estas cuatro preguntas:

1. ¿Hace **más útil** a Georadar?
2. ¿Hace **más confiable** a Georadar?
3. ¿Hace **más fácil de mantener** a Georadar?
4. ¿Hace **más difícil que un competidor nos copie**?

Si la respuesta es "no" a las cuatro, esa decisión probablemente no pertenece al producto.

> Este es el cierre de la visión: no una promesa al usuario, sino al proyecto. La mayor ventaja de Georadar no será el código, sino la **coherencia** con la que evolucione durante años.
