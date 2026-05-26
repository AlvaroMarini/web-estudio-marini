# Estudio Jurídico - Dr. Carlos Alberto Marini ⚖️

SPA (Single Page Application) institucional y profesional diseñada y desarrollada para el estudio jurídico del Dr. Carlos Alberto Marini, especializado en Derecho de la Salud (restitución de cobertura médica, amparos de salud y continuidad de prepagas para jubilados evitando el traspaso forzoso a PAMI).

El sitio web prioriza una experiencia de usuario (UX) premium, fluida e interactiva, con un enfoque directo en la conversión y captación de clientes potenciales a través de canales de comunicación integrados de forma nativa.

---

## 🚀 Características Principales

- **Diseño Premium & 100% Responsive:** Interfaz elegante basada en una paleta cromática corporativa (Azul Marino `#0A122A` y Dorado `#D4AF37`) adaptada milimétricamente para dispositivos móviles, tablets y ordenadores de escritorio.
- **Navegación Fluida (Smooth Scroll):** Menú de navegación superior dinámico (`sticky`) con compensación de desplazamiento (`scroll-padding-top`) para evitar el solapamiento de encabezados.
- **Menú Lateral Móvil Optimizado:** Panel de navegación exclusivo para celulares que se desliza de forma natural desde la derecha (`right-to-left`), mejorando la accesibilidad táctil con el pulgar.
- **Botón Flotante de WhatsApp Nativo:** Acceso directo e interactivo permanentemente visible con un cartel de atención en dos líneas superpuesto y diseño de corte limpio (`border-white` y margen negativo).
- **Canales de Acción Directa:**
  - **WhatsApp:** Enlace parametrizado con texto de consulta predeterminado.
  - **Llamadas:** Protocolo `tel:` nativo optimizado para dispositivos móviles.
  - **Consulta por Correo:** Enlace directo a la interfaz web de Gmail con campos de destinatario (`to`) y asunto (`subject`) auto-completados de forma automatizada, evitando gestores de correo locales no deseados en escritorio.
- **Componentes Reactivos Dinámicos:**
  - Sistema de acordeones interactivos para Preguntas Frecuentes (FAQ) y Jurisprudencia Destacada.
  - Formulario reactivo con manejo de estado (`useState`) en la sección de *"Evalúa tu caso"*.

---

## 🛠️ Stack Tecnológico

- **Frontend Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Tipado estático y robustez en el desarrollo).
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/) (Entorno de desarrollo ultra rápido y bundling optimizado).
- **Estilos & Layout:** [Tailwind CSS](https://tailwindcss.com/) (Maquetado utilitario fluido y ágil).
- **Paquete de Iconos:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (Iconografía vectorial escalable sin pérdida de resolución).
- **Servidor de Producción / Contenedor:** [Docker](https://www.docker.com/) + [Nginx Alpine](https://www.nginx.com/) (Servidor web ligero de alto rendimiento).

---

## 📁 Estructura del Proyecto

```text
├── node_modules/           # Dependencias del proyecto (ignoradas)
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── components/         # Componentes modulares y reutilizables de la SPA
│   │   ├── BotonWhatsApp.tsx       # Botón flotante siempre visible
│   │   ├── CasosFrecuentes.tsx     # Grilla de problemáticas comunes
│   │   ├── EvaluaTuCaso.tsx        # Formulario reactivo de captación
│   │   ├── FaqYJurisprudencia.tsx  # Componente de acordeones interactivos
│   │   ├── Footer.tsx              # Pie de página institucional y datos de contacto
│   │   ├── Hero.tsx                # Sección principal con CTA (Call to Action)
│   │   ├── Navbar.tsx              # Barra de navegación sticky con menú móvil
│   │   └── Servicios.tsx           # Grilla de áreas de especialización
│   ├── App.tsx             # Componente raíz y flujo estructural de la app
│   ├── index.css           # Estilos globales y directivas de Tailwind/Smooth Scroll
│   └── main.tsx            # Punto de entrada de la aplicación React
├── .dockerignore           # Archivos excluidos del contexto de Docker
├── .gitignore              # Archivos excluidos del control de versiones de Git
├── Dockerfile              # Receta de construcción Multi-stage para entorno aislado
├── docker-compose.yml      # Orquestación local del contenedor y mapeo de puertos
├── package.json            # Scripts y dependencias del proyecto
├── tailwind.config.js      # Configuración de temas y extensiones de Tailwind
└── vite.config.ts          # Configuración del empaquetador Vite
```

---

## 🐋 Dockerización y Despliegue

La aplicación utiliza una estrategia de construcción de múltiples etapas (**Multi-stage Build**) para garantizar la máxima seguridad y el menor tamaño posible en la imagen final de producción.

1. **Etapa 1 (Builder):** Utiliza un entorno aislado de `node:20-alpine` para instalar dependencias y compilar el proyecto (`npm run build`), generando los recursos estáticos optimizados en la carpeta `dist`.
2. **Etapa 2 (Producción):** Descarta las herramientas de Node.js y transfiere únicamente los recursos estáticos compilados hacia un servidor web `nginx:alpine` altamente eficiente, exponiendo el puerto estándar `80`.

### Requisitos Previos
- Contar con [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y activo.

### Comandos de Ejecución

Para construir la imagen y levantar el contenedor en segundo plano por primera vez (o aplicar cambios estructurales en la configuración de red), ejecutar:

```bash
docker compose up -d --build
```

Si solo se desea pausar o reanudar el contenedor sin reconstruir la imagen ni alterar el almacenamiento:

```bash
# Detener el contenedor sin borrar sus recursos
docker compose stop

# Reanudar el contenedor instantáneamente
docker compose start
```

### Configuración de Puertos
Por defecto, el archivo `docker-compose.yml` mapea el tráfico de red de la siguiente forma:
- **Puerto Local (PC):** `5174`
- **Puerto de Contenedor (Nginx):** `80`

La SPA estará disponible localmente en la URL: [http://localhost:5174](http://localhost:5174)

---

## 💻 Desarrollo Local (Sin Docker)

Si se desea realizar modificaciones directas en el código fuente usando el servidor de desarrollo en caliente (*Hot Module Replacement*) de Vite:

1. Instalar las dependencias declaradas en el manifiesto:
   ```bash
   npm install
   ```
2. Iniciar el entorno de desarrollo local:
   ```bash
   npm run dev
   ```
3. Abrir la dirección provista por la consola (habitualmente `http://localhost:5173`).

---

## ✒️ Estándar de Commits

Para mantener un historial de control de versiones unificado, legible y profesional, este repositorio se rige bajo la convención de **Conventional Commits**:

- `feat(...)`: Incorporación de una nueva funcionalidad (ej. `feat(navbar): menú móvil desde la derecha`).
- `fix(...)`: Resolución de un error técnico o bug visual (ej. `fix(icons): reemplazar lucide por react-icons para redes`).
- `docs(...)`: Modificaciones en la documentación del repositorio (ej. `docs(readme): agregar guía de dockerización`).
- `style(...)`: Cambios en la estética o formato de código que no alteran la lógica (ej. `style(index): scroll behavior suave`).