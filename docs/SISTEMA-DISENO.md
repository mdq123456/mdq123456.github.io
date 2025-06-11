# Sistema de Diseño Integrado

Este proyecto incluye un sistema de diseño completo construido con Storybook e integrado seamlessly con el portfolio de Astro.

## 🚀 Desarrollo Rápido

```bash
# Un solo comando para todo:
npm run dev
```

Este comando:
1. **Construye** el catálogo de componentes (Storybook)
2. **Copia** los archivos al directorio público
3. **Inicia** el servidor de desarrollo de Astro
4. **Sirve** el portfolio en `http://localhost:4321/`
5. **Incluye** el catálogo en `http://localhost:4321/catalogo-de-componentes`

## 🏗️ Arquitectura del Sistema

### Rutas Disponibles
- **Portfolio Principal**: `http://localhost:4321/` 
- **Catálogo de Componentes**: `http://localhost:4321/catalogo-de-componentes`
- **Storybook Directo**: `http://localhost:4321/index.html`

### Estructura de Componentes
```
src/components/ui/
├── Dropdown/
│   ├── Dropdown.astro          # Componente base reutilizable
│   ├── DropdownItem.astro      # Item individual del dropdown
│   ├── dropdown-manager.ts     # Lógica JavaScript
│   └── Dropdown.stories.ts     # Documentación Storybook
└── ThemeSelector/
    ├── ThemeSelector.astro     # Selector de tema especializado
    └── ThemeSelector.stories.ts # Documentación Storybook
```

## 📦 Scripts Disponibles

### Desarrollo
- `npm run dev` - Workflow completo integrado
- `npm run dev:astro` - Solo Astro (sin Storybook)
- `npm run dev:storybook` - Solo Storybook standalone en puerto 6006

### Construcción
- `npm run build` - Construye portfolio + catálogo integrado
- `npm run build:storybook` - Solo construye el catálogo
- `npm run build:astro-only` - Solo construye Astro

### Preview
- `npm run preview` - Preview del build integrado
- `npm run preview:storybook` - Preview solo del catálogo en puerto 6008

## 🎨 Desarrollo de Componentes

### 1. Crear Nuevo Componente
```bash
mkdir src/components/ui/MiComponente
```

### 2. Estructura Requerida
```
MiComponente/
├── MiComponente.astro      # Componente principal
├── MiComponente.stories.ts # Documentación
└── README.md               # Documentación adicional (opcional)
```

### 3. Template de Story
```typescript
import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'UI/MiComponente',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Definir controles aquí
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => `
    <!-- HTML del componente -->
  `,
};
```

## 🔧 Configuración Técnica

### Aliases Configurados
- `@/` → `src/`
- `@/components` → `src/components/`
- `@/ui` → `src/components/ui/`
- `@/layouts` → `src/layouts/`
- `@/assets` → `src/assets/`

### Hot Reloading
- ✅ Cambios en componentes Astro se reflejan inmediatamente
- ✅ Cambios en stories se actualizan automáticamente
- ✅ Cambios en CSS/JS se recompilan al vuelo

### Accesibilidad
- 🛡️ 100% WCAG 2.1 AA compliance
- 🧪 Tests automatizados con `npm run a11y`
- 🎨 Variables CSS sin `!important` para mejor mantenibilidad

## 🚀 Despliegue

El workflow está optimizado para despliegue estático:

```bash
npm run build
```

Esto genera:
- `dist/` - Portfolio principal de Astro
- `dist/catalogo-de-componentes/` - Catálogo independiente
- Archivos estáticos servidos correctamente

## 📝 Documentación

- **General**: `/CONTRIBUTING.md`
- **Componentes**: `/src/components/CONTRIBUTING.md`
- **Técnica**: `/src/components/ui/README.md`

## 🎯 Beneficios del Sistema

1. **Desarrollo Unificado**: Un solo comando para todo
2. **Hot Reloading Completo**: Cambios instantáneos
3. **Documentación Viva**: Storybook siempre actualizado
4. **Depliegue Integrado**: Portfolio + catálogo juntos
5. **Arquitectura Escalable**: Componentes reutilizables
6. **Accesibilidad Primera**: WCAG compliance garantizada

---

**¿Dudas?** Consulta la documentación en `/src/components/CONTRIBUTING.md` o inicia el desarrollo con `npm run dev` 🚀
