# CHANGELOG.md

> Registro cronológico de cambios significativos del producto. No es un log
> de commits: agrupa hitos por fecha y describe qué cambió y por qué importa
> para alguien que no estuvo presente cuando ocurrió. Ver `CLAUDE.md §1`
> (Capa 4 — Planificación) y `BACKLOG.md` para el estado vivo de cada activo.

---

## 2026-07-05

- **Mejorado:** `assets/css/shared.css` normalizado para mejor mantenibilidad.
  Reformateo completo: una propiedad por línea, 24 secciones numeradas con
  encabezados explícitos (VARIABLES, RESET Y BASE, TIPOGRAFIA, LAYOUT,
  TOPBAR, NAVEGACION, BOTONES, HERO, SECCIONES, CLIENTES, ESTADISTICAS,
  CARDS, ETIQUETAS DE CASO, TIMELINE, TEXTO SEO, FAQ, PASOS DE PROCESO,
  CTA FINAL, FOOTER, HERRAMIENTAS, ANIMACION REVEAL, SIMULADOR GPR,
  ACCESIBILIDAD, RESPONSIVE). Sin cambios de valores, nombres de clase ni
  variables. Auditoria: 0 errores tras el cambio.

---

## 2026-07-04 (actualización)

- **Corrección de gobernanza:** agregada subsección `§5.1 Estructura actual del
  repositorio` en `ARCHITECTURE.md`. Documenta la estructura física real del
  sitio estático (rutas públicas, assets, scripts, docs, content/research).
  Aclara que el árbol en `§5` es arquitectura objetivo y patrón conceptual, no
  estructura física obligatoria. Previene que una instancia de Claude cree
  carpetas inexistentes por seguir el árbol conceptual como si fuera la
  estructura real.
- `robots.txt` y `sitemap.xml` verificados: completos y correctos, sin cambios
  necesarios. El sitemap cubre las 22 rutas públicas actuales del sitio.

---

## 2026-07-04

- **Nuevo:** capacidad de soporte Evidencia Técnica — estructura `content/research/`
  con cuatro subcapas: `intake/` (entradas crudas), `papers/` (fichas editoriales),
  `themes/` (mapas temáticos) y `synthesis/` (síntesis originales listas para
  publicación). Incluye README de protocolo y template de trabajo para cada capa.
- **Nuevo:** `docs/adr/ADR-005-evidencia-tecnica.md`, documentando la decisión
  de crear `content/` y la subcapacidad de soporte.
- **Definido:** flujo editorial Evidencia Técnica en `CONTENT_STRATEGY.md §14`:
  fuente → intake → papers → themes → synthesis → contenido público. Reglas de
  copyright por tipo de fuente, clasificación de niveles de frontera (1–4) y
  principio rector ("ATLAS no republica papers — transforma literatura técnica
  en explicación original, citada y útil").
- **Definido:** subcapacidad de soporte §1.6 en `ARCHITECTURE.md`, con relaciones
  hacia Biblioteca, Herramientas, Casos Reales y BADR (futuro). Estructura de
  archivos actualizada en `§5`. Matriz de relaciones actualizada en `§3`.
- **Definido:** nota sobre uso de evidencia científica en `NORTH_STAR.md` —
  la literatura técnica fortalece confianza cuando aclara el método; no se usa
  para aparentar autoridad ni revelar criterio propietario.
- **Definido:** criterio 7 en `DECISION_FRAMEWORK.md §Bloque 1` — tres preguntas
  de evaluación para fuentes científicas antes de incorporarlas al sistema.

---

## 2026-06-30

- **Nuevo:** caso real forense — `CIP San Joaquín y Cerro Chena`
  (`/forense/casos/cip-san-joaquin-cerro-chena/`). Primer caso forense con
  página propia; tratamiento editorial adaptado a la sensibilidad judicial
  del caso (sin hallazgos, sin radargramas reales, solo contexto
  institucional y método).
- **Nuevo:** `docs/adr/ADR-001-css-vanilla.md` y
  `docs/adr/ADR-002-whatsapp-primario.md`, documentando retroactivamente dos
  decisiones de arquitectura ya implementadas en todo el sitio (CSS sin
  framework, WhatsApp como canal primario de conversión). Cierra la brecha
  que `ARCHITECTURE.md §9` referenciaba desde antes.
- **Nuevo:** `docs/adr/ADR-003-mentorias-premium-1a1.md`, documentando
  retroactivamente el modelo de mentoría 1:1 que respalda `/mentoria/`.
- **Nuevo:** sección `/mentoria/` (mentoría GPR 1:1), agregada al nav y
  footer de todo el sitio.
- **Nuevo:** `docs/adr/ADR-004-arquitectura-dos-dominios.md`, formalizando la
  separación Geo Radar Chile (servicios) / ATLAS (conocimiento).
- **Nuevo:** principio editorial en `CONTENT_STRATEGY.md` — "ATLAS no busca
  convertirse en la mayor biblioteca sobre GPR, busca convertirse en la
  fuente de mayor criterio sobre su uso". Filtro editorial para toda
  decisión futura de contenido, distinto de `PROJECT_VISION.md` y
  `NORTH_STAR.md`.
- **Nuevo:** `docs/REGISTRO_EXPERIENCIA.md`, registro interno verificado de
  252 proyectos (2011-2025) y clientes, con decisiones confirmadas sobre
  cifra pública ("+220" se mantiene) y autorización de mención pública de
  todos los casos, incluyendo forenses/DDHH.
- **Mejorado:** cards de casos en `/mineria/`, `/forense/` y `/utilities/`
  reemplazadas por evidencia verificada del registro de experiencia
  (Codelco, BHP, SQM, Albemarle, Minera Centinela, Minera Collahuasi, Metro
  de Santiago, Metrogas, Finning CAT, Aguas Andinas, SAESA, Banco Santander,
  y casos forenses adicionales). `/utilities/` pasó de cero evidencia de
  clientes a una sección `#casos` completa.
- **Mejorado:** franja de clientes de la home (`.clients-strip`) ampliada de
  8 a 12 logos; corregido su layout roto en mobile (flex `space-between` →
  CSS grid).
- **Corregido:** atribución de la mentoría y limpieza de guiones largos
  ("AI-tell") en el sitio.

## 2026-06-29

- **Nuevo:** primer caso real publicado — `Detección de socavones en
  Espesador T5` (Codelco Chuquicamata / Constructora Pucará S.A.),
  estableciendo el patrón "Caso real" de `ARCHITECTURE.md §7`.
- **Nuevo:** módulo Biblioteca técnica (`/biblioteca/`) con su primer
  artículo Canon: "Cómo tomar decisiones correctas antes de intervenir el
  subsuelo".
- **Nuevo:** segundo artículo Canon, "Cómo influye la frecuencia de una
  antena GPR en los resultados" (reenfocado de "guía de selección" a física
  pública, para no regalar criterio propietario de selección).
- **Nuevo:** Glosario GPR (`/glosario/`) como activo Canon, con 9 términos.
- **Nuevo:** Calculadora de viabilidad GPR (`/herramientas/`) y nav
  "Herramientas" agregado a todo el sitio.
- **Nuevo:** herramienta "¿Necesito un estudio GPR?" (árbol de decisión +
  checklist), cerrando el arco de herramientas de `DECISION_FRAMEWORK.md`
  Bloque 3.
- **Nuevo:** Índice de Herramientas (`/herramientas/`); el nav pasó de
  apuntar directo a la calculadora a apuntar a este índice.
- **Definido:** patrón editorial "conocimiento vs. know-how" (Nivel A/B/C,
  `CONTENT_STRATEGY.md §1.5`) — protege el criterio experto como activo
  propietario, no publicable como contenido abierto.
- **Definido:** arquitectura de dos dominios — Geo Radar Chile (servicios) /
  ATLAS (conocimiento) — formalizada en `ARCHITECTURE.md`.
- **Revisado:** patrón "Caso real" madurado con principio rector ("¿qué está
  aprendiendo el cliente después de ver esta página?") y componente
  `.case-tags`/`.case-tag`. La sección de evidencia pasó de 1 destacada + 3
  colapsadas a 2 registros representativos con frase de protección de
  criterio repetida en cada imagen.
- **Corregido:** múltiples bugs de diseño mobile (CTA final apilado,
  topbar truncado, calculadora sin colapsar a 1 columna, contraste
  ilegible en lista de aprendizajes).

## 2026-06-28

- **Nuevo:** menú hamburguesa móvil y CTA de WhatsApp visible en todas las
  páginas.
- **Instalado:** sistema de gobernanza GPOS (`PROJECT_VISION.md`,
  `NORTH_STAR.md`, `DECISION_FRAMEWORK.md`, `ARCHITECTURE.md`,
  `DESIGN_SYSTEM.md`, `CONTENT_STRATEGY.md`, `CLAUDE.md`,
  `DEFINITION_OF_DONE.md`).

## 2026-06-26 – 2026-06-27

- **Nuevo:** lanzamiento del micrositio SEO `georadar.cl` — home, `/mineria/`,
  `/utilities/`, `/forense/`.
- **Nuevo:** hardening SEO/AEO/GEO — `llms.txt`, grafo JSON-LD enlazado,
  glosario inicial y FAQs ampliadas.
- **Nuevo:** simulador GPR interactivo en la home (pantalla de instrumento
  real, hipérbolas con física simulada, explicaciones dinámicas por
  pestañas) y CTA de WhatsApp real en el footer.
- **Nuevo:** dominio personalizado vía `CNAME` (georadar.cl).

---

## Cómo mantener este archivo

- Una entrada por fecha de fusión a `main`, agrupando los cambios
  significativos del día (no cada commit individual).
- Tres categorías por entrada cuando aplique: **Nuevo**, **Mejorado**,
  **Corregido**. Las decisiones de gobernanza (ADR, principios editoriales)
  se registran como **Definido**.
- Cambios puramente internos de documentación sin impacto en el producto
  publicado (ej. actualizar `BACKLOG.md`) no requieren entrada propia salvo
  que cierren una deuda significativa.
