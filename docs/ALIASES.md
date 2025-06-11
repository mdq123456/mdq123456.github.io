# Alias de Importación Configurados

Este proyecto tiene configurados los siguientes alias para facilitar las importaciones:

## 🔧 **Alias Disponibles:**

| Alias | Ruta | Uso |
|-------|------|-----|
| `@/*` | `src/*` | Importaciones generales desde src |
| `@/components/*` | `src/components/*` | Componentes de la aplicación |
| `@/ui/*` | `src/components/ui/*` | Componentes del design system |
| `@/layouts/*` | `src/layouts/*` | Layouts de Astro |
| `@/pages/*` | `src/pages/*` | Páginas de la aplicación |
| `@/services/*` | `src/services/*` | Servicios y APIs |
| `@/types/*` | `src/types/*` | Definiciones de tipos |
| `@/assets/*` | `src/assets/*` | Assets estáticos |
| `@/mocks/*` | `src/mocks/*` | Datos de prueba |

## 📝 **Ejemplos de Uso:**

### Importar componentes del design system:
```astro
import Button from '@/components/ui/Button/Button.astro';
import Dropdown from '@/components/ui/Dropdown/Dropdown.astro';
import ThemeSelector from '@/components/ui/ThemeSelector/ThemeSelector.astro';
```

### Importar layouts:
```astro
import Layout from '@/layouts/Layout.astro';
```

### Importar servicios:
```typescript
import { api } from '@/services/api';
```

### Importar tipos:
```typescript
import type { User } from '@/types';
```

### Importar desde TypeScript/JavaScript:
```typescript
import { DropdownManager } from '@/components/ui/Dropdown/dropdown-manager';
```

## ⚙️ **Configuración:**

Los alias están configurados en:
- `tsconfig.json` - Para TypeScript
- `astro.config.mjs` - Para resolución de módulos en Vite
- `src/env.d.ts` - Definiciones de tipos para los alias

## 🚀 **Beneficios:**

- ✅ **Imports más limpios**: No más `../../../components`
- ✅ **Refactoring seguro**: Los paths absolutos son más fáciles de mantener
- ✅ **Autocompletado**: IDE reconoce las rutas automáticamente
- ✅ **Consistencia**: Misma estructura en todo el proyecto
