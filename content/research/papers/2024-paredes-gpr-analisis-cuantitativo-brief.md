# Paper Brief — ATLAS

<!-- ATLAS — Uso interno hasta aprobación explícita de Gabriel. -->

---

## Identificación

- **ID interno:** 2024-paredes-gpr-analisis-cuantitativo
- **Tipo de fuente:** tesis doctoral
- **Título completo:** Nuevos métodos de análisis cuantitativo de datos de georradar mediante el estudio de la influencia de las propiedades electromagnéticas del medio
- **Autor:** David Paredes Palacios
- **Año:** 2024
- **Institución:** Universidad Politécnica de Madrid — E.T.S. de Ingenieros de Minas y Energía
- **Directores:** Dr. Jesús Mª Díaz Curiel / Dra. Bárbara Biosca Valiente
- **Proyecto:** CARESOIL I+D
- **Licencia:** no especificada — tratar como referencia interna; no citar ni reproducir texto hasta confirmar acceso público en repositorio UPM

---

## NIVEL DE FRONTERA

**Nivel 1-2 con zonas de Nivel 3**

- **Nivel 1-2 (publicable):** los principios de que la señal GPR lleva información sobre las propiedades electromagnéticas del medio, que la atenuación es sensible a la humedad, que la frecuencia dominante y el ancho de banda cambian con el medio, y que la interpretación cuantitativa es posible como complemento a la visual.
- **Nivel 3 (interno):** los métodos específicos de análisis espectral (cómo se extrae la frecuencia dominante del radargrama), los procedimientos de deconvolución, los criterios concretos de caracterización automática de capas y los algoritmos de inversión de propiedades. Este es criterio de interpretación avanzada que no debe publicarse.

---

## Estado editorial

- **Revisado:** sí
- **Fecha:** 2026-07-04
- **Aprobado para síntesis de Nivel 1-2:** pendiente de definición por tema
- **Archivo de intake:** `intake/2024-paredes-gpr-analisis-cuantitativo.md`

---

## Resumen en lenguaje propio

Esta tesis desarrolla métodos cuantitativos para extraer información del medio a partir de señales GPR, en lugar de depender solo de la interpretación visual de radargramas. El trabajo estudia cómo las propiedades electromagnéticas del terreno —especialmente la permitividad dieléctrica y la conductividad— se reflejan en parámetros medibles de la señal: su frecuencia dominante, su ancho de banda y su curva de atenuación.

Las aplicaciones principales son tres: (1) caracterización de humedad del suelo a partir de la atenuación de la señal, (2) delineación automática de capas en pavimentos a partir del análisis espectral, y (3) detección de zonas contaminadas en suelos a partir de cambios en las propiedades electromagnéticas. El enfoque cuantitativo no reemplaza la interpretación visual: la complementa con parámetros objetivos y reproducibles.

En relación a Lorenzo (1995): donde Lorenzo establece los fundamentos físicos del GPR y sus aplicaciones clásicas —límites del método, tipos de reflexiones, profundidad efectiva—, Paredes aporta una capa posterior de análisis: qué puede medirse cuantitativamente a partir de esa señal y cómo esa medición puede automatizarse.

---

## Hallazgos clave (en lenguaje propio)

1. **La señal GPR lleva información cuantitativa sobre el medio.** No solo produce imágenes: sus parámetros espectrales (frecuencia dominante, ancho de banda) y su envolvente de atenuación contienen información sobre la permitividad y la conductividad del material atravesado.

2. **La humedad del suelo se puede estimar desde la señal.** El nivel de atenuación medido en la curva envolvente del radargrama correlaciona con la conductividad del suelo, que a su vez correlaciona con el contenido de humedad. Esto abre la posibilidad de usar el GPR como sensor de humedad en aplicaciones geotécnicas.

3. **La frecuencia dominante de la señal cambia con el medio.** En materiales con mayor atenuación, las altas frecuencias se atenúan más rápido, desplazando la frecuencia dominante hacia valores más bajos. Esto es observable en el análisis espectral del radargrama y refleja las propiedades del material.

4. **El ancho de banda de la señal también varía con el medio.** La señal emitida por la antena tiene un espectro de frecuencias; ese espectro se modifica al atravesar distintos materiales. Este parámetro complementa a la frecuencia dominante para caracterizar el medio.

5. **La caracterización de capas de pavimento puede automatizarse.** Las interfaces entre capas del pavimento (asfalto, base, subbase) producen reflexiones con características espectrales distintas que permiten identificar las capas y estimar su espesor sin solo depender de la lectura visual del operador.

6. **Los suelos contaminados muestran anomalías en sus propiedades electromagnéticas.** Ciertos contaminantes modifican la permitividad o la conductividad del suelo de forma detectable con GPR. Esto tiene aplicaciones en monitoreo ambiental y estudios de zonas industriales.

7. **El análisis cuantitativo complementa, no reemplaza, la interpretación visual.** Los métodos cuantitativos son más objetivos y reproducibles, pero requieren datos de calidad y condiciones de medición controladas. La interpretación visual sigue siendo esencial en campo y en situaciones de alta variabilidad del terreno.

---

## Qué puede enseñarse públicamente (Nivel 1-2)

1. Que la señal GPR contiene información cuantitativa sobre el medio, no solo imágenes.
2. Que la atenuación de la señal es sensible al contenido de humedad del suelo.
3. Que la frecuencia dominante de la señal se desplaza en materiales con mayor pérdida de energía.
4. Que la interpretación cuantitativa existe como enfoque complementario al visual.
5. Los principios generales de por qué el GPR puede usarse en pavimentos y suelos contaminados.
6. La distinción entre lo que el GPR detecta directamente y lo que infiere.

---

## Qué NO debe publicarse (Nivel 3 — interno)

1. Los algoritmos específicos de análisis espectral de la señal.
2. Los procedimientos de deconvolución o procesamiento avanzado de señal.
3. Los criterios concretos de caracterización automática de capas (umbrales, parámetros).
4. Los métodos de inversión de propiedades electromagnéticas desde la señal.
5. Cualquier protocolo de campo derivado de esta tesis que Geo Radar Chile aplique en sus estudios.

---

## Ideas de contenido derivadas

### Artículos de biblioteca técnica
1. "Qué puede decirnos una señal GPR además de una imagen" — diferencia entre interpretación visual y cuantitativa (Nivel 1-2)
2. "Cómo el georradar puede estimar la humedad del suelo" — atenuación como proxy de humedad (Nivel 1-2, si se limita a principios)
3. "Georradar en pavimentos: qué se puede y qué no se puede medir" — aplicaciones en inspección vial
4. "Por qué la señal GPR cambia con el terreno que atraviesa" — variación espectral de la señal (conceptual)

### Glosario (candidatos nuevos)
- Frecuencia dominante (GPR)
- Ancho de banda (señal GPR)
- Curva envolvente (radargrama)
- Interpretación cuantitativa GPR
- Permitividad dieléctrica — ya candidato desde Lorenzo (1995), ahora reforzado
- Conductividad eléctrica del suelo — ya candidato desde Lorenzo (1995)

### Herramientas
- Calculadora de viabilidad: añadir input de tipo de suelo y humedad → ajustar narrativa del resultado
- Árbol "¿Necesito GPR?": mejorar rama de "inspección de pavimentos" con criterios de qué es detectable

---

## Referencia sugerida

> Paredes Palacios, D. (2024). _Nuevos métodos de análisis cuantitativo de datos de georradar mediante el estudio de la influencia de las propiedades electromagnéticas del medio_ [Tesis doctoral]. Universidad Politécnica de Madrid. Proyecto CARESOIL.

_(Citar solo cuando se confirme acceso público en repositorio UPM. Hasta entonces, tratar como referencia interna.)_

---

## Relación con otras fichas

| Ficha | Relación |
|-------|----------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | Complementaria: Lorenzo establece fundamentos; Paredes agrega cuantificación moderna. Juntas cubren el espectro de nivel introductorio a avanzado. |

---

## Temas que alimenta

| Tema | Acción |
|------|--------|
| `themes/theme-analisis-cuantitativo.md` | Fuente principal (nuevo tema) |
| `themes/theme-gpr-pavimentos.md` | Fuente principal (nuevo tema) |
| `themes/theme-humedad-conductividad.md` | Fuente adicional (refuerza y extiende) |
| `themes/theme-frecuencia-resolucion.md` | Fuente adicional (frecuencia dominante y ancho de banda) |
