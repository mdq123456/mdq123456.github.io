# 🤝 Guía de Contribución

## 🎯 Areas de Contribución

### 🎨 **Design System y Componentes**
Para contribuir al catálogo de componentes y design system:
**📋 [Ver Guía Específica de Componentes](./src/components/CONTRIBUTING.md)**

### 💻 **Portfolio y Desarrollo General**
Sigue esta guía para desarrollo general del portfolio.

---

## ⚡ Scripts de Desarrollo Principales

### **Lo Más Usado**

```bash
# Desarrollo diario
npm run dev                  # Servidor desarrollo con catálogo integrado
npm run test:full           # Test completo (build + a11y todos los temas)  
npm run server:restart      # Si algo se rompe

# Release
npm run release             # CalVer automático + push
```

## 🔍 Testing de Calidad

```bash
npm run a11y:quick          # Test accesibilidad (3 temas: light/dark/print)
npm run type-check:all      # Verificar tipos TypeScript
npm run test:build          # Type-check + build
```

## 🛠️ Utilidades

```bash
npm run clean               # Limpiar cache/build
npm run setup:browsers      # Instalar Playwright
npm run server:stop         # Matar procesos Astro
```

## 🎯 Flujos Típicos

### Desarrollo normal:
```bash
npm run dev
```

### Antes de commit:
```bash
npm run test:full
```

### Si algo falla:
```bash
npm run server:stop
npm run clean
npm install
npm run dev
```

## 🎨 Sistema de Temas

El portfolio tiene 3 temas que se prueban automáticamente:
- **Light** (por defecto)
- **Dark** 
- **Print** (para CV)

El test `a11y:quick` verifica accesibilidad WCAG 2.1 AA en los 3 temas.
