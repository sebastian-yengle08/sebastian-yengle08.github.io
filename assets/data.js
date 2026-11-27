/* Contenido del portafolio (ES/EN). Todo sale de mi CV. */
window.ASK_ENDPOINT = ""; /* opcional: URL de la función serverless (ver serverless/README.md) */

window.DATA = {
  es: {
    ui: {
      "nav.projects": "Proyectos", "nav.lead": "Liderazgo", "nav.ask": "Pregúntame", "nav.contact": "Contacto",
      "cv": "Descargar CV (PDF)", "mail": "Correo",
      "h.about": "cat sobre-mi.txt", "h.term": "./terminal --interactiva", "h.stack": "cat stack.json",
      "h.projects": "ls ~/proyectos", "h.lead": "cat liderazgo.log", "h.ask": "./preguntale-a-mi-cv",
      "term.hint": "Escribe un comando. Prueba <code>help</code>, <code>projects</code> o <code>ask ¿qué stack usas?</code>",
      "ask.send": "Preguntar",
      "contact.txt": "¿Tienes una idea o proyecto con IA? Conversemos."
    },
    cmd: "cat rol.txt",
    name: "Sebastian Yengle Alfaro",
    role: "Ing. de Sistemas e IA · UPAO · Trujillo, Perú",
    focus: "IA aplicada · apps web y PWA · datos y BI",
    open: ["ABIERTO A", "Prácticas pre-profesionales · desarrollo, datos e IA"],
    about: [
      "Estudiante de Ingeniería de Sistemas e Inteligencia Artificial en la UPAO (Trujillo, Perú).",
      "Aprendo desarrollando: he trabajado en un asistente para una clínica dental, un tutor para niños de primaria y una idea para detectar hallazgos arqueológicos en obras.",
      "Me gusta trabajar en equipo y aprender con proyectos de impacto real."
    ],
    metrics: [
      { n: 2831, s: "", l: "sitios arqueológicos", sub: "cruzados en HuacaScan Field", c: "var(--a2)" },
      { t: "1 de 7", l: "parlamentarios jóvenes", sub: "La Libertad · Congreso 2025", c: "var(--a3)" },
      { n: 30, s: "+", l: "países · Aspire Leaders", sub: "Harvard · cohorte 2025-1", c: "var(--a1)" },
      { n: 7, s: "", l: "países · América Solidaria", sub: "maestro de ceremonias", c: "var(--a4)" }
    ],
    stack: [
      ["Lenguajes", "var(--a1)", ["Python", "Java", "JavaScript", "TypeScript", "SQL"]],
      ["Frontend", "var(--a3)", ["React", "Next.js", "Vite", "HTML5", "CSS3", "PWA"]],
      ["Backend", "var(--a2)", ["Node.js", "Vercel Functions"]],
      ["IA", "var(--a4)", ["Groq API", "Gemini API", "Claude API", "Visión por computadora"]],
      ["Datos y BI", "var(--a4)", ["Power BI", "Power Pivot", "Excel avanzado"]],
      ["Bases de datos", "var(--a1)", ["PostgreSQL", "Supabase", "Oracle", "MySQL"]],
      ["DevOps", "var(--a2)", ["Docker", "Git", "GitHub", "Linux", "Vercel"]]
    ],
    projects: [
      { id: "huacascan", c: "var(--a2)", title: "HuacaScan Field",
        tags: "Next.js · TypeScript · Supabase · Gemini · Claude",
        desc: "PWA para operarios de obra: fotografía el terreno con GPS, incluso sin conexión, y estima con visión por computadora la probabilidad de evidencia arqueológica. Cruza cada análisis con 2 831 sitios del Perú; un arqueólogo colegiado dictamina y cada dictamen alimenta un modelo que se reentrena.",
        st: ["repo próximamente"] },
      { id: "kodi", c: "var(--a4)", title: "Kodi",
        tags: "React · Vite · Supabase · Groq API · PWA",
        desc: "PWA educativa para niños de 1.° a 6.° de primaria con un tutor de IA adaptado al grado que explica sin dar la respuesta directa. Gamificación completa (estrellas, XP, rachas, misiones, tienda con 6 mascotas y 14 accesorios), zona protegida para padres, sincronización entre dispositivos y modo offline.",
        st: ["repo próximamente"] },
      { id: "dentibot", c: "var(--a1)", title: "DentiBot",
        tags: "JavaScript · IA conversacional · Web Push",
        desc: "Asistente de chat para la Clínica Dental Sonrisas (cliente real, freelance). Orienta sobre síntomas, responde horarios, servicios y precios en soles, y muestra una tarjeta de urgencias ante señales de alarma. Toda la información sale de un archivo de configuración para que la IA no invente datos.",
        st: ["código privado · cliente"] },
      { id: "flappy", c: "var(--a3)", title: "Flappy Bird · Q-Learning",
        tags: "Python · Q-Learning · IA",
        desc: "Agente autónomo que aprende a jugar Flappy Bird con Q-Learning tabular: discretiza el estado del juego y mejora su política mediante recompensas. Proyecto grupal del curso de IA.",
        st: ["ver repositorio ↗", "https://github.com/sebastian-yengle08/Flappy_Bird"] },
      { id: "triage", c: "var(--a2)", title: "Sistema de triaje hospitalario",
        tags: "Oracle · Node.js · UML",
        desc: "Sistema de gestión y clasificación de datos de pacientes en Oracle, con reportes automáticos del flujo de atención. Lideré el equipo: asigné módulos, supervisé avances, consolidé el sistema y presenté los resultados.",
        st: ["proyecto universitario"] },
      { id: "powerbi", c: "var(--a4)", title: "Dashboards con Power BI",
        tags: "Power BI · Power Pivot · Excel",
        desc: "Proyecto final de Métodos Cuantitativos para los Negocios (UPAO): tableros interactivos para analizar indicadores de negocio y presentar hallazgos que apoyen la toma de decisiones.",
        st: ["proyecto universitario"] }
    ],
    lead: [
      { time: "2025", title: "Aspire Leaders Program · Harvard University", sub: "Cohorte 2025-1 · programa global de liderazgo con jóvenes de más de 30 países", c: "var(--a1)" },
      { time: "2025", title: "Parlamentario Joven · Congreso de la República", sub: "1 de 7 representantes juveniles de La Libertad · elaboré un proyecto de ley", c: "var(--a3)" },
      { time: "2024 → hoy", title: "Director · AbonaVida (ONG)", sub: "Estrategia y coordinación del equipo de voluntarios", c: "var(--a2)" },
      { time: "2024 – 2025", title: "Maestro de Ceremonias · América Solidaria Perú", sub: "Conducción del evento institucional de una ONG de 7 países de Latinoamérica", c: "var(--a4)" },
      { time: "2023 – 2024", title: "Campista y luego Coach · LALA", sub: "Latin American Leadership Academy", c: "var(--a1)" }
    ],
    ask: {
      hint: "Pregunta lo que quieras sobre mi trayectoria. Respondo solo con lo que está en mi CV, sin inventar nada.",
      ph: "Ej.: ¿qué proyectos tienes con IA?",
      sugg: ["¿Qué stack usas?", "¿Qué es HuacaScan Field?", "¿Qué liderazgo tienes?", "¿Estás buscando prácticas?", "¿Cómo te contacto?"],
      intro: "Hola, soy la versión interactiva del CV de Sebastián. ¿Qué quieres saber?",
      none: "Eso no está en mi CV todavía. Puedes preguntarme por mi stack, proyectos, liderazgo, estudios o contacto, o escribir a yenglealfarosebastian@gmail.com.",
      src: "fuente: CV"
    },
    term: {
      welcome: "Bienvenido. Escribe 'help' para ver los comandos.",
      notfound: "comando no encontrado: ",
      help: [
        "Comandos disponibles:",
        "  whoami        quién soy",
        "  projects      mis proyectos",
        "  stack         tecnologías",
        "  leadership    liderazgo",
        "  contact       cómo contactarme",
        "  cv            abrir mi CV (PDF)",
        "  ask <texto>   preguntar sobre mi CV",
        "  lang es|en    cambiar idioma",
        "  theme dark|light   cambiar tema",
        "  clear         limpiar"
      ],
      hire: "Permiso concedido. Escríbeme: yenglealfarosebastian@gmail.com",
      cv: "Abriendo CV_Sebastian_Yengle.pdf …",
      langset: "Idioma: español", themeset: "Tema: "
    },
    facts: [
      { k: ["huacascan", "huaca", "arqueolog", "hallazgo", "radar"], a: "HuacaScan Field es una PWA para operarios de obra: fotografía el terreno con GPS (incluso sin conexión) y usa visión por computadora (Gemini y Claude) para estimar la probabilidad de evidencia arqueológica. Cruza cada análisis con 2 831 sitios arqueológicos del Perú y un arqueólogo colegiado dictamina desde un panel con mapa; cada dictamen alimenta un modelo que se reentrena. Stack: Next.js, TypeScript, Supabase y Vercel." },
      { k: ["kodi", "educativ", "ninos", "primaria", "tutor", "gamific"], a: "Kodi es una PWA educativa para niños de 1.° a 6.° de primaria. Tiene un tutor de IA (Groq) adaptado al grado que explica sin dar la respuesta directa, gamificación (estrellas, XP, rachas, misiones y una tienda con 6 mascotas y 14 accesorios), zona protegida para padres, sincronización entre dispositivos con Supabase y modo offline." },
      { k: ["dentibot", "dental", "clinica", "dentista", "freelance", "cliente"], a: "DentiBot es un asistente virtual con IA que desarrollé como freelance para la Clínica Dental Sonrisas (San Andrés, Perú). Orienta sobre síntomas, responde horarios, servicios y precios en soles, detecta señales de alarma y muestra una tarjeta de urgencias. Toda la información sale de un archivo de configuración para evitar que la IA invente datos; también envía notificaciones de higiene dental." },
      { k: ["triaje", "triage", "hospital", "pacientes"], a: "El Sistema de Triaje Hospitalario fue un proyecto grupal de la UPAO en el que fui líder del equipo de desarrollo. Gestiona y clasifica datos de pacientes en Oracle y genera reportes automáticos del flujo de atención. Asigné módulos, supervisé avances, consolidé el sistema y presenté los resultados ante los docentes." },
      { k: ["flappy", "qlearning", "q-learning", "refuerzo", "reinforcement", "agente"], a: "Es un agente autónomo que aprende a jugar Flappy Bird con Q-Learning tabular: discretiza el estado del juego y mejora su política mediante recompensas. Es un proyecto grupal del curso de IA y el código está en github.com/sebastian-yengle08/Flappy_Bird." },
      { k: ["power", "bi", "dashboard", "tablero", "excel", "reporte", "analisis"], a: "Hice tableros interactivos en Power BI y Power Pivot como proyecto final de Métodos Cuantitativos para los Negocios (UPAO). Uso también Excel avanzado, SQL y Python para convertir datos en reportes y decisiones." },
      { k: ["aspire", "harvard"], a: "Fui seleccionado para Aspire Leaders Program de Harvard University (cohorte 2025-1), un programa global de liderazgo con jóvenes de más de 30 países. Completé módulos de liderazgo ejecutivo, toma de decisiones bajo incertidumbre y gestión de equipos de alto rendimiento." },
      { k: ["parlament", "congreso", "ley", "libertad"], a: "En 2025 fui Parlamentario Joven Regional de La Libertad en el Congreso de la República: 1 de 7 representantes juveniles elegidos en una convocatoria nacional competitiva (18–29 años). Integré bancadas, debatí propuestas y elaboré un proyecto de ley." },
      { k: ["abonavida", "ong", "voluntar"], a: "Soy Director de AbonaVida, una organización sin fines de lucro, desde 2024. Lidero la estrategia y coordino al equipo de voluntarios, gestionando recursos y tiempos para cumplir objetivos de impacto social." },
      { k: ["america", "solidaria", "ceremonia", "maestro", "conversatorio"], a: "En América Solidaria Perú fui Maestro de Ceremonias y participante del Conversatorio de Líderes (2024–2025). Conduje el evento institucional de esta ONG internacional, presente en 7 países de América Latina." },
      { k: ["lala", "coach", "campista"], a: "En la Latin American Leadership Academy (LALA) participé primero como campista y luego como Coach, acompañando a nuevos campistas en su formación (2023–2024)." },
      { k: ["lider", "liderazgo", "voluntariado", "impacto"], a: "Mi liderazgo incluye: Aspire Leaders de Harvard (2025), Parlamentario Joven de La Libertad (2025), Director de AbonaVida (ONG), Maestro de Ceremonias en América Solidaria Perú y Coach en LALA. En lo técnico, lideré el equipo de desarrollo del sistema de triaje hospitalario." },
      { k: ["ia", "inteligencia", "ai", "modelo", "groq", "gemini", "claude", "vision", "llm"], a: "Trabajo con las APIs de Groq, Gemini y Claude y con visión por computadora. Ejemplos: HuacaScan Field (visión por computadora para estimar evidencia arqueológica), Kodi (tutor de IA con Groq) y DentiBot (asistente que responde solo con datos controlados). También entrené un agente con Q-Learning para Flappy Bird." },
      { k: ["base", "bases", "sql", "oracle", "postgres", "mysql", "supabase"], a: "Trabajo con PostgreSQL, Supabase, Oracle y MySQL, y uso SQL para análisis. En la universidad diseñé un sistema en Oracle (triaje hospitalario)." },
      { k: ["stack", "tecnolog", "herramient", "lenguaj", "program", "usas", "skills", "habilid", "react", "node", "python", "java"], a: "Lenguajes: Python, Java, JavaScript, TypeScript y SQL. Frontend: React, Next.js, Vite y PWA. Backend: Node.js y Vercel Functions. IA: Groq, Gemini y Claude APIs, visión por computadora. Datos y BI: Power BI, Power Pivot, Excel avanzado. Bases de datos: PostgreSQL, Supabase, Oracle y MySQL. DevOps: Docker, Git, GitHub, Linux y Vercel." },
      { k: ["proyect", "portafolio", "hecho", "trabajos", "construid", "hiciste"], a: "Mis proyectos principales: HuacaScan Field (PWA con visión por computadora), Kodi (app educativa con tutor de IA), DentiBot (asistente para una clínica dental real), un agente de Q-Learning para Flappy Bird, el sistema de triaje hospitalario y dashboards en Power BI. Pregúntame por cualquiera." },
      { k: ["estudi", "univers", "upao", "carrera", "ciclo", "educacion", "formacion", "ingles", "idioma"], a: "Estudio Ingeniería de Sistemas e Inteligencia Artificial en la Universidad Privada Antenor Orrego (UPAO), desde marzo de 2024 (6.° ciclo, en curso). Tengo inglés intermedio (Centro Peruano Americano El Cultural, 2023)." },
      { k: ["experien", "trabaj", "laboral", "melissa", "empleo"], a: "Mi experiencia laboral: Atención al Cliente / Reponedor en Comercial Melissa (enero 2025), donde gestioné consultas y reclamos y actualicé registros de inventario. Además, desarrollé DentiBot como proyecto freelance para un cliente real." },
      { k: ["practic", "disponib", "busc", "intern", "contrat", "vacante", "oportunidad"], a: "Sí, estoy abierto a prácticas pre-profesionales en desarrollo, datos e IA. Escríbeme a yenglealfarosebastian@gmail.com o por LinkedIn (linkedin.com/in/sebastian-y-716389274)." },
      { k: ["contact", "correo", "email", "mail", "linkedin", "github", "escrib", "telefono"], a: "Correo: yenglealfarosebastian@gmail.com · LinkedIn: linkedin.com/in/sebastian-y-716389274 · GitHub: github.com/sebastian-yengle08" },
      { k: ["cv", "curricul", "hoja", "pdf", "descarg"], a: "Puedes descargar mi CV en PDF con el botón 'Descargar CV' al inicio de esta página, o escribiendo el comando 'cv' en la terminal." },
      { k: ["donde", "vives", "ubic", "ciudad", "trujillo", "peru"], a: "Vivo en Trujillo, Perú." },
      { k: ["forge", "dtn", "incubad", "startup", "emprend"], a: "Participé en el programa Tu Futuro de Forge Perú (habilidades socioemocionales y digitales, desde 2024) y en Discovery, la incubadora de negocios de DTN Hub Digital UPAO (septiembre de 2024)." },
      { k: ["quien", "eres", "presenta", "sebastian", "nombre", "hablame", "cuentame", "sobre"], a: "Soy Sebastian Yengle Alfaro, estudiante de Ingeniería de Sistemas e Inteligencia Artificial en la UPAO (Trujillo, Perú). Me enfoco en IA aplicada, apps web y PWA, y datos y BI. Aprendo desarrollando proyectos con impacto real y me gusta trabajar en equipo." }
    ]
  },

  en: {
    ui: {
      "nav.projects": "Projects", "nav.lead": "Leadership", "nav.ask": "Ask me", "nav.contact": "Contact",
      "cv": "Download CV (PDF)", "mail": "Email",
      "h.about": "cat about-me.txt", "h.term": "./terminal --interactive", "h.stack": "cat stack.json",
      "h.projects": "ls ~/projects", "h.lead": "cat leadership.log", "h.ask": "./ask-my-cv",
      "term.hint": "Type a command. Try <code>help</code>, <code>projects</code> or <code>ask what stack do you use?</code>",
      "ask.send": "Ask",
      "contact.txt": "Got an idea or an AI project? Let's talk."
    },
    cmd: "cat role.txt",
    name: "Sebastian Yengle Alfaro",
    role: "Systems & AI Engineering · UPAO · Trujillo, Peru",
    focus: "Applied AI · web apps & PWAs · data & BI",
    open: ["OPEN TO", "Internships · software, data & AI"],
    about: [
      "Systems Engineering & Artificial Intelligence student at UPAO (Trujillo, Peru).",
      "I learn by building: I've worked on an assistant for a dental clinic, a tutor for primary school kids, and an idea to flag archaeological finds at construction sites.",
      "I enjoy teamwork and learning from projects with real-world impact."
    ],
    metrics: [
      { n: 2831, s: "", l: "archaeological sites", sub: "cross-checked in HuacaScan", c: "var(--a2)" },
      { t: "1 of 7", l: "youth parliamentarians", sub: "La Libertad · Congress 2025", c: "var(--a3)" },
      { n: 30, s: "+", l: "countries · Aspire Leaders", sub: "Harvard · cohort 2025-1", c: "var(--a1)" },
      { n: 7, s: "", l: "countries in the NGO", sub: "América Solidaria · MC", c: "var(--a4)" }
    ],
    stack: [
      ["Languages", "var(--a1)", ["Python", "Java", "JavaScript", "TypeScript", "SQL"]],
      ["Frontend", "var(--a3)", ["React", "Next.js", "Vite", "HTML5", "CSS3", "PWA"]],
      ["Backend", "var(--a2)", ["Node.js", "Vercel Functions"]],
      ["AI", "var(--a4)", ["Groq API", "Gemini API", "Claude API", "Computer vision"]],
      ["Data & BI", "var(--a4)", ["Power BI", "Power Pivot", "Advanced Excel"]],
      ["Databases", "var(--a1)", ["PostgreSQL", "Supabase", "Oracle", "MySQL"]],
      ["DevOps", "var(--a2)", ["Docker", "Git", "GitHub", "Linux", "Vercel"]]
    ],
    projects: [
      { id: "huacascan", c: "var(--a2)", title: "HuacaScan Field",
        tags: "Next.js · TypeScript · Supabase · Gemini · Claude",
        desc: "PWA for construction crews: photographs the terrain with GPS, even offline, and uses computer vision to estimate the probability of archaeological evidence. Each analysis is cross-checked against 2,831 Peruvian sites; a licensed archaeologist rules on it and each ruling feeds a model that retrains.",
        st: ["repo coming soon"] },
      { id: "kodi", c: "var(--a4)", title: "Kodi",
        tags: "React · Vite · Supabase · Groq API · PWA",
        desc: "Educational PWA for grades 1–6 with a grade-adapted AI tutor that explains without giving the answer away. Full gamification (stars, XP, streaks, missions, a store with 6 pets and 14 accessories), a protected parent zone, cross-device sync and offline mode.",
        st: ["repo coming soon"] },
      { id: "dentibot", c: "var(--a1)", title: "DentiBot",
        tags: "JavaScript · Conversational AI · Web Push",
        desc: "Chat assistant for Clínica Dental Sonrisas (real client, freelance). Guides patients on symptoms, answers hours, services and prices in soles, and shows an emergency card on red-flag signs. All answers come from a config file so the AI can't make things up.",
        st: ["private code · client work"] },
      { id: "flappy", c: "var(--a3)", title: "Flappy Bird · Q-Learning",
        tags: "Python · Q-Learning · AI",
        desc: "Autonomous agent that learns to play Flappy Bird with tabular Q-Learning: it discretizes the game state and improves its policy through rewards. Group project for the AI course.",
        st: ["view repository ↗", "https://github.com/sebastian-yengle08/Flappy_Bird"] },
      { id: "triage", c: "var(--a2)", title: "Hospital triage system",
        tags: "Oracle · Node.js · UML",
        desc: "Patient data management and classification system on Oracle, with automatic reports on patient flow. I led the team: assigned modules, tracked progress, integrated the system and presented the results.",
        st: ["university project"] },
      { id: "powerbi", c: "var(--a4)", title: "Power BI dashboards",
        tags: "Power BI · Power Pivot · Excel",
        desc: "Final project for Quantitative Methods for Business (UPAO): interactive dashboards to analyze business indicators and present findings that support decision-making.",
        st: ["university project"] }
    ],
    lead: [
      { time: "2025", title: "Aspire Leaders Program · Harvard University", sub: "Cohort 2025-1 · global leadership program with youth from 30+ countries", c: "var(--a1)" },
      { time: "2025", title: "Regional Youth Parliamentarian · Congress of Peru", sub: "1 of 7 youth representatives for La Libertad · drafted a bill", c: "var(--a3)" },
      { time: "2024 → now", title: "Director · AbonaVida (nonprofit)", sub: "Strategy and coordination of the volunteer team", c: "var(--a2)" },
      { time: "2024 – 2025", title: "Master of Ceremonies · América Solidaria Perú", sub: "Hosted the institutional event of a 7-country Latin American NGO", c: "var(--a4)" },
      { time: "2023 – 2024", title: "Camper, then Coach · LALA", sub: "Latin American Leadership Academy", c: "var(--a1)" }
    ],
    ask: {
      hint: "Ask anything about my background. I only answer with what is in my CV, nothing made up.",
      ph: "E.g.: what AI projects do you have?",
      sugg: ["What stack do you use?", "What is HuacaScan Field?", "What leadership experience do you have?", "Are you looking for internships?", "How can I contact you?"],
      intro: "Hi, I'm the interactive version of Sebastián's CV. What would you like to know?",
      none: "That is not in my CV yet. You can ask about my stack, projects, leadership, studies or contact, or write to yenglealfarosebastian@gmail.com.",
      src: "source: CV"
    },
    term: {
      welcome: "Welcome. Type 'help' to see the commands.",
      notfound: "command not found: ",
      help: [
        "Available commands:",
        "  whoami        who I am",
        "  projects      my projects",
        "  stack         technologies",
        "  leadership    leadership",
        "  contact       how to reach me",
        "  cv            open my CV (PDF)",
        "  ask <text>    ask about my CV",
        "  lang es|en    switch language",
        "  theme dark|light   switch theme",
        "  clear         clear screen"
      ],
      hire: "Permission granted. Write to me: yenglealfarosebastian@gmail.com",
      cv: "Opening CV_Sebastian_Yengle.pdf …",
      langset: "Language: English", themeset: "Theme: "
    },
    facts: [
      { k: ["huacascan", "huaca", "archaeolog", "find", "radar"], a: "HuacaScan Field is a PWA for construction crews: it photographs the terrain with GPS (even offline) and uses computer vision (Gemini and Claude) to estimate the probability of archaeological evidence. Each analysis is cross-checked against 2,831 Peruvian archaeological sites, and a licensed archaeologist rules on it from a map dashboard; each ruling feeds a model that retrains. Stack: Next.js, TypeScript, Supabase and Vercel." },
      { k: ["kodi", "educational", "kids", "children", "primary", "tutor", "gamif"], a: "Kodi is an educational PWA for grades 1–6. It has a grade-adapted AI tutor (Groq) that explains without giving the answer away, gamification (stars, XP, streaks, missions and a store with 6 pets and 14 accessories), a protected parent zone, cross-device sync with Supabase and offline mode." },
      { k: ["dentibot", "dental", "clinic", "dentist", "freelance", "client"], a: "DentiBot is an AI virtual assistant I built as a freelance project for Clínica Dental Sonrisas (San Andrés, Peru). It guides patients on symptoms, answers hours, services and prices in soles, detects red-flag signs and shows an emergency card. All information comes from a config file so the AI cannot invent data; it also sends dental hygiene notifications." },
      { k: ["triage", "hospital", "patients"], a: "The Hospital Triage System was a UPAO group project where I was the development team lead. It manages and classifies patient data on Oracle and generates automatic reports on patient flow. I assigned modules, tracked progress, integrated the system and presented the results to faculty." },
      { k: ["flappy", "qlearning", "q-learning", "reinforcement", "agent"], a: "It is an autonomous agent that learns to play Flappy Bird with tabular Q-Learning: it discretizes the game state and improves its policy through rewards. It is a group project for the AI course and the code is at github.com/sebastian-yengle08/Flappy_Bird." },
      { k: ["power", "bi", "dashboard", "excel", "report", "analytics", "analysis"], a: "I built interactive dashboards in Power BI and Power Pivot as the final project of Quantitative Methods for Business (UPAO). I also use advanced Excel, SQL and Python to turn data into reports and decisions." },
      { k: ["aspire", "harvard"], a: "I was selected for Harvard University's Aspire Leaders Program (cohort 2025-1), a global leadership program with youth from 30+ countries. I completed modules on executive leadership, decision-making under uncertainty and high-performance team management." },
      { k: ["parliament", "congress", "bill", "libertad"], a: "In 2025 I was a Regional Youth Parliamentarian for La Libertad at Peru's Congress: 1 of 7 youth representatives chosen in a competitive national call (ages 18–29). I joined parliamentary groups, debated proposals and drafted a bill." },
      { k: ["abonavida", "ngo", "nonprofit", "volunteer"], a: "I have been Director of AbonaVida, a nonprofit, since 2024. I lead the strategy and coordinate the volunteer team, managing resources and timelines to meet social-impact goals." },
      { k: ["america", "solidaria", "ceremon", "master", "conversatorio"], a: "At América Solidaria Perú I was Master of Ceremonies and a participant in the Leaders' Conversation (2024–2025). I hosted the institutional event of this international NGO, present in 7 Latin American countries." },
      { k: ["lala", "coach", "camper"], a: "At the Latin American Leadership Academy (LALA) I took part first as a camper and then as a Coach, mentoring new campers (2023–2024)." },
      { k: ["leader", "leadership", "volunteering", "impact"], a: "My leadership includes: Harvard's Aspire Leaders (2025), Regional Youth Parliamentarian for La Libertad (2025), Director of AbonaVida (nonprofit), Master of Ceremonies at América Solidaria Perú and Coach at LALA. On the technical side, I led the development team of the hospital triage system." },
      { k: ["ai", "artificial", "model", "groq", "gemini", "claude", "vision", "llm"], a: "I work with the Groq, Gemini and Claude APIs and with computer vision. Examples: HuacaScan Field (computer vision to estimate archaeological evidence), Kodi (AI tutor with Groq) and DentiBot (an assistant that answers only from controlled data). I also trained a Q-Learning agent for Flappy Bird." },
      { k: ["database", "databases", "sql", "oracle", "postgres", "mysql", "supabase"], a: "I work with PostgreSQL, Supabase, Oracle and MySQL, and use SQL for analysis. At university I designed an Oracle-based system (hospital triage)." },
      { k: ["stack", "tech", "tools", "language", "languages", "program", "use", "skills", "react", "node", "python", "java"], a: "Languages: Python, Java, JavaScript, TypeScript and SQL. Frontend: React, Next.js, Vite and PWA. Backend: Node.js and Vercel Functions. AI: Groq, Gemini and Claude APIs, computer vision. Data & BI: Power BI, Power Pivot, advanced Excel. Databases: PostgreSQL, Supabase, Oracle and MySQL. DevOps: Docker, Git, GitHub, Linux and Vercel." },
      { k: ["project", "projects", "portfolio", "built", "made", "work"], a: "My main projects: HuacaScan Field (PWA with computer vision), Kodi (educational app with an AI tutor), DentiBot (assistant for a real dental clinic), a Q-Learning agent for Flappy Bird, the hospital triage system and Power BI dashboards. Ask me about any of them." },
      { k: ["study", "studies", "university", "upao", "degree", "semester", "education", "english"], a: "I study Systems Engineering & Artificial Intelligence at Universidad Privada Antenor Orrego (UPAO), since March 2024 (6th semester, in progress). I have intermediate English (Centro Peruano Americano El Cultural, 2023)." },
      { k: ["experience", "job", "employment", "melissa"], a: "Work experience: Customer Service / Stock Replenisher at Comercial Melissa (January 2025), handling inquiries and complaints and updating inventory records. I also built DentiBot as a freelance project for a real client." },
      { k: ["internship", "internships", "available", "hire", "hiring", "looking", "opportunity", "job"], a: "Yes, I'm open to internships in software, data and AI. Write to yenglealfarosebastian@gmail.com or reach me on LinkedIn (linkedin.com/in/sebastian-y-716389274)." },
      { k: ["contact", "email", "mail", "linkedin", "github", "reach", "phone"], a: "Email: yenglealfarosebastian@gmail.com · LinkedIn: linkedin.com/in/sebastian-y-716389274 · GitHub: github.com/sebastian-yengle08" },
      { k: ["cv", "resume", "download", "pdf"], a: "You can download my CV as a PDF with the 'Download CV' button at the top of this page, or by typing 'cv' in the terminal." },
      { k: ["where", "live", "location", "city", "trujillo", "peru"], a: "I live in Trujillo, Peru." },
      { k: ["forge", "dtn", "incubator", "startup", "entrepreneur"], a: "I took part in Forge Perú's Tu Futuro program (socio-emotional and digital skills, since 2024) and in Discovery, the business incubator of DTN Hub Digital UPAO (September 2024)." },
      { k: ["who", "you", "introduce", "sebastian", "name", "tell", "about"], a: "I'm Sebastian Yengle Alfaro, a Systems Engineering & Artificial Intelligence student at UPAO (Trujillo, Peru). I focus on applied AI, web apps and PWAs, and data & BI. I learn by building projects with real-world impact and enjoy teamwork." }
    ]
  }
};
