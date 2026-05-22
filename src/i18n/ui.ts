export const languages = { es: 'ES', en: 'EN' } as const;

export type Locale = keyof typeof languages;

export const ui = {
  es: {
    'nav.about':       'Sobre mí',
    'nav.experience':  'Experiencia',
    'nav.stack':       'Stack',
    'nav.contact':     'Contacto',

    'toggle.toLight':  'Cambiar a tema claro',
    'toggle.toDark':   'Cambiar a tema oscuro',

    'lang.switch':     'Switch to English',

    'hero.label':    'Hola, soy',
    'hero.name':     'Fernando Berenguer',
    'hero.role':     'Senior Backend Developer',
    'hero.spec':     '· .NET · Azure · Arquitectura distribuida',
    'hero.tagline':  'Diseño sistemas que escalan y código que se mantiene.',
    'hero.cta':      'Contacto →',

    'placeholder.label':              '[PROVISIONAL]',
    'placeholder.about.heading':      'Sobre mí',
    'placeholder.about.body':         'Desarrollador Backend Senior con experiencia en .NET, C# y arquitectura de sistemas distribuidos. [Contenido real va aquí]',
    'placeholder.experience.heading': 'Experiencia y proyectos',
    'placeholder.experience.body':    '[Empresa] — [Rol] — [Período]. [Descripción del impacto concreto. Contenido real va aquí]',
    'placeholder.stack.heading':      'Stack técnico',
    'placeholder.stack.body':         '.NET · C# · SQL Server · Azure · Docker · [Contenido real va aquí]',
    'placeholder.contact.heading':    'Contacto',
    'placeholder.contact.body':       'email@example.com · LinkedIn · GitHub · [Contenido real va aquí]',

    'stack.cat.lang':       'Lenguajes',
    'stack.cat.frameworks': 'Frameworks y plataformas',
    'stack.cat.cloud':      'Cloud & DevOps',
    'stack.cat.db':         'Bases de datos',

    'contact.email':    'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
  },
  en: {
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.stack':       'Stack',
    'nav.contact':     'Contact',

    'toggle.toLight':  'Switch to light theme',
    'toggle.toDark':   'Switch to dark theme',

    'lang.switch':     'Cambiar a español',

    'hero.label':    "Hi, I'm",
    'hero.name':     'Fernando Berenguer',
    'hero.role':     'Senior Backend Developer',
    'hero.spec':     '· .NET · Azure · Distributed Architecture',
    'hero.tagline':  'I design systems that scale and code that lasts.',
    'hero.cta':      'Contact →',

    'placeholder.label':              '[PLACEHOLDER]',
    'placeholder.about.heading':      'About',
    'placeholder.about.body':         'Senior Backend Developer with experience in .NET, C# and distributed systems architecture. [Real content goes here]',
    'placeholder.experience.heading': 'Experience & projects',
    'placeholder.experience.body':    '[Company] — [Role] — [Period]. [Description of concrete impact. Real content goes here]',
    'placeholder.stack.heading':      'Tech stack',
    'placeholder.stack.body':         '.NET · C# · SQL Server · Azure · Docker · [Real content goes here]',
    'placeholder.contact.heading':    'Contact',
    'placeholder.contact.body':       'email@example.com · LinkedIn · GitHub · [Real content goes here]',

    'stack.cat.lang':       'Languages',
    'stack.cat.frameworks': 'Frameworks & platforms',
    'stack.cat.cloud':      'Cloud & DevOps',
    'stack.cat.db':         'Databases',

    'contact.email':    'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github':   'GitHub',
  },
} as const;
