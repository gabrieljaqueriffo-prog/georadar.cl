# ADR-001 — CSS vanilla, sin framework ni preprocesador

**Estado:** Aprobado (documentado retroactivamente; la decisión ya está implementada en todo el sitio)
**Fecha de decisión original:** indeterminada (referenciada en `ARCHITECTURE.md §9` antes de este ADR)
**Fecha de este documento:** 2026-06-30

## Contexto

Todo el sitio (`index.html` y las 13+ páginas restantes) usa un único archivo
`assets/css/shared.css` versionado por cache-buster (`?v=N`), sin Tailwind,
sin Bootstrap, sin Sass/Less, sin build step de CSS. `ARCHITECTURE.md §9`
referencia `ADR-001-css-vanilla.md` como la decisión que respalda esto, pero
el archivo no existía. Este ADR cierra esa brecha.

## Decisión

El sistema de diseño se implementa en **CSS vanilla**, en un único archivo
compartido, sin framework ni preprocesador. Tres razones:

1. **El sitio es estático y no tiene build pipeline.** No hay Node, no hay
   bundler, no hay paso de compilación: cada página es HTML servido
   directamente (GitHub Pages). Introducir un preprocesador o framework CSS
   exigiría un paso de build que hoy no existe en ningún punto del proyecto,
   añadiendo una dependencia técnica nueva sin necesidad funcional.
2. **El sistema de diseño es pequeño y estable.** `DESIGN_SYSTEM.md` define
   un set acotado de tokens, primitivos y patrones reutilizados en todas las
   páginas (`.card`, `.cards-grid`, `.case-tags`, `.stats-grid`, etc.). Un
   archivo CSS único es suficiente para mantener consistencia sin la
   sobrecarga de un framework de utilidades genérico.
3. **Control total sobre el peso de página.** Un archivo CSS propio y
   minimalista evita cargar utilidades no usadas (como ocurre con frameworks
   tipo Tailwind sin purga, o Bootstrap completo), lo que es relevante para
   el rendimiento del sitio (`CLAUDE.md §3`, las mejoras de rendimiento se
   ejecutan sin necesidad de propuesta previa, precisamente porque el CSS
   vanilla hace ese control directo y predecible).

**Implementación concreta:**

- Un único `assets/css/shared.css`, enlazado desde todas las páginas con
  cache-buster manual (`?v=N`, incrementado cada vez que el archivo cambia).
- Convenciones de nomenclatura de clases documentadas en `ARCHITECTURE.md
  §6`.
- Sin variables de build, sin npm, sin paso de compilación: el archivo que
  se edita es el mismo que se sirve en producción.

## Consecuencias

- Cualquier cambio futuro hacia un framework CSS o preprocesador es un
  cambio de tecnología — requiere su propio ADR antes de implementarse
  (`CLAUDE.md §3`).
- El archivo único crece con cada nuevo patrón visual. Si el archivo se
  vuelve difícil de mantener, la respuesta documentada es dividirlo en
  módulos CSS vanilla (import o múltiples `<link>`), no adoptar un
  framework — eso seguiría sin requerir ADR, mientras no cambie la
  tecnología base.
- No hay purga automática de CSS no usado: la disciplina de mantener el
  archivo limpio depende de revisión manual, no de tooling.

## Alternativas consideradas

- **Tailwind CSS** — descartado: exige build step (PostCSS) que el proyecto
  no tiene, y su modelo de utilidades en el markup no calza con el patrón de
  componentes reutilizables ya definido en `DESIGN_SYSTEM.md`.
- **Sass/Less** — descartado: el sistema de diseño es lo bastante pequeño
  para no necesitar anidamiento, mixins ni variables de preprocesador; las
  CSS custom properties nativas ya cubren la necesidad de tokens.
- **Bootstrap u otro framework de componentes** — descartado: impondría su
  propio lenguaje visual, contradiciendo la identidad de marca definida en
  `DESIGN_SYSTEM.md`, y cargaría componentes no usados.
