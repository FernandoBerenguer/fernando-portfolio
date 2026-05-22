# Spec 003 — Contenido real

## Contexto

Las specs 001 (esqueleto) y 002 (diseño visual) están completas. La estructura
y el diseño funcionan; las secciones muestran contenido placeholder. Esta spec
sustituye TODO el placeholder por el contenido real de Fernando, en ambos
idiomas, sin tocar el diseño ni la mecánica.

## Objetivo

Volcar el contenido real (bio, 5 entradas de experiencia, stack, contacto) en
los diccionarios i18n (`src/i18n/ui.ts`) y ajustar las secciones para que rendericen
ese contenido. El timeline pasa de las entradas placeholder a 5 entradas reales.

## Alcance

1. **Bio** (sección About): texto real ES/EN.
2. **Experiencia**: 5 entradas reales en el timeline, orden cronológico inverso,
   cada una con empresa, rol, periodo, descripción y chips de stack.
3. **Stack técnico**: 5 categorías con sus chips, etiquetas de categoría ES/EN.
4. **Contacto**: email (mailto) y LinkedIn. SIN GitHub.

## Fuera de alcance

- Cambios de diseño, theming, animaciones o estructura (specs 001/002, intactas).
- Deploy.
- Las "Notas técnicas aprendidas" del CLAUDE.md siguen vigentes.

## Indicaciones de implementación

- El contenido vive en `src/i18n/ui.ts` (o donde resida el diccionario actual).
  NO hardcodear texto en los componentes.
- Si el timeline tenía 3 entradas placeholder, ahora son 5. Verificar que la
  línea/nodos del timeline siguen bien con 5 entradas.
- Quitar la entrada de contacto de GitHub (el diseño preveía 3 iconos; ahora
  son 2: email y LinkedIn). Eliminar el icono GitHub de contacto si queda sin uso
  (el de footer puede quedarse o quitarse — confirmar con Fernando).
- Periodos con formato "Mes Año" (ES) / "Mon Year" (EN). "Actualidad" / "Present".
- Email como enlace mailto:.

## Criterios de aceptación

- Las cuatro secciones muestran contenido real en ES y en EN.
- El timeline tiene 5 entradas correctas y bien renderizadas en ambos temas.
- El stack muestra las 5 categorías con sus chips.
- Contacto muestra email (mailto funcional) y LinkedIn (enlace correcto, target
  blank + rel noopener). Sin GitHub.
- `astro check` sin errores. La mecánica (tema, idioma, animaciones) intacta.

---

## CONTENIDO — ESPAÑOL

### Bio (About)
Llevo desde 2018 desarrollando en .NET, y en ese tiempo he pasado por proyectos
muy distintos: trazabilidad para la Comisión Europea, sistemas financieros, una
plataforma OTT de streaming deportivo y, actualmente, una plataforma de cálculo
de incentivos como Senior Backend Developer. Lo que me mueve es la calidad bien
hecha y los retos de rendimiento —los problemas donde la mejora se ve y se mide—.
Soy meticuloso con el proceso, creo en el trabajo en equipo y en el compañerismo
más que en el mérito individual, y mantengo siempre las ganas de aprender y de
mejorar. Abierto a nuevas oportunidades.

### Experiencia (orden: más reciente primero)

**1. UST — Viajes El Corte Inglés** · Senior Backend Developer · Mar 2025 – Actualidad
Desarrollo desde cero el backend de una plataforma de cálculo de incentivos de
ventas para los agentes de Viajes El Corte Inglés. Un equipo pequeño —dos
desarrolladores backend, un líder técnico/funcional y un arquitecto— que afronta
con determinación y solvencia todos los retos del proyecto. Ambas APIs (gestión e
intranet) siguen arquitectura limpia (Clean Architecture). Un trabajo de principio
a fin: del modelado de dominio a la puesta en producción.
Chips: C# · .NET 8 · MongoDB · Hangfire · Clean Architecture · Microservicios

**2. Grupo Solutio — Plataforma OTT (LaLigaTech / Sportian)** · Backend Developer · Jun 2022 – Mar 2025
Formé parte del equipo backend de una plataforma OTT de streaming deportivo
construida sobre microservicios, con Azure Service Bus como eje de comunicación
entre servicios. Empecé encargándome del servicio que gestionaba la cola de
Service Bus y desde ahí trabajé de forma transversal: módulo de CMS, los dos
servicios de Suscripciones —ambos implementados con CQRS— y el servicio de
persistencia de las entidades principales. Un equipo grande (~15 desarrolladores
backend) con APIs modulares.
Chips: C# · .NET 6 → 8 · SQL Server · Cosmos DB · Redis · Azure Service Bus · CQRS

**3. Deloitte — Trade Promotion Optimization (TPO)** · Backend Developer · Abr 2021 – Jun 2022
Proyecto interno de Deloitte UK para optimización de promociones en retail. A
partir de un conjunto de parámetros y un componente de Machine Learning, el
sistema determinaba la combinación óptima de producto, temporada y tipo de oferta
(2x1, 3x2, BOGO…) para maximizar el rendimiento de las promociones de grandes
superficies. Desarrollé el backend sobre un flujo de Azure Functions encadenadas
dividido en cinco fases, en un equipo internacional distribuido (Reino Unido,
Irlanda, Escocia, India y España) trabajando íntegramente en inglés con
metodología Scrum.
Chips: C# · .NET · Azure Functions · Integración con ML (Python)

**4. Everis — Banco Interamericano de Desarrollo (IDB/BID)** · Backend Developer · Sep 2019 – Abr 2021
Entré como junior al desarrollo de una herramienta interna para el tratamiento de
las transacciones del cliente: un conjunto de servicios en torno a una matriz
central ("Convergencia") que interactuaban para operaciones de cálculo financiero,
gestión de listas de transacciones y reporting. Desarrollé features de extremo a
extremo —pantalla (Razor + JS), API y modelo de datos en SQL Server— además de
resolución de bugs e incidencias. En la última etapa participé en un proyecto
derivado (SG) con un equipo reducido aplicando TDD y DDD bajo la dirección de un
arquitecto del cliente, durante aproximadamente un año.
Chips: C# · .NET Core 3.1 · SQL Server · Razor · JavaScript · TDD / DDD

**5. Everis — CHAFEA (Comisión Europea)** · Backend Developer · Jun 2018 – Sep 2019
Mi primer proyecto y el inicio de mi desarrollo en C# y .NET, dentro de un sistema
de trazabilidad del tabaco a nivel europeo para la Comisión Europea. La API
gestionaba el escaneo y la traza completa de cada envío —palets, cajas, cartones,
cajetillas— a lo largo de toda la cadena. En un equipo con desarrolladores sénior,
QA y liderazgo técnico y de negocio, contribuí en tareas de desarrollo y soporte
de incidencias, asentando los fundamentos de C# y .NET y del trabajo en entorno
cloud.
Chips: C# · .NET · AWS (Lambda, DynamoDB)

### Stack técnico
- Lenguajes y Frameworks: C# · .NET (Core 3.1 → 8) · ASP.NET Core · Razor · JavaScript
- Bases de datos: SQL Server · MongoDB · Cosmos DB · DynamoDB · Redis
- Cloud y Mensajería: Azure (Functions, Service Bus) · AWS (Lambda, DynamoDB)
- Arquitectura y Prácticas: Clean Architecture · CQRS · DDD · TDD · Microservicios · Scrum
- Herramientas: Git · Hangfire

### Contacto
- Email: fernando.berenguer.borrego@gmail.com
- LinkedIn: https://www.linkedin.com/in/fernando-berenguer-269b7696/

---

## CONTENIDO — INGLÉS

### Bio (About)
I have been developing in .NET since 2018, and over that time I have worked on
very different projects: traceability systems for the European Commission,
financial systems, a sports streaming OTT platform, and currently an incentives
calculation platform as a Senior Backend Developer. What drives me is well-crafted
quality and performance challenges — the kind of problems where the improvement is
visible and measurable. I am meticulous about process, I believe in teamwork and
collaboration over individual recognition, and I always keep the drive to learn
and improve. Open to new opportunities.

### Experience (most recent first)

**1. UST — Viajes El Corte Inglés** · Senior Backend Developer · Mar 2025 – Present
I build, from the ground up, the backend of a sales incentives calculation
platform for Viajes El Corte Inglés agents. A small team — two backend developers,
a technical/functional lead and an architect — that takes on every challenge with
determination and reliability. Both APIs (management and intranet) follow Clean
Architecture. End-to-end work: from domain modelling to production deployment.
Chips: C# · .NET 8 · MongoDB · Hangfire · Clean Architecture · Microservices

**2. Grupo Solutio — OTT Platform (LaLigaTech / Sportian)** · Backend Developer · Jun 2022 – Mar 2025
I was part of the backend team of a sports streaming OTT platform built on
microservices, with Azure Service Bus as the backbone of inter-service
communication. I started out owning the service that managed the Service Bus
queue, and from there worked across the system: the CMS module, the two
Subscriptions services — both implemented with CQRS — and the persistence service
for the core entities. A large team (~15 backend developers) with modular APIs.
Chips: C# · .NET 6 → 8 · SQL Server · Cosmos DB · Redis · Azure Service Bus · CQRS

**3. Deloitte — Trade Promotion Optimization (TPO)** · Backend Developer · Apr 2021 – Jun 2022
An internal Deloitte UK project for retail promotion optimization. Based on a set
of parameters and a Machine Learning component, the system determined the optimal
combination of product, season and offer type (BOGO, 2-for-1, 3-for-2…) to
maximize the performance of supermarket promotions. I developed the backend on a
chained Azure Functions flow split into five stages, within an internationally
distributed team (UK, Ireland, Scotland, India and Spain), working entirely in
English under Scrum.
Chips: C# · .NET · Azure Functions · ML integration (Python)

**4. Everis — Inter-American Development Bank (IDB)** · Backend Developer · Sep 2019 – Apr 2021
I joined as a junior on the development of an internal tool for processing the
client's transactions: a set of services built around a central matrix
("Convergencia") that interacted to perform financial calculations, transaction
list management and reporting. I developed features end-to-end — UI (Razor + JS),
API and data model in SQL Server — alongside bug and incident resolution. In the
final stage I took part in a derived project (SG) with a small team applying TDD
and DDD under the guidance of a client architect, for roughly a year.
Chips: C# · .NET Core 3.1 · SQL Server · Razor · JavaScript · TDD / DDD

**5. Everis — CHAFEA (European Commission)** · Backend Developer · Jun 2018 – Sep 2019
My first project and the start of my career in C# and .NET, within a Europe-wide
tobacco traceability system for the European Commission. The API handled the
scanning and full traceability of every shipment — pallets, boxes, cartons, packs
— across the entire chain. In a team with senior developers, QA and both technical
and business leadership, I contributed to development tasks and incident support,
building the foundations of C#, .NET and cloud-based work.
Chips: C# · .NET · AWS (Lambda, DynamoDB)

### Tech Stack
- Languages & Frameworks: C# · .NET (Core 3.1 → 8) · ASP.NET Core · Razor · JavaScript
- Databases: SQL Server · MongoDB · Cosmos DB · DynamoDB · Redis
- Cloud & Messaging: Azure (Functions, Service Bus) · AWS (Lambda, DynamoDB)
- Architecture & Practices: Clean Architecture · CQRS · DDD · TDD · Microservices · Scrum
- Tools: Git · Hangfire

### Contact
- Email: fernando.berenguer.borrego@gmail.com
- LinkedIn: https://www.linkedin.com/in/fernando-berenguer-269b7696/
