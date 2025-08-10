# CodeOn 2025 - Frontend

Este proyecto es una aplicación frontend creada con React y Vite para el evento CodeOn 2025.

## Estructura del Proyecto

```
src/
├── assets/
│   ├── images/
│   │   ├── icons/       # Iconos y símbolos
│   │   ├── backgrounds/ # Imágenes de fondo
│   │   ├── logos/       # Logotipos
│   │   └── hero/        # Imágenes principales
│   └── ...
├── components/          # Componentes reutilizables
├── pages/               # Páginas de la aplicación
├── styles/              # Archivos CSS
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## Tecnologías Utilizadas

- React
- CSS puro
- Vite (herramienta de construcción)

## Ejecutar el Proyecto

1. Instalar dependencias:
   ```
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```
   npm run dev
   ```

3. Construir para producción:
   ```
   npm run build
   ```

## Guía de Estilos

Se utilizan variables CSS definidas en `index.css` para mantener la consistencia del diseño.

### Colores Principales

- Negro: Fondo de la barra de navegación
- Naranja (#FF9500): Botones destacados

## Añadir Imágenes

Para añadir imágenes al proyecto:

1. Coloca los archivos en la carpeta correspondiente dentro de `src/assets/images/`
2. Actualiza el archivo `src/assets/images/index.js` para exportar la nueva imagen
3. Importa la imagen en tu componente usando:
   ```jsx
   import { nombreImagen } from '../assets/images';
   ```te

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
