# 🚀 Portfolio Profesional

> **Portfolio moderno y responsivo construido con Astro, TypeScript y Tailwind CSS**

Portfolio profesional con arquitectura escalable, deployment automático con CalVer tagging y accesibilidad completa.

## ✨ Características

- **📦 Portfolio Responsivo**: Astro + TypeScript + Tailwind CSS
- **🚀 Deploy Automático**: GitHub Actions con CalVer tagging
- **🎨 Diseño Moderno**: Tailwind CSS con tema personalizado
- **♿ WCAG 2.1 AA**: 100% accesibilidad compliance
- **📱 Responsive**: Adaptable a todos los dispositivos
- **⚡ Performance**: Optimizado para carga rápida
- **🔄 CI/CD**: Integración y deployment continuo

## 🏗️ Arquitectura del Proyecto

```
mdq123456.github.io/                    # 🗂️ Proyecto root
├── .github/workflows/
│   ├── deploy.yml                      # 🚀 Deploy automático con CalVer
│   └── accessibility.yml              # ♿ Tests de accesibilidad
├── src/                                # 🎨 Código fuente del portfolio
│   ├── components/                     # Componentes Astro
│   ├── layouts/                        # Layouts base
│   ├── pages/                          # Páginas del sitio
│   ├── assets/                         # Assets estáticos
│   ├── services/                       # Servicios y APIs
│   └── types/                          # Definiciones TypeScript
├── public/                             # 📁 Assets públicos
├── scripts/                            # 🔧 Scripts de utilidad
├── docs/                              # 📖 Documentación
├── package.json                       # 📦 Dependencias
├── astro.config.mjs                   # ⚙️ Configuración Astro
├── tailwind.config.js                 # 🎨 Configuración Tailwind
└── tsconfig.json                      # 🔧 Configuración TypeScript
```

## 🧞 Comandos de Desarrollo

### 🚀 **Desarrollo Principal**
| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Inicia el portfolio en `localhost:4321`         |
| `npm run dev:portfolio`   | Específicamente el portfolio                     |

### 🏗️ **Build y Deploy**
| Comando                   | Acción                                           |
```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build            # Build para producción
npm run preview          # Preview del build
```

### 🧪 **Testing y Quality**
```bash
# Type checking
npm run type-check       # Verificación de tipos TypeScript
npm run type-check:all   # Type-check + scripts

# Accessibility testing
npm run a11y             # Tests de accesibilidad completos
npm run a11y:quick       # Tests rápidos de accesibilidad

# Build testing
npm run test:build       # Test del build completo
npm run test:full        # Test completo (build + preview + a11y)
```

### 🛠️ **Utilities**
```bash
# Limpieza
npm run clean            # Limpiar builds y cache

# Scripts auxiliares
npm run type-check:scripts  # Type-check de scripts
```

### 🧪 **Testing Local con Act**
```bash
# Instalar act (si no está instalado)
brew install act

# Probar build y tests localmente (requiere Docker)
act --workflows .github/workflows/test.yml --job test-build

# Probar el clean check
act --workflows .github/workflows/test.yml --job clean-check

# Listar todos los jobs disponibles
act --workflows .github/workflows/test.yml --list

# Ejecutar con arquitectura específica (M1/M2 Macs)
act --workflows .github/workflows/test.yml --job test-build --container-architecture linux/amd64
```

## 🚀 Secciones del Portfolio

1. **Hero Section**: Presentación personal con biografía
2. **Skills Section**: 
   - Habilidades técnicas organizadas por categorías
   - Soft skills con cards interactivas expandibles
   - Diseño responsivo en grid 3 columnas
3. **Timeline**: Evolución profesional con logros y tecnologías
4. **Projects**: Showcase de proyectos con tecnologías utilizadas
5. **Contact**: Enlaces a redes sociales y contacto

## 📋 Sistema de Versionado CalVer

Este proyecto utiliza [Calendar Versioning (CalVer)](https://calver.org/) con formato `YYYY.MM.DD`:

### 🗓️ Formato de Versión
- **Formato**: `vYYYY.MM.DD` (ej: `v2025.06.13`)
- **Automático**: Se genera automáticamente en cada push a `main`
- **Actualizable**: Si hay múltiples pushes el mismo día, se actualiza el tag

### 🚀 Releases en GitHub
- **Automáticos**: Cada push a `main` crea un release
- **Descriptivos**: Incluyen enlaces al portfolio y changelog
- **Assets**: Incluirán build de Storybook cuando esté listo

## 🎨 Tecnologías Utilizadas

### Frontend
- **[Astro](https://astro.build)**: Framework web moderno para sitios estáticos
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript con tipado fuerte
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)**: Plugin para tipografía elegante

### DevOps & Testing
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD automático
- **[GitHub Pages](https://pages.github.com/)**: Hosting estático gratuito
- **[Playwright](https://playwright.dev/)**: Testing de accesibilidad automatizado
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Auditorías de performance

### Desarrollo
- **[Vite](https://vitejs.dev/)**: Build tool y dev server ultra-rápido
- **[ESLint](https://eslint.org/)**: Linting de código JavaScript/TypeScript

## 🎯 Roadmap

### ✅ **Completado**
- ✅ Portfolio responsivo y moderno
- ✅ Accesibilidad WCAG 2.1 AA compliant
- ✅ Deploy automático con CalVer tagging
- ✅ Performance optimizado (100/100 Lighthouse)
- ✅ CV interactivo integrado
- ✅ Sistema de temas (futuro)

### 🏗️ **En Desarrollo**
- 🚧 SEO avanzado y metadatos
- 🚧 Sección de blog/artículos
- 🚧 Modo oscuro/claro dinámico
- 🚧 Animaciones y transiciones mejoradas

### 🔮 **Futuro**
- 📊 Analytics y métricas
- 🌐 Internacionalización (i18n)
- 🎨 Temas personalizables
- 📱 PWA (Progressive Web App)

## 📖 Documentación

### 📁 Documentación Específica
- **🔄 Cambios**: [`docs/CHANGELOG.md`](./docs/CHANGELOG.md)
- **🏗️ Arquitectura**: [`docs/PORTFOLIO.md`](./docs/PORTFOLIO.md)
- **🤝 Contribución**: [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md)

### 🔗 Enlaces Útiles
- **Portfolio**: [mdq123456.github.io](https://mdq123456.github.io)
- **Releases**: [GitHub Releases](https://github.com/mdq123456/mdq123456.github.io/releases)
- **CV**: [mdq123456.github.io/curriculum-vitae](https://mdq123456.github.io/curriculum-vitae/)

## 📚 Recursos Técnicos

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CalVer Specification](https://calver.org/)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Astro](https://docs.astro.build)
