# Portfolio — Fernando Berenguer

Sitio web personal y CV interactivo de Fernando Berenguer, Senior Backend
Developer especializado en .NET. Bilingüe (español / inglés), con tema claro y
oscuro, construido como sitio estático para máxima velocidad.

**En producción:** https://fernando-berenguer.pages.dev

---

## Características

- **Bilingüe (ES / EN)** mediante el routing i18n nativo de Astro.
- **Tema claro y oscuro** con selección por el usuario, persistencia entre
  visitas y respeto a la preferencia del sistema en la primera carga.
- **Sitio estático**: cero JavaScript en las páginas que no lo necesitan; solo
  el conmutador de tema se hidrata en el cliente.
- **Animaciones sutiles** (transiciones de vista y fade-in de secciones) que
  respetan `prefers-reduced-motion`.
- **Rendimiento y accesibilidad**: puntuaciones de Lighthouse de 95–100 en
  Performance y Accessibility.

## Stack técnico

- **Astro** — generador de sitio estático.
- **React** — únicamente como islas interactivas (`client:*`).
- **TypeScript** en modo estricto.
- **CSS nativo** con custom properties para el sistema de theming.
- **Cloudflare Pages** — hosting estático con despliegue continuo desde GitHub.

## Desarrollo local

Requiere Node.js (LTS) y npm.

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build de producción
```

## Estructura del proyecto

```
src/
├── components/     # Componentes .astro (estáticos) e islas React
├── layouts/        # Layout base
├── pages/          # Rutas por idioma (es/, en/)
├── i18n/           # Diccionarios y utilidades de internacionalización
└── styles/         # Tokens de diseño, theming y estilos globales
```

## Metodología

El proyecto se ha construido mediante un flujo de desarrollo dirigido por
especificaciones con Claude Code: cada bloque de trabajo se define primero como
una spec (requisitos → diseño → tareas), se revisa y se ejecuta de forma
incremental con commits atómicos. Las especificaciones viven versionadas en el
propio repositorio.

## Despliegue

El sitio se despliega automáticamente en Cloudflare Pages con cada push a la rama
`main`. El build genera HTML estático servido a través de la CDN global de
Cloudflare, con certificado SSL incluido.

## Licencia

Proyecto personal. El código es de referencia; el contenido (textos, datos
profesionales) es propiedad de Fernando Berenguer.
