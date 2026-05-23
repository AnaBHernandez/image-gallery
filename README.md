# 📸 Image Gallery - Angular 21 (Zoneless Architecture)

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular)
![pnpm](https://img.shields.io/badge/pnpm-v11-F69220?style=for-the-badge&logo=pnpm)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

Galería de imágenes reactiva y optimizada construida bajo la filosofía de componentes autónomos y reactividad pura. Proyecto auditado que consolida los hitos de las Unidades 1, 2 y 3 del temario oficial.

## 🛠️ Stack Tecnológico
- **Core:** Angular 21 (Standalone Components / Control de Flujo Nativo)
- **Modo Operativo:** 100% Zoneless Nativo (ChangeDetectionStrategy.OnPush)
- **Package Manager:** pnpm v11 (Ecosistema Monorrepo/Workspace)
- **Estilos:** TailwindCSS 3.4
- **Tipado:** TypeScript Strict Mode
- **Entorno:** Ubuntu 24.04 LTS, VS Code

## 📋 Características Implementadas
- **Reactividad Quirúrgica (Unidad 1):** Adopción de la estrategia `OnPush` para anular la dependencia de `Zone.js`, optimizando el uso de CPU en el entorno local de desarrollo.
- **Contratos de Datos Estrictos (Unidad 2):** Implementación de la API moderna `input.required<Image>()` para asegurar el flujo unidireccional Padre-Hijo libre de estados indefinidos.
- **Rendimiento Gráfico Avanzado (Unidad 2):** Integración de la directiva `NgOptimizedImage` (`[ngSrc]`) con dimensiones fijas para neutralizar por completo el Cumulative Layout Shift (CLS).
- **Control de Flujo Nativo (Unidad 2):** Bloques `@for` con rastreo `track image.id` para garantizar un rendimiento de renderizado $O(1)$.
- **Comunicación Eficiente Ascendente (Unidad 3):** Uso de la nueva función `output<string>()` para emitir intenciones lógicas del Hijo al Padre sin intermediarios pesados.
- **Mitigación Forense del DOM (Unidad 3):** Bloqueo explícito del Event Bubbling mediante `event.stopPropagation()` en las interacciones de borrado.
- **Formularios Reactivos basados en Señales (Unidad 3):** Sistema de altas validado mediante `FormGroup` acoplado de forma inmutable a la Signal de estado a través de `images.update()`.

## 🛡️ Protocolo de Seguridad (Zero-Trust)
- Configuración estricta de `ignore-scripts = true` en `.npmrc` para bloquear ejecuciones arbitrarias de paquetes de terceros.
- Aislamiento total de dependencias mediante enlaces simbólicos estrictos propios de pnpm, eliminando el riesgo de dependencias fantasma.

## 📂 Estructura del Proyecto Real
```text
src/app/
├── components/
│   ├── gallery/       # Componente Padre (Estado global mediante Signals + Formulario)
│   └── image-item/    # Componente Hijo (Contrato de entrada + Output + NgOptimizedImage)
├── interfaces/
│   └── image.interface.ts  # Contrato estricto de modelado de datos
├── app.ts             # Controlador raíz
└── main.ts            # Punto de entrada de la aplicación
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