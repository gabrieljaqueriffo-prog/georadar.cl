# ADR-010: Instrumentación aplicada y conversión propia

**Estado:** Aprobada
**Fecha:** 2026-09-12

## Contexto

GeoRadar.cl recibe visitas de profesionales que ya comprenden la utilidad del GPR y necesitan incorporar capacidad propia. Geo Radar Chile utiliza en terreno los mismos sistemas que ahora puede recomendar y cerrar comercialmente bajo un acuerdo de comisión.

El proveedor gestiona garantía, suministro y postventa. GeoRadar.cl conserva la relación consultiva, la calificación del requerimiento y el cierre comercial. El modelo no debe derivar tráfico, datos ni intención de compra al proveedor.

## Alternativas consideradas

- **Catálogo con enlaces a fabricante o distribuidor:** descartado. Rompe la conversión propia y transforma GeoRadar.cl en publicidad de terceros.
- **Tienda con compra inmediata, precios y carrito:** descartado. La selección depende de aplicación, terreno, escala, disponibilidad y condiciones de suministro. Un carrito reduciría claridad técnica y aumentaría el riesgo de una recomendación incorrecta.
- **Página de adopción instrumental con selección guiada:** elegida. Aporta orientación inicial, mantiene la decisión técnica contextual y conduce a una conversación propia.

## Decisión

Se crea `/equipos-gpr/` como activo de servicio y conversión consultiva dentro de la capacidad Servicios. Su propósito es orientar la incorporación de GPR a una operación propia.

La página debe:

- Priorizar problema, contexto y configuración antes que marca, ficha o precio.
- Incluir un selector interactivo que entregue una familia candidata, condiciones a validar y una ruta de conversación.
- Mostrar evidencia de uso real de al menos un sistema ofrecido.
- Mantener la mentoría como servicio adicional y opcional.
- Usar WhatsApp propio como CTA principal y conservar la información de selección en el mensaje inicial.
- Indicar que garantía, disponibilidad, suministro y postventa se detallan en la propuesta, sin enlazar ni promocionar al proveedor.
- Mantener el destino fuera del menú principal durante la primera fase. Recibirá enlaces contextuales desde el selector de antena y Mentoría.

El nuevo patrón `selector de solución instrumental` se diseña para reutilizarse en futuras páginas por aplicación y en un comparador técnico, sin depender de un carrito ni de una integración externa.

## Consecuencias

- La página no declara distribución oficial ni atribuye garantía directamente a GeoRadar.cl.
- Las especificaciones se presentan como referencias de fabricante y no como garantía de detección.
- El activo tiene dos enlaces entrantes físicos: `/herramientas/selector-antena/` y `/mentoria/`.
- El activo enlaza hacia el selector de antena, el artículo de frecuencia, Mentoría y el caso de utilities para reforzar el grafo de conocimiento.
- Si se agregan precios públicos, pago en línea, inventario o una nueva categoría de navegación, se requiere un ADR posterior.
