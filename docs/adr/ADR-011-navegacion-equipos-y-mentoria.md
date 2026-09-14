# ADR-011: Navegación conjunta de equipos y mentoría

**Estado:** Aprobada
**Fecha:** 2026-09-14

## Contexto

ADR-010 creó `/equipos-gpr/` como una primera fase de incorporación instrumental guiada. En esa fase el activo permanecía fuera del menú principal y recibía visitas desde enlaces contextuales.

La incorporación de equipos GPR pasa a ser una capacidad comercial permanente. Al mismo tiempo, la mentoría premium sigue siendo una propuesta central de GeoRadar.cl. Añadir un enlace plano adicional superaría el límite de claridad del menú, mientras que reemplazar Mentoría por Equipos reduciría la visibilidad de una oferta estratégica.

## Alternativas consideradas

- **Añadir "Equipos GPR" como octavo enlace principal:** descartado. Aumenta densidad y vuelve menos legible la navegación en escritorio y móvil.
- **Reemplazar Mentoría por "Equipos GPR":** descartado. Esconde el acceso directo a la mentoría y contradice su posicionamiento premium.
- **Agrupar ambas rutas bajo "Equipos y mentoría":** elegida. Mantiene siete entradas de primer nivel y permite que cada visitante elija una ruta explícita según su necesidad.

## Decisión

La navegación principal incorpora el grupo accesible **Equipos y mentoría**. El grupo expone dos destinos de primer nivel dentro del menú:

- `/equipos-gpr/`: selección e incorporación consultiva de equipos GPR.
- `/mentoria/`: acompañamiento técnico premium y opcional.

El grupo usa el elemento HTML nativo `details` para mantener operación por teclado, lectura correcta por tecnologías asistivas y un comportamiento consistente en escritorio y móvil. No crea una nueva URL, taxonomía ni capacidad independiente: conecta la incorporación instrumental dentro de Servicios con la capacidad Academia / Mentorías.

El footer incorpora además un enlace persistente a Equipos GPR. Se mantiene el enlace a Mentoría.

## Consecuencias

- Se sustituye exclusivamente la restricción de fase inicial de ADR-010 que dejaba `/equipos-gpr/` fuera del menú principal. El resto de sus controles comerciales sigue vigente.
- Ambas ofertas quedan a dos clics o menos desde cualquier página, sin derivar tráfico a proveedores.
- La navegación aporta enlaces internos permanentes a la página instrumental y reduce su dependencia de enlaces contextuales.
- Si se incorporan precios públicos, inventario, compra en línea o nuevas familias de navegación, se requerirá una decisión posterior.
