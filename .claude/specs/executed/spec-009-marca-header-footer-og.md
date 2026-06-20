# Spec 009 — Reutilización de marca: header, footer y Open Graph

## Contexto

La marca `{fb}` está definida e instalada como favicon (spec 007). Se quiere
reutilizar el monograma de forma consistente en el resto del sitio: como logo en
el header y el footer, y en la imagen de previsualización al compartir el enlace
(Open Graph / Twitter Card). Assets ya generados:
- `logo-mark.svg` — monograma `{fb}` SIN badge, con `fill="currentColor"` para
  que herede el color del componente.
- `og-image.png` — imagen 1200×630 para compartir en redes.

## Objetivo

Integrar el monograma como logo en header y footer (variante sin badge) y añadir
las etiquetas Open Graph / Twitter con `og-image.png`.

## Alcance

1. **Header:** `logo-mark.svg` como enlace al inicio (`/`), a tamaño contenido en
   la barra. Color heredado del token visible sobre el navbar en cada tema.
2. **Footer:** el mismo monograma junto al copyright / contacto.
3. **Open Graph:** copiar `og-image.png` a `public/` y añadir al `<head>` las
   metaetiquetas `og:image`, `og:title`, `og:description`, `og:type`, `og:url`,
   `twitter:card` (= `summary_large_image`) y `twitter:image`.
4. **Accesibilidad:** el logo enlazado lleva nombre accesible (`aria-label` o
   texto alternativo).

## Fuera de alcance

- Hero (008). Favicon (007, ya hecho).

## Indicaciones de implementación

- `logo-mark.svg`: si va inline, el `fill="currentColor"` permite colorearlo por
  CSS. En tema claro usar un tono con contraste sobre el navbar (p. ej.
  `var(--color-accent-dim)` o el color de texto); en oscuro `var(--color-accent)`.
  Verificar contraste del logo sobre el fondo del navbar en AMBOS temas.
- `og-image.png` (1200×630) va en `public/`.
- **CRÍTICO:** las URLs de `og:image` y `og:url` deben ser **ABSOLUTAS**
  (`https://dominio/og-image.png`), nunca relativas: las plataformas no resuelven
  rutas relativas. Usar la URL final del sitio (el dominio `.dev` cuando esté
  configurado; mientras tanto el `.pages.dev`).
- `og:title`, `og:description` con el contenido real (nombre + propuesta de valor).
- El logo del header enlaza a `/`.

## Dependencia de orden

La parte de **Open Graph conviene hacerla con el dominio `.dev` ya activo**, para
que `og:image`/`og:url` apunten a la URL definitiva y no haya que rehacerlas. El
logo de header/footer se puede hacer en cualquier momento.

## Criterios de aceptación

- El monograma aparece en header (enlazando al inicio) y footer, legible en ambos
  temas.
- Al compartir la URL en LinkedIn / redes, aparece la tarjeta con `og-image.png`
  (validable con un inspector de Open Graph, p. ej. el de LinkedIn).
- `og:image` y `og:url` usan URL absoluta.
- El logo enlazado tiene nombre accesible.
- `astro check` sin errores. Mecánica intacta.
