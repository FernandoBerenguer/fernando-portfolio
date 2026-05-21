# Spec 001 — Diseño técnico

## Resolución de decisiones abiertas

### 1. Estructura de páginas: single-page con anclas

El flujo del reclutador es lineal: llega a la página y baja el scroll. Una sola carga HTTP
cubre las cuatro secciones. Páginas separadas serían 4 rutas × 2 idiomas = 8 archivos sin
ganancia de valor, añadiendo fricción al recorrido principal y complicando el i18n.

**Decisión: single-page con anclas.**

Una ruta por idioma (`/es/`, `/en/`). La navegación del `<Header>` usa anclas
(`href="#sobre-mi"`, `href="#experiencia"`, etc.). Las View Transitions solo se disparan
al cambiar de idioma, no al navegar entre secciones.

---

### 2. Selector de idioma: componente `.astro` estático

El requisito es enlazar `/es/` ↔ `/en/`. Eso es un `<a>`.

Una isla React no aportaría nada que no haga HTML puro, violaría la regla "cero JS
donde no se necesita" y calcularía la URL alternativa en el cliente cuando podemos
hacerlo en build time con `Astro.currentLocale` y `Astro.url`.

**Decisión: `LanguageSelector.astro` estático.** Dos `<a>` con `aria-current="page"`
en el locale activo y `hreflang` en el alternativo. La URL alternativa se calcula en
`Base.astro` y se pasa como prop. Cero JavaScript.

---

### 3. Tipografías

**Self-hosted en `public/fonts/`** (WOFF2, subset latin). Sin Google Fonts CDN: elimina
el round-trip DNS, no añade dependencias de terceros y permite `font-display: swap`
sin restricciones.

| Rol | Fuente | Justificación |
|-----|--------|---------------|
| Body / UI (ambos temas) | **Inter Variable** | Diseñada para pantallas; variable font = un solo archivo WOFF2 para todos los pesos |
| Código / mono | **JetBrains Mono Variable** | Diseñada para código; coherente con el perfil técnico |

**¿Misma familia en ambos temas?** Sí. La personalidad oscuro/claro la aportan los
tokens de color y los valores de `font-weight`, no familias distintas. Inter en peso
300–400 transmite el tono sobrio del tema oscuro; en 500–700 el editorial del claro.

**Carga:** `<link rel="preload">` solo para Inter Variable (above-the-fold).
JetBrains Mono sin preload (aparece en la sección Stack, below the fold).
`font-display: swap` en todos los `@font-face`.

---

## Estructura de archivos y componentes

```
src/
├── components/
│   ├── Header.astro               — cabecera: logo/nombre, Nav, LanguageSelector, ThemeToggle
│   ├── Nav.astro                  — lista de anclas de navegación, estático
│   ├── Footer.astro               — pie de página, estático
│   ├── LanguageSelector.astro     — dos <a> calculados en build time, sin JS
│   ├── sections/
│   │   ├── About.astro            — sección "Sobre mí" con texto placeholder
│   │   ├── Experience.astro       — sección "Experiencia" con texto placeholder
│   │   ├── Stack.astro            — sección "Stack" con texto placeholder
│   │   └── Contact.astro          — sección "Contacto" con texto placeholder
│   └── islands/
│       └── ThemeToggle.tsx        — única isla React; switch oscuro/claro
├── layouts/
│   └── Base.astro                 — layout raíz: <html>, <head>, Header, <main>, Footer
├── pages/
│   ├── es/
│   │   └── index.astro            — página principal ES
│   └── en/
│       └── index.astro            — página principal EN
├── styles/
│   ├── global.css                 — reset, box-sizing, estilos base
│   ├── tokens.css                 — custom properties de color, tipografía, espaciado
│   ├── fonts.css                  — @font-face de Inter Variable y JetBrains Mono
│   └── animations.css             — fade-in de secciones + prefers-reduced-motion
├── i18n/
│   ├── ui.ts                      — diccionario { es: {...}, en: {...} }
│   └── utils.ts                   — useTranslations(locale) + getAlternateUrl()
└── content/                       — vacío en esta spec; estructura preparada
```

**Qué es isla y qué es estático:**

- `ThemeToggle.tsx` → isla (`client:idle`). Necesita `localStorage`, eventos DOM y
  actualizar `document.documentElement.dataset.theme`. Requiere JS en el navegador.
- Todo lo demás → `.astro` estático. `LanguageSelector` recibe la URL como prop calculada
  en el layout. `Nav` son anclas `<a href="#...">`. Las secciones renderizan HTML fijo.

---

## Theming

### Convención de variables (`src/styles/tokens.css`)

`:root` define el **tema oscuro** (default del sitio). El primer paint ya tiene el color
correcto sin necesidad de JavaScript. `[data-theme="light"]` sobreescribe para el tema claro.

```css
:root {
  /* Tema oscuro (default) */
  --color-bg:         #0d0d0d;
  --color-surface:    #161616;
  --color-border:     #2a2a2a;
  --color-text:       #e8e8e8;
  --color-text-muted: #888888;
  --color-accent:     /* TODO: valor a confirmar por Fernando — debe cumplir WCAG AA sobre --color-bg */;
  --color-accent-dim: /* TODO: variante apagada del acento */;

  --font-body: 'Inter Variable', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;

  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.5rem;
  --text-2xl:  2rem;
  --text-3xl:  3rem;

  --font-weight-light:  300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold:   700;

  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  2rem;
  --space-xl:  4rem;
  --space-2xl: 8rem;

  --radius-sm: 4px;
  --radius-md: 8px;

  --transition-theme: background-color 200ms ease, color 200ms ease,
                      border-color 200ms ease;
}

[data-theme="light"] {
  --color-bg:         #fafaf9;
  --color-surface:    #f0efed;
  --color-border:     #d4d4d0;
  --color-text:       #1a1a1a;
  --color-text-muted: #6b6b6b;
  --color-accent:     /* TODO: variante clara del acento, WCAG AA sobre #fafaf9 */;
  --color-accent-dim: /* TODO */;
}
```

> **Nota:** la estructura de tokens está completa. Los valores de `--color-accent` y
> `--color-accent-dim` los decide Fernando. El único requisito funcional es que cumplan
> ratio WCAG AA (4.5:1) sobre el `--color-bg` correspondiente en cada tema.

La transición animada (`--transition-theme`) se aplica en `global.css` sobre `html, body`
solo cuando `<html>` tiene la clase `theme-ready`. Esto evita que el primer render
dispare la animación de transición.

### Prevención de FOUC

Un `<script>` inline bloqueante en `<head>`, antes del CSS, resuelve el tema antes del
primer paint:

```html
<script>
  (function () {
    var s = localStorage.getItem('theme');
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = s || (dark ? 'dark' : 'light');
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.add('theme-ready');
  })();
</script>
```

< 200 bytes, síncrono, sin módulo, sin defer. Es la única excepción admitida a la regla
de cero JS inline. Funciona porque `:root` ya define el tema oscuro: si el sistema
prefiere oscuro, no hay ningún cambio DOM y cero flash.

---

## ThemeToggle (isla React)

**Archivo:** `src/components/islands/ThemeToggle.tsx`
**Directiva:** `client:idle` — hidrata cuando el browser está libre; no bloquea LCP ni TTI.

Responsabilidades:

1. Inicializar estado leyendo `document.documentElement.dataset.theme` (no `localStorage`
   directamente: el script inline ya lo resolvió).
2. Renderizar un `<button>` con icono y `aria-label` localizado.
3. Al hacer clic: invertir el tema, escribir `data-theme` en `document.documentElement`,
   persistir en `localStorage`.

Un único `useState<'dark' | 'light'>`. Sin contexto React ni store. Recibe `locale`
como prop estática desde `Base.astro` para el `aria-label` bilingüe.

---

## Internacionalización (i18n)

### Configuración (`astro.config.mjs`)

```js
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routing: {
    prefixDefaultLocale: true,  // /es/ y /en/ con prefijo siempre
  },
},
site: 'https://example.com', // TODO: actualizar en la spec de deploy
```

Con `prefixDefaultLocale: true`, la URL alternativa es siempre un swap de segmento
(`/es/` → `/en/`), sin casos especiales para el locale default.

### Diccionario (`src/i18n/ui.ts`)

```ts
export const languages = { es: 'ES', en: 'EN' } as const;
export type Locale = keyof typeof languages;

export const ui = {
  es: {
    'nav.about':       'Sobre mí',
    'nav.experience':  'Experiencia',
    'nav.stack':       'Stack',
    'nav.contact':     'Contacto',
    'toggle.toLight':  'Cambiar a tema claro',
    'toggle.toDark':   'Cambiar a tema oscuro',
    'lang.switch':     'Switch to English',

    'placeholder.label':              '[PROVISIONAL]',
    'placeholder.about.heading':      'Sobre mí',
    'placeholder.about.body':         'Desarrollador Backend Senior con experiencia en .NET, C# y arquitectura de sistemas distribuidos. [Contenido real va aquí]',
    'placeholder.experience.heading': 'Experiencia y proyectos',
    'placeholder.experience.body':    '[Empresa] — [Rol] — [Período]. [Descripción del impacto concreto. Contenido real va aquí]',
    'placeholder.stack.heading':      'Stack técnico',
    'placeholder.stack.body':         '.NET · C# · SQL Server · Azure · Docker · [Contenido real va aquí]',
    'placeholder.contact.heading':    'Contacto',
    'placeholder.contact.body':       'email@example.com · LinkedIn · GitHub · [Contenido real va aquí]',
  },
  en: {
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.stack':       'Stack',
    'nav.contact':     'Contact',
    'toggle.toLight':  'Switch to light theme',
    'toggle.toDark':   'Switch to dark theme',
    'lang.switch':     'Cambiar a español',

    'placeholder.label':              '[PLACEHOLDER]',
    'placeholder.about.heading':      'About',
    'placeholder.about.body':         'Senior Backend Developer with experience in .NET, C# and distributed systems architecture. [Real content goes here]',
    'placeholder.experience.heading': 'Experience & projects',
    'placeholder.experience.body':    '[Company] — [Role] — [Period]. [Description of concrete impact. Real content goes here]',
    'placeholder.stack.heading':      'Tech stack',
    'placeholder.stack.body':         '.NET · C# · SQL Server · Azure · Docker · [Real content goes here]',
    'placeholder.contact.heading':    'Contact',
    'placeholder.contact.body':       'email@example.com · LinkedIn · GitHub · [Real content goes here]',
  },
} as const;
```

### Helper (`src/i18n/utils.ts`)

```ts
import { ui, type Locale } from './ui';

export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof ui['es']): string {
    return (ui[locale] as Record<string, string>)[key] ?? ui['es'][key];
  };
}

export function getAlternateUrl(currentUrl: URL, currentLocale: Locale): string {
  const alternate: Locale = currentLocale === 'es' ? 'en' : 'es';
  return currentUrl.pathname.replace(`/${currentLocale}/`, `/${alternate}/`);
}
```

---

## Contenido placeholder

Cada sección renderiza texto provisional desde los diccionarios i18n (claves `placeholder.*`).
El placeholder es **visiblemente distinto** del contenido real mediante:

1. Una etiqueta visual `[PROVISIONAL]` / `[PLACEHOLDER]` encima del bloque, extraída del
   diccionario (`t('placeholder.label')`), siempre en el idioma activo.
2. Una clase CSS `.placeholder-block` con estilo diferenciador en `global.css`:

```css
.placeholder-block {
  border: 1px dashed var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 90%, var(--color-accent) 10%);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  font-style: italic;
  opacity: 0.75;
}

.placeholder-block::before {
  content: attr(data-label);
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}
```

Cada componente de sección aplica `class="placeholder-block"` y pasa el label via
`data-label={t('placeholder.label')}`. Cuando se implemente el contenido real en
una spec posterior, se elimina la clase y el atributo.

---

## Animaciones

### Fade-in de secciones

CSS + `IntersectionObserver` en un script de módulo en `Base.astro`. Sin React, sin
librería externa.

**`src/styles/animations.css`:**

```css
@media (prefers-reduced-motion: no-preference) {
  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 400ms ease, transform 400ms ease;
  }
  .fade-in.is-visible {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    opacity: 1;
    transform: none;
  }
}
```

**Script de módulo en `Base.astro` (antes del cierre de `<body>`):**

```html
<script>
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
</script>
```

Astro procesa este script como módulo (`type="module"`, diferido). El `prefers-reduced-motion`
se maneja en CSS: si está activo, `.fade-in` empieza con `opacity: 1`, así que el
observer puede correr sin efecto visual indeseado.

Cada `<section>` en los componentes aplica `class="fade-in"`.

### View Transitions

```astro
---
import { ClientRouter } from 'astro:transitions';
---
<head>
  <ClientRouter />
</head>
```

En single-page, las View Transitions solo se disparan al cambiar de idioma. La
transición default de Astro (fade) respeta `prefers-reduced-motion` automáticamente.
No se necesitan `transition:name` en esta spec (contenido placeholder homogéneo
entre idiomas).

---

## Cambios en `astro.config.mjs`

El archivo actual solo tiene `integrations: [react()]`. Hay que añadir:

- `output: 'static'` — declaración explícita del modo estático.
- Bloque `i18n` completo con `defaultLocale`, `locales` y `routing`.
- `site: 'https://example.com'` — necesario para que Astro genere `hreflang` correctos.
  **TODO: actualizar con la URL real en la spec de deploy.**

---

## Resumen de decisiones

| Decisión | Elección |
|---|---|
| Estructura | Single-page con anclas |
| Selector de idioma | `LanguageSelector.astro` estático (cero JS) |
| Fuente body/UI | Inter Variable, self-hosted |
| Fuente mono | JetBrains Mono Variable, self-hosted |
| Color acento | Token definido; **valor a confirmar por Fernando** (WCAG AA sobre ambos fondos) |
| FOUC | Script inline bloqueante en `<head>`, < 200 bytes |
| Hidratación del toggle | `client:idle` |
| Animaciones | CSS + `IntersectionObserver` (script de módulo, sin React) |
| ClientRouter | `<ClientRouter />` en layout (solo entre cambios de idioma en esta spec) |
| Placeholder | Textos en diccionarios i18n + clase CSS `.placeholder-block` con etiqueta visual |