# Spec 008 — Fondo de red de nodos en el hero

## Contexto

El portfolio está desplegado y la marca instalada (spec 007). El hero (la
sección principal, con el nombre y la presentación) tiene fondo plano. Se quiere
añadir un fondo sutil de red de nodos que evoque sistemas distribuidos /
microservicios, tematizado con los tokens del sitio. Existen dos SVG de
referencia visual (`hero-dark.svg`, `hero-light.svg`) que muestran el resultado
buscado; NO se copian al proyecto, son solo guía del look.

## Objetivo

Añadir al hero un fondo de red de nodos generado como SVG **inline** en el
componente, usando los tokens de color del sitio, con un *scrim* que garantice el
contraste del texto. Debe tematizarse solo en claro/oscuro y no perjudicar el LCP.

## Decisiones de diseño (defaults — ajustables si Fernando lo pide)

- **Ancho:** completo (full-bleed del hero).
- **Densidad:** ~45 nodos; aristas conectando nodos cercanos por umbral de
  distancia, con grado máximo 3 por nodo (evita marañas).
- **Scrim:** degradado del color de fondo (opaco donde va el texto) a
  transparente hacia el lado de la red, para mantener WCAG AA en el texto.
- **Animación:** entrada sutil ÚNICA al cargar (fade-in de los nodos / dibujado
  de líneas). SIN movimiento continuo. Respetar `prefers-reduced-motion`.

## Alcance

1. Generar el SVG de nodos **inline** en el componente del hero (no como archivo
   en `public/`, no como `<img>`).
2. Colores vía tokens CSS (NO hardcodear): nodos y líneas en `var(--color-accent)`
   / `var(--color-accent-dim)`; fondo heredado del tema.
3. *Scrim* sobre el SVG y por debajo del texto del hero.
4. El texto del hero (nombre, rol) permanece como HTML encima, NO dentro del SVG.
5. Animación de entrada respetando `prefers-reduced-motion`.

## Fuera de alcance

- Resto de secciones, favicon (007, ya hecho), reutilización de marca (009).

## Indicaciones de implementación

- **Roza la spec 002 (diseño):** si hay que tocar tokens o CSS estructural del
  hero, CONFIRMAR con Fernando antes. No alterar el sistema de diseño de tapadillo.
- El SVG inline permite `currentColor` / `var()` y heredar el tema sin duplicar
  archivos ni añadir peticiones de red (clave para el LCP).
- **Fijar las posiciones de los nodos** (codificadas o con semilla determinista),
  no aleatorias en cada render: lo contrario provocaría *layout shift*.
- Colocar el texto sobre la zona despejada por el *scrim*. Verificar contraste en
  ambos temas.
- Si se anima, usar solo `transform`/`opacity` (compositor), nunca propiedades que
  disparen *layout*. Con `prefers-reduced-motion: reduce` => sin animación.

## Criterios de aceptación

- El hero muestra la red de nodos de fondo, bien tematizada en claro y oscuro.
- El texto del hero mantiene contraste AA en ambos temas.
- Sin *layout shift* (CLS) por el fondo; el Performance de Lighthouse se mantiene
  en 95+.
- Con `prefers-reduced-motion` activo, no hay animación.
- `astro check` sin errores. La mecánica (tema, idioma) intacta.
