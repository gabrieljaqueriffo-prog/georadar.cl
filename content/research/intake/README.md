# Intake — Evidencia Técnica ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

> Este directorio recibe **entradas crudas**: papers recién encontrados, DOIs,
> abstracts copiados, PDFs internos o notas de Gabriel sobre una fuente.
> No requieren estar completos. Su propósito es no perder fuentes.

---

## Qué entra aquí

- Un link o DOI encontrado en una búsqueda.
- Un abstract pegado desde PubMed, Scopus, ResearchGate o Google Scholar.
- Un PDF descargado y guardado internamente.
- Notas personales de Gabriel sobre un paper que leyó.
- Una tesis, informe institucional o manual técnico identificado como relevante.

## Qué NO entra aquí

- Artículos finales de ATLAS (esos van en `biblioteca/`).
- Fichas editoriales limpias (esas van en `papers/`).
- Síntesis originales (esas van en `synthesis/`).
- Contenido de proyectos internos de Geo Radar Chile.

---

## Flujo

```
Fuente nueva encontrada
        │
        ▼
Crear archivo en intake/ usando la plantilla
        │
        ▼
Triage: ¿es relevante? ¿cuál es su licencia? ¿qué nivel de riesgo?
        │
        ├── Relevante → crear ficha en papers/
        └── No relevante → marcar como "descartado" en el campo Estado
```

**Regla de limpieza:** una entrada que lleva más de 30 días en estado
"nuevo" sin avanzar a ficha o descarte debe revisarse. El intake no
es un archivo: es una sala de espera con tiempo máximo.

---

## Cómo crear una entrada

1. Copiar `templates/research-intake-template.md`.
2. Renombrar: `[año]-[autor-apellido]-[palabra-clave].md`  
   Ejemplo: `2024-jol-gpr-conductividad.md`
3. Completar los campos disponibles (no todos son obligatorios en intake).
4. Guardar en este directorio.

## Nomenclatura

```
[año]-[primer-autor-apellido]-[tema-clave].md

Ejemplos:
2023-daniels-gpr-suelos-arcillosos.md
2021-jol-profundidad-efectiva-frecuencia.md
2020-tesis-uchile-gpr-forense.md
```

---

## Archivos en este directorio

Cada archivo `.md` es una entrada de intake. Los READMEs y templates no
son entradas: no deben procesarse como fuentes.
