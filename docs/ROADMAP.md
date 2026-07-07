# ROADMAP.md

> Qué se construye y en qué orden. No es una lista de deseos: cada ítem
> existe porque cierra deuda registrada en `BACKLOG.md` o avanza una
> capacidad descrita en `ARCHITECTURE.md §1`. Ver `CLAUDE.md §1`
> (Capa 4 — Planificación).
>
> El orden no es fecha fija — es prioridad relativa. Se reordena cuando
> cambia el contexto (nuevo registro de experiencia, nueva instrucción del
> cliente, deuda detectada en una tarea). Cada ítem completado se mueve a
> `CHANGELOG.md` y se elimina de aquí.

---

## Ahora

1. **Página índice de casos reales, filtrable por sector/tipo de problema.**
   `ARCHITECTURE.md §7` (Sprint 3, componente `.case-tags`) dejó la base de
   datos lista para esto, pero requiere ADR de estructura/navegación antes
   de construirse (afecta navegación del sitio, `CLAUDE.md §3`).

## Más adelante

2. **Evaluar Fase 2 de Academia** (cohortes o curso grabado), solo si la
   demanda de mentoría 1:1 supera la capacidad de atención del experto — es
   la señal documentada en `ADR-003-mentorias-premium-1a1.md` para evaluar
   este paso, no una fecha fija.

## Detenido por decisión del cliente

- **Páginas de caso real adicionales para minería** (Codelco División
  Andina, BHP, SQM, Minera Centinela, Albemarle, Minera Collahuasi): el
  cliente indicó que la cobertura actual de minería es suficiente
  ("Ya tenemos de minería", 2026-06-30). No se construyen más páginas de
  caso para este sector hasta nueva indicación.
- **Páginas de caso real adicionales para forense** (Cementerio Río Chico,
  Puerto Montt): el cliente indicó que la cobertura actual de forense es
  suficiente ("Ya tenemos en forense", 2026-06-30) tras publicarse CIP San
  Joaquín/Cerro Chena y Sitio Irán 3037/Venda Sexy. No se construyen más
  páginas de caso para este sector hasta nueva indicación.

## Esperando validación del cliente

- **Declarar MADURO el Glosario GPR y los artículos Canon de Biblioteca
  técnica** (`/glosario/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`,
  `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`): el checklist
  Canon de `DEFINITION_OF_DONE.md` se evaluó completo el 2026-06-30 — enlaces
  entrantes, plan de actualización anual y cobertura de los 7 ítems del Canon
  ya están cerrados. Queda un solo criterio pendiente: confirmar que cada
  activo es el mejor recurso disponible en español sobre su tema, comparación
  que requiere criterio humano externo y no puede auto-certificarse desde el
  repositorio. Ver detalle por activo en `BACKLOG.md`.

---

## Cómo usar este archivo

- Tres horizontes: **Ahora** (próxima tarea razonable), **Próximo**
  (después de lo anterior), **Más adelante** (requiere una decisión previa,
  generalmente un ADR, antes de poder ejecutarse).
- Todo ítem debe poder rastrearse a una entrada de `BACKLOG.md` o a una
  capacidad de `ARCHITECTURE.md §1`. Si no puede, no pertenece aquí —
  pertenece a una conversación con el cliente primero.
- Al completar un ítem: moverlo a `CHANGELOG.md` con la fecha de
  publicación y eliminarlo de este archivo.
