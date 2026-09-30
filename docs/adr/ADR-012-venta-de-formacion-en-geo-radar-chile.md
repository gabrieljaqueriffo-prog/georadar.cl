# ADR-012: La formación GPR se vende en Geo Radar Chile; ATLAS enseña y deriva

**Estado:** Aprobado
**Fecha:** 2026-09-30
**Reemplaza parcialmente:** ADR-003 (lugar de venta de la mentoría) y ADR-011 (destino "Mentoría" dentro del grupo de navegación)

## Contexto

ADR-004 establece que Geo Radar Chile (georadarchile.cl) vende y que ATLAS (georadar.cl) enseña, con cada tema publicado una sola vez en el ecosistema. ADR-003, anterior a la migración de georadarchile.cl, dejó la venta de la mentoría 1:1 en `/mentoria/` de ATLAS.

Hoy la oferta de formación está repartida en cinco páginas con la misma intención de búsqueda:

- ATLAS `/mentoria/` (H1 "Capacitación en georradar GPR para profesionales").
- ATLAS `/capacitacion-gpr/` (H1 "Capacitación en georradar GPR").
- ATLAS `/biblioteca/capacitacion-georradar-adquirir-procesar-interpretar/` (guía).
- georadarchile.cl `/capacitacion-gpr` (página de servicio).
- georadarchile.cl `/post/capacitacion-en-georradar-gpr-aprender-a-adquirir-procesar-e-interpretar-datos` (mismo H1 que la guía de ATLAS).

Search Console (exportación del 2026-09-29) muestra que la venta ya ocurre en Geo Radar Chile:

| Página | Clics | CTR |
|---|---:|---:|
| georadarchile.cl `/capacitacion-gpr` | 34 | 12,4 % |
| ATLAS `/mentoria/` | 6 | 5,8 % |
| ATLAS `/capacitacion-gpr/` | 1 | 5,6 % |

En la misma exportación, ATLAS aparece en posiciones 38 a 72 para búsquedas comerciales ("servicio de georradar", "estudio gpr"). Esa presencia diluye a Geo Radar Chile sin generar clics.

## Alternativas consideradas

- **Vender en ambos dominios con nombres distintos ("mentoría" en uno, "entrenamiento" en otro):** descartada. Para el buscador son sinónimos de la misma intención. Dos páginas en dominios distintos compiten entre sí y confunden al comprador sobre dónde contratar.
- **Mantener la venta en ATLAS (ADR-003 vigente):** descartada. Contradice ADR-004 y los datos: la página que convierte está en Geo Radar Chile.
- **Vender en Geo Radar Chile con dos ofertas diferenciadas por comprador, y convertir ATLAS en una ruta de aprendizaje que deriva:** elegida.

## Decisión

1. **Geo Radar Chile es el único lugar de venta de formación GPR.** Ofrece dos productos diferenciados por comprador, no por sinónimo:
   - **Capacitación GPR para equipos:** empresas que forman a su personal con sus propios equipos, flujos y proyectos. Ejemplo: Ingesud.
   - **Mentoría GPR 1:1:** un profesional que desarrolla criterio de interpretación. Se mantiene el modelo premium de ADR-003: sin precio publicado, alcance definido en una conversación inicial y contacto por WhatsApp o correo.
2. **ATLAS enseña y deriva.** `/mentoria/` deja de ser una página de venta y se reconvierte en una ruta de aprendizaje ("cómo aprender GPR") que ordena la biblioteca, el glosario y las herramientas. Cierra con una pregunta de conversión explícita hacia Geo Radar Chile, según ADR-004.
3. **La guía metodológica vive solo en ATLAS** (`/biblioteca/capacitacion-georradar-adquirir-procesar-interpretar/`). La publicación sobre Ingesud en Geo Radar Chile se reescribe como crónica de proyecto y enlaza a esa guía, sin repetir su contenido.
4. **Rutas y navegación (aprobado el 2026-09-30):**
   - Se crea `/aprender-gpr/`, ruta de estudio que ordena guías, glosario, herramientas y casos.
   - `/mentoria/` y `/capacitacion-gpr/` de ATLAS pasan a ser páginas de redirección (meta refresh, `noindex` y canonical al destino) hacia `https://www.georadarchile.cl/capacitacion-gpr`. Cuando se publique el nuevo georadarchile.cl, el destino de `/mentoria/` cambia a `/mentoria-gpr/`.
   - Ambas URLs salen del sitemap y el nodo `/mentoria/` del KNOWLEDGE_MAP se reemplaza por `/aprender-gpr/`.
   - El grupo de navegación de ADR-011 cambia de "Equipos y mentoría" a "Equipos y aprendizaje", con los destinos `/equipos-gpr/` y `/aprender-gpr/`.
   - Ninguna URL se elimina sin redirección.
5. **Equipos GPR (aprobado el 2026-09-30):** la guía para elegir equipo (criterios, selector de antena) permanece en ATLAS. La oferta comercial de equipos pasa a Geo Radar Chile cuando exista su página. Mientras tanto, `/equipos-gpr/` se mantiene sin cambios.

## Consecuencias

- ADR-003 sigue vigente en el modelo del producto (1:1 premium, sin precio publicado) y queda reemplazado en el lugar de venta.
- ADR-011 queda modificado por el punto 4 (nombre del grupo y destino "Aprender GPR").
- La mentoría 1:1 no pierde visibilidad. Gana una ruta de entrada desde el contenido gratuito, que es el filtro previsto en ADR-003.
- `/equipos-gpr/` (ADR-010) se reorienta según el punto 5 cuando Geo Radar Chile publique la oferta comercial de equipos.
- Medición: clics y conversaciones iniciadas desde la ruta de aprendizaje hacia Geo Radar Chile, no volumen de visitas.
