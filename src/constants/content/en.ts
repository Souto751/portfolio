const en = {
  meta: {
    title: 'Agustin Souto — Full Stack Developer',
    description:
      'Full Stack Developer building complete products across web, mobile, desktop and AI integrations, working with AI as a copilot. Explore an interactive pixel-art RPG portfolio.',
    ogAlt: 'Agustin Souto — Full Stack Developer portfolio',
  },
  landing: {
    name: 'AGUSTIN SOUTO',
    title: 'FULL STACK DEVELOPER',
    level: 'LEVEL 27',
    tagline: 'A new build has entered the server.',
    start: 'START GAME',
    pressStart: 'PRESS START TO BEGIN THE QUEST',
    skip: 'Skip intro',
    quickCv: 'In a hurry? See the quick CV',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    ai: 'AI',
    education: 'Education',
    resume: 'Resume',
    contact: 'Contact',
    quickCv: 'Quick CV',
    menuTitle: 'MAIN MENU',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  about: {
    eyebrow: 'CHARACTER PROFILE',
    name: 'Agustin Souto',
    profession: 'Full Stack Developer',
    location: 'Mar del Plata, Argentina (Remote-friendly)',
    dialogueLabel: 'AGUSTIN',
    summary:
      'Full Stack Developer at Hospital Privado de Comunidad since 2022: I build internal web systems, migrate legacy desktop and 4GL systems, and work with sensitive health data. On my own I ship complete products across web, mobile, desktop and AI, with AI as a copilot: I define the product and the architecture, and I review, test and deliver every phase.',
    continue: 'Press to continue...',
    classesTitle: 'UNLOCKED CLASSES',
    classes: [
      'Full Stack Web — Vue.js, React, JSP, Node.js, NestJS, PostgreSQL',
      'Legacy systems — 4GL, Java desktop and Linux shell',
      'Mobile — React Native / Expo with native Android modules',
      'Desktop — Python apps with Windows installers',
      'AI Integration — local LLMs with tool calling and guardrails',
      'Game Dev — systems design, economy and progression',
    ],
    quickFacts: {
      title: 'QUICK FACTS',
      experience: 'Full Stack Developer in healthcare since 2022, plus 5 personal projects built end to end',
      focus: 'At work: JavaScript, Vue.js, JSP, Java and 4GL. On my own: TypeScript, React, Node.js and NestJS',
      languages: 'Spanish (native), English (professional working proficiency)',
      availability: 'Open to full-time and contract opportunities',
    },
  },
  skills: {
    eyebrow: 'INVENTORY',
    title: 'SKILLS & EQUIPMENT',
    subtitle: 'Every item is backed by a project you can open below.',
    usedIn: 'Used in',
    atWork: 'At work',
    projectsCount: 'projects',
    projectCount: 'project',
    filterAll: 'All',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Database',
      devops: 'DevOps',
      tools: 'Tools',
      ai: 'AI',
    },
    items: {
      reactSword: {
        name: 'React',
        itemName: 'React Sword',
        description:
          'Main weapon for interfaces: the Automotive Empire PWA, the Stories Creator canvas editor and this portfolio.',
      },
      nextShield: {
        name: 'Next.js',
        itemName: 'Next.js Shield',
        description: 'Static rendering, metadata and SEO for this portfolio, including the quick CV view.',
      },
      tsCrystal: {
        name: 'TypeScript',
        itemName: 'TypeScript Crystal',
        description:
          'Typed end to end: shared DTO packages between the NestJS API and the React client, and the whole TinMangas app.',
      },
      nodeFlame: {
        name: 'Node.js',
        itemName: 'Node Flame',
        description:
          'Zero-dependency HTTP server with built-in SQLite for Stories Creator, and the Mineflayer bot runtime behind Aetheria.',
      },
      nestHammer: {
        name: 'NestJS',
        itemName: 'NestJS Hammer',
        description:
          'Modular REST API for Automotive Empire: JWT auth with refresh tokens, game economy and race resolution.',
      },
      postgresRelic: {
        name: 'PostgreSQL + Prisma',
        itemName: 'PostgreSQL Relic',
        description: 'Querying and handling data in PostgreSQL at work; relational schema and Prisma migrations in Automotive Empire.',
      },
      expoBoots: {
        name: 'React Native / Expo',
        itemName: 'Expo Boots',
        description:
          'TinMangas Android app: gestures, RTL reading, Storage Access Framework and a custom Kotlin module for RAR files.',
      },
      pythonStaff: {
        name: 'Python',
        itemName: 'Python Staff',
        description:
          'Game Manager desktop app: readers for Steam, Epic, GOG, EA and Xbox libraries, tray icon and installer build.',
      },
      dockerBackpack: {
        name: 'Docker',
        itemName: 'Docker Backpack',
        description: 'Basic level: at work I set up with Docker a web page to manage Linux users and their SSH keys; local PostgreSQL with docker compose in Automotive Empire.',
      },
      llmOrb: {
        name: 'LLMs / Ollama',
        itemName: 'LLM Orb',
        description:
          'Local model with tool calling: the AI picks validated tools with permissions per player instead of writing raw commands.',
      },
      ciScroll: {
        name: 'GitHub Actions',
        itemName: 'CI Scroll',
        description: 'Signed APK releases with in-app auto-update for TinMangas and a basic CI pipeline for the monorepo.',
      },
      vueBlade: {
        name: 'Vue.js',
        itemName: 'Vue Blade',
        description: 'Front-end framework for internal web systems at the hospital, including a legacy desktop system migrated to the web.',
      },
      jspScroll: {
        name: 'JSP / HTML / CSS',
        itemName: 'JSP Tome',
        description: 'Server-rendered web pages for internal systems and a portal for external organizations.',
      },
      javaAxe: {
        name: 'Java',
        itemName: 'Java Axe',
        description: 'Maintenance and bug fixing of existing desktop applications at the hospital.',
      },
      legacyRune: {
        name: '4GL',
        itemName: 'Legacy Rune',
        description: 'Fixes and requested changes on the hospital 4GL systems running on Informix databases, plus the analysis and migration of those systems to a new server.',
      },
      awsCloud: {
        name: 'AWS',
        itemName: 'AWS Cloud',
        description: 'Basic level: the NGO website we built in the Alkemy acceleration was deployed on Amazon Web Services.',
      },
      linuxLantern: {
        name: 'Linux shell',
        itemName: 'Linux Lantern',
        description: 'Everyday shell use to work with the 4GL systems and their server, including managing users and SSH keys.',
      },
      aiCompanion: {
        name: 'ChatGPT / Cursor',
        itemName: 'AI Companion',
        description: 'AI tools integrated into daily work: legacy code analysis, bug fixing and assisted development. With Cursor I automated the analysis of 4GL programs during a server migration.',
      },
      automationGear: {
        name: 'n8n',
        itemName: 'Automation Gear',
        description: 'Workflow automation: the first tool I used to automate the analysis of 4GL programs during a server migration.',
      },
      informixVault: {
        name: 'Informix',
        itemName: 'Informix Vault',
        description: 'Data handling on the Informix databases behind the hospital 4GL systems, and workstation setup with Setnet to connect to them.',
      },
      gitBranch: {
        name: 'Git / GitLab',
        itemName: 'GitLab Branch',
        description: 'Daily version control at work on GitLab (branches, merge requests), and Git/GitHub for every personal project.',
      },
      jenkinsGolem: {
        name: 'Jenkins',
        itemName: 'Jenkins Golem',
        description: 'Deploying updates of the hospital systems through Jenkins jobs.',
      },
      jiraMap: {
        name: 'Jira',
        itemName: 'Jira Map',
        description: 'Task tracking and team workflow at the hospital.',
      },
      tailwindGem: {
        name: 'TailwindCSS',
        itemName: 'Tailwind Gem',
        description: 'Responsive, accessible interfaces for the Automotive Empire PWA and this portfolio.',
      },
    },
  },
  experience: {
    eyebrow: 'QUEST LOG',
    title: 'EXPERIENCE',
    subtitle: 'Completed quests, in chronological order.',
    present: 'Present',
    achievements: 'Achievements',
    technologies: 'Technologies',
    viewDetails: 'View Details',
    hideDetails: 'Hide Details',
    questComplete: 'QUEST COMPLETE',
    questActive: 'QUEST IN PROGRESS',
    items: {
      job1: {
        company: 'Hospital Privado de Comunidad',
        role: 'Full Stack Developer',
        location: 'Mar del Plata, Argentina',
        achievements: [
          'Full stack development of internal web systems with HTML, CSS, JavaScript and JSP, later adopting Vue.js as the front-end framework.',
          'Migrated a legacy desktop system to a web application for an internal administrative and financial process.',
          'Joined a cross-functional team, with people from different hospital departments, in the "Digital Periodic Exams Marathon" project to digitize periodic medical exams. My task was building the web portal for external organizations, with restricted access to each one’s information. We presented it at the hospital 3rd Internal Continuous Improvement Day and at the 28th SAMECO Continuous Improvement Meeting 2023.',
          'Led the analysis and migration of 4GL systems to a new server, identifying unused programs and files so they were not migrated and saving storage space.',
          'Automated that analysis, first with n8n and then with Cursor, using scripted commands and AI-assisted code analysis.',
          'Integrated AI tools (ChatGPT and Cursor) and automation (n8n) into daily work: legacy code analysis, bug fixing and assisted development.',
          'Member of the 4GL team: fixing existing bugs and implementing requested changes, with a plan to migrate those systems to web versions.',
          'Maintenance and bug fixing of existing Java desktop applications, plus software installation on hospital workstations.',
          'Configured workstations with Setnet to access the databases and the programs that depend on them.',
          'Data handling on Informix and PostgreSQL databases.',
          'Set up with Docker a web page to manage Linux users and their SSH keys.',
          'Version control with Git on GitLab, system updates deployed through Jenkins, and task tracking in Jira.',
          'Worked with sensitive health data, handling it under strict confidentiality.',
        ],
      },
      job2: {
        company: 'Alkemy',
        role: 'Full Stack Developer — JavaScript Acceleration',
        location: 'Remote',
        achievements: [
          'As part of a team with its leader, built a website for an NGO with React on the front end and Node.js on the back end, on Amazon Web Services (AWS).',
          'Focused on the front end, building the application components; on the back end I handled configuration tasks.',
          'Agile workflow: weekly virtual meetings to present progress and daily messages to assign the tasks of the day.',
          'Presented the final project in a 30-minute demo.',
        ],
      },
    },
  },
  projects: {
    eyebrow: 'INVENTORY BAG',
    title: 'PROJECTS',
    subtitle: 'Real builds, each with its current status and how it was made.',
    problem: 'Problem',
    solution: 'Solution',
    architecture: 'Architecture',
    challenges: 'Challenges',
    results: 'Results',
    role: 'My role & the AI',
    screenshot: 'Screenshot',
    status: 'Status',
    technologies: 'Technologies',
    github: 'GitHub',
    demo: 'Live Demo',
    download: 'Download',
    close: 'Close',
    items: {
      automotiveEmpire: {
        name: 'Automotive Empire',
        status: 'In development — phase 5 of 10',
        description:
          'An idle → tycoon → automotive RPG for the web: repair your first used car by clicking, then build factories, design vehicles and race.',
        problem:
          'Idle games tend to get repetitive fast. The goal was a progression that changes genre as you grow: clicker, then management, then racing.',
        solution:
          'An installable PWA with passive production, employees, a resource chain (steel feeds the dealership), a vehicle designer and races resolved by vehicle stats.',
        architecture:
          'pnpm monorepo: React + Vite + PixiJS client, NestJS + Prisma + PostgreSQL API, shared-types and versioned game-config packages, VitePress docs and CI.',
        challenges:
          'Keeping the game balance out of the code: all numbers live in a versioned config package shared by client and server, so tuning does not require touching logic.',
        results:
          'Full 20-section game design document, end-to-end auth (register/login/refresh), the first five production stages and the first racing region with a boss.',
        role:
          'I wrote and approved the game design document and split it into phases with a checkpoint each. The AI implemented the code phase by phase; I played, reviewed and approved every phase before the next one started.',
      },
      storiesCreator: {
        name: 'Stories Creator',
        status: 'Complete — v1.0',
        description:
          'A web generator for 1080×1920 story and status ads, with a canvas editor and a protected API so a bot can publish the images.',
        problem:
          'Making promo images for stories every day by hand is slow, and handing a bot access to a web app must not open a security hole.',
        solution:
          '35 templates, brand kit (logo, colors, fonts), layers with drag/resize/rotate, undo/redo, story safe zones and a draft → ready → published lifecycle consumed by a bot.',
        architecture:
          'Plain Node.js 22 server with zero npm dependencies and built-in SQLite, vanilla JS front end with no innerHTML, CLI for users and bot tokens, Node test runner.',
        challenges:
          'Security from day one: scrypt passwords, mandatory TOTP 2FA with encrypted secrets, progressive lockout, CSRF tokens, strict CSP, hashed sessions and atomic claim for the bot.',
        results:
          'Test suite covering login, 2FA, lockout, CSRF, user isolation, image validation and the full bot cycle.',
        role:
          'I set the security requirements and the bot contract (lifecycle, claim, statuses). The AI wrote the implementation and the tests; I reviewed each security control and validated the flow end to end.',
      },
      aetheria: {
        name: 'Aetheria Game Master',
        status: 'In active use — ongoing',
        description:
          'An AI game master bot for a modded Minecraft server: talks in natural language, moves around, builds, runs quests and moderates.',
        problem:
          'Running an RPG server means building cities, writing quests, keeping order and answering players all day — too much for one admin.',
        solution:
          'A bot that understands whispered requests, plans and builds with WorldEdit, generates quest chains, manages safe zones and applies escalating penalties.',
        architecture:
          'Node.js + Mineflayer with pathfinding, local LLM via Ollama with tool calling, JSON world data (regions, cities, factions, NPCs, quests) with automatic backups, Discord integration.',
        challenges:
          'Letting an LLM act on a live world safely: the model never writes game commands, it picks validated tools, sees only the tools its speaker is allowed to use, and builds wait for explicit confirmation.',
        results:
          'Running on the server with navigation, controlled building with undo, AI conversation, quests, bosses, rankings and moderation.',
        role:
          'I designed the permission model and the safety rules, and I test it in the live server. The AI implemented the modules following those rules; I keep a backlog with the next features.',
      },
      tinmangas: {
        name: 'TinMangas',
        status: 'Released — used by friends',
        description:
          'An Android reader for manga and comics in .cbr / .cbz files, with series grouping, covers and progress saved locally.',
        problem:
          'Most readers are bloated or online-first. I wanted a fast offline reader for my own files that reads right to left by default.',
        solution:
          'Pick a folder, the app groups volumes by series, extracts pages to cache on first open and remembers the last page. Manga / comic modes, light and dark themes.',
        architecture:
          'Expo SDK 57 + React Native (New Architecture, Hermes), local JSON storage, a custom Expo module in Kotlin with 7-Zip-JBinding for RAR, GitHub Actions for signed releases.',
        challenges:
          'Hermes has no WebAssembly, so the JS RAR library failed in the APK. Solved it with a native module. Also had to keep the same signing key so updates install over the old app.',
        results:
          'Installable APK with in-app update banner that downloads new releases from GitHub.',
        role:
          'I defined the product (offline, no account, no backend) and the release flow. The AI implemented the app and the native module; I tested every build on my phone and decided what goes in.',
      },
      gameManager: {
        name: 'Game Manager',
        status: 'Released — v1.1.0',
        description:
          'A Windows desktop app that brings together your games from Steam, Epic, GOG, EA and Xbox in a single library.',
        problem:
          'PC games end up split across five launchers, so finding and opening a game means remembering where you bought it.',
        solution:
          'Scans installed libraries from each store plus custom folders, fetches covers (falling back to the Steam store when the original store has none), and launches games from one place. Filters out tools that are not games, runs in the tray and can start with Windows.',
        architecture:
          'Python with CustomTkinter UI, one reader module per store, cover fetcher, tray icon with pystray, PyInstaller build and a Windows installer.',
        challenges:
          'Every store keeps its library in a different place and format, so each one needed its own reader behind a common interface. Large libraries made the grid slow and glitchy, so each card is now rendered as a single image on background threads.',
        results: 'Version 1.1.0 released on GitHub with a per-user Windows installer (no admin rights), user data in AppData migrated from 1.0, and update notifications based on GitHub releases.',
        role:
          'I defined which stores to support and how the app should behave. The AI implemented the readers and the UI; I tested it on my own libraries and packaged the release.',
      },
    },
  },
  ai: {
    eyebrow: 'SPELLBOOK',
    title: 'HOW I WORK WITH AI',
    subtitle:
      'All of these projects were built with AI as a copilot. I say it upfront, because the interesting part is how the work is directed.',
    steps: {
      define: {
        title: '1. Define',
        text: 'I write the spec first: goal, rules, limits and phases. For Automotive Empire that was a 20-section design document before the first line of code.',
      },
      delegate: {
        title: '2. Delegate with context',
        text: 'The AI writes code following context files that live in the repo — fixed rules, decisions already made, what not to touch — so every session starts without losing the thread.',
      },
      review: {
        title: '3. Review & test',
        text: 'I test each phase in real use, read the changes, catch errors and ask for fixes. Nothing moves to the next phase without my approval.',
      },
      ship: {
        title: '4. Ship',
        text: 'Installable builds, CI and docs: a signed APK with auto-update, a Windows installer, READMEs with setup steps.',
      },
    },
    principlesTitle: 'PRINCIPLES',
    principles: [
      'Product and architecture decisions are mine; the AI speeds up implementation.',
      'Least privilege: in Aetheria the model picks validated tools, it never runs free-form commands.',
      'Transparency: every project states what I did and what the AI did.',
      'Also at work: I used Cursor to automate the analysis of 4GL programs during a server migration.',
    ],
  },
  education: {
    eyebrow: 'ACADEMY',
    title: 'EDUCATION',
    subtitle: 'Studies and certificates earned along the way.',
    studiesTitle: 'STUDIES',
    average: 'Average grade',
    languages: 'Languages',
    viewDiploma: 'View diploma',
    viewCertificate: 'View certificate',
    openFull: 'Open full size',
    page: 'Page',
    verify: 'Verify',
    items: {
      tecnicatura: {
        degree: 'Higher Technical Degree in Systems Analysis',
        institution: 'Instituto Superior de Formacion Tecnica N.º 151',
        location: 'Mar del Plata, Argentina',
        status: 'Graduated: Systems Analyst',
      },
    },
  },
  certifications: {
    eyebrow: 'ACHIEVEMENTS UNLOCKED',
    title: 'CERTIFICATIONS',
    subtitle: 'Recognitions and certificates earned along the way.',
    issuedBy: 'Issued by',
    items: {
      mejoraContinua: {
        name: 'Continuous Improvement 2023 — Digital Periodic Exams Marathon',
        issuer: 'Hospital Privado de Comunidad, Fundacion Medica de Mar del Plata and SAMECO',
        description: 'Cross-functional group work to digitize periodic medical exams. We presented it as a poster at the 3rd Internal Continuous Improvement Day and, as authors, at the 28th SAMECO Continuous Improvement Meeting 2023. My part was building the web portal.',
      },
      alkemy: {
        name: 'Alkemy Job-Ready — JS Acceleration',
        issuer: 'Alkemy',
        description: 'Certified as a "job-ready" developer after completing the JS acceleration, building as a team a website for an NGO with React, Node.js and AWS.',
      },
    },
  },
  resume: {
    eyebrow: 'ANCIENT SCROLL',
    title: 'RESUME',
    subtitle: 'The full record of the journey so far, on a single printable page.',
    open: 'OPEN QUICK CV',
    lastUpdated: 'Last updated',
  },
  cv: {
    back: 'Back to the portfolio',
    print: 'Print / Save as PDF',
    summaryTitle: 'Summary',
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    experienceTitle: 'Experience',
    certificationsTitle: 'Certifications',
    educationTitle: 'Education',
    aiTitle: 'How I work',
    aiText:
      'I build with AI as a copilot: I define the spec and the architecture, the AI implements, and I review, test and approve each phase before shipping. At work I applied the same approach with Cursor to automate a legacy system analysis.',
  },
  contact: {
    eyebrow: 'TERMINAL',
    title: 'CONTACT',
    subtitle: 'Open a channel: reach me by email or LinkedIn.',
    bootLine1: 'INITIALIZING SECURE CHANNEL...',
    bootLine2: 'CONNECTION ESTABLISHED.',
    bootLine3: 'AWAITING YOUR MESSAGE_',
    emailLabel: 'EMAIL',
    copy: 'Copy',
    copied: 'Copied',
    write: 'Write',
    availability: 'Open to full-time and freelance opportunities · Mar del Plata, Argentina · Remote or hybrid',
  },
  footer: {
    tagline: 'Built pixel by pixel.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  easterEgg: {
    activated: 'SECRET MODE ACTIVATED',
    message: 'You found the Konami Code. Here is a secret only true players see:',
    secretFact:
      'This portfolio was built with React, Next.js, TypeScript and Framer Motion — with AI as a copilot and every decision reviewed by me.',
    close: 'Close secret',
  },
  music: {
    on: 'Music on',
    off: 'Music off',
    toggle: 'Toggle background music',
    volume: 'Music volume',
  },
  language: {
    toggle: 'Toggle language',
  },
  a11y: {
    skipToContent: 'Skip to main content',
  },
};

export default en;
