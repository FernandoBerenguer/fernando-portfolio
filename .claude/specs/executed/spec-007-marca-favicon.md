# Spec 007 — Marca personal: favicon y logo {fb}

## Contexto

El portfolio está desplegado. Se ha diseñado una marca personal: el monograma
`{fb}` con los colores de marca del sitio (badge en `#2d6a54` / accent-dim,
letras en `#6ee7b7` / accent). A partir de ahí se ha generado el set completo de
favicon (SVG con glifos trazados a path + PNG de respaldo + manifest). Falta
integrarlo en el sitio.

## Objetivo

Instalar el set de favicon/marca: colocar los assets en `public/`, referenciarlos
en el `<head>` del layout principal, y eliminar el favicon por defecto de Astro.
Sin tocar diseño, contenido ni mecánica.

## Alcance

1. Añadir a `public/` los siguientes archivos (ya generados, listos para copiar):
   - `favicon.svg` (fuente principal)
   - `favicon-32.png`, `favicon-48.png` (respaldo PNG)
   - `apple-touch-icon.png` (180px, iOS)
   - `icon-192.png`, `icon-512.png` (manifest / Android)
   - `site.webmanifest`
2. Insertar en el `<head>` del layout principal las etiquetas del snippet:
   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
   <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   <link rel="manifest" href="/site.webmanifest" />
   <meta name="theme-color" content="#2d6a54" />
   ```
3. Eliminar el `favicon.svg` por defecto que Astro deja en `public/`, y quitar
   cualquier `<link rel="icon">` antiguo que lo referencie.

## Fuera de alcance

- Diseño, theming, contenido o estructura del resto del sitio.
- El fondo de nodos del hero (queda para la spec 008).

## Indicaciones de implementación

- Los assets son ESTÁTICOS: van en `public/`, que Astro sirve desde la raíz del
  sitio. Por eso las rutas del snippet empiezan con `/`.
- El snippet va en el `<head>` del componente de layout que envuelve TODAS las
  páginas (probablemente `src/layouts/*.astro`, junto al `<title>` y demás
  `<meta>`). Si hay varios layouts, en el común/base.
- Antes de añadir, localizar y eliminar cualquier `<link rel="icon">` previo para
  no dejar dos favicon en conflicto.
- El `theme-color` queda en `#2d6a54`. Solo afecta a la barra del navegador en
  móvil; si la cabecera del sitio usara otro color, ajustarlo.

## Criterios de aceptación

- La pestaña del navegador muestra el monograma `{fb}` en local (`npm run dev`) y
  tras `npm run build`.
- No hay errores 404 de iconos en la pestaña de red / consola.
- El `apple-touch-icon` está presente y el `manifest` enlaza sin errores.
- No queda ningún favicon por defecto de Astro ni `<link rel="icon">` duplicado.
- `astro check` sin errores. La mecánica (tema, idioma, animaciones) intacta.
