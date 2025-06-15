# 🎨 AI Study Assistant – Frontend

Este es el frontend del proyecto **AI Study Assistant**, una aplicación educativa impulsada por IA que permite subir documentos y generar automáticamente resúmenes, flashcards y cuestionarios. Esta interfaz fue desarrollada con **React.js**, **Tailwind CSS** y **TanStack Router**, ofreciendo una experiencia intuitiva y moderna.

## 🚀 Funcionalidades

- 📄 **Carga de archivos PDF** desde la interfaz del usuario.
- 🔄 Comunicación directa con el backend mediante peticiones HTTP.
- 🧠 **Visualización del resumen generado por IA** y navegación hacia otras funciones del sistema.
- 💡 Página de explicación: "¿Cómo funciona?" para orientación al usuario.

## 🧰 Tecnologías utilizadas

- [React.js](https://react.dev/) – Framework para crear interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com/) – Framework de estilos altamente personalizable.
- [TanStack Router](https://tanstack.com/router) – Enrutador moderno para React.

## 🚀 Requisitos

- Node.js (v18 o superior recomendado)
- npm

## 📦 Instalación

### 1. Clonar el proyecto

```bash
git clone https://github.com/BosaBL/ai-study-assistant.git
cd frontend-ai-study-assistant
```

### 2. Instala las dependencias:

```bash
npm install
```

### 3. Ejecución en desarrollo

```bash
npm start
```

## 📁 Estructura de carpetas

```bash
frontend-ai-study-assistant/
├── src/
│   ├── components/        # Componentes reutilizables (layouts, botones, etc.)
│   ├── pages/             # Vistas principales (Home, Upload, Summary)
│   ├── router.jsx         # Rutas de la app
│   └── index.js           # Punto de entrada principal
├── public/                # Archivos públicos (favicon, etc.)
├── tailwind.config.js     # Configuración de Tailwind CSS
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```