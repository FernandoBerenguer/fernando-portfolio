# Spec 001 — Esqueleto del portfolio

## Objetivo

Montar la estructura base navegable del portfolio: layout, navegación, las
cuatro secciones como contenedores (con contenido placeholder), el switch de
tema claro/oscuro funcional, y el andamiaje bilingüe ES/EN. Sin contenido real
de proyectos todavía — eso es una spec posterior.

## Alcance (qué SÍ entra)

1. **Layout base** con cabecera, contenido y pie.
2. **Navegación** a las cuatro secciones: Sobre mí, Experiencia, Stack, Contacto.
   En single-page con scroll por anclas (decisión a confirmar en diseño).
3. **Las cuatro secciones** renderizadas con texto placeholder claramente
   marcado como provisional.
4. **Switch de tema** oscuro/claro, funcional, con persistencia en localStorage
   y respeto a `prefers-color-scheme` en primera visita.
5. **Selector de idioma** ES/EN funcional, con routing i18n de Astro.
6. **Theming** completo con variables CSS: tema oscuro sobrio y tema claro
   editorial, ambos legibles y con contraste suficiente.
7. **Animaciones sutiles**: view transitions entre páginas/idiomas y fade-in de
   secciones, respetando `prefers-reduced-motion`.

## Fuera de alcance (qué NO entra)

- Contenido real de proyectos, bio o skills (va en specs siguientes).
- Configuración de deploy a Cloudflare (spec dedicada posterior).
- Blog.
- Formulario de contacto con backend (en v1 el contacto son enlaces).

## Criterios de aceptación

- El sitio arranca con `npm run dev` sin errores.
- `astro check` pasa sin errores de TypeScript.
- Las cuatro secciones son visibles y navegables.
- El switch de tema cambia entre oscuro y claro y la preferencia persiste al
  recargar.
- El selector de idioma cambia entre `/es` y `/en` y el texto cambia de idioma.
- Lighthouse local ≥ 95 en Performance y Accessibility.
- No se envía JavaScript en páginas que no tienen islas interactivas (verificar
  que solo el toggle de tema / selector de idioma hidratan).

## Decisiones abiertas (resolver en design.md)

- ¿Single-page con scroll, o páginas separadas por sección?
- ¿El selector de idioma es una isla React o se resuelve con enlaces estáticos
  de Astro?
- Tipografías concretas para tema oscuro y claro.
