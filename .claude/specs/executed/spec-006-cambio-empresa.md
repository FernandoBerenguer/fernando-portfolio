# Spec 006 — Cambio de empresa: cerrar UST, añadir Conversia

## Contexto

El portfolio está desplegado y funcionando. La spec 003 volcó el contenido real,
incluyendo 5 entradas de experiencia en el timeline. Fernando ha cambiado de
empresa: terminó su etapa en UST / Viajes El Corte Inglés (fin en junio de 2026)
e incorporó a Conversia, en el proyecto Signo. Hay que reflejar el cambio en la
sección de experiencia y en la bio.

## Objetivo

Actualizar el diccionario i18n para: (1) añadir una nueva entrada de experiencia
de Conversia como la más reciente, (2) cerrar la entrada de UST con su fecha de
fin y pasar su descripción a pasado, y (3) actualizar la última frase de la bio.
El timeline pasa de 5 a 6 entradas. Sin tocar diseño ni mecánica.

## Alcance

1. **Nueva entrada — Conversia / Signo**: entra como posición 1 del timeline
   (más reciente), con empresa, rol, periodo, descripción y chips. ES/EN.
2. **UST — VECI**: cambia de posición 1 a posición 2. Fecha de fin a Jun 2026 y
   descripción reescrita en pasado.
3. **Bio (About)**: actualizar la frase final para reflejar el rol actual en
   legaltech / cumplimiento normativo. ES/EN.

## Fuera de alcance

- Cambios de diseño, theming, animaciones o estructura (specs 001/002, intactas).
- Deploy (lo resuelve el CI/CD de Cloudflare al hacer push; no es parte de la spec).
- Sección de Stack técnico: **no cambia**. Todas las tecnologías de Conversia
  (.NET 8, Azure Service Bus, CQRS, Microservicios) ya están representadas en las
  categorías existentes. No añadir chips nuevos al stack global.
- Sección de Contacto: intacta.
- Las "Notas técnicas aprendidas" del CLAUDE.md siguen vigentes.

## Indicaciones de implementación

- El contenido vive en `src/i18n/ui.ts` (o donde resida el diccionario actual,
  igual que en la spec 003). NO hardcodear texto en los componentes.
- El timeline pasa de 5 a 6 entradas. Verificar que la línea y los nodos del
  timeline siguen renderizando bien con 6 entradas, en tema claro y oscuro.
- Orden cronológico inverso: Conversia primero, UST segundo, y el resto igual.
- Periodos con formato "Mes Año" (ES) / "Mon Year" (EN). "Actualidad" / "Present".
- La entrada de Conversia es de incorporación reciente: la descripción es
  deliberadamente de contexto/rol, sin logros concretos todavía. Se ampliará en
  una spec futura.

## Criterios de aceptación

- El timeline muestra 6 entradas correctas y bien renderizadas en ambos temas.
- Conversia / Signo aparece como entrada más reciente (posición 1) con su
  contenido ES/EN.
- UST / VECI aparece en posición 2, con periodo "Mar 2025 – Jun 2026" y
  descripción en pasado.
- La bio refleja el rol actual en ambos idiomas.
- El stack y el contacto quedan sin cambios.
- `astro check` sin errores. La mecánica (tema, idioma, animaciones) intacta.

---

## CONTENIDO — ESPAÑOL

### Bio (About) — frase final actualizada
Reemplazar el tramo final de la bio. La frase pasa de:

> "…una plataforma OTT de streaming deportivo y, actualmente, una plataforma de
> cálculo de incentivos como Senior Backend Developer."

a:

> "…una plataforma OTT de streaming deportivo, una plataforma de cálculo de
> incentivos y, actualmente, una plataforma legaltech de cumplimiento normativo
> (RGPD) como Senior Backend Developer."

(El resto de la bio permanece igual.)

### Experiencia — entrada NUEVA (posición 1)

**Conversia — Signo** · Senior Backend Developer · Jun 2026 – Actualidad
Backend de Signo, la plataforma SaaS de Conversia para el cumplimiento normativo
en protección de datos (RGPD), orientada a pymes. Arquitectura de microservicios
con Azure Service Bus como columna vertebral, que conecta el flujo mediante
eventos de integración; algunos servicios aplican además eventos de dominio y
CQRS. Incorporación reciente: iré ampliando esta tarjeta a medida que profundice
en la plataforma.
Chips: C# · .NET 8 · Azure Service Bus · CQRS · Microservicios

### Experiencia — entrada MODIFICADA (ahora posición 2)

**UST — Viajes El Corte Inglés** · Senior Backend Developer · Mar 2025 – Jun 2026
Desarrollé desde cero el backend de una plataforma de cálculo de incentivos de
ventas para los agentes de Viajes El Corte Inglés. Un equipo pequeño —dos
desarrolladores backend, un líder técnico/funcional y un arquitecto— que afrontó
con determinación y solvencia todos los retos del proyecto. Ambas APIs (gestión e
intranet) seguían arquitectura limpia (Clean Architecture). Un trabajo de
principio a fin: del modelado de dominio a la puesta en producción.
Chips: C# · .NET 8 · MongoDB · Hangfire · Clean Architecture · Microservicios

> Entradas 3, 4 y 5 (Grupo Solutio, Deloitte, Everis ×2) permanecen sin cambios,
> desplazándose una posición hacia abajo.

---

## CONTENIDO — INGLÉS

### Bio (About) — updated final sentence
Replace the final stretch of the bio. The sentence changes from:

> "…a sports streaming OTT platform, and currently an incentives calculation
> platform as a Senior Backend Developer."

to:

> "…a sports streaming OTT platform, an incentives calculation platform, and
> currently a legaltech platform for regulatory (GDPR) compliance as a Senior
> Backend Developer."

(The rest of the bio stays the same.)

### Experience — NEW entry (position 1)

**Conversia — Signo** · Senior Backend Developer · Jun 2026 – Present
Backend of Signo, Conversia's SaaS platform for data protection (GDPR) regulatory
compliance, aimed at SMEs. A microservices architecture with Azure Service Bus as
its backbone, connecting the flow through integration events; some services also
apply domain events and CQRS. Recently joined — I'll expand this card as I dig
deeper into the platform.
Chips: C# · .NET 8 · Azure Service Bus · CQRS · Microservices

### Experience — MODIFIED entry (now position 2)

**UST — Viajes El Corte Inglés** · Senior Backend Developer · Mar 2025 – Jun 2026
I built, from the ground up, the backend of a sales incentives calculation
platform for Viajes El Corte Inglés agents. A small team — two backend developers,
a technical/functional lead and an architect — that took on every challenge with
determination and reliability. Both APIs (management and intranet) followed Clean
Architecture. End-to-end work: from domain modelling to production deployment.
Chips: C# · .NET 8 · MongoDB · Hangfire · Clean Architecture · Microservices

> Entries 3, 4 and 5 (Grupo Solutio, Deloitte, Everis ×2) remain unchanged,
> shifting one position down.
