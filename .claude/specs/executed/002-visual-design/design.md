# Design — 002 Visual Design

## 1. Las cuatro decisiones abiertas (resueltas)

### 1.1 Barra de navegación: sticky con fondo translúcido

**Decisión: sticky, siempre visible, fondo semitransparente con blur.**

El portfolio es una sola página con cuatro secciones. Si la nav desaparece al hacer scroll, el usuario pierde el ancla de orientación y tiene que subir manualmente. Para un reclutador que escanea en 30 segundos, eso es fricción innecesaria. Una nav fija elimina ese problema sin coste de rendimiento.

Tratamiento del fondo: `backdrop-filter: blur(12px)` + `background: color-mix(in srgb, var(--color-bg) 88%, transparent)`. El efecto "cristal" es sutil y funcional — sin scroll, el fondo de la nav y el de la página son prácticamente idénticos; al scrollear, el contenido bajo la nav sigue siendo legible.

El borde inferior se muestra siempre con opacidad reducida (0.4) y sube a 1.0 al scrollear (clase `.scrolled` añadida por JS). Da feedback visual sin ser intrusivo. Altura fija: **64px**, expuesta como `--nav-height: 64px` para calcular `scroll-margin-top` en secciones.

### 1.2 Timeline: línea lateral izquierda, tarjetas a la derecha

**Decisión: línea vertical en el lado izquierdo, nodo (dot) en la línea, tarjeta a la derecha.**

El timeline alternante (zigzag) colapsa a una columna en móvil de todas formas, lo que genera dos layouts distintos para gestionar. Además, el zigzag distrae la lectura — el ojo salta de izquierda a derecha en lugar de fluir de arriba abajo, que es la dirección natural de lectura de un CV.

La línea lateral es más legible, más simple de implementar, más fácil de hacer responsive y más consonante con el estilo "sobrio, minimalista" del brief. La fecha/período va alineada a la derecha dentro de la cabecera de cada entrada (no en columna lateral separada, que complicaría el responsive).

### 1.3 Hero: tipografía pura, alineada a la izquierda, sin foto

**Decisión: hero puramente tipográfico, alineado a la izquierda, sin avatar ni foto.**

Razones:
1. Una foto de perfil en un portfolio de backend developer no añade información útil al reclutador técnico. Lo que importa es el stack y los proyectos.
2. Sin foto, el hero es completamente atemporal — no necesita actualizarse.
3. La tipografía grande, bien ejecutada, con la escala correcta y el acento verde, ya comunica "criterio de diseño", que es uno de los objetivos del portfolio.
4. Elimina el problema de preparar y mantener una imagen de buena calidad.
5. `text-align: left` se lee como CV/documento profesional — apropiado para reclutadores — frente a la lectura de "landing de producto" que induce el centrado horizontal.

### 1.4 Iconos: SVG inline como componentes Astro

**Decisión: SVG inline en componentes `.astro`, sin librería de iconos.**

Opciones evaluadas:
- **Lucide React**: 250 KB de dependencia para usar 5 iconos. Requiere island React aunque los iconos sean estáticos. Descartado.
- **Iconify (integración Astro)**: más liviano, pero añade un paquete npm. Justificable solo con 15+ iconos.
- **SVG inline** en componentes `.astro`: cero JS, cero dependencia nueva, control total del color vía `currentColor`, cacheable por el build de Astro.

Necesitamos exactamente 5 iconos: sol, luna, GitHub, LinkedIn, email. Un archivo `.astro` por icono en `src/components/icons/`. Cada uno recibe `size` (default: 20) como prop. El color lo hereda del padre vía `currentColor`.

---

## 2. Sistema de diseño

### 2.1 Tokens existentes que se conservan (en `tokens.css`)

```
Tipografía:
--text-sm:   0.875rem  (14px)
--text-base: 1rem      (16px)
--text-lg:   1.125rem  (18px)
--text-xl:   1.5rem    (24px)
--text-2xl:  2rem      (32px)
--text-3xl:  3rem      (48px)

Pesos:
--font-weight-light:  300
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-bold:   700

Espaciado:
--space-xs:  0.25rem   (4px)
--space-sm:  0.5rem    (8px)
--space-md:  1rem      (16px)
--space-lg:  2rem      (32px)
--space-xl:  4rem      (64px)
--space-2xl: 8rem      (128px)

Radios:
--radius-sm: 4px
--radius-md: 8px

Transición:
--transition-theme: background-color 200ms ease, color 200ms ease, border-color 200ms ease
```

### 2.2 Tokens nuevos a añadir en `tokens.css`

```css
/* Tipografía — nivel hero */
--text-4xl: 3.5rem;   /* 56px — nombre en hero, desktop */

/* Alturas de línea */
--lh-tight:   1.1;    /* headings grandes */
--lh-snug:    1.3;    /* headings medianos, títulos de tarjeta */
--lh-body:    1.7;    /* cuerpo largo */

/* Layout */
--nav-height:      64px;   /* altura de la barra sticky */
--container-width: 760px;  /* ancho máx contenedor texto */

/* Radio adicional */
--radius-full: 9999px;  /* chips pill, botón toggle redondo */

/* Tracking */
--tracking-wide: 0.08em;   /* labels de categoría, etiqueta hero */

/* Sombra sutil (solo tema claro) */
--shadow-card: 0 1px 4px rgba(0, 0, 0, 0.08);
```

### 2.3 Escala tipográfica por nivel semántico

| Nivel | Tamaño | Line-height | Peso | Uso |
|-------|--------|-------------|------|-----|
| Hero name | `clamp(2.25rem, 7vw, 3.5rem)` | `--lh-tight` (1.1) | 700 | Nombre en hero |
| Hero label | `--text-sm` (14px) | 1.5 | 500 | "Hola, soy" uppercase |
| Hero role | `--text-lg` (18px) | `--lh-snug` (1.3) | 400 | "Senior Backend Developer" |
| Hero tagline | `--text-base` (16px) | 1.6 | 400 | Frase corta |
| Section h2 | `--text-2xl` (32px) | `--lh-snug` (1.3) | 700 | "Experiencia", "Stack", etc. |
| Card h3 | `--text-xl` (24px) | `--lh-snug` (1.3) | 600 | Nombre empresa en timeline |
| Role/subtitle | `--text-base` (16px) | 1.6 | 500 | Cargo en timeline |
| Body | `--text-base` (16px) | `--lh-body` (1.7) | 400 | Descripción, about |
| Date/period | `--text-sm` (14px) | 1.5 | 400 | Fechas, color muted |
| Chip label | `--text-sm` (14px) | 1 | 500 | Chips de tecnología |
| Category label | `--text-sm` (14px) | 1.5 | 500 | "BACKEND", "CLOUD" |
| Footer | `--text-sm` (14px) | 1.5 | 400 | Copyright |

### 2.4 Espaciado — uso concreto por px

| Token | px | Uso |
|-------|----|-----|
| `--space-xs` | 4px | Gap entre chips dentro de un grupo |
| `--space-sm` | 8px | Padding interno de chip; gap entre items nav |
| `--space-md` | 16px | Padding horizontal en móvil; espacio icon-label en contacto |
| `--space-lg` | 32px | Separación entre entradas del timeline; entre grupos de chips |
| `--space-xl` | 64px | Padding top/bottom de cada sección |
| `--space-2xl` | 128px | Padding adicional del hero |

### 2.5 Ancho de contenedor

Un único contenedor centrado: `max-width: var(--container-width)` (760px), `margin-inline: auto`, `padding-inline: var(--space-md)` (16px en móvil). 760px es el punto óptimo de legibilidad para cuerpo de texto (65-75 caracteres por línea con 16px/400). No hay variante "wide" — consistencia sobre flexibilidad.

### 2.6 Estados hover y focus

**Focus visible (accesibilidad keyboard):**
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

**Hover por tipo de elemento:**

| Elemento | Estado hover | Transición |
|----------|-------------|-----------|
| Nav link | `color: var(--color-accent)` | `color 150ms ease` |
| CTA button | `opacity: 0.88` | `opacity 150ms ease` |
| ThemeToggle | `background: color-mix(in srgb, var(--color-accent) 12%, var(--color-surface))` | `background 150ms ease` |
| Chip | `border-color: var(--color-accent)`, `color: var(--color-accent)` | `150ms ease` |
| Contact item | icon `color: var(--color-accent)`, value `text-decoration: underline` | `color 150ms ease` |

---

## 3. Barra de navegación

### 3.1 Métricas

| Propiedad | Valor |
|-----------|-------|
| Height | 64px (`--nav-height`) |
| Position | `sticky`, `top: 0`, `z-index: 50` |
| Background | `color-mix(in srgb, var(--color-bg) 88%, transparent)` |
| Backdrop | `backdrop-filter: blur(12px)` |
| Border-bottom reposo | `1px solid color-mix(in srgb, var(--color-border) 40%, transparent)` |
| Border-bottom scroll (`.scrolled`) | `1px solid var(--color-border)` |
| Transition | `--transition-theme` + `border-bottom-color 200ms ease` |

### 3.2 Layout interno

`display: flex`, `align-items: center`, `justify-content: space-between`. Tres zonas:
- **Logo** (izquierda): texto "Fernando Berenguer", `--text-base` (16px), bold, `color: --color-text`, hover accent
- **Nav links** (centro): `<ul>` sin viñetas, `display: flex`, `gap: 24px`, `--text-sm` (14px), weight 500, color muted, hover accent
- **Controles** (derecha): `display: flex`, `align-items: center`, `gap: 12px` — LanguageSelector + ThemeToggle

### 3.3 LanguageSelector

Formato `ES · EN`. Activo: `--font-weight-bold`, `color: --color-text`. Alternativo: weight normal, color muted, hover accent. Sin botones ni bordes — texto puro.

### 3.4 ThemeToggle rediseñado

Reemplaza `○`/`●` por SVG sol/luna. Botón `36×36px`, `border-radius: --radius-full` (circular), `background: transparent`, `border: none`. Icono `20×20px` con `currentColor` → hereda `color: --color-text-muted`. Hover: fondo con tinte accent. `aria-label` dinámico ("Cambiar a tema claro" / "Cambiar a tema oscuro").

### 3.5 Responsive (< 640px)

Nav links ocultos (`display: none`). Solo logo + controles. Sin menú hamburguesa en v1.

---

## 4. Hero

### 4.1 Estructura (de arriba abajo, text-align: left)

```
[Hola, soy]                 ← 13px, uppercase, letter-spacing 0.12em, color muted
[Fernando Berenguer]        ← clamp(2.25rem, 7vw, 3.5rem), weight 700, lh 1.1
[Senior Backend Developer]  ← 18px, weight 400, color muted
[· .NET · Azure · ...]      ← 15px, weight 400, color muted
[──────────]                ← div decorativo: 2px alto × 40px ancho, color accent
[Frase de valor concisa]    ← 16px, weight 400, lh 1.7, max-width 480px
[→ Contacto]                ← botón pill, bg accent, color --color-bg
```

### 4.2 Métricas

| Propiedad | Valor |
|-----------|-------|
| Section min-height | `calc(100svh - var(--nav-height))` |
| Flexbox | `flex-direction: column`, `justify-content: center`, `gap: 8px` |
| Text-align | `left` |
| Padding top/bottom | `var(--space-2xl)` (128px) mínimo |
| Divider margin | `24px 0 20px` |
| Tagline max-width | 480px |
| CTA padding | `12px 28px` |
| CTA radius | `--radius-full` (9999px) |
| CTA bg | `var(--color-accent)` |
| CTA color | `var(--color-bg)` ← funciona en ambos temas |
| CTA font-size | `--text-sm` (14px), weight 600 |
| CTA hover | `opacity: 0.88` |

El truco del CTA: `color: var(--color-bg)`. En tema oscuro, `--color-bg` es `#0d0d0d` (texto oscuro sobre mint verde claro ✓). En tema claro, `--color-bg` es `#fafaf9` (texto claro sobre verde oscuro ✓). Un solo token, ambos temas.

---

## 5. Sección "Sobre mí"

- Clase `.section` (padding vertical `--space-xl`)
- `section-title`: `--text-2xl` (32px), weight 700, lh 1.3, margin-bottom `--space-lg` (32px)
- `about-body p`: `--text-base` (16px), lh `--lh-body` (1.7), max-width 600px

---

## 6. Timeline de experiencia

### 6.1 HTML semántico

```html
<ol class="timeline">
  <li class="timeline-item">
    <div class="timeline-card">
      <div class="timeline-card-header">
        <h3 class="timeline-company">Empresa S.L.</h3>
        <span class="timeline-period">2022 – Presente</span>
      </div>
      <p class="timeline-role">Senior Backend Developer</p>
      <p class="timeline-desc">Descripción del rol y logros...</p>
      <ul class="chip-list" aria-label="Stack tecnológico">
        <li class="chip">.NET 8</li>
        <li class="chip">PostgreSQL</li>
      </ul>
    </div>
  </li>
</ol>
```

### 6.2 CSS del timeline

```
.timeline:
  list-style: none; padding: 0; margin: 0
  position: relative

.timeline::before  (línea vertical):
  content: ''; position: absolute
  left: 7px; top: 6px; bottom: 0
  width: 1px; background: var(--color-border)

.timeline-item:
  position: relative
  padding-left: 40px
  padding-bottom: var(--space-lg)  /* 32px entre entradas */

.timeline-item::before  (dot):
  content: ''; position: absolute
  left: 0; top: 8px
  width: 14px; height: 14px
  border-radius: 50%
  background: var(--color-accent)
  box-shadow: 0 0 0 3px var(--color-bg)  /* halo sin borde explícito */
```

### 6.3 Métricas de la tarjeta

| Elemento | Tamaño | Peso | Color |
|----------|--------|------|-------|
| Company (h3) | `--text-xl` (24px) | 600 | text |
| Period | `--text-sm` (14px) | 400 | muted |
| Role | `--text-base` (16px) | 500 | text |
| Desc | `--text-base` (16px) | 400 | muted, lh 1.7 |

Header de tarjeta: `display: flex`, `justify-content: space-between`, `align-items: baseline`.

---

## 7. Stack — chips agrupados por categoría

### 7.1 HTML

```html
<div class="stack-grid">
  <div class="stack-category">
    <h3 class="category-label">Backend</h3>
    <ul class="chip-list">
      <li class="chip">.NET 8</li>
      <li class="chip">C#</li>
    </ul>
  </div>
  <!-- Backend, Bases de datos, Cloud & DevOps, Herramientas -->
</div>
```

### 7.2 CSS

```
.stack-grid:
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))
  gap: var(--space-lg)  /* 32px */

.category-label:
  font-size: --text-sm (14px); font-weight: 500
  text-transform: uppercase; letter-spacing: --tracking-wide (0.08em)
  color: --color-text-muted; margin: 0 0 --space-sm 0

.chip-list:
  list-style: none; padding: 0
  display: flex; flex-wrap: wrap; gap: --space-xs (4px)

.chip:
  display: inline-flex; align-items: center
  padding: 4px 12px; border-radius: --radius-full
  border: 1px solid var(--color-border)
  background: var(--color-surface)
  font-family: --font-mono; font-size: --text-sm; font-weight: 500
  color: --color-text; line-height: 1
  transition: border-color 150ms ease, color 150ms ease

.chip:hover:
  border-color: var(--color-accent); color: var(--color-accent)
```

`--font-mono` (JetBrains Mono) para chips de tecnología: son identificadores técnicos, no prosa. El monoespaciado los hace reconocibles como "términos de código". No añade coste — la fuente ya está cargada.

---

## 8. Contacto

### 8.1 HTML

```html
<ul class="contact-list">
  <li>
    <a href="mailto:..." class="contact-item">
      <IconEmail size={24} aria-hidden="true" />
      <span class="contact-info">
        <span class="contact-label">Email</span>
        <span class="contact-value">fernando@ejemplo.com</span>
      </span>
    </a>
  </li>
  <!-- LinkedIn, GitHub -->
</ul>
```

### 8.2 CSS

```
.contact-list:
  list-style: none; padding: 0
  display: flex; flex-direction: column
  gap: var(--space-md); max-width: 400px

.contact-item:
  display: flex; align-items: center
  gap: var(--space-md); text-decoration: none; color: inherit

.contact-item svg:
  color: --color-text-muted; flex-shrink: 0
  transition: color 150ms ease

.contact-item:hover svg:
  color: var(--color-accent)

.contact-info:
  display: flex; flex-direction: column; gap: 2px

.contact-label:
  font-size: --text-sm; font-weight: 500
  text-transform: uppercase; letter-spacing: --tracking-wide
  color: --color-text-muted

.contact-value:
  font-size: --text-base; color: var(--color-accent)

.contact-item:hover .contact-value:
  text-decoration: underline
```

---

## 9. Footer

```
.site-footer:
  border-top: 1px solid var(--color-border)
  padding: var(--space-lg) 0  /* 32px */

.footer-inner:
  display: flex; justify-content: center

p:
  font-size: --text-sm (14px); color: --color-text-muted; margin: 0
```

---

## 10. Responsive

Dos breakpoints CSS puros:

| Breakpoint | < 640px (móvil) | ≥ 640px (tablet/desktop) |
|------------|-----------------|--------------------------|
| Nav | Solo logo + controles | Links visibles |
| Hero name | `clamp` → mínimo 2.25rem (36px) | `clamp` → máximo 3.5rem (56px) |
| Stack grid | `grid-template-columns: 1fr 1fr` | auto-fit |
| Timeline period | Bajo el nombre de empresa | `float: right` / flex end |
| Contact | Vertical, full width | Ídem (ya es vertical) |

`scroll-margin-top: var(--nav-height)` en cada `<section id="...">` para que los anchor links no queden ocultos bajo la nav sticky.
