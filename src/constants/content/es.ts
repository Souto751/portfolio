import type en from './en';

const es: typeof en = {
  meta: {
    title: 'Agustin Souto — Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack que construye productos completos en web, mobile, escritorio e integraciones con IA, trabajando con IA como copiloto. Explora un portfolio interactivo con estetica pixel art RPG.',
    ogAlt: 'Portfolio de Agustin Souto — Desarrollador Full Stack',
  },
  landing: {
    name: 'AGUSTIN SOUTO',
    title: 'DESARROLLADOR FULL STACK',
    level: 'NIVEL 27',
    tagline: 'Un nuevo build ingreso al servidor.',
    start: 'INICIAR PARTIDA',
    pressStart: 'PRESIONA START PARA COMENZAR LA AVENTURA',
    skip: 'Saltar intro',
    quickCv: 'Con poco tiempo? Mira el CV rapido',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mi',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    ai: 'IA',
    education: 'Formacion',
    resume: 'CV',
    contact: 'Contacto',
    quickCv: 'CV rapido',
    menuTitle: 'MENU PRINCIPAL',
    openMenu: 'Abrir menu',
    closeMenu: 'Cerrar menu',
  },
  about: {
    eyebrow: 'PERFIL DE PERSONAJE',
    name: 'Agustin Souto',
    profession: 'Desarrollador Full Stack',
    location: 'Buenos Aires, Argentina (Remoto)',
    dialogueLabel: 'AGUSTIN',
    summary:
      'Desarrollador Full Stack en el Hospital Privado de Comunidad desde 2022: desarrollo sistemas web internos, migro sistemas de escritorio y 4GL heredados, y trabajo con datos sensibles de salud. Por mi cuenta construyo productos completos en web, mobile, escritorio e IA, con IA como copiloto: defino el producto y la arquitectura, y reviso, pruebo y entrego cada fase.',
    continue: 'Presiona para continuar...',
    classesTitle: 'CLASES DESBLOQUEADAS',
    classes: [
      'Full Stack Web — Vue.js, React, JSP, Node.js, NestJS, PostgreSQL',
      'Sistemas heredados — 4GL, Java de escritorio y consola Linux',
      'Mobile — React Native / Expo con modulos nativos de Android',
      'Escritorio — apps en Python con instalador para Windows',
      'Integracion de IA — LLMs locales con herramientas y limites de seguridad',
      'Desarrollo de juegos — diseno de sistemas, economia y progresion',
    ],
    quickFacts: {
      title: 'DATOS RAPIDOS',
      experience: 'Desarrollador Full Stack en salud desde 2022, mas 5 proyectos propios de punta a punta',
      focus: 'En el trabajo: JavaScript, Vue.js, JSP, Java y 4GL. Por mi cuenta: TypeScript, React, Node.js y NestJS',
      languages: 'Espanol (nativo), Ingles (nivel profesional)',
      availability: 'Disponible para oportunidades full-time y freelance',
    },
  },
  skills: {
    eyebrow: 'INVENTARIO',
    title: 'HABILIDADES Y EQUIPO',
    subtitle: 'Cada item esta respaldado por un proyecto que podes abrir mas abajo.',
    usedIn: 'Usado en',
    atWork: 'En el trabajo',
    projectsCount: 'proyectos',
    projectCount: 'proyecto',
    filterAll: 'Todos',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Base de Datos',
      devops: 'DevOps',
      tools: 'Herramientas',
      ai: 'IA',
    },
    items: {
      reactSword: {
        name: 'React',
        itemName: 'Espada React',
        description:
          'Arma principal para interfaces: la PWA de Automotive Empire, el editor de canvas de Stories Creator y este portfolio.',
      },
      nextShield: {
        name: 'Next.js',
        itemName: 'Escudo Next.js',
        description: 'Renderizado estatico, metadatos y SEO de este portfolio, incluida la vista de CV rapido.',
      },
      tsCrystal: {
        name: 'TypeScript',
        itemName: 'Cristal TypeScript',
        description:
          'Tipado de punta a punta: paquetes de DTOs compartidos entre la API en NestJS y el cliente React, y toda la app TinMangas.',
      },
      nodeFlame: {
        name: 'Node.js',
        itemName: 'Llama Node',
        description:
          'Servidor HTTP sin dependencias con SQLite integrado para Stories Creator, y el runtime del bot Mineflayer detras de Aetheria.',
      },
      nestHammer: {
        name: 'NestJS',
        itemName: 'Martillo NestJS',
        description:
          'API REST modular de Automotive Empire: autenticacion JWT con refresh tokens, economia del juego y resolucion de carreras.',
      },
      postgresRelic: {
        name: 'PostgreSQL + Prisma',
        itemName: 'Reliquia PostgreSQL',
        description: 'Consultas y manejo de datos en PostgreSQL en el trabajo; esquema relacional y migraciones con Prisma en Automotive Empire.',
      },
      expoBoots: {
        name: 'React Native / Expo',
        itemName: 'Botas Expo',
        description:
          'App Android TinMangas: gestos, lectura de derecha a izquierda, Storage Access Framework y un modulo propio en Kotlin para archivos RAR.',
      },
      pythonStaff: {
        name: 'Python',
        itemName: 'Baston Python',
        description:
          'App de escritorio Game Manager: lectores de bibliotecas de Steam, Epic, GOG, EA y Xbox, icono en la bandeja e instalador.',
      },
      dockerBackpack: {
        name: 'Docker',
        itemName: 'Mochila Docker',
        description: 'Nivel basico: en el trabajo levante con Docker una pagina web para administrar usuarios de Linux y sus claves SSH; entorno local de PostgreSQL con docker compose en Automotive Empire.',
      },
      llmOrb: {
        name: 'LLMs / Ollama',
        itemName: 'Orbe LLM',
        description:
          'Modelo local con tool calling: la IA elige herramientas validadas con permisos por jugador, en lugar de escribir comandos libres.',
      },
      ciScroll: {
        name: 'GitHub Actions',
        itemName: 'Pergamino CI',
        description: 'Releases de APK firmados con auto-actualizacion para TinMangas y un pipeline de CI basico para el monorepo.',
      },
      vueBlade: {
        name: 'Vue.js',
        itemName: 'Hoja Vue',
        description: 'Framework de frontend de sistemas web internos del hospital, incluida la migracion a web de un sistema de escritorio heredado.',
      },
      jspScroll: {
        name: 'JSP / HTML / CSS',
        itemName: 'Tomo JSP',
        description: 'Paginas web renderizadas en servidor para sistemas internos y un portal para entidades externas.',
      },
      javaAxe: {
        name: 'Java',
        itemName: 'Hacha Java',
        description: 'Mantenimiento y correccion de errores en aplicaciones de escritorio existentes del hospital.',
      },
      legacyRune: {
        name: '4GL',
        itemName: 'Runa Heredada',
        description: 'Correcciones y modificaciones en los sistemas 4GL del hospital sobre bases Informix, y el analisis y la migracion de esos sistemas a un nuevo servidor.',
      },
      awsCloud: {
        name: 'AWS',
        itemName: 'Nube AWS',
        description: 'Nivel basico: la web para una ONG que desarrollamos en la aceleracion de Alkemy se desplego sobre Amazon Web Services.',
      },
      linuxLantern: {
        name: 'Consola Linux',
        itemName: 'Linterna Linux',
        description: 'Uso diario de la consola para trabajar con los sistemas 4GL y su servidor, incluida la gestion de usuarios y claves SSH.',
      },
      aiCompanion: {
        name: 'ChatGPT / Cursor',
        itemName: 'Companero IA',
        description: 'Herramientas de IA integradas al trabajo diario: analisis de codigo heredado, correccion de errores y desarrollo asistido. Con Cursor automatice el analisis de programas 4GL en una migracion de servidor.',
      },
      automationGear: {
        name: 'n8n',
        itemName: 'Engranaje de Automatizacion',
        description: 'Flujos de automatizacion: fue la primera herramienta que use para automatizar el analisis de programas 4GL durante una migracion de servidor.',
      },
      informixVault: {
        name: 'Informix',
        itemName: 'Boveda Informix',
        description: 'Manejo de datos en las bases Informix que usan los sistemas 4GL del hospital, y configuracion de los puestos de trabajo con Setnet para conectarse a ellas.',
      },
      gitBranch: {
        name: 'Git / GitLab',
        itemName: 'Rama GitLab',
        description: 'Control de versiones diario en el trabajo con GitLab (ramas, merge requests), y Git/GitHub en todos los proyectos propios.',
      },
      jenkinsGolem: {
        name: 'Jenkins',
        itemName: 'Golem Jenkins',
        description: 'Despliegue de actualizaciones de los sistemas del hospital mediante jobs de Jenkins.',
      },
      jiraMap: {
        name: 'Jira',
        itemName: 'Mapa Jira',
        description: 'Seguimiento de tareas y flujo de trabajo del equipo en el hospital.',
      },
      tailwindGem: {
        name: 'TailwindCSS',
        itemName: 'Gema Tailwind',
        description: 'Interfaces responsivas y accesibles para la PWA de Automotive Empire y este portfolio.',
      },
    },
  },
  experience: {
    eyebrow: 'REGISTRO DE MISIONES',
    title: 'EXPERIENCIA',
    subtitle: 'Misiones completadas, en orden cronologico.',
    present: 'Actualidad',
    achievements: 'Logros',
    technologies: 'Tecnologias',
    viewDetails: 'Ver Detalles',
    hideDetails: 'Ocultar Detalles',
    questComplete: 'MISION COMPLETADA',
    questActive: 'MISION EN CURSO',
    items: {
      job1: {
        company: 'Hospital Privado de Comunidad',
        role: 'Desarrollador Full Stack',
        location: 'Mar del Plata, Argentina',
        achievements: [
          'Desarrollo full stack de sistemas web internos con HTML, CSS, JavaScript y JSP, incorporando luego Vue.js como framework de frontend.',
          'Migracion de un sistema de escritorio heredado a una aplicacion web para un proceso administrativo-financiero interno.',
          'Integre un equipo interdisciplinario, con personas de distintos servicios del hospital, en el proyecto "Maraton de Periodicos Digital" para digitalizar los examenes periodicos. Mi tarea fue desarrollar el portal web para las entidades externas, con acceso restringido a la informacion de cada una. Lo presentamos en la III Jornada Interna de Mejora Continua del hospital y en el 28.º Encuentro de Mejora Continua SAMECO 2023.',
          'Responsable del analisis y la migracion de sistemas 4GL a un nuevo servidor: identifique programas y archivos sin uso para no migrarlos y ahorrar espacio.',
          'Automatizacion de ese analisis, primero con n8n y despues con Cursor, mediante comandos automatizados y analisis de codigo asistido por IA.',
          'Integracion de herramientas de IA (ChatGPT y Cursor) y de automatizacion (n8n) en el trabajo diario: analisis de codigo heredado, correccion de errores y desarrollo asistido.',
          'Integrante del equipo de sistemas 4GL: correccion de fallas existentes y modificaciones solicitadas, con el plan de migrarlos a versiones web.',
          'Mantenimiento y correccion de errores en aplicaciones de escritorio Java existentes, e instalaciones de software en los equipos del hospital.',
          'Configuracion de puestos de trabajo con Setnet para acceder a las bases de datos y a los programas que las requieren.',
          'Manejo de datos en bases Informix y PostgreSQL.',
          'Puesta en marcha con Docker de una pagina web para administrar usuarios de Linux y sus claves SSH.',
          'Control de versiones con Git en GitLab, despliegue de actualizaciones de los sistemas con Jenkins y gestion de tareas en Jira.',
          'Trabajo con datos sensibles de salud, manejados con estricta confidencialidad.',
        ],
      },
      job2: {
        company: 'Alkemy',
        role: 'Desarrollador Full Stack — Aceleracion JavaScript',
        location: 'Remoto',
        achievements: [
          'En un equipo con su lider, desarrollamos una pagina web para una ONG con React en el frontend y Node.js en el backend, sobre Amazon Web Services (AWS).',
          'Me enfoque en el frontend desarrollando componentes de la aplicacion; en el backend realice tareas de configuracion.',
          'Trabajo con metodologia agil: reuniones virtuales semanales para presentar avances y comunicacion diaria de las tareas de cada dia.',
          'Presentacion final del proyecto en una demo de 30 minutos.',
        ],
      },
    },
  },
  projects: {
    eyebrow: 'BOLSA DE INVENTARIO',
    title: 'PROYECTOS',
    subtitle: 'Proyectos reales, cada uno con su estado actual y como se construyo.',
    problem: 'Problema',
    solution: 'Solucion',
    architecture: 'Arquitectura',
    challenges: 'Desafios',
    results: 'Resultados',
    role: 'Mi rol y el de la IA',
    screenshot: 'Captura',
    status: 'Estado',
    technologies: 'Tecnologias',
    github: 'GitHub',
    demo: 'Demo en Vivo',
    close: 'Cerrar',
    items: {
      automotiveEmpire: {
        name: 'Automotive Empire',
        status: 'En desarrollo — fase 5 de 10',
        description:
          'Un juego web idle → tycoon → RPG automotriz: reparas tu primer auto usado a clicks y despues construis fabricas, disenas vehiculos y corres carreras.',
        problem:
          'Los juegos idle se vuelven repetitivos rapido. La idea fue una progresion que cambia de genero a medida que creces: clicker, despues gestion, despues carreras.',
        solution:
          'Una PWA instalable con produccion pasiva, empleados, una cadena de recursos (el acero alimenta al concesionario), un disenador de vehiculos y carreras que se resuelven por las estadisticas del auto.',
        architecture:
          'Monorepo con pnpm: cliente React + Vite + PixiJS, API NestJS + Prisma + PostgreSQL, paquetes compartidos de tipos y de configuracion de juego versionada, documentacion en VitePress y CI.',
        challenges:
          'Sacar el balance del juego del codigo: todos los numeros viven en un paquete de configuracion versionado que comparten cliente y servidor, asi ajustar no obliga a tocar la logica.',
        results:
          'Documento de diseno completo de 20 secciones, autenticacion de punta a punta (registro/login/refresh), las primeras cinco etapas de produccion y la primera region de carreras con jefe.',
        role:
          'Escribi y aprobe el documento de diseno y lo dividi en fases con un checkpoint cada una. La IA implemento el codigo fase por fase; yo jugue, revise y aprobe cada fase antes de arrancar la siguiente.',
      },
      storiesCreator: {
        name: 'Stories Creator',
        status: 'Terminado — v1.0',
        description:
          'Un generador web de publicidades para historias y estados (1080×1920), con editor de canvas y una API protegida para que un bot publique las imagenes.',
        problem:
          'Armar a mano imagenes promocionales para historias todos los dias es lento, y darle acceso a un bot a una web no puede abrir un agujero de seguridad.',
        solution:
          '35 plantillas, kit de marca (logo, colores, tipografia), capas con arrastrar/redimensionar/rotar, deshacer/rehacer, zonas seguras y un ciclo borrador → lista → publicada que consume un bot.',
        architecture:
          'Servidor en Node.js 22 sin dependencias de npm y con SQLite integrado, frontend en JS sin innerHTML, CLI para usuarios y tokens del bot, tests con el runner nativo de Node.',
        challenges:
          'Seguridad desde el dia uno: contrasenas con scrypt, 2FA TOTP obligatorio con secretos cifrados, bloqueo progresivo, tokens CSRF, CSP estricta, sesiones hasheadas y reserva atomica para el bot.',
        results:
          'Suite de tests que cubre login, 2FA, bloqueo, CSRF, aislamiento entre usuarios, validacion de imagenes y el ciclo completo del bot.',
        role:
          'Defini los requisitos de seguridad y el contrato con el bot (ciclo de vida, reserva, estados). La IA escribio la implementacion y los tests; yo revise cada control de seguridad y valide el flujo completo.',
      },
      aetheria: {
        name: 'Aetheria Game Master',
        status: 'En uso — en desarrollo continuo',
        description:
          'Un bot game master con IA para un servidor de Minecraft con mods: conversa en lenguaje natural, se mueve, construye, maneja misiones y modera.',
        problem:
          'Llevar un servidor RPG implica construir ciudades, escribir misiones, mantener el orden y responder a los jugadores todo el dia: demasiado para un solo admin.',
        solution:
          'Un bot que entiende pedidos por susurro, planifica y construye con WorldEdit, genera cadenas de misiones, administra zonas seguras y aplica sanciones crecientes.',
        architecture:
          'Node.js + Mineflayer con pathfinding, LLM local con Ollama y tool calling, datos del mundo en JSON (regiones, ciudades, facciones, NPCs, misiones) con backups automaticos, integracion con Discord.',
        challenges:
          'Dejar que un LLM actue sobre un mundo en vivo de forma segura: el modelo nunca escribe comandos, elige herramientas validadas, solo ve las que puede usar quien le habla y las construcciones esperan confirmacion explicita.',
        results:
          'Funcionando en el servidor con navegacion, construccion controlada con deshacer, conversacion con IA, misiones, jefes, ranking y moderacion.',
        role:
          'Disene el modelo de permisos y las reglas de seguridad, y lo pruebo en el servidor en vivo. La IA implemento los modulos siguiendo esas reglas; yo mantengo el backlog de lo que sigue.',
      },
      tinmangas: {
        name: 'TinMangas',
        status: 'Publicado — lo usan conocidos',
        description:
          'Un lector Android de mangas y comics en .cbr / .cbz, que agrupa por serie, muestra tapas y guarda el progreso localmente.',
        problem:
          'La mayoria de los lectores son pesados o dependen de internet. Queria un lector rapido y offline para mis archivos, con lectura de derecha a izquierda por defecto.',
        solution:
          'Elegis una carpeta, la app agrupa los tomos por serie, extrae las paginas a cache la primera vez y recuerda la ultima pagina. Modos manga / comic, temas claro y oscuro.',
        architecture:
          'Expo SDK 57 + React Native (New Architecture, Hermes), almacenamiento en JSON local, un modulo Expo propio en Kotlin con 7-Zip-JBinding para RAR, GitHub Actions para releases firmados.',
        challenges:
          'Hermes no tiene WebAssembly, asi que la libreria JS de RAR fallaba en el APK: lo resolvi con un modulo nativo. Tambien habia que mantener la misma firma para que las actualizaciones se instalen encima.',
        results: 'APK instalable con aviso de actualizacion dentro de la app que descarga las nuevas versiones desde GitHub.',
        role:
          'Defini el producto (offline, sin cuenta, sin backend) y el flujo de releases. La IA implemento la app y el modulo nativo; yo probe cada build en mi telefono y decidi que entraba.',
      },
      gameManager: {
        name: 'Game Manager',
        status: 'Publicado — v1.0.0',
        description:
          'Una app de escritorio para Windows que junta tus juegos de Steam, Epic, GOG, EA y Xbox en una sola biblioteca.',
        problem:
          'Los juegos de PC terminan repartidos en cinco launchers, y para abrir uno hay que acordarse donde lo compraste.',
        solution:
          'Escanea las bibliotecas instaladas de cada tienda y carpetas propias, busca las tapas y abre los juegos desde un solo lugar. Corre en la bandeja y puede iniciar con Windows.',
        architecture:
          'Python con interfaz en CustomTkinter, un modulo lector por tienda, buscador de tapas, icono en la bandeja con pystray, build con PyInstaller e instalador para Windows.',
        challenges:
          'Cada tienda guarda su biblioteca en un lugar y formato distinto, asi que cada una necesito su propio lector detras de una interfaz comun.',
        results: 'Instalador para Windows (GameManager_Setup_1.0.0.exe) y chequeo de actualizaciones contra los releases de GitHub.',
        role:
          'Defini que tiendas soportar y como debia comportarse la app. La IA implemento los lectores y la interfaz; yo la probe con mis propias bibliotecas y arme el release.',
      },
    },
  },
  ai: {
    eyebrow: 'GRIMORIO',
    title: 'COMO TRABAJO CON IA',
    subtitle:
      'Todos estos proyectos se construyeron con IA como copiloto. Lo digo de entrada, porque lo interesante es como se dirige el trabajo.',
    steps: {
      define: {
        title: '1. Defino',
        text: 'Primero escribo la especificacion: objetivo, reglas, limites y fases. En Automotive Empire fue un documento de diseno de 20 secciones antes de la primera linea de codigo.',
      },
      delegate: {
        title: '2. Delego con contexto',
        text: 'La IA escribe el codigo siguiendo archivos de contexto que viven en el repo — reglas fijas, decisiones tomadas, que no tocar — para que cada sesion arranque sin perder el hilo.',
      },
      review: {
        title: '3. Reviso y pruebo',
        text: 'Pruebo cada fase en uso real, leo los cambios, detecto errores y pido correcciones. Nada pasa a la siguiente fase sin mi aprobacion.',
      },
      ship: {
        title: '4. Entrego',
        text: 'Builds instalables, CI y documentacion: APK firmado con auto-actualizacion, instalador para Windows, READMEs con los pasos de instalacion.',
      },
    },
    principlesTitle: 'PRINCIPIOS',
    principles: [
      'Las decisiones de producto y arquitectura son mias; la IA acelera la implementacion.',
      'Minimo privilegio: en Aetheria el modelo elige herramientas validadas, nunca ejecuta comandos libres.',
      'Transparencia: cada proyecto dice que hice yo y que hizo la IA.',
      'Tambien en el trabajo: use Cursor para automatizar el analisis de programas 4GL durante una migracion de servidor.',
    ],
  },
  education: {
    eyebrow: 'ACADEMIA',
    title: 'FORMACION',
    subtitle: 'Estudios y certificados obtenidos en el camino.',
    studiesTitle: 'ESTUDIOS',
    average: 'Promedio',
    languages: 'Lenguajes',
    viewDiploma: 'Ver titulo',
    viewCertificate: 'Ver certificado',
    openFull: 'Abrir en tamano completo',
    page: 'Pagina',
    verify: 'Verificar',
    items: {
      tecnicatura: {
        degree: 'Tecnicatura Superior en Analisis de Sistemas',
        institution: 'Instituto Superior de Formacion Tecnica N.º 151',
        location: 'Mar del Plata, Argentina',
        status: 'Titulo obtenido: Analista en Sistemas',
      },
    },
  },
  certifications: {
    eyebrow: 'LOGROS DESBLOQUEADOS',
    title: 'CERTIFICACIONES',
    subtitle: 'Reconocimientos y certificados obtenidos en el camino.',
    issuedBy: 'Otorgado por',
    items: {
      mejoraContinua: {
        name: 'Mejora Continua 2023 — Maraton de Periodicos Digital',
        issuer: 'Hospital Privado de Comunidad, Fundacion Medica de Mar del Plata y SAMECO',
        description: 'Trabajo grupal interdisciplinario para digitalizar los examenes periodicos. Lo presentamos en modalidad poster en la III Jornada Interna de Mejora Continua y, como autores, en el 28.º Encuentro de Mejora Continua SAMECO 2023. Mi parte fue el desarrollo del portal web.',
      },
      alkemy: {
        name: 'Alkemy Job-Ready — Aceleracion JS',
        issuer: 'Alkemy',
        description: 'Certificado como desarrollador "job-ready" al completar la aceleracion JS, desarrollando en equipo una web para una ONG con React, Node.js y AWS.',
      },
    },
  },
  resume: {
    eyebrow: 'PERGAMINO ANTIGUO',
    title: 'CURRICULUM',
    subtitle: 'El registro completo del recorrido hasta ahora, en una sola pagina imprimible.',
    open: 'ABRIR CV RAPIDO',
    lastUpdated: 'Ultima actualizacion',
  },
  cv: {
    back: 'Volver al portfolio',
    print: 'Imprimir / Guardar como PDF',
    summaryTitle: 'Resumen',
    skillsTitle: 'Habilidades',
    projectsTitle: 'Proyectos',
    experienceTitle: 'Experiencia',
    certificationsTitle: 'Certificaciones',
    educationTitle: 'Estudios',
    aiTitle: 'Como trabajo',
    aiText:
      'Construyo con IA como copiloto: defino la especificacion y la arquitectura, la IA implementa, y yo reviso, pruebo y apruebo cada fase antes de entregar. En el trabajo aplique el mismo enfoque con Cursor para automatizar el analisis de un sistema heredado.',
  },
  contact: {
    eyebrow: 'TERMINAL',
    title: 'CONTACTO',
    subtitle: 'Abri un canal de comunicacion: escribime por mail o por LinkedIn.',
    bootLine1: 'INICIALIZANDO CANAL SEGURO...',
    bootLine2: 'CONEXION ESTABLECIDA.',
    bootLine3: 'ESPERANDO TU MENSAJE_',
    emailLabel: 'EMAIL',
    copy: 'Copiar',
    copied: 'Copiado',
    write: 'Escribir',
    availability: 'Disponible para oportunidades full-time y freelance · Mar del Plata, Argentina · Remoto o hibrido',
  },
  footer: {
    tagline: 'Construido pixel por pixel.',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
  easterEgg: {
    activated: 'MODO SECRETO ACTIVADO',
    message: 'Encontraste el Codigo Konami. Aca hay un secreto solo para verdaderos jugadores:',
    secretFact:
      'Este portfolio fue construido con React, Next.js, TypeScript y Framer Motion — con IA como copiloto y cada decision revisada por mi.',
    close: 'Cerrar secreto',
  },
  music: {
    on: 'Musica activada',
    off: 'Musica desactivada',
    toggle: 'Activar o desactivar musica de fondo',
    volume: 'Volumen de la musica',
  },
  language: {
    toggle: 'Cambiar idioma',
  },
  a11y: {
    skipToContent: 'Saltar al contenido principal',
  },
};

export default es;
