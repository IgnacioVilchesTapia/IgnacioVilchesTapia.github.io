# Portafolio personal

Portafolio web hecho con React (Vite) y Tailwind CSS.

Sitio publicado: https://ignaciovilchestapia.github.io

Cada push a la rama `main` compila y publica el sitio automáticamente con GitHub Actions (`.github/workflows/deploy.yml`).

## Requisitos

- Node.js 20 o superior

## Instalación

```bash
npm install
npm run dev
```

El sitio queda disponible en http://localhost:5173

## Scripts

- `npm run dev`: servidor de desarrollo
- `npm run build`: genera la versión de producción en `dist/`
- `npm run preview`: muestra la versión de producción
- `npm run lint`: revisa el código con oxlint

## Funcionalidades

- Modo claro / oscuro guardado en localStorage
- Efecto de máquina de escribir en el título principal
- Resplandor que sigue al mouse
- Secciones: Sobre mí, Tecnologías, Proyectos y Contacto
