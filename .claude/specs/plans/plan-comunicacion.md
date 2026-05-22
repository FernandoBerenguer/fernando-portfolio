# Plan futuro — Comunicación del proyecto

> Tareas pendientes para CUANDO el portfolio esté terminado: maquetado completo,
> contenido real de las secciones, y desplegado. No antes — ambas piezas cuentan
> mejor la historia con el resultado final ya visible.

---

## Tarea 1 — README personalizado

Sustituir el README estándar de Astro por uno propio que explique el proyecto y,
sobre todo, la metodología con la que se construyó.

Debe cubrir:
- **Qué es:** portfolio personal de Fernando, Senior Backend Developer .NET.
- **Stack:** Astro 6 (sitio estático), React (islas interactivas), TypeScript
  strict, CSS con custom properties para theming, deploy en Cloudflare Pages.
- **Características:** bilingüe ES/EN, tema claro/oscuro con persistencia,
  animaciones sutiles respetando prefers-reduced-motion, objetivo Lighthouse 95+.
- **La metodología (lo más interesante):** desarrollo dirigido por specs con
  Claude Code. Explicar el flujo requirements → design → tasks → ejecución por
  bloques con verificación. Mencionar la estructura de `.claude/specs/` y el rol
  del `CLAUDE.md` como contexto persistente.
- **Cómo correrlo en local:** `npm install`, `npm run dev`, comandos de build.
- **Estructura del proyecto:** breve mapa de carpetas.

Nota: incluir badges (Astro, build status de Cloudflare) si quedan limpios.

---

## Tarea 2 — Post de LinkedIn

Anunciar la creación del portfolio destacando la METODOLOGÍA, no solo el "tengo
web nueva". El ángulo diferencial: cómo un Senior Backend .NET construyó un
frontend moderno dirigiendo a un agente con desarrollo basado en specs, sin
escribir el código a mano pero manteniendo el control técnico en cada decisión.

Puntos a tocar (a desarrollar cuando llegue el momento):
- El cambio de mentalidad: de teclear código a dirigir y auditar.
- Que el estado vive en archivos .md versionados, no en el chat (anécdota real:
  se cerró la terminal a mitad y no se perdió nada porque el contexto estaba en
  el repo).
- Decisiones de arquitectura tomadas como director (Astro vs Next, islas React,
  single-page, theming centralizado).
- Que el método es transferible al trabajo profesional en .NET.
- Enlace al portfolio desplegado y al repo de GitHub.

Tono: profesional, concreto, sin autobombo vacío. Mostrar criterio, no presumir
de herramienta. Preparar versión ES y posiblemente EN.

Pendiente decidir: ¿incluir capturas del flujo de specs / del git log limpio
como prueba visual de la metodología?
