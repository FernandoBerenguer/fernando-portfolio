# Spec 002 — Diseño visual del portfolio

## Contexto

La spec 001 construyó el esqueleto funcional: i18n ES/EN, tema claro/oscuro con
persistencia, las cuatro secciones y la mecánica de animación. TODA esa mecánica
funciona. Lo que falta es la **capa visual**: ahora mismo el sitio se renderiza
sin maquetación (listas con viñetas, contenido pegado al borde, sin jerarquía ni
espaciado). Esta spec aplica un diseño visual profesional SIN tocar la mecánica.

## Objetivo

Transformar el esqueleto sin estilo en una landing de portfolio profesional,
sobria y moderna, manteniendo intacta toda la funcionalidad existente
(i18n, theming, persistencia, animaciones).

## Principios de dirección visual

- **Dos personalidades, un sistema:** tema oscuro sobrio y minimalista; tema
  claro editorial y limpio. Mismas fuentes, la diferencia la dan color y peso.
- **Aire y foco:** ancho de contenido limitado y centrado, espaciado vertical
  generoso entre secciones. El problema actual #1 es que todo está pegado al
  borde sin respirar — esto se corrige de raíz.
- **Jerarquía tipográfica clara:** nombre grande en el hero, titulares de sección
  marcados, cuerpo legible, detalles secundarios atenuados.
- **Sobriedad senior:** nada de efectos llamativos. Profesional, no espectáculo.

## Usar la skill de diseño

Esta spec DEBE implementarse usando la skill `frontend-design` de Anthropic,
pensada para producir interfaces de alta calidad y evitar el look genérico de IA.
Consultarla antes de definir el sistema de diseño y la maquetación.

## Alcance — maquetación completa de la página

### Sistema de diseño (definir explícitamente, no improvisar)
- **Escala de espaciado:** definir tokens (p. ej. 4, 8, 16, 24, 32, 48, 64, 96px)
  y usarlos consistentemente. Nada de márgenes al azar.
- **Escala tipográfica:** tamaños concretos para h1 (hero), h2 (secciones), h3,
  body, small. Definir line-height y font-weight de cada nivel.
- **Ancho de contenedor:** máximo legible para texto (~720-780px), con variante
  más ancha para secciones que lo requieran. Centrado.
- **Estados interactivos:** hover/focus visibles en enlaces, botones y tarjetas.
- Todos los nuevos tokens conviven con los existentes en `tokens.css`. El acento
  sigue saliendo de `--color-accent` (verde menta, mantener de momento).

### Barra de navegación
- Sustituir la lista con viñetas por una **barra superior limpia** (sin bullets).
- Contiene: nombre/marca a la izquierda, enlaces de sección, selector de idioma
  y toggle de tema a la derecha.
- Considerar barra fija (sticky) al hacer scroll, con fondo translúcido.
- El toggle de tema debe estar **estilizado** (ahora es un checkbox crudo): un
  botón con icono sol/luna o similar, accesible.

### Hero (parte superior — diseño a criterio del agente)
- Sección de bienvenida amplia: nombre grande, titular
  ("Senior Backend Developer · .NET"), frase corta de presentación, y
  enlaces/CTA de contacto.
- A criterio del agente la composición concreta, respetando los principios.

### Sección "Sobre mí"
- Bloque de texto legible, bien espaciado, ancho controlado.

### Sección "Experiencia y proyectos" — TIMELINE VERTICAL
- Formato de línea temporal vertical: una línea que recorre la sección, un nodo
  (punto) por proyecto, y junto a cada nodo una tarjeta con: empresa, rol,
  periodo, stack como chips/etiquetas, y descripción.
- Orden cronológico inverso (lo más reciente arriba).
- De momento usa los datos placeholder; el contenido real entra en otra spec.
  Pero la estructura debe soportar 3-4 entradas reales sin rediseño.

### Sección "Stack técnico"
- Tecnologías agrupadas por categoría (lenguajes, bases de datos, cloud,
  herramientas) como chips/etiquetas, no como párrafo de texto plano.

### Sección "Contacto"
- Enlaces a email, LinkedIn, GitHub presentados de forma clara y con iconos.

### Footer
- Limpio, con copyright y posibles enlaces. Coherente con el resto.

## Fuera de alcance

- Contenido real (proyectos, bio): sigue siendo placeholder, otra spec.
- Cambios en la lógica de i18n, theming o persistencia (ya funcionan; no tocar).
- Deploy.

## Criterios de aceptación

- El sitio deja de parecer un documento sin estilo: tiene maquetación, aire,
  jerarquía y se asemeja a una landing de portfolio profesional.
- La barra de navegación no tiene viñetas y está bien dispuesta.
- El toggle de tema está estilizado (no es un checkbox crudo).
- La experiencia se muestra como timeline vertical.
- El stack se muestra como chips agrupados por categoría.
- AMBOS temas (claro y oscuro) se ven bien y mantienen contraste suficiente.
- La funcionalidad existente sigue intacta: cambio de tema con persistencia sin
  parpadeo, cambio de idioma, fade-in de secciones.
- `astro check` pasa sin errores. Lighthouse Performance y Accessibility ≥ 95.
- `prefers-reduced-motion` sigue respetado.

## Decisiones abiertas (resolver en design.md)

- ¿Barra de navegación fija (sticky) o estática? ¿Con qué tratamiento de fondo?
- ¿El timeline lleva línea a un lado o centrada con tarjetas alternas?
- Tratamiento concreto del hero (¿foto/avatar? ¿solo tipografía?).
- ¿Iconos: librería (cuál) o SVG inline? Justificar coste/beneficio.
