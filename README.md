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

## 📋 Sistema de Versionado CalVer

Este proyecto utiliza [Calendar Versioning (CalVer)](https://calver.org/) con formato `YYYY.MM.DD`:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run release`         | Generar nueva versión basada en fecha actual    |
| `npm run release:today`   | Generar versión con fecha de hoy (YYYY.MM.DD)   |

### 🗓️ Formato de Versión

```bash
# Formato: YYYY.MM.DD
2025.06.05  # Versión del 5 de junio de 2025
2025.12.31  # Versión del 31 de diciembre de 2025
```

### 🚀 Releases en GitHub

Los releases se crean manualmente desde GitHub Actions:
1. Ve a la pestaña **Actions** en GitHub
2. Selecciona **🚀 Release Manual**
3. Clic en **Run workflow**
4. Agrega una descripción opcional
5. El sistema generará automáticamente la versión basada en la fecha actual

👉 **[Ver Changelog](./CHANGELOG.md)**

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

## 🚀 Scripts Útiles

Para desarrollo y testing rápido, ver **[📋 CONTRIBUTING.md](CONTRIBUTING.md)** con los comandos más usados.

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
