import type {
  Profile,
  SkillCategories,
  TimelineItem,
  Project,
} from '../../types';

export const mockData = {
  profile: {
    name: 'Diego Quintana',
    role: 'Desarrollador Full Stack',
    bio: [
      'Desarrollador con sólida experiencia en evolución tecnológica continua. Mi trayectoria abarca desde Visual Basic 6 y C# hasta tecnologías modernas como TypeScript, React y Astro, adaptándome constantemente a las mejores prácticas del desarrollo actual.',
      'Me especializo en crear soluciones eficientes y escalables, optimizando el rendimiento de aplicaciones y manteniendo un enfoque profesional en cada proyecto. Mi experiencia incluye tanto desarrollo backend como frontend, con dominio en bases de datos y deployment moderno.',
    ],
  } as Profile,

  skillCategories: {
    technical: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'Next.js',
      'Astro',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Git',
      'PostgreSQL',
    ],
    frameworks: [
      'React',
      'Next.js',
      'Astro',
      'Express.js',
      'Node.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
    tools: [
      'Git',
      'VS Code',
      'Docker',
      'Figma',
      'Postman',
      'Vercel',
      'AWS',
      'npm/yarn',
    ],
    soft: {
      'Liderazgo técnico':
        'Capacidad para guiar equipos técnicos hacia objetivos comunes y tomar decisiones arquitectónicas fundamentadas',
      'Comunicación efectiva':
        'Habilidad para transmitir conceptos técnicos complejos de manera clara y facilitar el diálogo entre equipos',
      'Resolución de problemas':
        'Análisis sistemático de problemas complejos y implementación de soluciones eficientes y escalables',
      'Trabajo en equipo':
        'Colaboración efectiva en equipos multidisciplinarios y contribución activa al crecimiento del equipo',
      Mentoring:
        'Guía y desarrollo de talento técnico junior, compartiendo conocimientos y mejores prácticas',
      'Gestión de proyectos':
        'Planificación y seguimiento de objetivos técnicos con gestión eficiente de recursos y tiempos',
      'Pensamiento analítico':
        'Evaluación profunda de soluciones técnicas y toma de decisiones basada en datos',
      Adaptabilidad:
        'Rápido aprendizaje de nuevas tecnologías y flexibilidad ante cambios tecnológicos',
    },
  } as SkillCategories,

  timeline: [
    {
      period: '2023 - Presente',
      title: 'Arquitecto de Soluciones Full Stack',
      description:
        'Liderazgo técnico en proyectos de transformación digital, diseño de arquitecturas escalables con tecnologías modernas como TypeScript, Astro y deployment en Vercel.',
      technologies: ['TypeScript', 'Astro', 'React', 'Node.js', 'Vercel', 'AWS'],
      achievements:
        'Reducción del 40% en tiempo de desarrollo implementando CI/CD',
    },
    {
      period: '2018 - 2023',
      title: 'Desarrollador Web Full Stack',
      description:
        'Transición hacia tecnologías web modernas, especialización en JavaScript, React Native para desarrollo móvil y bases de datos relacionales.',
      technologies: ['JavaScript', 'React Native', 'React', 'PostgreSQL', 'Node.js'],
      achievements:
        'Migración exitosa de aplicaciones desktop a arquitectura web',
    },
    {
      period: '2016 - 2018',
      title: 'Desarrollador de Aplicaciones Empresariales',
      description:
        'Desarrollo en entorno Microsoft con C# y .NET, gestión de bases de datos SQL Server y mantenimiento de sistemas legacy en Visual Basic 6.',
      technologies: ['C#', '.NET', 'SQL Server', 'Visual Basic 6', 'Windows Forms'],
      achievements: 'Modernización de sistemas legacy y automatización de procesos',
    },
    {
      period: '2014 - 2016',
      title: 'Programador Junior',
      description:
        'Inicio profesional desarrollando aplicaciones de gestión empresarial en Visual Basic 6, bases de datos Access y primeros pasos en SQL Server.',
      technologies: ['Visual Basic 6', 'MS Access', 'SQL Server', 'Crystal Reports'],
      achievements: 'Desarrollo de módulos críticos para gestión de inventarios',
    },
  ] as TimelineItem[],

  projects: [
    {
      title: 'Sistema de Gestión para Taller de Motos',
      description:
        'Desarrollo de módulo de reparación que permite gestionar órdenes, asignar mecánicos y controlar estados. Incluye integración con inventario y facturación.',
      technologies: ['Visual Basic 6', 'SQL Server', 'Active Reports'],
      link: '#',
      year: 2016,
    },
    {
      title: 'Portfolio Profesional',
      description:
        'Sitio web moderno y responsivo construido con Astro, TypeScript y Tailwind CSS. Incluye sistema de versionado CalVer y CI/CD.',
      technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
      link: 'https://mdq123456.github.io',
      year: 2025,
    },
    {
      title: 'App de Gestión Empresarial',
      description:
        'Sistema fullstack para gestión empresarial con autenticación, reportes y dashboard administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      link: '#',
      year: 2023,
    },
  ] as Project[],
};
