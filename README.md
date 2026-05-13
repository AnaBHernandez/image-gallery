# 📸 Image Gallery - Angular 18 & Security Hardening

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular)
![pnpm](https://img.shields.io/badge/pnpm-v11-F69220?style=for-the-badge&logo=pnpm)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

Este proyecto representa la **Actividad 1 de la Unidad 2** (Image Gallery), desarrollada bajo un protocolo de **Ingeniería Real** y blindaje de infraestructura ante amenazas activas en el ecosistema NPM.

## 🛠️ Tecnologías Utilizadas
* **Core:** Angular 18+ con Standalone Components.
* **Gestor de Infraestructura:** pnpm v11 (Sincronización segura).
* **Estilos:** TailwindCSS para diseño UI utilitario.
* **Tipado:** TypeScript 5.4+ para modelos de datos estrictos.
* **Entorno:** VS Code operando sobre Ubuntu 24.04.

## 📋 Funcionalidades
* **Reactividad Nativa:** Gestión de datos mediante **Signals** (`input()`) para una reactividad eficiente.
* **Control de Flujo:** Implementación de la nueva sintaxis `@for` y `@empty`.
* **Performance:** Optimización de carga visual con `NgOptimizedImage`.
* **Seguridad:** Aislamiento de ejecución de scripts en dependencias.

## 🛡️ Protocolo de Seguridad (Hardening)
Dada la alerta global de *supply chain attacks* en el registro de NPM, el búnker de desarrollo aplica:
1. **Zero-Trust Scripts:** Bloqueo de ejecuciones automáticas (`ignore-scripts = true`).
2. [cite_start]**Aislamiento pnpm:** Prevención de dependencias fantasma mediante el uso de enlaces simbólicos estrictos[cite: 79].
3. **Auditoría Forense:** Monitoreo activo de red y procesos locales durante la fase de construcción.

## 📂 Estructura del Proyecto (Optimizado)
```text
src/app/
├── components/
│   ├── gallery/        # Lógica principal con Signals
│   └── image-item/     # Componente atómico de imagen
├── models/             # Interfaz de datos Image
└── app.ts              # Componente raíz

👤 Autora
Desarrollado con serenidad y código por Ana. 🔗 Mi GitHub: Haz clic aquí para ver mi perfil