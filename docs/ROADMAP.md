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

1. **Páginas de caso real para clientes destacados de minería.**
   Codelco División Andina, BHP, SQM, Minera Centinela, Albemarle y Minera
   Collahuasi ya tienen evidencia verificada en sus cards de `/mineria/`
   (`docs/REGISTRO_EXPERIENCIA.md`), pero ninguna tiene página de caso
   propia siguiendo el patrón completo de `ARCHITECTURE.md §7` (solo existe
   para Espesador T5 / Codelco Chuquicamata). Priorizar 1-2 casos con
   suficiente detalle verificado para no inventar evidencia.
2. **Páginas de caso real para los dos casos forenses restantes con
   evidencia ya autorizada:** Sitio Irán 3037 "Venda Sexy" (2024) y
   Cementerio Río Chico, Puerto Montt. Mismo tratamiento sensible aplicado a
   CIP San Joaquín y Cerro Chena (sin hallazgos, sin evidencia visual real
   identificable).

## Próximo

3. **Resto del Canon de Biblioteca técnica** (`CONTENT_STRATEGY.md §13`,
   ítems 2-7). Solo el ítem 1 ("Cómo tomar decisiones antes de intervenir el
   subsuelo") está publicado. `CLAUDE.md §5` prioriza reducir deuda de Canon
   sobre crear contenido nuevo fuera de él.
4. **Checklist Canon completo para el Glosario GPR** (`DEFINITION_OF_DONE.md`):
   ya cumple el mínimo de enlaces entrantes; falta verificar contenido
   EXPANDIDO, comparación con el mejor recurso en español disponible, y
   anotar plan de actualización anual antes de declararlo MADURO.

## Más adelante

5. **Página índice de casos reales, filtrable por sector/tipo de problema.**
   `ARCHITECTURE.md §7` (Sprint 3, componente `.case-tags`) dejó la base de
   datos lista para esto, pero requiere ADR de estructura/navegación antes
   de construirse (afecta navegación del sitio, `CLAUDE.md §3`).
6. **Evaluar Fase 2 de Academia** (cohortes o curso grabado), solo si la
   demanda de mentoría 1:1 supera la capacidad de atención del experto — es
   la señal documentada en `ADR-003-mentorias-premium-1a1.md` para evaluar
   este paso, no una fecha fija.

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
