import type {Profile, SkillCategories, TimelineItem, Project} from '../types';

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
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
    soft: [
      {
        name: 'Liderazgo técnico',
        details: [
          'Capacidad para guiar equipos técnicos hacia objetivos comunes',
          'Toma de decisiones arquitectónicas fundamentadas',
          'Promoción de mejores prácticas y estándares de calidad',
        ],
      },
      {
        name: 'Comunicación efectiva',
        details: [
          'Habilidad para transmitir conceptos técnicos complejos de manera clara',
          'Facilitación de diálogo entre equipos técnicos y no técnicos',
          'Documentación precisa y accesible de soluciones técnicas',
        ],
      },
      {
        name: 'Resolución de problemas',
        details: [
          'Análisis sistemático de problemas complejos',
          'Capacidad de descomponer desafíos en partes manejables',
          'Implementación de soluciones eficientes y escalables',
        ],
      },
      {
        name: 'Trabajo en equipo',
        details: [
          'Colaboración efectiva en equipos multidisciplinarios',
          'Contribución activa al crecimiento del equipo',
          'Adaptación a diferentes dinámicas de trabajo',
        ],
      },
      {
        name: 'Mentoring',
        details: [
          'Guía y desarrollo de talento técnico junior',
          'Compartir conocimientos y mejores prácticas',
          'Fomento del crecimiento profesional del equipo',
        ],
      },
      {
        name: 'Gestión de proyectos',
        details: [
          'Planificación y seguimiento de objetivos técnicos',
          'Gestión eficiente de recursos y tiempos',
          'Adaptación ágil a cambios de requerimientos',
        ],
      },
      {
        name: 'Pensamiento analítico',
        details: [
          'Evaluación profunda de soluciones técnicas',
          'Toma de decisiones basada en datos',
          'Optimización de procesos y sistemas',
        ],
      },
      {
        name: 'Adaptabilidad',
        details: [
          'Rápido aprendizaje de nuevas tecnologías',
          'Flexibilidad ante cambios tecnológicos',
          'Capacidad de trabajar en múltiples contextos',
        ],
      },
    ],
  } as SkillCategories,

  timeline: [
    {
      period: '2023 - Presente',
      role: 'Arquitecto de Soluciones Full Stack',
      highlights: [
        'Liderazgo técnico en proyectos de transformación digital',
        'Diseño de arquitecturas escalables en la nube',
        'Mentoría a desarrolladores junior y mid-level',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'Microservicios'],
      achievements:
        'Reducción del 40% en tiempo de desarrollo implementando CI/CD y mejores prácticas',
      company: 'Empresa Actual',
    },
    {
      period: '2020 - 2023',
      role: 'Especialista en Desarrollo Web',
      highlights: [
        'Desarrollo de aplicaciones web de alta performance',
        'Implementación de sistemas de autenticación seguros',
        'Optimización de bases de datos y queries complejos',
      ],
      technologies: ['PostgreSQL', 'Express', 'React', 'Node.js'],
      achievements:
        'Migración exitosa de sistema legacy a arquitectura moderna',
      company: 'Empresa Anterior',
    },
    {
      period: '2016 - 2020',
      role: 'Desarrollador Full Stack',
      highlights: [
        'Desarrollo de sistemas de gestión empresarial',
        'Mantenimiento y mejora de aplicaciones existentes',
        'Integración con APIs de terceros',
      ],
      technologies: ['JavaScript', 'SQL Server', '.NET'],
      achievements: 'Automatización de procesos críticos del negocio',
      company: 'Primera Empresa',
    },
  ] as TimelineItem[],

  projects: [
    {
      title:
        'Importante tienda de venta de repuestos y taller de reparación de motos',
      description: `Ajustes en módulo de repación de motos, que permite gestionar las órdenes de reparación, asignar mecánicos, llevar un control del estado de cada reparación. Se conecta con un sistema de inventario para gestionar las piezas necesarias, como también su posterior facturación.`,
      link: '#',
      year: 2016,
      tech: ['visual basic 6', 'mssql', 'active reports'],
    },
    {
      title: 'App de Gestión',
      description: 'Sistema de gestión empresarial fullstack',
      link: '#',
      tech: ['TypeScript', 'Express', 'PostgreSQL'],
    },
  ] as Project[],
};
