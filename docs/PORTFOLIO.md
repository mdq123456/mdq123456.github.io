# Documentación Técnica del Portfolio

## 📋 Índice

1. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
2. [Estructura de Datos](#estructura-de-datos)
3. [Componentes y Secciones](#componentes-y-secciones)
4. [Sistema de Skills](#sistema-de-skills)
5. [Timeline Profesional](#timeline-profesional)
6. [Migración a API Externa](#migración-a-api-externa)
7. [Estilos y Diseño](#estilos-y-diseño)

---

## 🏗️ Arquitectura del Proyecto

### Patrón de Arquitectura
El proyecto sigue una arquitectura en capas que separa:
- **Presentación**: Componentes Astro
- **Lógica de Negocio**: Servicios API
- **Datos**: Mock data con tipos TypeScript
- **Estilos**: Tailwind CSS con clases utilitarias

### Estructura de Carpetas Detallada

```
src/
├── layouts/
│   └── Layout.astro              # Layout base con head, meta tags
├── pages/
│   └── index.astro              # Página principal del portfolio
├── types/
│   └── index.ts                 # Interfaces TypeScript globales
├── mocks/
│   └── api/
│       └── data.ts              # Datos simulados del portfolio
├── services/
│   └── api.ts                   # Capa de abstracción para APIs
└── components/                  # (Futuro) Componentes reutilizables
```

---

## 📊 Estructura de Datos

### Interfaces TypeScript

```typescript
// Profile - Información personal
interface Profile {
  name: string;
  role: string;
  bio: string[];
}

// Skills - Habilidades técnicas y soft
interface Skill {
  name: string;
  details: string[];
}

interface SkillCategories {
  technical: string[];
  soft: Skill[];
}

// Timeline - Evolución profesional
interface TimelineItem {
  period: string;
  company: string;
  role: string;
  highlights: string[];
  technologies: string[];
  achievements: string;
}

// Projects - Proyectos destacados
interface Project {
  title: string;
  description: string;
  tech: string[];
}
```

### Datos Mock Actuales

#### Profile
- Nombre y rol profesional
- Biografía en múltiples párrafos

#### Skills
**Técnicas**: 15+ tecnologías organizadas
**Soft Skills**: 8 habilidades con 3 puntos explicativos cada una:
- Leadership, Communication, Problem Solving
- Teamwork, Mentoring, Project Management
- Analytical Thinking, Adaptability

#### Timeline
4 períodos profesionales con:
- Rango temporal y empresa
- Rol y responsabilidades clave
- Tecnologías utilizadas
- Logro destacado por período

#### Projects
6 proyectos ejemplo con descripción y stack tecnológico

---

## 🎨 Componentes y Secciones

### 1. Hero Section
- **Propósito**: Presentación personal impactante
- **Elementos**: Nombre, rol, biografía centrada
- **Estilos**: Tipografía jerárquica, espaciado generoso

### 2. Skills Section
- **Arquitectura**: Grid responsivo de 2 columnas
- **Tarjetas separadas**: Una para técnicas, otra para soft skills
- **Iconos SVG**: Representación visual de cada categoría
- **Interactividad**: Tooltips explicativos para soft skills

#### Sistema de Colors
```css
/* Habilidades Técnicas */
--tech-gradient: from-blue-50 to-blue-100
--tech-text: text-blue-700
--tech-icon: bg-gradient-to-br from-blue-500 to-blue-600

/* Habilidades Interpersonales */
--soft-gradient: from-orange-50 to-orange-100
--soft-text: text-orange-800
--soft-icon: bg-gradient-to-br from-orange-500 to-orange-600
```

### 3. Timeline Section
- **Layout**: Flexbox con columna de fechas y contenido
- **Cards**: Información estructurada por período
- **Responsive**: Adaptable a móviles

### 4. Projects Section
- **Grid**: 2 columnas en desktop, 1 en móvil
- **Tags**: Tecnologías con colores distintivos

### 5. Contact Section
- **Enlaces**: Email, LinkedIn, GitHub
- **Estilos**: Hover states suaves

---

## ⚙️ Sistema de Skills

### Habilidades Técnicas
Renderizado simple como array de strings:
```javascript
{skillCategories.technical.map((skill: string) => (
  <span className="tech-skill-style">{skill}</span>
))}
```

### Habilidades Interpersonales
Sistema avanzado con tooltips:

#### Estructura del Tooltip
```html
<div class='group relative'>
  <!-- Skill Button -->
  <div class='skill-container'>
    <span>{skill.name}</span>
    <info-icon />
  </div>
  
  <!-- Tooltip Content -->
  <div class='tooltip-popup'>
    <arrow-indicator />
    <h4>{skill.name}</h4>
    <ul>
      {skill.details.map(detail => <li>{detail}</li>)}
    </ul>
  </div>
</div>
```

#### Estados de Interacción
- **Default**: `invisible opacity-0`
- **Hover**: `visible opacity-100`
- **Transición**: `transition-all duration-300`
- **Transform**: `hover:-translate-y-1`

---

## 📅 Timeline Profesional

### Estructura de Datos
Cada item del timeline incluye:
```typescript
{
  period: "2020-2023",
  company: "Tech Company",
  role: "Senior Developer",
  highlights: ["Logro 1", "Logro 2", "Logro 3"],
  technologies: ["React", "Node.js", "AWS"],
  achievements: "Descripción del logro más importante"
}
```

### Layout Responsivo
- **Desktop**: Fecha a la izquierda, contenido a la derecha
- **Mobile**: Stack vertical con fecha arriba

---

## 🔄 Migración a API Externa

### Preparación Actual
El proyecto está 100% preparado para migración:

1. **Tipos definidos**: Todas las interfaces en `/src/types/index.ts`
2. **Capa de servicios**: Abstracción completa en `/src/services/api.ts`
3. **Separación de datos**: Mock data aislado en `/src/mocks/api/data.ts`

### Pasos para Migración a Supabase

#### 1. Instalar Supabase
```bash
npm install @supabase/supabase-js
```

#### 2. Configurar Cliente
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
```

#### 3. Actualizar Servicios
```typescript
// src/services/api.ts
import { supabase } from '../lib/supabase'

export const api = {
  async getProfile(): Promise<Profile> {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .single()
    return data
  },
  
  async getSkills(): Promise<SkillCategories> {
    // Implementar queries para skills
  },
  
  // ... resto de métodos
}
```

#### 4. Schema de Base de Datos
```sql
-- Profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  bio text[] NOT NULL
);

-- Skills tables
CREATE TABLE technical_skills (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  category text
);

CREATE TABLE soft_skills (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  details text[] NOT NULL
);

-- Timeline table
CREATE TABLE timeline (
  id uuid PRIMARY KEY,
  period text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  highlights text[] NOT NULL,
  technologies text[] NOT NULL,
  achievements text NOT NULL,
  order_index integer
);

-- Projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] NOT NULL,
  featured boolean DEFAULT false
);
```

---

## 🎨 Estilos y Diseño

### Sistema de Colores
```css
/* Paleta Principal */
--primary-blue: #3B82F6
--primary-orange: #F97316
--neutral-gray: #6B7280

/* Gradientes */
--bg-gradient: from-gray-50 to-blue-50
--blue-gradient: from-blue-50 to-blue-100
--orange-gradient: from-orange-50 to-orange-100
```

### Componentes de Diseño

#### Cards
- **Sombra**: `shadow-lg`
- **Bordes**: `rounded-2xl`
- **Padding**: `p-8`
- **Hover**: Elevación y cambio de color

#### Animaciones
- **Duración**: `duration-300`
- **Easing**: `ease-in-out`
- **Transform**: `hover:-translate-y-1`
- **Opacity**: Transiciones suaves

#### Responsive Breakpoints
- **Mobile**: `default`
- **Tablet**: `sm:` (640px+)
- **Desktop**: `lg:` (1024px+)

### Plugins de Tailwind
```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

---

## 🚀 Optimizaciones y Mejores Prácticas

### Performance
- **Astro Islands**: Hidratación selectiva
- **Static Generation**: Pre-renderizado
- **Lazy Loading**: Imágenes optimizadas

### SEO
- **Meta tags**: Configurados en Layout
- **Semantic HTML**: Estructura correcta
- **Schema.org**: Futuro markup estructurado

### Accesibilidad
- **Contraste**: WCAG AA compliant
- **Focus states**: Visible en todos los elementos
- **Screen readers**: ARIA labels apropiados

### Mantenibilidad
- **TypeScript**: Tipado fuerte
- **Componentes**: Separación de responsabilidades
- **Configuración**: Centralizadas en config files

---

## 🔮 Próximos Pasos

### Funcionalidades Pendientes
1. **Modo oscuro**: Toggle theme
2. **Internacionalización**: Múltiples idiomas
3. **Blog section**: Artículos técnicos
4. **Formulario de contacto**: Con validación
5. **Analytics**: Tracking de interacciones

### Optimizaciones Técnicas
1. **PWA**: Service worker para offline
2. **Testing**: Unit y E2E tests
3. **CI/CD**: Deploy automático
4. **Monitoring**: Error tracking

---

*Documentación actualizada: 3 de junio de 2025*
