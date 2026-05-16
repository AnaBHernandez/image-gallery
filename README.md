# 📸 Image Gallery - Angular 18

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular)
![pnpm](https://img.shields.io/badge/pnpm-v11-F69220?style=for-the-badge&logo=pnpm)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

Galería de imágenes con Angular 18 Standalone Components. Unidad 2, Actividad 1.

## 🛠️ Stack
- **Core:** Angular 18+ (Standalone Components)
- **Package Manager:** pnpm v11
- **Estilos:** TailwindCSS 3.4
- **Tipado:** TypeScript 5.4+
- **Entorno:** Ubuntu 24.04, VS Code

## 📋 Características
- **Signals API:** Reactividad granular con `input()`
- **Control Flow:** Sintaxis `@for` y `@empty`
- **Imágenes optimizadas:** `NgOptimizedImage`
- **TypeScript estricto:** Modelos tipados

## 🛡️ Seguridad
- `ignore-scripts = true` en `.npmrc` (bloqueo de ejecuciones automáticas)
- Aislamiento pnpm: enlaces simbólicos estrictos, sin dependencias fantasma
- Auditoría de procesos durante build

## 📂 Estructura
```text
src/app/
├── components/
│   ├── gallery/       # Lógica + Signals
│   └── image-item/    # Componente atómico
├── models/
│   └── image.model.ts
└── app.ts
```

## 🚀 Quick Start
```bash
pnpm install
pnpm ng serve
```

Abre `http://localhost:4200/`

---
**Desarrollado por Ana**  
[GitHub](https://github.com/AnaBHernandez)