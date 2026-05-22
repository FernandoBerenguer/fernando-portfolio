# Portfolio personal de Fernando

Sitio portfolio + CV de un Senior Backend Developer (.NET). Su público principal
son reclutadores técnicos y managers de ingeniería. Doble objetivo: comunicar
experiencia y, por su propia factura técnica, demostrar criterio.

## Stack

- Astro 6 (sitio estático, salida `static`)
- React solo como islas interactivas (`client:*`), nunca como base del sitio
- TypeScript en modo `strict`
- Estilos: CSS nativo con custom properties para theming (sin framework CSS pesado)
- Deploy: Cloudflare Pages (estático, gratis)

Detalle ampliado en @docs/tech.md

## Reglas de trabajo (importantes)

- Trabajamos por specs. Antes de escribir código, lee la spec activa en
  `.claude/specs/in-progress/`. Si no hay spec para lo que se pide, dilo y
  propón crear una; no improvises features.
- Usa SIEMPRE Plan Mode para tareas no triviales. Presenta el plan (archivos a
  tocar, funciones, orden) y espera aprobación antes de tocar código. Para
  EJECUTAR hay que salir de plan mode: no te quedes replanificando en bucle.
- Si la ejecución diverge del plan aprobado, PARA y pide confirmación explícita.
- Ejecuta las specs por BLOQUES con parada y reporte al final de cada bloque;
  no ejecutes una spec entera de corrido salvo que se pida.
- Un commit atómico por tarea/bloque. Mensajes en inglés, formato convencional
  (`feat:`, `fix:`, `chore:`, `docs:`).
- No instales dependencias nuevas sin justificarlo y pedir confirmación.
- Ante un fallo, primero DIAGNOSTICA la causa raíz y exponla; no apliques
  parches antes de que se valide el diagnóstico.
- Nunca dejes JavaScript en una página que no lo necesita: si un componente no
  es interactivo, es `.astro` estático, no una isla React.

## Qué NO hacer

- No usar Next.js, ni SSR, ni adaptadores de servidor. Sitio estático.
- No meter `localStorage` salvo para la preferencia de tema (claro/oscuro).
- No añadir analytics, tracking ni dependencias de terceros sin pedirlo.
- No tocar `astro.config.mjs` sin avisar de qué cambias y por qué.

## Notas técnicas aprendidas (importante, evita tropiezos repetidos)

- **Astro 6:** el componente de View Transitions se llama `ClientRouter`
  (importado de `astro:transitions`), NO `ViewTransitions` (nombre antiguo).
- **Animaciones y View Transitions:** cualquier script que dependa del DOM
  (p. ej. IntersectionObserver para fade-in) debe registrarse en el evento
  `astro:page-load`, porque el `ClientRouter` cambia el DOM sin recargar la
  página. Si se ejecuta una sola vez, deja de funcionar tras navegar.
- **devDependencies aceptadas y conocidas** (no hace falta volver a preguntar
  por estas): `@astrojs/check` y `typescript` (requeridas por `astro check`).
- **Theming:** todo color de acento sale de `--color-accent`. No hay acentos
  hardcodeados sueltos; cambiar el acento debe ser una sola edición.
- **scroll-margin-top:** las secciones con ancla llevan `class="section"`, que
  aplica `scroll-margin-top: var(--nav-height)` para que la nav sticky no tape
  el título al saltar desde el menú.

## Contexto adicional

- Producto y audiencia: @docs/product.md
- Stack y decisiones: @docs/tech.md
- Convenciones de estructura: @docs/structure.md
