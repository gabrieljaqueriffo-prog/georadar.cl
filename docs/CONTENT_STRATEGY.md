# CONTENT_STRATEGY.md

> **Estado:** v1
> **Propósito:** Define cómo Georadar acumula conocimiento y autoridad durante
> los próximos años. Responde *cómo crece el ecosistema de contenido*, no qué
> páginas construir (eso es `BACKLOG.md`) ni cómo están organizadas (eso es
> `ARCHITECTURE.md`). Si este documento y `PROJECT_VISION` entran en conflicto,
> gana `PROJECT_VISION`.

---

## Tesis central

> **Georadar no compite por palabras clave. Compite por convertirse en la fuente
> de referencia en español sobre GPR. El SEO es la consecuencia de construir el
> mejor conocimiento disponible sobre el dominio, no el objetivo.**

El contenido que se escribe para posicionar se nota. El contenido que se escribe
para enseñar también se nota. La diferencia en autoridad acumulada a cinco años
es abismal.

---

## 1. Filosofía editorial

### 1.1 Autoridad primero

La autoridad temática no se declara: se construye activo a activo, referencia
a referencia, caso a caso. Un sitio que cubre profundamente un dominio estrecho
supera sistemáticamente a uno que cubre superficialmente un dominio amplio.

Georadar tiene una ventaja que ningún sitio genérico puede replicar: **evidencia
propia**. Radargramas reales, casos documentados, interpretaciones sobre proyectos
ejecutados. Esa evidencia es el activo más difícil de copiar y el de mayor valor
en el ecosistema de contenido.

### 1.2 El mecanismo de crecimiento

El mismo mecanismo del `NORTH_STAR` aplica aquí:

> Conocimiento útil → confianza → autoridad → posicionamiento → negocio.

El SEO es el **efecto medible** de ese mecanismo, no la causa. Intentar
optimizar el efecto sin construir la causa produce contenido vacío que posiciona
temporalmente y nunca convierte.

### 1.3 Profundidad antes que cantidad

Diez activos de referencia sobre un tema específico valen más que cien artículos
que rozan el tema. La profundidad es la que genera los enlaces externos, las
citas y el retorno de usuarios que construyen autoridad real.

### 1.4 Content Debt (Deuda de contenido)

Así como existe deuda técnica, existe **deuda editorial**. Se acumula cuando
los activos publicados quedan incompletos, desconectados o desactualizados.

Tipos de deuda de contenido en Georadar:

| Síntoma | Deuda generada |
|---------|---------------|
| Artículo sin caso relacionado | No demuestra aplicación real |
| Herramienta sin explicación técnica | No construye comprensión |
| Servicio sin evidencia propia | Afirmación sin respaldo |
| Término de glosario sin enlaces | Nodo aislado del grafo |
| Radargrama sin interpretación escrita | Dato sin valor didáctico |
| Activo con más de 12 meses sin revisión | Posible desactualización |
| Caso sin enlace a servicio relacionado | Oportunidad de conversión perdida |

**Regla de deuda:** el `ROADMAP` siempre debe incluir tareas de reducción de
deuda junto a tareas de creación. Un backlog que solo crea y nunca mejora
acumula deuda hasta que el coste de mantenimiento supera el valor del activo.

### 1.5 Conocimiento vs. know-how: qué se publica y qué no

No todo lo que Geo Radar Chile sabe es publicable, y la decisión de qué
publicar no es estética: es estratégica. La distinción no es por
profundidad técnica, sino por **qué genera la ventaja competitiva real**.

| Nivel | Qué es | Ejemplo | ¿Se publica? |
|-------|--------|---------|---------------|
| **A. Conocimiento público** | Lo que cualquiera puede aprender en un manual o paper | Qué es un radargrama, qué es una hipérbola, por qué la humedad afecta la señal, cuándo conviene 400 vs. 900 MHz a nivel conceptual | Sí, siempre — es literatura técnica, no tiene valor competitivo |
| **B. Experiencia acumulada** | Lo que ocurrió, documentado como evidencia | "En este proyecto se detectó una anomalía que la excavación posterior confirmó como cavidad" | Sí — es el corazón de la Biblioteca y de los casos reales. Es evidencia, no metodología |
| **C. Criterio profesional** | El razonamiento que convierte una lectura en una conclusión: qué señales se ponderaron, qué hipótesis se descartaron, cómo se combinan GPR + LEM + experiencia | "Por la continuidad del reflector, el comportamiento lateral y la amplitud, descartamos una tubería y priorizamos cavidad" | **Nunca.** Es la propiedad intelectual de 29 años de experiencia — el verdadero motivo por el que un cliente contrata a Geo Radar Chile |

**Principio editorial:** Geo Radar Chile vende la ejecución. Georadar.cl
demuestra el criterio, pero nunca enseña el proceso mental que lo hace
posible. Se comparte conocimiento (A), se demuestra experiencia (B), se
protege el criterio profesional (C).

Esto no reduce la ambición de Georadar: la convierte en la fuente de
referencia en español para **comprender el subsuelo y tomar decisiones antes
de intervenirlo** — no en una escuela que forma operadores capaces de
interpretar como un especialista. El GPR es el núcleo tecnológico; el
criterio profesional es el producto que realmente se vende, y no se regala.

### 1.6 Arquitectura de dos dominios: Geo Radar Chile vs. Georadar.cl (ATLAS)

Decisión registrada en `ADR-004-arquitectura-dos-dominios.md`. El ecosistema
tiene dos dominios con responsabilidades distintas y no intercambiables:

- **Geo Radar Chile (georadarchile.cl) = Empresa.** Responde "¿por qué
  contratar Geo Radar Chile?". Vende servicios, publica noticias
  corporativas, novedades, certificaciones y proyectos recientes. Tono:
  empresa ("Ejecutamos…", "Prospectamos…", "Entregamos…", "Nuestro equipo…").
- **Georadar.cl (ATLAS) = Centro de conocimiento.** Responde "¿cómo
  comprender el problema antes de intervenir el subsuelo?". Publica
  herramientas, casos reales en profundidad, glosario, calculadoras y
  biblioteca técnica. Tono: profesor ("¿Qué ocurre cuando…?", "¿Por
  qué…?", "¿Cómo afecta…?", "¿Qué limitaciones tiene…?").

**Reglas absolutas de cruce entre dominios:**

1. **ATLAS no replica contenido de Geo Radar Chile. Lo complementa.** Cada
   tema existe una sola vez en el ecosistema. Si ATLAS explica "¿qué es un
   radargrama?", esa explicación nunca se repite en Geo Radar Chile, y
   viceversa con "cómo usamos GPR en el proyecto X".
2. **Todo enlace entre ambos sitios debe aportar contexto nuevo al usuario,
   nunca duplicar información.** Geo Radar Chile puede cerrar una noticia de
   proyecto con "Ver caso técnico completo en Georadar.cl"; ATLAS puede
   cerrar un caso técnico con "¿Necesitas un estudio similar? → Geo Radar
   Chile". El enlace nunca repite lo que el usuario ya leyó.

Los enlaces cruzados forman un grafo de conocimiento, no una red de enlaces
por SEO: Geo Radar Chile convierte la confianza en negocio; ATLAS construye
esa confianza mediante conocimiento y herramientas. Antes de publicar un
activo nuevo en ATLAS, se verifica que el tema no esté ya cubierto en Geo
Radar Chile en el mismo nivel de detalle.

**Aplicación práctica en un caso real:** la estructura es Problema → riesgo
→ método general → qué se encontró → cómo cambió la decisión de obra →
resultado. Nunca se narra la cadena de señales que llevó a la conclusión
("se observa continuidad, la amplitud aumenta, la frecuencia cambia, por lo
tanto..."). El radargrama se muestra como **evidencia de que el caso
ocurrió** —igual que una radiografía en un artículo médico no está ahí
para enseñar radiología, sino para respaldar el caso clínico. El
protagonista de un caso real es la decisión de obra, no el radar ni el
proceso mental que la sustenta.

---

## 2. Mapa de dominio GPR (Knowledge Map)

El territorio de conocimiento que Georadar quiere dominar completamente en
español. No es una lista de artículos: es el mapa de lo que existe por conocer.
Los vacíos en este mapa son oportunidades de contenido.

```
GPR — Ground Penetrating Radar
│
├── 1. FUNDAMENTOS FÍSICOS
│   ├── Ondas electromagnéticas en el subsuelo
│   ├── Velocidad de propagación
│   ├── Resolución (vertical y horizontal)
│   ├── Atenuación y profundidad máxima
│   ├── Reflexión, refracción y difracción
│   └── Permitividad dieléctrica de materiales
│
├── 2. EQUIPOS Y CONFIGURACIÓN
│   ├── Antenas: tipos y frecuencias
│   ├── Criterios de selección de antena
│   ├── Modos de operación (reflexión, transmisión)
│   ├── Configuración de parámetros de adquisición
│   ├── Calibración en campo
│   └── Condiciones que afectan el rendimiento
│
├── 3. ADQUISICIÓN DE DATOS
│   ├── Planificación del levantamiento
│   ├── Grillas y perfiles
│   ├── Marcadores y georreferenciación
│   └── Control de calidad en campo
│
├── 4. INTERPRETACIÓN
│   ├── Lectura de radargramas
│   ├── Identificación de anomalías
│   ├── Hipérbolas y su significado
│   ├── Tipos de ruido y cómo distinguirlos
│   ├── Estimación de profundidad
│   ├── Procesamiento básico (gain, filtros, migración)
│   └── Niveles de confianza en la interpretación
│
├── 5. APLICACIONES POR SECTOR
│   ├── Minería: detección de cavidades, mapeo estructural
│   ├── Utilities: localización de servicios enterrados
│   ├── Construcción: evaluación de losas y estructuras
│   ├── Arqueología: detección no invasiva
│   ├── Geotecnia: caracterización del subsuelo
│   └── Carreteras: evaluación de pavimentos
│
└── 6. HERRAMIENTAS Y CÁLCULO
    ├── Cálculo de velocidad en materiales
    ├── Estimación de profundidad
    ├── Resolución según frecuencia
    ├── Selección de antena según objetivo
    └── Comparación de equipos
```

**Uso del mapa:** antes de crear cualquier activo de conocimiento, ubicarlo en
este mapa. Si no tiene un lugar claro, o bien el mapa necesita expandirse, o
bien el activo no pertenece al dominio central.

**El mapa es vivo:** se actualiza en `DECISIONS.md` cuando se añaden ramas
nuevas, y cada adición es una decisión de alcance que requiere aprobación.

---

## 3. Pirámide de evidencia

No todo el contenido tiene el mismo peso estratégico. Esta pirámide define
el valor relativo de cada tipo de activo. Cuanto más alto el nivel, más difícil
de replicar y más valioso para la autoridad de Georadar.

```
         ▲ NIVEL 5
        ███  EXPERIENCIA PROPIA
       █████  Radargramas propios interpretados
      ███████  Casos reales documentados con datos
     █████████  Proyectos con resultados medibles
    ───────────────────────────────────────────────
        ████  NIVEL 4
       ██████  INTERPRETACIÓN PROPIA
      ████████  Análisis originales
     ██████████  Comparativas basadas en trabajo real
    ───────────────────────────────────────────────
       █████  NIVEL 3
      ███████  EXPLICACIÓN TÉCNICA
     █████████  Artículos que enseñan a aplicar conceptos
    ███████████  Guías de proceso paso a paso
    ───────────────────────────────────────────────
      ██████  NIVEL 2
     ████████  SÍNTESIS DE LITERATURA
    ██████████  Resúmenes de estándares y bibliografía
   ████████████  Comparativas de métodos documentados
    ───────────────────────────────────────────────
     ███████  NIVEL 1
    █████████  DEFINICIONES
   ███████████  Glosario, terminología base
```

**Regla de la pirámide:** el contenido de Nivel 1 y 2 es necesario pero
insuficiente. Cualquier competidor puede crearlo. El contenido de Nivel 4 y 5
es prácticamente imposible de replicar sin los proyectos reales. La estrategia
de contenido prioriza subir en la pirámide, no ampliar la base.

**Implicación práctica:** cada artículo de Nivel 3 debería apuntar hacia un
caso real (Nivel 5) o un análisis propio (Nivel 4). Un artículo de explicación
técnica sin ese respaldo es frágil; con él, es una prueba.

---

## 4. Tipos de activos editoriales

Georadar no escribe artículos. Construye activos editoriales con objetivos
distintos. Claude debe identificar el tipo antes de crear cualquier contenido.

| Tipo de activo | Objetivo principal | Nivel en pirámide | Capacidad |
|---------------|-------------------|-------------------|-----------|
| **Artículo técnico** | Enseñar un concepto o proceso | 2–3 | Conocimiento |
| **Término de glosario** | Definir con precisión | 1 | Conocimiento |
| **Caso real** | Demostrar experiencia | 4–5 | Casos |
| **Radargrama comentado** | Enseñar a interpretar | 5 | Conocimiento |
| **Herramienta / Calculadora** | Resolver un problema concreto | 3 | Herramientas |
| **Guía de sector** | Posicionar por industria | 3 | Servicios |
| **Comparativa** | Decidir entre alternativas | 2–3 | Herramientas |
| **Recurso descargable** | Capturar contacto cualificado | 3 | Academia |
| **Contenido de mentoría** | Profundizar conocimiento | 4–5 | Academia |

**Cada tipo tiene un patrón de construcción** definido en `ARCHITECTURE.md §7`.
Antes de crear, consultar el patrón correspondiente.

---

## 5. Modelo de maduración del activo

Un activo editorial no nace completo. Crece con el tiempo, igual que el producto.

```
SEMILLA
  │  ← Idea capturada en BACKLOG, vacío del mapa identificado
  ▼
PUBLICADO
  │  ← Activo mínimo viable: cumple regla de activo mínimo (ARCHITECTURE §11)
  ▼
ENLAZADO
  │  ← Tiene 2+ enlaces entrantes y 1+ saliente; parte de la red
  ▼
EXPANDIDO
  │  ← Profundidad aumentada, secciones nuevas, más ejemplos o casos
  ▼
REFERENCIADO
  │  ← Otros activos del sitio lo citan; empieza a recibir enlaces externos
  ▼
AUTORIDAD
     ← Activo de referencia en su tema; difícil de desplazar
```

**Objetivo editorial:** mover activos de PUBLICADO hacia AUTORIDAD con el tiempo.
Un activo en SEMILLA o PUBLICADO es una promesa; uno en AUTORIDAD es un foso.

**Revisión periódica:** todo activo en estado PUBLICADO o superior debe revisarse
al menos una vez al año para detectar deuda de contenido. La revisión puede
resultar en una acción de EXPANDIDO o una detección de deuda que entra al ROADMAP.

---

## 6. Modelo de crecimiento: cuándo crear

El contenido no se crea por calendario ni por intuición. Se crea cuando existe
una razón validada. Este flujo evita el blog de 300 artículos mediocres.

```
¿Existe un activo que pueda evolucionar hacia EXPANDIDO?
        │
        ├── SÍ → Priorizar evolución sobre creación (DECISION_FRAMEWORK Bloque 4)
        │
        └── NO ↓

¿Existe un vacío identificable en el Knowledge Map?
        │
        ├── NO → No es el momento. Fortalecer lo existente.
        │
        └── SÍ ↓

¿Existe demanda real? (búsqueda, pregunta de cliente, gap vs competencia)
        │
        ├── NO → Backlog de baja prioridad. No construir ahora.
        │
        └── SÍ ↓

¿Tenemos evidencia o perspectiva propia que aporte al Nivel 3+?
        │
        ├── NO → Esperar hasta tenerla o construir Nivel 1–2 como base provisional.
        │
        └── SÍ → Crear. Asignar tipo de activo, patrón, enlaces previstos y estado.
```

---

## 7. SEO como consecuencia

El SEO no se abandona: se reencuadra. El conocimiento profundo genera las
señales que el SEO necesita de forma natural.

### 7.1 Arquitectura semántica

Georadar construye **clústeres temáticos**, no páginas independientes:

- Una **página pilar** cubre el tema amplio (ej. "Georadar en minería").
- Múltiples **activos satélite** cubren subtemas específicos y enlazan a la pilar.
- La pilar enlaza de vuelta a los satélites más relevantes.
- Los casos reales, radargramas y herramientas relacionadas se integran en el clúster.

Cada rama del Knowledge Map (§2) es un clúster potencial.

### 7.2 Intención de búsqueda por tipo de activo

| Tipo de activo | Intención primaria | Tipo de query |
|---------------|-------------------|---------------|
| Artículo técnico | Informacional | "qué es", "cómo funciona", "por qué" |
| Glosario | Informacional | Término exacto |
| Caso real | Investigación | "GPR en [sector]", "ejemplo de" |
| Herramienta | Transaccional | "calculadora GPR", "cómo calcular" |
| Guía de sector | Comercial | "servicio GPR [sector]", "escaneo [sector]" |
| Página de servicio | Comercial/Transaccional | "contratar GPR", "cotizar" |

### 7.3 Autoridad en español: el territorio no ocupado

El mayor activo SEO de Georadar es la ausencia de competencia seria en español.
La mayoría del conocimiento técnico sobre GPR existe en inglés. Ser la primera
fuente rigurosa en español sobre interpretación, cálculo y casos reales es una
ventaja de primer movimiento que se acumula con el tiempo.

**Prioridad lingüística:** todo activo de Nivel 3+ se escribe en español neutro
LatAm. Los términos técnicos en inglés se incluyen entre paréntesis en su primera
aparición y se registran en el glosario con ambas versiones.

### 7.4 Lo que no haremos por SEO

- ❌ Crear contenido para llenar vacíos de palabras clave sin evidencia propia.
- ❌ Duplicar contenido que ya existe bien en inglés sin aportar perspectiva nueva.
- ❌ Publicar activos en estado SEMILLA solo para indexar.
- ❌ Optimizar títulos y meta-descriptions a expensas de la precisión técnica.
- ❌ Construir backlinks artificiales o intercambios de enlaces sin valor editorial.

---

## 8. Modelo editorial operativo

### 8.1 Criterios de priorización

Antes de añadir un activo al ROADMAP, evaluar en este orden:

1. **Reduce deuda de contenido existente** → prioridad máxima.
2. **Llena un vacío en el Knowledge Map con evidencia propia** → prioridad alta.
3. **Llena un vacío con síntesis o explicación** → prioridad media.
4. **Crea contenido nuevo sin vacío claro** → revisar si corresponde.

### 8.2 Criterios de calidad antes de publicar

Todo activo editorial debe cumplir antes de pasar a estado PUBLICADO:

- [ ] Ubicado en el Knowledge Map (§2).
- [ ] Tipo de activo identificado (§4).
- [ ] Nivel de pirámide asignado (§3).
- [ ] Patrón de módulo aplicado (`ARCHITECTURE.md §7`).
- [ ] Al menos dos enlaces entrantes definidos.
- [ ] Al menos un enlace saliente hacia activo estratégico.
- [ ] Deuda de contenido evaluada: ¿qué necesitará en su próxima evolución?
- [ ] Estado inicial asignado en BACKLOG.

### 8.3 Cadencia

No existe una cadencia fija de publicación. Existe una cadencia de **calidad**:
ningún activo sale si no cumple el checklist de §8.2. Un activo por mes que
alcance AUTORIDAD vale más que uno por semana que se quede en PUBLICADO.

---

---

## 9. Knowledge Flywheel

Georadar no tiene un embudo de contenido. Tiene un volante de conocimiento.
Cada proyecto ejecutado alimenta el sistema entero y genera activos que, a su
vez, atraen el siguiente proyecto.

```
        Proyecto ejecutado
               │
               ▼
          Radargrama ──────────────────────────────┐
               │                                   │
               ▼                                   │
         Interpretación                            │
               │                                   │
               ▼                                   │
           Caso real ──────────────────────────┐   │
               │                               │   │
               ▼                               │   │
       Artículo técnico ─────────────────┐     │   │
               │                         │     │   │
               ▼                         │     │   │
            Glosario                     │     │   │
               │                         ▼     ▼   ▼
               ▼                      Herramienta / Mentoría
          Confianza
               │
               ▼
        Nuevo proyecto
               │
               ▼
        Más evidencia ──► El volante gana inercia
```

Cada vuelta del volante añade activos de mayor nivel en la pirámide de evidencia.
Esto explica por qué Georadar mejora con cada proyecto ejecutado y por qué
un competidor sin esa evidencia real no puede replicar el sistema aunque copie
la estructura.

---

## 10. Knowledge Graph (relaciones entre activos)

El Knowledge Map (§2) define el territorio. El Knowledge Graph define cómo se
relacionan los activos dentro de ese territorio. El contenido no vive en carpetas:
vive en una red de nodos y relaciones.

**Nodos del grafo:**
`Radargrama` → `Caso real` → `Artículo técnico` → `Glosario` → `Herramienta` → `Mentoría`

**Relaciones fundamentales:**

| Activo origen | Relación | Activo destino |
|--------------|----------|----------------|
| Radargrama | ilustra | Artículo técnico |
| Radargrama | pertenece a | Caso real |
| Caso real | demuestra | Servicio |
| Caso real | referencia | Artículo técnico |
| Artículo técnico | define términos en | Glosario |
| Artículo técnico | usa | Herramienta |
| Herramienta | requiere entender | Artículo técnico |
| Glosario | contextualiza | Herramienta |
| Mentoría | profundiza | Artículo técnico + Caso real |
| Servicio | evidenciado por | Caso real |

**Regla del grafo:** un activo sin ninguna relación en esta tabla es un nodo
aislado. No debe publicarse en ese estado. El grafo es el mecanismo que convierte
la regla de "dos enlaces entrantes" de `ARCHITECTURE.md` en una práctica
editorial concreta.

---

## 11. Content Coverage

Métrica visual del estado de cobertura del Knowledge Map. Permite que Claude
priorice vacíos basándose en datos, no en intuición.

```
KNOWLEDGE MAP — COBERTURA ACTUAL

Fundamentos físicos      ██████████  100%
Equipos y configuración  ████████░░   80%
Adquisición de datos     ██████░░░░   60%
Interpretación           ████░░░░░░   40%
Aplicaciones / Minería   ██████░░░░   60%
Aplicaciones / Utilities ██████████  100%
Aplicaciones / Construc. █████░░░░░   50%
Aplicaciones / Arqueol.  ███░░░░░░░   30%
Aplicaciones / Geotecnia ░░░░░░░░░░    0%
Herramientas y cálculo   ████░░░░░░   40%
```

*Los valores son ilustrativos. El estado real se actualiza en `BACKLOG.md`
cada vez que se publica o archiva un activo.*

**Regla de cobertura:** antes de iniciar cualquier sprint de contenido,
revisar el Content Coverage. Los sectores con cobertura inferior al 50%
tienen prioridad sobre la creación de más contenido en sectores ya cubiertos.

---

## 12. Regla del tercer activo

Antes de publicar cualquier activo nuevo, responder:

> **¿Qué dos activos futuros hace posible este?**

Si la respuesta es "ninguno evidente", el activo no está bien diseñado o
no es el momento de crearlo. Un activo que no genera descendencia es un
callejón sin salida en el grafo de conocimiento.

**Ejemplos:**
- Un artículo sobre velocidad de propagación → habilita la calculadora de velocidad + la calculadora de profundidad.
- Un caso de detección de cavidades en minería → habilita el artículo sobre detección de vacíos + la guía de sector minero.
- Un radargrama de arqueología comentado → habilita el artículo sobre interpretación en terreno orgánico + el caso de arqueología.

Esta regla conversa directamente con el principio de crecimiento compuesto
(`DECISION_FRAMEWORK §Bloque 3`) y con la regla del segundo uso (`ARCHITECTURE §11`).

---

## 13. Canon

Los activos irremplazables del sitio. Todo el ecosistema de contenido crece
alrededor de ellos. Si alguno desaparece o se degrada, el sistema pierde un
nodo crítico.

El Canon inicial de Georadar:

1. **Cómo tomar decisiones correctas antes de intervenir el subsuelo**
   (anteriormente "Guía de interpretación de radargramas") — el activo de mayor
   autoridad posible; nadie en español lo tiene bien hecho. Enseña qué es un
   radargrama, sus límites, cuándo un estudio GPR es realmente necesario y qué
   preguntas debe responder un proyecto antes de intervenir — nunca el
   razonamiento multi-señal que constituye el criterio profesional (Nivel C,
   ver `§1.5`). Forma clientes inteligentes, no operadores.
2. **Calculadora de profundidad GPR** — herramienta de uso más frecuente.
3. **Glosario GPR en español** — vocabulario de referencia del dominio.
4. **Caso real: detección en minería** — prueba en el sector de mayor valor.
5. **Caso real: localización de servicios utilities** — prueba en el sector más frecuente.
6. **Caso real: arqueología no invasiva** — prueba en el sector más visual y difundible.
7. **Guía de selección de antena** — herramienta de decisión que todos los
   técnicos necesitan.

**Regla del Canon:** estos activos tienen prioridad de construcción, mantenimiento
y actualización sobre cualquier otro. Nunca se archivan sin aprobación explícita
y un plan de reemplazo. La deuda de contenido en un activo del Canon es
emergencia editorial.

---

## Cierre

La estrategia de contenido de Georadar no es un plan de publicación: es un
sistema de acumulación de conocimiento. Cada activo que alcanza el estado
AUTORIDAD hace más difícil que un competidor ocupe ese territorio. Cada enlace
que se construye entre activos aumenta el valor de toda la red.

En diez años, el diferencial de Georadar no será el diseño ni el código: será
el cuerpo de conocimiento acumulado en español sobre GPR, respaldado por
evidencia real e interpretación experta. Ese es el foso que este documento
existe para construir.

> **Conecta con:** `PROJECT_VISION §6` (pilares de contenido), `NORTH_STAR`
> (conocimiento útil → confianza → autoridad), `ARCHITECTURE §3-4` (matriz de
> relaciones y ciclo de vida), `DECISION_FRAMEWORK Bloque 3` (crecimiento
> compuesto). El GPOS es coherente: cada documento hereda y refuerza a los
> anteriores.
