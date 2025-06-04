# Portfolio Profesional - Programador

> 🚀 **Portfolio moderno y responsivo construido con Astro, TypeScript y Tailwind CSS**

Un portfolio profesional completo con arquitectura escalable, diseño moderno y estructura preparada para migración a APIs externas.

## ✨ Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Arquitectura Escalable**: Mock API preparada para migración a servicios externos (Supabase, etc.)
- **TypeScript**: Tipado fuerte para mejor mantenibilidad
- **Tailwind CSS**: Styling moderno y eficiente
- **Secciones Completas**: Hero, Skills, Timeline, Projects, Contact
- **Tooltips Interactivos**: Explicaciones detalladas de soft skills
- **Animaciones Suaves**: Transiciones profesionales y elegantes

## 🏗️ Arquitectura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── pages/
│   │   └── index.astro           # Página del portfolio
│   ├── types/
│   │   └── index.ts              # Interfaces TypeScript
│   ├── mocks/
│   │   └── api/
│   │       └── data.ts           # Datos mock del portfolio
│   ├── services/
│   │   └── api.ts                # Capa de servicios API
│   └── components/               # Componentes reutilizables
├── tailwind.config.js            # Configuración Tailwind
└── package.json
```

### 📋 Documentación Detallada

Para información completa sobre la implementación, arquitectura y características:

👉 **[Ver Documentación Completa](./PORTFOLIO.md)**

## 🚀 Secciones del Portfolio

1. **Hero Section**: Presentación personal con biografía
2. **Skills Section**: 
   - Habilidades técnicas organizadas por categorías
   - Soft skills con tooltips informativos
   - Diseño en tarjetas separadas con iconos
3. **Timeline**: Evolución profesional con logros y tecnologías
4. **Projects**: Showcase de proyectos con tecnologías utilizadas
5. **Contact**: Enlaces a redes sociales y contacto

## 🧞 Comandos de Desarrollo

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                            |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Previsualiza la build localmente               |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 🎨 Tecnologías Utilizadas

- **[Astro](https://astro.build)**: Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript con tipado
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)**: Plugin para tipografía

## 🔄 Migración a API Externa

El proyecto está preparado para migración fácil a APIs externas como Supabase:

1. Los tipos están definidos en `/src/types/index.ts`
2. La capa de servicios en `/src/services/api.ts` abstrae la fuente de datos
3. Solo requiere cambiar la implementación de los métodos en `api.ts`

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
