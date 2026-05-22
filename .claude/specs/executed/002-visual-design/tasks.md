# Tasks — 002 Visual Design

## Bloque A — Sistema de diseño
`commit: feat: add design tokens, layout and global styles (spec 002-a)`

- [ ] A1. Añadir tokens nuevos a `src/styles/tokens.css`:
      `--text-4xl`, `--lh-tight`, `--lh-snug`, `--lh-body`, `--nav-height`,
      `--container-width`, `--radius-full`, `--tracking-wide`, `--shadow-card`
- [ ] A2. Crear `src/styles/layout.css` con:
      - Clase `.container` (max-width, margin-inline auto, padding-inline)
      - Clase `.section` (padding vertical `--space-xl`, scroll-margin-top)
      - Clase `.section-title` (h2 tipografía, margin-bottom)
      - `:focus-visible` universal con outline accent
      - Reset de `<ul>` / `<ol>` de utilidad (`.chip-list`, `.contact-list`, `.timeline`)
- [ ] A3. Actualizar `src/styles/global.css`:
      - Añadir estilos base para `.chip` y `.chip-list` (compartidos por timeline y stack)
- [ ] A4. Importar `layout.css` desde `src/layouts/Base.astro`
- [ ] A5. Verificar: `astro check` sin errores, estilos base visibles en navegador (container limita ancho, section respira, focus ring visible)

## Bloque B — Nav, hero y ThemeToggle
`commit: feat: style header, hero section and theme toggle (spec 002-b)`

- [ ] B1. Crear `src/components/icons/IconSun.astro` y `IconMoon.astro`
      (SVG inline, prop `size` default 20, color vía `currentColor`)
- [ ] B2. Actualizar `src/components/islands/ThemeToggle.tsx`:
      reemplazar `○`/`●` por iconos SVG sol/luna;
      botón 36×36px circular, hover bg tinte accent, aria-label dinámico
- [ ] B3. Estilizar `src/components/Header.astro`:
      position sticky, backdrop-filter blur 12px, border-bottom, height 64px,
      layout flex space-between, clase `.scrolled` añadida por script JS al scrollear
- [ ] B4. Estilizar `src/components/Nav.astro`:
      eliminar viñetas (`list-style: none`), flex horizontal, gap 24px, hover accent
- [ ] B5. Estilizar `src/components/LanguageSelector.astro`:
      formato `ES · EN`, activo bold y color text, alternativo muted
- [ ] B6. Añadir hero en `src/pages/es/index.astro` y `en/index.astro`:
      estructura HTML completa (hero-label, h1.hero-name, hero-role, divider, tagline, CTA)
      con estilos según design.md §4
- [ ] B7. Verificar: toggle cambia tema sin parpadeo, nav sticky funciona al scrollear,
      hero en ambos temas y en móvil (360px), `.scrolled` añade borde al bajar

## Bloque C — Cuatro secciones
`commit: feat: style about, experience timeline, stack chips and contact (spec 002-c)`

- [ ] C1. Crear `src/components/icons/IconEmail.astro`,
      `IconLinkedIn.astro`, `IconGitHub.astro`
- [ ] C2. Actualizar `src/components/sections/About.astro`:
      container, section-title, about-body con max-width 600px y lh-body
- [ ] C3. Actualizar `src/components/sections/Experience.astro`:
      HTML `<ol class="timeline">` con estructura de tarjetas,
      línea y dots vía pseudo-elements CSS (design.md §6)
- [ ] C4. Actualizar `src/components/sections/Stack.astro`:
      stack-grid CSS grid auto-fit, stack-category con category-label,
      chip-list con chips en `--font-mono` (design.md §7)
- [ ] C5. Actualizar `src/components/sections/Contact.astro`:
      contact-list vertical, contact-item con icono + info flex,
      hover icon accent, hover value underline (design.md §8)
- [ ] C6. Verificar: todas las secciones en ambos temas, responsive 360px,
      fade-in animaciones siguen funcionando, `prefers-reduced-motion` respetado

## Bloque D — Footer y ajustes finales
`commit: feat: style footer and polish cross-cutting details (spec 002-d)`

- [ ] D1. Estilizar `src/components/Footer.astro`:
      border-top, padding `--space-lg`, texto centrado, font-sm muted
- [ ] D2. Revisión visual cruzada completa:
      desktop + móvil (360px), ES + EN, tema oscuro + claro,
      contraste WCAG AA verificado en ambos temas
- [ ] D3. Pulir inconsistencias encontradas en D2
- [ ] D4. `astro check` — cero errores TypeScript
- [ ] D5. Lighthouse en modo incógnito: Performance ≥ 95, Accessibility ≥ 95
- [ ] D6. Verificar persistencia localStorage tema entre recargas (funcionalidad spec 001 intacta)
