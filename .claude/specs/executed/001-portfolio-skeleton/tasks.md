# Spec 001 — Tareas

> Regla: un commit atómico por tarea completada. Mensajes en inglés, formato
> convencional (`feat:`, `chore:`, `fix:`). Ejecutar en el orden indicado.

---

- [ ] T1 — Actualizar `astro.config.mjs` con i18n y output estático.
      Archivos: `astro.config.mjs`.
      Qué hace: añade `output: 'static'`, bloque `i18n` (`defaultLocale: 'es'`,
      `locales: ['es', 'en']`, `routing.prefixDefaultLocale: true`) y
      `site: 'https://example.com'` con comentario TODO.
      Verificar: `npm run dev` arranca sin errores; las rutas `/es/` y `/en/`
      responden (404 es aceptable, lo importante es que el servidor inicia y el
      routing i18n está configurado).

- [ ] T2 — Añadir archivos de fuentes web.
      Archivos: `public/fonts/InterVariable.woff2`,
      `public/fonts/JetBrainsMonoVariable.woff2`.
      Qué hace: descarga los archivos WOFF2 (subset latin) de Inter Variable y
      JetBrains Mono Variable desde sus repositorios oficiales y los coloca en
      `public/fonts/`. No se crean archivos CSS todavía.
      Verificar: ambos archivos existen en `public/fonts/` y `npm run build`
      los incluye en el output sin errores.

- [ ] T3 — Crear la capa CSS de diseño (`fonts.css`, `tokens.css`, `global.css`,
      `animations.css`).
      Archivos: `src/styles/fonts.css`, `src/styles/tokens.css`,
      `src/styles/global.css`, `src/styles/animations.css`.
      Qué hace:
        - `fonts.css`: `@font-face` para Inter Variable y JetBrains Mono Variable
          con `font-display: swap`.
        - `tokens.css`: custom properties completas para ambos temas (`:root` oscuro,
          `[data-theme="light"]`). Los valores de `--color-accent` y
          `--color-accent-dim` se dejan como comentarios TODO para que Fernando
          los confirme.
        - `global.css`: reset de box-sizing, margin cero en body, tipografía base
          usando `var(--font-body)`, y la regla de transición de tema aplicada sobre
          `html` solo bajo `.theme-ready` para evitar flash en el primer render.
        - `animations.css`: clase `.fade-in` con `opacity: 0` y
          `transform: translateY(16px)`, clase `.is-visible` que las revierte,
          y bloque `@media (prefers-reduced-motion: reduce)` que deja `.fade-in`
          siempre visible.
      Verificar: `npm run build` sin errores de CSS; los cuatro archivos existen
      en `src/styles/`.

- [ ] T4 — Crear la infraestructura i18n.
      Archivos: `src/i18n/ui.ts`, `src/i18n/utils.ts`.
      Qué hace:
        - `ui.ts`: tipo `Locale`, objeto `languages`, diccionario `ui` con ambos
          locales y todas las claves: `nav.*`, `toggle.*`, `lang.switch` y
          `placeholder.*` (label + heading + body de las cuatro secciones).
        - `utils.ts`: función `useTranslations(locale)` que devuelve `t(key)` con
          fallback a `es`; función `getAlternateUrl(url, locale)` que reemplaza
          el segmento de locale en el pathname.
      Verificar: `npx astro check` pasa sin errores de TypeScript.

- [ ] T5 — Crear el layout base `Base.astro`.
      Archivos: `src/layouts/Base.astro`.
      Qué hace: shell HTML completo con:
        - `<html lang={locale}>` y `data-theme` gestionado por FOUC script.
        - Script inline bloqueante en `<head>` (< 200 bytes): lee `localStorage`,
          aplica `data-theme="light"` si procede, añade clase `theme-ready`.
        - `<link rel="preload">` para `InterVariable.woff2`.
        - Imports CSS: `fonts.css`, `tokens.css`, `global.css`, `animations.css`.
        - `<ClientRouter />` de `astro:transitions`.
        - Slot para `<Header>` (pendiente T8) y `<Footer>` (pendiente T6).
        - Script de módulo antes del `</body>`: `IntersectionObserver` que añade
          `.is-visible` a cada `.fade-in` al entrar en el viewport.
        - Props tipadas: `locale: Locale`, `alternateUrl: string`, `title: string`.
      Verificar: `npx astro check` pasa; el archivo se importa sin errores de tipos.

- [ ] T6 — Crear componentes estructurales estáticos (`Nav`, `Footer`,
      `LanguageSelector`).
      Archivos: `src/components/Nav.astro`, `src/components/Footer.astro`,
      `src/components/LanguageSelector.astro`.
      Qué hace:
        - `Nav.astro`: lista `<nav>` con cuatro `<a href="#id-de-seccion">`
          cuyos textos vienen de `t('nav.*')`. Recibe `locale` como prop.
        - `Footer.astro`: `<footer>` con texto de copyright estático y año
          calculado en el frontmatter (`new Date().getFullYear()`).
        - `LanguageSelector.astro`: dos `<a>` hacia la URL alternativa y la actual;
          `aria-current="page"` en el locale activo; `hreflang` en el alternativo.
          Recibe `locale` y `alternateUrl` como props.
      Verificar: `npx astro check` pasa sin errores.

- [ ] T7 — Crear la isla React `ThemeToggle.tsx`.
      Archivos: `src/components/islands/ThemeToggle.tsx`.
      Qué hace: componente React que:
        - Inicializa `useState` leyendo `document.documentElement.dataset.theme`.
        - Renderiza un `<button>` con `aria-label` extraído de props (`labelToLight`
          / `labelToDark`) según el tema activo.
        - Al hacer clic: invierte el tema, escribe `data-theme` en
          `document.documentElement`, persiste en `localStorage`.
        - Props: `initialTheme: 'dark' | 'light'`, `labelToLight: string`,
          `labelToDark: string`.
      Verificar: `npx astro check` pasa; TypeScript strict sin errores.

- [ ] T8 — Crear `Header.astro` e integrarlo en `Base.astro`.
      Archivos: `src/components/Header.astro`, `src/layouts/Base.astro` (edición).
      Qué hace:
        - `Header.astro`: `<header>` con nombre/logo estático, `<Nav>`,
          `<LanguageSelector>` y `<ThemeToggle client:idle>` con las props
          `initialTheme`, `labelToLight` y `labelToDark` calculadas en el frontmatter
          a partir de `locale` y el diccionario.
        - `Base.astro`: importa y renderiza `<Header>` pasando `locale` y
          `alternateUrl`; renderiza `<Footer>`.
      Verificar: `npm run dev`; la ruta `/es/` (aunque no exista todavía la página)
      no lanza errores de TypeScript en `npx astro check`.

- [ ] T9 — Crear los cuatro componentes de sección con placeholder.
      Archivos: `src/components/sections/About.astro`,
      `src/components/sections/Experience.astro`,
      `src/components/sections/Stack.astro`,
      `src/components/sections/Contact.astro`.
      Qué hace: cada componente recibe `locale: Locale`, llama a
      `useTranslations(locale)`, y renderiza:
        ```
        <section id="{id}" class="fade-in">
          <h2>{t('placeholder.{section}.heading')}</h2>
          <div class="placeholder-block" data-label={t('placeholder.label')}>
            {t('placeholder.{section}.body')}
          </div>
        </section>
        ```
      El estilo `.placeholder-block` (con `::before` que muestra `data-label`)
      se añade a `global.css` en este mismo commit.
      Verificar: `npx astro check` pasa; las cuatro secciones se importan sin error.

- [ ] T10 — Crear las páginas ES y EN.
      Archivos: `src/pages/es/index.astro`, `src/pages/en/index.astro`.
      Qué hace: cada página importa `Base.astro` y los cuatro componentes de
      sección, calcula `alternateUrl` con `getAlternateUrl`, y los monta en orden
      (About → Experience → Stack → Contact) dentro del slot de `Base`.
      Verificar: `npm run dev`; `/es/` y `/en/` cargan sin errores de consola;
      las cuatro secciones son visibles con texto placeholder; el switch de tema
      cambia entre oscuro y claro y la preferencia persiste al recargar la página;
      el selector de idioma navega entre `/es/` y `/en/` y el texto cambia de idioma.

- [ ] T11 — Verificación final de criterios de aceptación.
      Archivos: ninguno (solo correcciones menores si las hubiera).
      Qué hace: ejecutar la lista completa de checks del `requirements.md`:
        1. `npx astro check` — cero errores de TypeScript.
        2. `npm run build` — build completo sin errores ni warnings relevantes.
        3. DevTools → Network (con JS desactivado parcialmente): confirmar que
           solo `ThemeToggle` hidrata JS; `LanguageSelector`, `Nav` y secciones
           no envían bundles React propios.
        4. Lighthouse local (`npm run preview` + Lighthouse en Chrome): Performance
           ≥ 95, Accessibility ≥ 95.
        5. Comprobar `prefers-reduced-motion`: en DevTools → Rendering → emular
           "prefers-reduced-motion: reduce"; las secciones deben aparecer visibles
           sin animación de fade-in.
        6. Comprobar FOUC: recargar con tema claro guardado en localStorage; no
           debe haber flash de tema oscuro antes del paint.
      Si todo pasa sin cambios de código: no se crea commit. Si hay correcciones
      menores, un único commit `fix: acceptance criteria from spec 001`.
