# Stack y decisiones técnicas

## Framework: Astro 6

Sitio estático (`output: 'static'`). Astro envía cero JavaScript por defecto e
hidrata solo las islas que lo necesitan. Para un portfolio (contenido + algo de
interactividad puntual) es la opción correcta: máximo rendimiento y deploy
estático trivial.

**Por qué Astro y no Next.js:** no necesitamos servidor, API routes, ni SSR. Un
sitio estático en CDN es más rápido, más barato (gratis) y más simple de
mantener. Next.js sería sobreingeniería aquí.

## Interactividad: React como islas

React se usa SOLO para componentes interactivos concretos, marcados con
directivas `client:*` (p. ej. el switch de tema o el selector de idioma si
requieren estado). El resto del sitio es `.astro` estático.

**Regla dura:** si un componente no necesita interactividad en el navegador, no
es una isla React. Es un componente `.astro`.

## Lenguaje: TypeScript strict

`tsconfig.json` extiende la config `strict` de Astro.

## Estilos

CSS nativo con custom properties (`--variables`) para el theming. El tema
oscuro/claro se controla cambiando estas variables en `:root` y
`[data-theme="light"]`. Sin Tailwind ni frameworks CSS en v1 salvo que una spec
futura lo justifique con una razón concreta.

## Theming

- Dos temas: **oscuro** (sobrio, minimalista) y **claro** (editorial, limpio).
- El visitante elige con un switch. La preferencia se guarda en `localStorage`.
- Por defecto, respetar `prefers-color-scheme` del sistema en la primera visita.
- Transición animada y suave entre temas.

## Internacionalización (i18n)

Usar el routing i18n nativo de Astro. Dos locales: `es` (por defecto) y `en`.
El contenido textual vive en archivos de contenido/diccionarios, no incrustado
en los componentes, para no duplicar lógica.

## Animaciones

Sutiles y con propósito:
- View Transitions de Astro para transición entre páginas.
- Fade-in al entrar en cada sección (respetando `prefers-reduced-motion`).
- Transición animada del cambio de tema.
Nada de animaciones llamativas o que distraigan.

## Deploy

Cloudflare Pages, build estático, plan gratuito. El adaptador y la config de
deploy se añaden en una spec posterior dedicada, no antes.

## Calidad

- Objetivo Lighthouse 95-100 en todas las categorías.
- Accesibilidad: HTML semántico, contraste suficiente en ambos temas,
  navegación por teclado, `prefers-reduced-motion` respetado.
- Cero errores de TypeScript y de `astro check`.
