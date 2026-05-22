# Spec 005 — Mejoras post-lanzamiento (lote 1)

## Contexto

El portfolio está desplegado y funcionando en producción
(https://fernando-berenguer.pages.dev) con CI/CD vía Cloudflare Pages. Tras el
uso, se han detectado dos mejoras. Esta spec las agrupa. NO debe romper la
mecánica existente (i18n, theming, animaciones) ni degradar el SEO recién
ajustado (hreflang, URL canónica, site URL de producción).

## Objetivo

Implementar dos mejoras de usabilidad sin regresiones:
1. Eliminar/ocultar el mensaje de redirección al entrar en la raíz del sitio.
2. Añadir un tooltip visual al botón de cambio de tema.

---

## Mejora 1 — Mensaje de redirección `/` → `/es/`

**Síntoma:** al entrar en `https://fernando-berenguer.pages.dev/` aparece un
instante el texto "Redirecting from / to /es/" antes de cargar el español.

**Causa:** la configuración i18n usa `prefixDefaultLocale: true`, por lo que el
español vive en `/es/` y la raíz solo redirige mediante una página intermedia.

**Requisito:** que al entrar en la raíz se cargue el español sin mostrar ese
mensaje intermedio.

**A resolver en diseño (el agente debe proponer y razonar, NO elegir a ciegas):**
- Camino A: servir el español en la raíz sin prefijo (`prefixDefaultLocale:
  false`). Cambia las URLs del español de `/es/` a `/`.
- Camino B: mantener los prefijos pero hacer la redirección instantánea/silenciosa
  sin mensaje visible.
- El diseño DEBE indicar explícitamente qué camino elige, por qué, y qué efecto
  tiene sobre: hreflang, URL canónica, el `site:` de producción, y el SEO.
- Restricción dura: NO degradar el SEO. Si el camino elegido cambia URLs, debe
  actualizar hreflang/canonical en consecuencia y dejarlo verificado.

## Mejora 2 — Tooltip en el botón de tema

**Mejora:** añadir un tooltip visual (atributo `title` o tooltip CSS) al botón de
sol/luna que indique la acción ("Cambiar a tema oscuro" / "Cambiar a tema claro")
según el tema activo, en el idioma de la página.

**Notas:**
- El botón YA tiene `aria-label` dinámico (accesibilidad por lector de pantalla
  cubierta). Esto añade la pista visual para usuarios de ratón.
- Debe ser bilingüe: el texto sale del diccionario i18n, no hardcodeado.
- Bajo riesgo. No debe alterar el comportamiento del toggle.

---

## Fuera de alcance

- Cualquier otra mejora no listada (irán en futuras specs).
- Cambios de diseño visual ajenos a estas dos mejoras.

## Criterios de aceptación

- Al entrar en la raíz del sitio, carga el español sin mensaje de redirección
  visible.
- El SEO se mantiene o mejora: hreflang y canonical correctos, sin URLs rotas.
  Lighthouse SEO igual o superior al estado actual.
- El botón de tema muestra un tooltip descriptivo al pasar el ratón, en el idioma
  correcto, y sigue cambiando el tema con persistencia como hasta ahora.
- `astro check` sin errores. Mecánica de i18n, theming y animaciones intacta.
- Verificación en ES y EN, ambos temas, y en producción tras el deploy.

## Ejecución

Dos mejoras independientes → preferible un commit atómico por mejora:
- `fix: serve default locale without redirect message` (o similar según camino)
- `feat: add tooltip to theme toggle button`
