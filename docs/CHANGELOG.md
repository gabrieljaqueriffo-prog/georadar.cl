# CHANGELOG.md

> Historial auditado de cambios significativos del producto.
> No es un log de commits: cada entrada documenta un hito con contexto
> suficiente para que cualquier instancia futura de Claude entienda
> que se hizo, por que, que riesgo tenia y que sigue.
>
> Jerarquia de documentos: ver `CLAUDE.md §1` (Capa 4, Planificacion).
> Estado vivo de activos: ver `BACKLOG.md`.

---

## Formato de entrada

Cada entrada tiene los siguientes campos obligatorios:

```
## YYYY-MM-DD · [tipo]

- **Tipo:** docs | seo | content | ux | fix | refactor | architecture
- **Archivos:** lista de archivos creados o modificados
- **Motivo:** por que se hizo este cambio
- **Impacto:** que cambia para el producto, el SEO o el usuario
- **Riesgo:** riesgo asociado al cambio (Ninguno / Bajo / Medio / Alto)
- **Proxima accion:** que deberia hacerse despues de este cambio
```

---

## 2026-07-05 · docs (normalizacion changelog)

- **Tipo:** docs, refactor
- **Archivos:** `docs/CHANGELOG.md`
- **Motivo:** el archivo anterior usaba formato libre sin campos estructurados,
  lo que dificultaba la auditoria y la lectura por parte de instancias futuras
  de Claude.
- **Impacto:** el historial pasa a tener formato auditado con campos fijos.
  Las entradas anteriores se preservan con sus datos originales, reformateadas.
- **Riesgo:** Ninguno. Cambio puramente documental.
- **Proxima accion:** usar este formato en cada cambio futuro.

---

## 2026-07-05 · seo (baseline)

- **Tipo:** docs, seo
- **Archivos:** `docs/SEO_BASELINE.md`
- **Motivo:** no existia un registro formal del estado SEO del sitio antes de
  iniciar nuevas optimizaciones. Sin linea base, es imposible medir impacto
  de cambios futuros.
- **Impacto:** clasificacion de las 23 URLs publicas por keyword, intencion,
  publico, CTA y estado editorial. Estados resultantes: 11 Mantener, 7 Optimizar,
  2 Expandir, 2 Revisar, 0 Fusionar. Dos pares de riesgo bajo de canibalizacion
  y un par de riesgo medio documentados (`/herramientas/selector-antena/` vs.
  articulo de frecuencia de antena). Ranking de 7 prioridades de optimizacion
  identificadas. Sin acceso a GSC: criterio basado en keyword y patron de intencion.
- **Riesgo:** Ninguno. Documento interno de referencia.
- **Proxima accion:** ejecutar Prioridad 1 del ranking: diferenciar keyword de
  `/construccion/` respecto a `/mineria/` y `/utilities/`. Evaluar riesgo Nivel C
  en `/herramientas/selector-antena/`.

---

## 2026-07-05 · docs (auditoria enlazado, actualizacion)

- **Tipo:** docs
- **Archivos:** `docs/INTERNAL_LINKING_AUDIT.md`
- **Motivo:** las 5 paginas en estado "Revisar" de la primera auditoria fueron
  corregidas. El documento debia reflejar el nuevo estado verificado.
- **Impacto:** 5 filas actualizadas de "Revisar" a "Cumple". Resumen ejecutivo
  actualizado a 23/23 paginas en cumplimiento (100%). Seccion "Correcciones
  aplicadas" agregada con 7 filas que documentan origen, destino y motivo
  editorial de cada enlace. Seccion de acciones pendientes cerrada.
- **Riesgo:** Ninguno. Cambio documental que refleja estado real verificado.
- **Proxima accion:** proxima auditoria de enlazado despues de cada nuevo
  activo publicado, no como tarea independiente.

---

## 2026-07-05 · seo (correcciones enlazado interno)

- **Tipo:** seo, content
- **Archivos:**
  - `mentoria/index.html`
  - `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html`
  - `utilities/index.html`
  - `biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/index.html`
  - `biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/index.html`
  - `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html`
- **Motivo:** auditoria de enlazado identifico 5 paginas con debilidad contextual.
  Ninguna de ellas tenia dos enlaces entrantes de cuerpo, lo que reduce su
  autoridad interna y su capacidad de posicionamiento.
- **Impacto:** cada pagina afectada recibe al menos un enlace entrante o saliente
  contextual nuevo. `/mentoria/` pasa de isla estructural a nodo conectado.
  Audit post-cambio: 0 errores, 23/23 paginas cumplen.
  Detalle de cambios:
  - `/mentoria/`: enlace saliente a articulo de frecuencia de antena; enlace
    entrante desde ese articulo referenciando la mentoria.
  - `/utilities/`: enlace a articulo de senal GPR en FAQ de entregables.
  - `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`:
    enlace a articulo de humedad en seccion "Para seguir aprendiendo".
  - `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`:
    enlace al caso Metro de Santiago en seccion "Para seguir aprendiendo".
  - `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`:
    enlace al caso Iran 3037 en seccion "Vealo en un caso real".
- **Riesgo:** Bajo. Ningun cambio estructural ni de diseno. Los enlaces son
  editorialmente coherentes con el contenido de cada pagina.
- **Proxima accion:** mantener auditoria activa despues de cada nuevo activo.

---

## 2026-07-05 · docs (primera auditoria enlazado interno)

- **Tipo:** docs, seo
- **Archivos:** `docs/INTERNAL_LINKING_AUDIT.md` (creado)
- **Motivo:** no existia ninguna auditoria formal del grafo de enlazado interno.
  El GPOS exige al menos dos enlaces entrantes por activo, pero nunca se habia
  verificado sistematicamente.
- **Impacto:** primera auditoria de enlazado interno del sitio. Cubre las 23
  URLs publicas del sitemap. Metodologia: extraccion de todos los `href`
  internos, clasificados en estructurales (nav/footer) y contextuales (cuerpo).
  Resultado inicial: 18 paginas cumplen (78%), 5 en estado "Revisar" (22%),
  ninguna huerfana. Paginas con debilidad contextual identificadas: `/mentoria/`,
  `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`,
  `/biblioteca/como-afecta-la-humedad-al-georradar/`,
  `/utilities/casos/accesos-metro-de-santiago/`,
  `/forense/casos/sitio-iran-3037-venda-sexy/`.
- **Riesgo:** Ninguno. Documento de diagnostico sin cambios en produccion.
- **Proxima accion:** aplicar correcciones a las 5 paginas identificadas.

---

## 2026-07-05 · seo, content (hero index.html)

- **Tipo:** seo, content
- **Archivos:** `index.html`
- **Motivo:** el hero presentaba a Geo Radar Chile como empresa de servicios
  antes que a GeoRadar.cl como plataforma de conocimiento. Esa jerarquia
  contradecia la arquitectura de dos dominios y diluia el posicionamiento SEO
  del sitio como recurso de conocimiento GPR aplicado.
- **Impacto:**
  - H1 cambiado a "Conocimiento aplicado sobre georradar GPR en Chile".
  - Lead reescrito para distinguir GeoRadar.cl (plataforma de conocimiento)
    de Geo Radar Chile (empresa operadora), conservando keywords SEO requeridas:
    georradar, GPR, Chile, prospeccion no destructiva, mineria, utilities,
    construccion, peritaje forense.
  - El eyebrow y los CTAs no cambian.
  - Corregida la palabra "pionea" en el hito historico de 1997:
    reemplazada por "introduce el uso de GPR en Chile".
- **Riesgo:** Bajo. El cambio de H1 puede afectar rankings existentes para
  keywords ligadas al nombre de la empresa. Requiere monitoreo en GSC.
- **Proxima accion:** monitorear impresiones y clics en GSC para la URL `/`
  durante 30 dias post-publicacion.

---

## 2026-07-05 · refactor (CSS shared.css)

- **Tipo:** refactor
- **Archivos:** `assets/css/shared.css`
- **Motivo:** el archivo CSS tenia formato inconsistente (multiples propiedades
  por linea, secciones sin encabezado) que dificultaba la navegacion y el
  mantenimiento.
- **Impacto:** reformateo completo a una propiedad por linea. 24 secciones
  numeradas con encabezados explicitos: VARIABLES, RESET Y BASE, TIPOGRAFIA,
  LAYOUT, TOPBAR, NAVEGACION, BOTONES, HERO, SECCIONES, CLIENTES, ESTADISTICAS,
  CARDS, ETIQUETAS DE CASO, TIMELINE, TEXTO SEO, FAQ, PASOS DE PROCESO,
  CTA FINAL, FOOTER, HERRAMIENTAS, ANIMACION REVEAL, SIMULADOR GPR,
  ACCESIBILIDAD, RESPONSIVE. Sin cambios de valores, nombres de clase ni
  variables. Audit: 0 errores tras el cambio.
- **Riesgo:** Bajo. Cambio de formato puro sin modificacion de valores.
  Auditoria paso sin errores.
- **Proxima accion:** ninguna inmediata. Usar este archivo como referencia
  para nuevos componentes CSS.

---

## 2026-07-04 · architecture (estructura real del repositorio)

- **Tipo:** architecture, docs
- **Archivos:** `docs/ARCHITECTURE.md` (subseccion §5.1 agregada)
- **Motivo:** el arbol en §5 describia arquitectura objetivo, no estructura
  fisica real. Instancias de Claude podian crear carpetas inexistentes
  siguiendo ese arbol como si fuera la estructura real del repo.
- **Impacto:** subseccion §5.1 documenta la estructura fisica actual del sitio
  estatico (rutas publicas, assets, scripts, docs, content/research). Aclara
  que §5 es patron conceptual, no prescripcion de carpetas. `robots.txt` y
  `sitemap.xml` verificados: completos y correctos, sin cambios necesarios.
  El sitemap cubre las 22 rutas publicas activas en esa fecha.
- **Riesgo:** Ninguno. Cambio documental preventivo.
- **Proxima accion:** actualizar §5.1 cada vez que se agregue una ruta publica
  nueva al sitio.

---

## 2026-07-04 · architecture (capacidad Evidencia Tecnica)

- **Tipo:** architecture, docs, content
- **Archivos:**
  - `content/research/` (estructura creada: intake/, papers/, themes/, synthesis/)
  - `docs/adr/ADR-005-evidencia-tecnica.md`
  - `docs/CONTENT_STRATEGY.md` (§14 agregado)
  - `docs/ARCHITECTURE.md` (§1.6 y §5 actualizados)
  - `docs/NORTH_STAR.md` (nota sobre evidencia cientifica)
  - `docs/DECISION_FRAMEWORK.md` (criterio 7 en Bloque 1)
- **Motivo:** no existia un flujo formal para incorporar literatura tecnica
  (papers, publicaciones de fabricantes) al sistema editorial. Sin ese flujo,
  el contenido tecnico de ATLAS no podia apoyarse en fuentes verificadas sin
  riesgo de copyright o confusion entre republica y cita.
- **Impacto:** flujo editorial en cuatro capas: intake (entradas crudas),
  papers (fichas editoriales), themes (mapas tematicos), synthesis (sintesis
  originales listas para publicacion). Principio rector: "ATLAS no republica
  papers — transforma literatura tecnica en explicacion original, citada y util".
  Niveles de frontera 1-4 definidos. Reglas de copyright por tipo de fuente.
- **Riesgo:** Bajo. Cambio de documentacion y estructura de carpetas internas.
  No afecta paginas publicas.
- **Proxima accion:** procesar primer paper en `content/research/intake/`
  siguiendo el flujo definido en CONTENT_STRATEGY.md §14.

---

## 2026-06-30 · content, architecture, ux, fix

- **Tipo:** content, architecture, ux, fix
- **Archivos:**
  - `forense/casos/cip-san-joaquin-cerro-chena/index.html` (nuevo)
  - `docs/adr/ADR-001-css-vanilla.md` (nuevo)
  - `docs/adr/ADR-002-whatsapp-primario.md` (nuevo)
  - `docs/adr/ADR-003-mentorias-premium-1a1.md` (nuevo)
  - `docs/adr/ADR-004-arquitectura-dos-dominios.md` (nuevo)
  - `mentoria/index.html` (nuevo)
  - `docs/CONTENT_STRATEGY.md` (principio editorial agregado)
  - `docs/REGISTRO_EXPERIENCIA.md` (nuevo)
  - `mineria/index.html`, `forense/index.html`, `utilities/index.html`
  - `index.html` (clients-strip)
  - Nav y footer en todas las paginas
- **Motivo:** multiples deudas arquitectonicas y editoriales abiertas desde el
  lanzamiento: ningun caso forense tenia pagina propia, las ADR de decisiones
  implementadas no estaban documentadas, la seccion de mentoria no existia,
  las cards de casos usaban evidencia no verificada, y el modulo de clientes
  en home estaba roto en mobile.
- **Impacto:**
  - Primer caso forense con pagina propia (CIP San Joaquin y Cerro Chena).
  - 4 ADR documentan retroactivamente: CSS vanilla, WhatsApp como canal primario,
    modelo de mentoria 1:1, arquitectura de dos dominios.
  - Seccion `/mentoria/` agregada al nav y footer en todo el sitio.
  - Principio editorial en CONTENT_STRATEGY.md: "ATLAS no busca ser la mayor
    biblioteca GPR, busca ser la fuente de mayor criterio".
  - `docs/REGISTRO_EXPERIENCIA.md`: registro interno verificado de 252 proyectos
    (2011-2025). Cifra publica mantiene "+220". Autorizacion de mencion publica
    confirmada para todos los casos, incluyendo forenses/DDHH.
  - Cards de casos reemplazadas por evidencia verificada del registro.
    `/utilities/` pasa de cero evidencia de clientes a seccion #casos completa.
  - Franja de clientes (home) ampliada de 8 a 12 logos. Layout mobile corregido
    (flex space-between a CSS grid).
  - Limpieza de guiones largos en todo el sitio.
- **Riesgo:** Medio. La adicion de `/mentoria/` al nav modifica la estructura
  de navegacion de todo el sitio. Verificar que el audit pase sin errores.
- **Proxima accion:** verificar que cada caso nuevo cumpla la regla de activo
  minimo (2 entrantes, 1 saliente estrategico).

---

## 2026-06-29 · content, architecture

- **Tipo:** content, architecture
- **Archivos:**
  - `mineria/casos/socavones-espesador-t5/index.html` (nuevo)
  - `biblioteca/index.html` (nuevo)
  - `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html` (nuevo)
  - `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html` (nuevo)
  - `glosario/index.html` (nuevo)
  - `herramientas/index.html` (nuevo)
  - `herramientas/calculadora-profundidad/index.html` (nuevo)
  - `herramientas/necesito-gpr/index.html` (nuevo)
  - `docs/CONTENT_STRATEGY.md` (§1.5 agregado)
  - `docs/ARCHITECTURE.md` (arquitectura de dos dominios formalizada)
  - Nav en todas las paginas
- **Motivo:** el sitio existia solo como presencia de servicios. Faltaban los
  tres pilares del conocimiento aplicado que justifican el dominio GeoRadar.cl:
  casos reales, biblioteca tecnica y herramientas de decision.
- **Impacto:**
  - Primer caso real publicado: Deteccion de socavones en Espesador T5,
    estableciendo el patron "Caso real" de ARCHITECTURE.md §7.
  - Modulo Biblioteca tecnica con dos articulos Canon: decision antes de
    intervenir el subsuelo, y frecuencia de antena GPR.
  - Glosario GPR con 9 terminos.
  - Calculadora de viabilidad GPR e indice de herramientas.
  - Herramienta "Necesito un estudio GPR" (arbol de decision + checklist).
  - Nav ampliado con "Herramientas".
  - Patron editorial Nivel A/B/C definido en CONTENT_STRATEGY.md §1.5:
    protege criterio experto propietario como nivel C, no publicable.
  - Arquitectura de dos dominios formalizada: Geo Radar Chile (servicios)
    y ATLAS (conocimiento).
  - Patron Caso real madurado: principio rector y componente .case-tags.
  - Multiples bugs mobile corregidos: CTA final apilado, topbar truncado,
    calculadora sin colapsar a 1 columna, contraste ilegible en aprendizajes.
- **Riesgo:** Medio. Adicion masiva de activos nuevos sin datos de busqueda
  previos. La calculadora puede exponer criterio propietario si el nivel de
  detalle no se controla.
- **Proxima accion:** verificar que el Glosario y la Biblioteca cumplan la
  regla de activo minimo. Auditar el nivel C de la calculadora.

---

## 2026-06-28 · ux, architecture

- **Tipo:** ux, architecture
- **Archivos:**
  - `assets/js/main.js` (menu hamburguesa)
  - `assets/css/shared.css` (estilos mobile)
  - Todas las paginas del sitio (nav actualizado)
  - `docs/PROJECT_VISION.md`, `docs/NORTH_STAR.md`, `docs/DECISION_FRAMEWORK.md`,
    `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`, `docs/CONTENT_STRATEGY.md`,
    `CLAUDE.md`, `docs/DEFINITION_OF_DONE.md`
- **Motivo:** el sitio no tenia menu mobile funcional ni CTA de contacto visible
  en mobile. El sistema de gobernanza GPOS no existia: cada cambio se tomaba
  sin criterio documentado.
- **Impacto:** menu hamburguesa funcional en mobile. CTA de WhatsApp visible
  en todas las paginas. Sistema de gobernanza GPOS instalado con 8 documentos.
- **Riesgo:** Bajo. El menu mobile es progressive enhancement. El GPOS no
  afecta paginas publicas.
- **Proxima accion:** usar el GPOS como marco de evaluacion para todos los
  cambios futuros.

---

## 2026-06-26 / 2026-06-27 · content, seo, ux (lanzamiento)

- **Tipo:** content, seo, ux
- **Archivos:**
  - `index.html`, `mineria/index.html`, `utilities/index.html`,
    `forense/index.html` (nuevos)
  - `assets/css/shared.css`, `assets/js/main.js` (nuevos)
  - `llms.txt`, `robots.txt`, `sitemap.xml`, `CNAME` (nuevos)
- **Motivo:** lanzamiento del micrositio SEO `georadar.cl` como presencia
  digital de Geo Radar Chile.
- **Impacto:** home y tres verticales de servicio publicadas. Grafo JSON-LD
  enlazado. `llms.txt` para AEO/GEO. Glosario inicial y FAQs. Simulador GPR
  interactivo en home (hiperbolas con fisica simulada, pestanas dinamicas).
  CTA de WhatsApp en footer. Dominio personalizado via CNAME.
- **Riesgo:** Alto (retrospectivo). El sitio se lanzo sin sistema de
  gobernanza, sin auditoria de enlazado y sin linea base SEO.
- **Proxima accion:** todos los activos publicados en esta fecha requieren
  auditoria retrospectiva de enlazado y clasificacion en SEO_BASELINE.md.

---

## Como mantener este archivo

- Una entrada por grupo logico de cambios, no por commit individual.
- Campos obligatorios en cada entrada: Tipo, Archivos, Motivo, Impacto,
  Riesgo, Proxima accion.
- Tipos validos: `docs`, `seo`, `content`, `ux`, `fix`, `refactor`,
  `architecture`. Se pueden combinar con coma si un cambio cubre varios.
- Las decisiones de gobernanza (ADR, principios) se registran con tipo
  `architecture` o `docs` segun corresponda.
- Cambios puramente internos de documentacion sin impacto en el producto
  publicado no requieren entrada propia salvo que cierren una deuda
  significativa o modifiquen el comportamiento esperado de una instancia
  de Claude.
