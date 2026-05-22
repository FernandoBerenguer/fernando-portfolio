export const languages = { es: 'ES', en: 'EN' } as const;

export type Locale = keyof typeof languages;

export const ui = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.stack':      'Stack',
    'nav.contact':    'Contacto',

    'toggle.toLight': 'Cambiar a tema claro',
    'toggle.toDark':  'Cambiar a tema oscuro',

    'lang.switch': 'Switch to English',

    'hero.label':   'Hola, soy',
    'hero.name':    'Fernando Berenguer',
    'hero.role':    'Senior Backend Developer',
    'hero.spec':    '· .NET · Azure · Arquitectura distribuida',
    'hero.tagline': 'Diseño sistemas que escalan y código que se mantiene.',
    'hero.cta':     'Contacto →',

    'placeholder.about.heading':      'Sobre mí',
    'placeholder.about.body':         'Llevo desde 2018 desarrollando en .NET, y en ese tiempo he pasado por proyectos muy distintos: trazabilidad para la Comisión Europea, sistemas financieros, una plataforma OTT de streaming deportivo y, actualmente, una plataforma de cálculo de incentivos como Senior Backend Developer. Lo que me mueve es la calidad bien hecha y los retos de rendimiento —los problemas donde la mejora se ve y se mide—. Soy meticuloso con el proceso, creo en el trabajo en equipo y en el compañerismo más que en el mérito individual, y mantengo siempre las ganas de aprender y de mejorar. Abierto a nuevas oportunidades.',
    'placeholder.experience.heading': 'Experiencia y proyectos',
    'placeholder.stack.heading':      'Stack técnico',
    'placeholder.contact.heading':    'Contacto',

    'exp.1.period': 'Mar 2025 – Actualidad',
    'exp.1.desc':   'Desarrollo desde cero el backend de una plataforma de cálculo de incentivos de ventas para los agentes de Viajes El Corte Inglés. Un equipo pequeño —dos desarrolladores backend, un líder técnico/funcional y un arquitecto— que afronta con determinación y solvencia todos los retos del proyecto. Ambas APIs (gestión e intranet) siguen arquitectura limpia (Clean Architecture). Un trabajo de principio a fin: del modelado de dominio a la puesta en producción.',

    'exp.2.period': 'Jun 2022 – Mar 2025',
    'exp.2.desc':   'Formé parte del equipo backend de una plataforma OTT de streaming deportivo construida sobre microservicios, con Azure Service Bus como eje de comunicación entre servicios. Empecé encargándome del servicio que gestionaba la cola de Service Bus y desde ahí trabajé de forma transversal: módulo de CMS, los dos servicios de Suscripciones —ambos implementados con CQRS— y el servicio de persistencia de las entidades principales. Un equipo grande (~15 desarrolladores backend) con APIs modulares.',

    'exp.3.period': 'Abr 2021 – Jun 2022',
    'exp.3.desc':   'Proyecto interno de Deloitte UK para optimización de promociones en retail. A partir de un conjunto de parámetros y un componente de Machine Learning, el sistema determinaba la combinación óptima de producto, temporada y tipo de oferta (2x1, 3x2, BOGO…) para maximizar el rendimiento de las promociones de grandes superficies. Desarrollé el backend sobre un flujo de Azure Functions encadenadas dividido en cinco fases, en un equipo internacional distribuido (Reino Unido, Irlanda, Escocia, India y España) trabajando íntegramente en inglés con metodología Scrum.',

    'exp.4.period': 'Sep 2019 – Abr 2021',
    'exp.4.desc':   'Entré como junior al desarrollo de una herramienta interna para el tratamiento de las transacciones del cliente: un conjunto de servicios en torno a una matriz central ("Convergencia") que interactuaban para operaciones de cálculo financiero, gestión de listas de transacciones y reporting. Desarrollé features de extremo a extremo —pantalla (Razor + JS), API y modelo de datos en SQL Server— además de resolución de bugs e incidencias. En la última etapa participé en un proyecto derivado (SG) con un equipo reducido aplicando TDD y DDD bajo la dirección de un arquitecto del cliente, durante aproximadamente un año.',

    'exp.5.period': 'Jun 2018 – Sep 2019',
    'exp.5.desc':   'Mi primer proyecto y el inicio de mi desarrollo en C# y .NET, dentro de un sistema de trazabilidad del tabaco a nivel europeo para la Comisión Europea. La API gestionaba el escaneo y la traza completa de cada envío —palets, cajas, cartones, cajetillas— a lo largo de toda la cadena. En un equipo con desarrolladores sénior, QA y liderazgo técnico y de negocio, contribuí en tareas de desarrollo y soporte de incidencias, asentando los fundamentos de C# y .NET y del trabajo en entorno cloud.',

    'stack.cat.lang':  'Lenguajes y Frameworks',
    'stack.cat.db':    'Bases de datos',
    'stack.cat.cloud': 'Cloud y Mensajería',
    'stack.cat.arch':  'Arquitectura y Prácticas',
    'stack.cat.tools': 'Herramientas',

    'contact.email':    'Email',
    'contact.linkedin': 'LinkedIn',

    'timeline.present': 'Actualidad',
  },
  en: {
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.stack':      'Stack',
    'nav.contact':    'Contact',

    'toggle.toLight': 'Switch to light theme',
    'toggle.toDark':  'Switch to dark theme',

    'lang.switch': 'Cambiar a español',

    'hero.label':   "Hi, I'm",
    'hero.name':    'Fernando Berenguer',
    'hero.role':    'Senior Backend Developer',
    'hero.spec':    '· .NET · Azure · Distributed Architecture',
    'hero.tagline': 'I design systems that scale and code that lasts.',
    'hero.cta':     'Contact →',

    'placeholder.about.heading':      'About',
    'placeholder.about.body':         'I have been developing in .NET since 2018, and over that time I have worked on very different projects: traceability systems for the European Commission, financial systems, a sports streaming OTT platform, and currently an incentives calculation platform as a Senior Backend Developer. What drives me is well-crafted quality and performance challenges — the kind of problems where the improvement is visible and measurable. I am meticulous about process, I believe in teamwork and collaboration over individual recognition, and I always keep the drive to learn and improve. Open to new opportunities.',
    'placeholder.experience.heading': 'Experience & projects',
    'placeholder.stack.heading':      'Tech stack',
    'placeholder.contact.heading':    'Contact',

    'exp.1.period': 'Mar 2025 – Present',
    'exp.1.desc':   'I build, from the ground up, the backend of a sales incentives calculation platform for Viajes El Corte Inglés agents. A small team — two backend developers, a technical/functional lead and an architect — that takes on every challenge with determination and reliability. Both APIs (management and intranet) follow Clean Architecture. End-to-end work: from domain modelling to production deployment.',

    'exp.2.period': 'Jun 2022 – Mar 2025',
    'exp.2.desc':   'I was part of the backend team of a sports streaming OTT platform built on microservices, with Azure Service Bus as the backbone of inter-service communication. I started out owning the service that managed the Service Bus queue, and from there worked across the system: the CMS module, the two Subscriptions services — both implemented with CQRS — and the persistence service for the core entities. A large team (~15 backend developers) with modular APIs.',

    'exp.3.period': 'Apr 2021 – Jun 2022',
    'exp.3.desc':   'An internal Deloitte UK project for retail promotion optimization. Based on a set of parameters and a Machine Learning component, the system determined the optimal combination of product, season and offer type (BOGO, 2-for-1, 3-for-2…) to maximize the performance of supermarket promotions. I developed the backend on a chained Azure Functions flow split into five stages, within an internationally distributed team (UK, Ireland, Scotland, India and Spain), working entirely in English under Scrum.',

    'exp.4.period': 'Sep 2019 – Apr 2021',
    'exp.4.desc':   'I joined as a junior on the development of an internal tool for processing the client\'s transactions: a set of services built around a central matrix ("Convergencia") that interacted to perform financial calculations, transaction list management and reporting. I developed features end-to-end — UI (Razor + JS), API and data model in SQL Server — alongside bug and incident resolution. In the final stage I took part in a derived project (SG) with a small team applying TDD and DDD under the guidance of a client architect, for roughly a year.',

    'exp.5.period': 'Jun 2018 – Sep 2019',
    'exp.5.desc':   'My first project and the start of my career in C# and .NET, within a Europe-wide tobacco traceability system for the European Commission. The API handled the scanning and full traceability of every shipment — pallets, boxes, cartons, packs — across the entire chain. In a team with senior developers, QA and both technical and business leadership, I contributed to development tasks and incident support, building the foundations of C#, .NET and cloud-based work.',

    'stack.cat.lang':  'Languages & Frameworks',
    'stack.cat.db':    'Databases',
    'stack.cat.cloud': 'Cloud & Messaging',
    'stack.cat.arch':  'Architecture & Practices',
    'stack.cat.tools': 'Tools',

    'contact.email':    'Email',
    'contact.linkedin': 'LinkedIn',

    'timeline.present': 'Present',
  },
} as const;
