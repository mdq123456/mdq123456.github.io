import type {Profile, SkillCategories, TimelineItem, Project} from '../../types';

export const mockData = {
  profile: {
    name: 'Diego Quintana',
    role: 'Desarrollador Full Stack',
    bio: [
      'Apasionado por crear soluciones tecnológicas innovadoras y sostenibles. Actualmente desarrollo principalmente con React, utilizando Next.js para proyectos de mayor envergadura y Astro para sitios web estáticos.',
      'Disfruto trabajar con tecnologías modernas y optimizar el rendimiento de las aplicaciones. Siempre busco nuevos desafíos y oportunidades para aprender y crecer profesionalmente.',
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
      'PostgreSQL'
    ],
    frameworks: [
      'React',
      'Next.js',
      'Astro',
      'Express.js',
      'Node.js',
      'Tailwind CSS',
      'Bootstrap'
    ],
    tools: [
      'Git',
      'VS Code',
      'Docker',
      'Figma',
      'Postman',
      'Vercel',
      'AWS',
      'npm/yarn'
    ],
    soft: {
      'Liderazgo técnico': 'Capacidad para guiar equipos técnicos hacia objetivos comunes y tomar decisiones arquitectónicas fundamentadas',
      'Comunicación efectiva': 'Habilidad para transmitir conceptos técnicos complejos de manera clara y facilitar el diálogo entre equipos',
      'Resolución de problemas': 'Análisis sistemático de problemas complejos y implementación de soluciones eficientes y escalables',
      'Trabajo en equipo': 'Colaboración efectiva en equipos multidisciplinarios y contribución activa al crecimiento del equipo',
      'Mentoring': 'Guía y desarrollo de talento técnico junior, compartiendo conocimientos y mejores prácticas',
      'Gestión de proyectos': 'Planificación y seguimiento de objetivos técnicos con gestión eficiente de recursos y tiempos',
      'Pensamiento analítico': 'Evaluación profunda de soluciones técnicas y toma de decisiones basada en datos',
      'Adaptabilidad': 'Rápido aprendizaje de nuevas tecnologías y flexibilidad ante cambios tecnológicos'
    }
  } as SkillCategories,

  timeline: [
    {
      period: '2023 - Presente',
      title: 'Arquitecto de Soluciones Full Stack',
      description: 'Liderazgo técnico en proyectos de transformación digital, diseño de arquitecturas escalables y mentoría a desarrolladores.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Microservicios'],
      achievements: 'Reducción del 40% en tiempo de desarrollo implementando CI/CD'
    },
    {
      period: '2020 - 2023',
      title: 'Especialista en Desarrollo Web',
      description: 'Desarrollo de aplicaciones web de alta performance, sistemas de autenticación seguros y optimización de bases de datos.',
      technologies: ['PostgreSQL', 'Express', 'React', 'Node.js'],
      achievements: 'Migración exitosa de sistema legacy a arquitectura moderna'
    },
    {
      period: '2016 - 2020',
      title: 'Desarrollador Full Stack',
      description: 'Desarrollo de sistemas de gestión empresarial, mantenimiento de aplicaciones existentes e integración con APIs.',
      technologies: ['JavaScript', 'SQL Server', '.NET'],
      achievements: 'Automatización de procesos críticos del negocio'
    }
  ] as TimelineItem[],

  projects: [
    {
      title: 'Sistema de Gestión para Taller de Motos',
      description: 'Desarrollo de módulo de reparación que permite gestionar órdenes, asignar mecánicos y controlar estados. Incluye integración con inventario y facturación.',
      technologies: ['Visual Basic 6', 'SQL Server', 'Active Reports'],
      link: '#',
      year: 2016
    },
    {
      title: 'Portfolio Profesional',
      description: 'Sitio web moderno y responsivo construido con Astro, TypeScript y Tailwind CSS. Incluye sistema de versionado CalVer y CI/CD.',
      technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
      link: 'https://mdq123456.github.io',
      year: 2025
    },
    {
      title: 'App de Gestión Empresarial',
      description: 'Sistema fullstack para gestión empresarial con autenticación, reportes y dashboard administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      link: '#',
      year: 2023
    }
  ] as Project[]
};
