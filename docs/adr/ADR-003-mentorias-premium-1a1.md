# ADR-003 — Mentorías premium, modelo 1:1

**Estado:** Aprobado (documentado retroactivamente; el producto ya está publicado en `/mentoria/`)
**Fecha de decisión original:** indeterminada (referenciada en `PROJECT_VISION.md §6` y `ARCHITECTURE.md §1.5` antes de este ADR)
**Fecha de este documento:** 2026-06-30

## Contexto

`PROJECT_VISION.md §6` y `ARCHITECTURE.md §1.5` ya describían la Academia /
Mentorías como una de las cinco capacidades del producto, con el modelo
"mentoría premium especializada, que arranca 1:1 y escala más adelante hacia
cohortes o curso grabado". Esa decisión nunca tuvo un ADR propio —
`ARCHITECTURE.md §9` la referencia como `ADR-003-mentorias-premium-1a1.md`,
pero el archivo no existía.

El 2026-06-30 se construyó y publicó `/mentoria/` bajo ese modelo, dejando
producto en producción sin la decisión formalmente registrada que lo
respalda. Este ADR cierra esa brecha.

## Decisión

La Academia comienza como **mentoría 1:1 online**, no como curso grabado ni
cohorte. Tres razones:

1. **Validación antes de escala.** No existe todavía material ni demanda
   probada para un curso grabado o cohorte. El 1:1 permite descubrir qué
   contenido genera valor real antes de invertir en producirlo a escala.
2. **Posicionamiento premium.** El modelo cobra alto y atiende pocos alumnos
   por diseño — exclusividad y profundidad, no volumen (`PROJECT_VISION.md
   §6`). Diluir esto en un curso masivo desde el día uno contradice el
   posicionamiento.
3. **Calidad del contenido abierto como filtro.** `PROJECT_VISION.md §6`
   establece que "las mentorías atraen alumnos por la calidad del contenido
   abierto: lo gratuito demuestra el valor de lo premium." El 1:1 permite que
   cada alumno llegue con contexto ya filtrado por la biblioteca técnica y las
   herramientas gratuitas, reduciendo la fricción de las primeras sesiones.

**Implementación concreta (`/mentoria/`):**

- Sin precio publicado en pantalla — la tarifa se discute en la primera
  conversación, consistente con el posicionamiento premium.
- Sin número de sesiones predefinido — el alcance se define según el perfil
  del alumno, no según un paquete fijo.
- Conversión vía WhatsApp o correo directo, no formulario estructurado —
  consistente con el resto del sitio (WhatsApp como canal primario de
  conversión, pendiente de su propio ADR-002).
- Enlaces entrantes desde biblioteca técnica, herramientas y glosario, para
  que el alumno llegue habiendo agotado primero el contenido gratuito.

## Consecuencias

- La escala futura (cohortes, curso grabado) requiere su propio ADR cuando
  exista demanda y material suficiente — no está habilitada por este ADR.
- El éxito del modelo 1:1 se mide por calidad de la conversación inicial y
  retención del alumno, no por volumen de leads — cualquier métrica de
  "conversión masiva" aplicada a esta sección sería una señal de
  desalineación con la decisión.
- Si la demanda de mentoría supera la capacidad de atención 1:1 del experto,
  ese es la señal documentada para evaluar la Fase 2 (cohortes/curso
  grabado), no una razón para diluir el modelo 1:1 sin pasar por un nuevo ADR.

## Alternativas consideradas

- **Curso grabado desde el inicio** — descartado: no hay material ni demanda
  validada; un curso grabado sin validación previa arriesga producir
  contenido que nadie compra.
- **Cohorte grupal desde el inicio** — descartado: diluye el posicionamiento
  premium y requiere coordinar calendario de múltiples alumnos sin tener aún
  contenido estructurado para un formato grupal.
- **Publicar tarifa en la página** — descartado: contradice el modelo premium
  documentado, donde el precio se ajusta según alcance y se conversa, no se
  lista como un producto de catálogo.
