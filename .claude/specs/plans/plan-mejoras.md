# Plan futuro — Mejoras post-lanzamiento

> Backlog de mejoras detectadas tras el despliegue. Acumular aquí en vez de
> parchear sueltas. Cuando haya suficientes, montar una spec (p. ej. 005) que
> las agrupe con su requirements → diseño → ejecución.

---

## M1 — Eliminar el mensaje de redirección `/` → `/es/`

**Síntoma:** al entrar en la raíz del sitio aparece un instante el mensaje
"Redirecting from / to /es/" antes de cargar el español.

**Causa:** la config i18n usa `prefixDefaultLocale: true`, así que el español
vive en `/es/` y la raíz `/` solo redirige mediante una página intermedia.

**Opciones a evaluar en diseño:**
- Servir el español en la raíz sin prefijo (cambiar `prefixDefaultLocale`).
- Hacer la redirección instantánea/silenciosa sin el mensaje visible.

**Cuidado:** afecta a hreflang, URL canónica y al SEO recién ajustado. Verificar
que no se rompe nada de eso. NO es un cambio trivial — requiere diseño.

---

## M2 — Tooltip en el botón de cambio de tema

**Mejora:** añadir un tooltip visual (p. ej. atributo `title` o tooltip CSS) al
botón de sol/luna, que diga "Cambiar a tema oscuro" / "Cambiar a tema claro"
según el tema activo, para que quede claro qué hace el botón al pasar el ratón.

**Nota:** el botón YA tiene `aria-label` dinámico (lector de pantalla cubierto);
esto añade la pista visual para usuarios de ratón. Bajo riesgo. Bilingüe.

---

## (Espacio para futuras mejoras que vayan surgiendo al usar el sitio)
