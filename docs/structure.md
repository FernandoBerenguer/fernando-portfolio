# Convenciones de estructura

## Carpetas

```
src/
├── components/        # Componentes .astro reutilizables (estáticos)
│   └── islands/       # Componentes React interactivos (.tsx)
├── layouts/           # Layouts base (.astro)
├── pages/             # Rutas. Subcarpetas por locale (es/, en/)
├── content/           # Contenido tipado (textos, proyectos, skills)
├── styles/            # CSS global y custom properties de theming
└── i18n/              # Diccionarios de traducción y utilidades i18n
public/                # Assets estáticos (favicon, imágenes, fuentes)
docs/                  # Documentos de contexto (product, tech, structure)
.claude/specs/         # Specs del proyecto
```

## Naming

- Componentes `.astro`: PascalCase (`Header.astro`, `ProjectCard.astro`).
- Islas React `.tsx`: PascalCase (`ThemeToggle.tsx`).
- Archivos de contenido y utilidades: kebab-case (`projects.json`, `use-theme.ts`).
- Variables CSS de theming: prefijo claro (`--color-bg`, `--color-text`,
  `--color-accent`, `--space-md`, etc.).

## Reglas

- Un componente por archivo.
- Los textos visibles NO se hardcodean en componentes: vienen de `src/content/`
  o `src/i18n/` según el idioma activo.
- Las islas React viven en `src/components/islands/` y son la excepción, no la
  norma. Justifica por qué algo necesita ser isla.
- El CSS de theming (las variables) vive centralizado en `src/styles/`, no
  repartido por componentes.
