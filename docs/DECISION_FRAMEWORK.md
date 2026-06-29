# DECISION_FRAMEWORK.md

> **Estado:** v1
> **Propósito:** Responder *¿cómo decide Georadar mientras construye?* No es una brújula
> direccional (eso es `NORTH_STAR.md`). Es el conjunto de reglas de taller que aplican
> al diseñar, escribir, priorizar y construir. Si este documento y `NORTH_STAR` entran
> en conflicto, gana `NORTH_STAR`. Si este documento y `PROJECT_VISION` entran en
> conflicto, gana `PROJECT_VISION`.

---

## Cómo usar este documento

Antes de construir algo nuevo, de priorizar entre dos opciones o de decidir si una idea
pertenece al producto, recorre los cinco bloques en orden. No todos aplican a cada
decisión, pero el recorrido evita el sesgo de la urgencia y el cortoplacismo.

---

## Bloque 0 — Principio de irreversibilidad

> Antes de cualquier otra consideración: ¿esta decisión es fácil de revertir?

Algunas decisiones son baratas de deshacer (un texto, un color, un componente). Otras
crean dependencias estructurales que el producto cargará durante años:

- Estructura de URLs y taxonomías.
- Arquitectura de contenido y naming de módulos.
- Componentes base del sistema de diseño.
- Esquemas de datos y patrones de herramientas.
- Decisiones de CSS, framework o tecnología.

**La regla:** cuanto más difícil sea revertir una decisión, más tiempo merece
antes de implementarse. Las decisiones irreversibles requieren propuesta, revisión
y aprobación explícita —nunca se implementan directamente. Las reversibles pueden
avanzar con criterio propio.

Este principio no frena la velocidad: la protege. Una decisión estructural mal tomada
paraliza semanas. Dos minutos de análisis previo evitan eso.

**Señal de alerta:** si alguien (incluido Claude Code) está a punto de cambiar una URL,
renombrar una taxonomía, modificar un componente base o introducir una nueva dependencia
técnica, debe detenerse, documentar la decisión en `/docs/adr/` y obtener aprobación antes
de continuar.

---

## Bloque 1 — Principios de construcción

Reglas que aplican a *todo* lo que se construye en Georadar, sin excepción.

**1. El usuario primero, la empresa después.**
Toda nueva pieza debe aportar valor al usuario antes de aportar valor comercial a
Georadar. La utilidad no es el medio para vender; es el objetivo. La venta es la
consecuencia.

**2. Activos permanentes antes que resultados temporales.**
Una herramienta reutilizable, un caso de estudio bien documentado o una calculadora
bien construida valen más que una campaña, un banner o una página de aterrizaje
descartable. Si no puede reutilizarse o crecer, replantéalo.

**3. El conocimiento tiene prioridad sobre el marketing.**
Cada pieza de contenido debe enseñar algo concreto. Si el objetivo principal es
posicionar o vender —no enseñar—, el contenido no cumple. El marketing es el efecto
secundario de un buen contenido técnico.

**4. Profundidad antes que cantidad.**
Un caso de estudio excelente supera a diez artículos superficiales. Un glosario riguroso
supera a veinte posts de blog genéricos. Cuando haya que elegir entre ampliar y
profundizar, profundiza.

**5. Todo módulo debe poder crecer.**
Nunca construir páginas "cerradas" o funcionalidades sin salida. Cada nueva pieza debe
diseñarse como sistema: con capacidad de enlazarse, extenderse y alimentar a las
siguientes. Si no puedes imaginar cómo crece, no está bien diseñado.

**6. Si no aporta autoridad, utilidad o conversión, no se construye.**
Tres filtros. Con que cumpla uno basta, pero si no cumple ninguno, la idea no pertenece
al producto —sin importar lo interesante que parezca o cuánto tiempo llevaría.

---

## Bloque 2 — Sistema de preferencias

Cuando dos opciones parecen válidas y la pregunta única de `NORTH_STAR` no las
diferencia, aplicar estas preferencias en orden. La izquierda es siempre la opción
que Georadar elige primero.

| Preferimos…                        | …antes que                         |
|------------------------------------|------------------------------------|
| Activos permanentes                | Campañas o páginas temporales      |
| Profundidad                        | Volumen                            |
| Evidencia                          | Afirmaciones                       |
| Enseñar                            | Convencer                          |
| Mejorar un activo existente        | Crear uno nuevo                    |
| Componentes reutilizables          | Soluciones de un solo uso          |
| Crecimiento compuesto              | Crecimiento lineal                 |

Estas preferencias no son absolutas: un caso real de un proyecto puede justificar
crear algo nuevo aunque exista algo similar. Pero la carga de la prueba la tiene
siempre la excepción, no la regla.

---

## Bloque 3 — Crecimiento compuesto

> Cada mejora debe aumentar el valor de las anteriores. Cada nueva pieza debe hacer
> más valiosas a todas las demás.

Este principio es la diferencia entre construir páginas y construir un sistema.

**Cómo se aplica en la práctica:**
- Un nuevo caso de estudio debe enlazarse desde la biblioteca técnica, desde la
  página del servicio correspondiente y desde cualquier calculadora relacionada.
- Una nueva herramienta debe poder citarse en artículos futuros, en mentorías y en
  las páginas de industria.
- Una nueva calculadora debe diseñarse de forma que sus componentes puedan
  reutilizarse en la siguiente calculadora.

**El arco de crecimiento compuesto de las herramientas:**

```
Calculadora de velocidad
        ↓
Calculadora de profundidad
        ↓
Calculadora de resolución
        ↓
Comparador de antenas
        ↓
Visualizador de radargramas
        ↓
Árbol de decisión "¿Necesito GPR?" / Checklist antes de perforar
```

Cada herramienta facilita construir la siguiente. Ese efecto acumulativo es una
ventaja competitiva que un competidor no puede copiar de un día para otro: no solo
necesita la herramienta, necesita todos los activos que la sustentan.

**Sobre el último eslabón:** se elimina deliberadamente la idea de un
"interpretador asistido". Una herramienta que automatiza el razonamiento
multi-señal regalaría en forma de producto el criterio profesional que
`CONTENT_STRATEGY.md §1.5` protege como activo propietario (Nivel C) — y
rompería el modelo de negocio, porque automatizaría precisamente aquello por
lo que un cliente contrata a Geo Radar Chile. El arco de herramientas termina
en utilidades que **preparan al cliente para pedir una lectura profesional**
(árbol de decisión, checklist, estimador de cobertura, selector conceptual de
antena), nunca en una que sustituya al especialista.

**Señal de alarma:** si una nueva pieza no enlaza con nada existente ni alimenta
nada futuro, probablemente es una página aislada. Replantearlo antes de construir.

---

## Bloque 4 — Coste de oportunidad

> Cada nueva funcionalidad consume tiempo, atención y mantenimiento —para siempre,
> no solo al construirse. Antes de crear algo nuevo, pregunta si algo existente puede
> evolucionar para cumplir ese propósito.

**La pregunta de coste de oportunidad:**

> ¿Es mejor mejorar un activo existente que crear uno nuevo?

Si la respuesta es sí —o incluso "probablemente sí"—, primero se mejora lo existente.
La mejor funcionalidad muchas veces es la que no necesita construirse.

**Por qué importa:**
El backlog tiende a crecer sin control. Cada ítem que entra tiene un coste no solo
de construcción, sino de mantenimiento perpetuo. Un producto con veinte herramientas
bien mantenidas y profundas es más valioso —y más sostenible— que uno con cincuenta
herramientas a medias.

**Aplicación práctica:**
- Antes de crear una nueva página de industria, revisar si la existente puede
  ampliarse con una sección específica.
- Antes de crear una nueva calculadora, revisar si la anterior puede extenderse
  con un nuevo parámetro.
- Antes de escribir un nuevo artículo, revisar si uno existente puede actualizarse
  y profundizarse.

---

## Bloque 5 — Lo que nunca sacrificaremos

Estos son los no-negociables del producto. No son preferencias; son límites.
Cuando una solución técnicamente válida los viole, se descarta —sin importar cuánto
convierta, cuánto posicione o cuánto ahorre en esfuerzo.

- **Claridad** por espectacularidad visual.
- **Rendimiento** por animaciones o efectos.
- **Autoridad técnica** por SEO fácil o contenido superficial.
- **Precisión** por marketing o simplificación excesiva.
- **Experiencia móvil** por diseño pensado solo en escritorio.
- **Mantenibilidad** por velocidad de entrega.

**Cómo leerlos:** cada par tiene una tensión real. La tentación de sacrificar el
lado izquierdo por el derecho aparecerá constantemente —un efecto visual impresionante,
un artículo rápido de rankear, una solución que funciona hoy pero que nadie entenderá
en seis meses. Este bloque es el recordatorio de qué lado elegimos siempre.

---

## Resumen ejecutivo

Si no hay tiempo para releer el documento completo, estas cinco preguntas capturan
su esencia:

0. **¿Es reversible?** Si no lo es, documentar y pedir aprobación antes de continuar. (Bloque 0)
1. **¿Aporta utilidad real al usuario?** (Bloque 1)
2. **¿Estamos eligiendo el lado correcto de las preferencias?** (Bloque 2)
3. **¿Aumenta el valor de los activos que ya existen?** (Bloque 3)
4. **¿Estamos mejorando un módulo existente antes de crear uno nuevo?** (Bloque 4)

Y el límite que siempre aplica: **¿viola algún no-negociable del Bloque 5?**
Si sí, se descarta.

---

> **Nota de lenguaje:** En Georadar no construimos *páginas* ni *secciones*.
> Construimos **módulos**, **capacidades** y **activos**. El lenguaje no es cosmético:
> obliga a pensar en crecimiento, reutilización y sistema desde el primer momento.
> "Vamos a crear la página de minería" → "Vamos a ampliar la capacidad de servicios
> para el sector minero."

---

## La regla de triple justificación

Síntesis del GPOS. Toda decisión en Georadar debe poder justificarse desde
las tres dimensiones del sistema. Si falla en cualquiera, no está lista:

| Dimensión | Documento de referencia | Pregunta |
|-----------|------------------------|----------|
| **Estratégica** | `PROJECT_VISION.md` + `NORTH_STAR.md` | ¿Está alineada con lo que Georadar es y hacia dónde va? |
| **Arquitectónica** | `ARCHITECTURE.md` | ¿Respeta la estructura del sistema y fortalece el crecimiento compuesto? |
| **Operativa** | `CLAUDE.md` + `DEFINITION_OF_DONE.md` | ¿Puede implementarse, mantenerse y cumple los criterios de calidad? |

Una decisión que pasa las tres preguntas está lista. Una que falla en una sola
necesita ser replanteada —no acelerada.

> **El trípode:**
> `PROJECT_VISION` define *qué es y hacia dónde va* Georadar.
> `NORTH_STAR` define *con qué pregunta se decide*.
> `DECISION_FRAMEWORK` define *cómo se construye*.
> `ARCHITECTURE` define *cómo se organiza*.
> Juntos forman el **GPOS** — Georadar Product Operating System.
