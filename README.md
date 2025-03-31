# 📌 Proyecto: Frontend de Suscripción a Fondos

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-Tailwind-blue?style=for-the-badge&logo=css3)

🚀 Este proyecto es una aplicación frontend desarrollada en **React.js** que permite la suscripción y cancelación de fondos de inversión, además del envío de notificaciones por correo o SMS.

---

## 🖥️ **Demo en Video**
🎥 [Enlace al video explicativo](https://drive.google.com/file/d/1alXCZACQgV-L8B08vXUyC0GB9aLw0YPo/view?usp=sharing) *(Pendiente de agregar)*

---

## 📜 **Tabla de Contenidos**
- [📌 Proyecto](#-proyecto-frontend-de-suscripción-a-fondos)
- [🛠️ Tecnologías Usadas](#-tecnologías-usadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación y Configuración](#️-instalación-y-configuración)
- [🚀 Uso de la Aplicación](#-uso-de-la-aplicación)
- [📝 Características Principales](#-características-principales)
- [🔧 Personalización](#-personalización)
- [🛠️ Contribución](#-contribución)
- [📩 Contacto](#-contacto)

---

## 🛠️ **Tecnologías Usadas**
🔹 **Frontend:** React, React Data Table, Axios, Tailwind CSS
🔹 **Backend (API utilizada):** Node.js, Express
🔹 **Notificaciones:** Envío de emails y SMS a través de la API

---

## 📂 **Estructura del Proyecto**
```
BTGPACTUALFRONT/
├── 📁 public/              # Recursos estáticos
├── 📁 principal/           # Componentes de Layout base
│   ├── Layout.jsx          # Diseño principal
│   └── SideMenu.jsx        # Menú lateral
├── 📁 src/                 # Código fuente principal
│   ├── 📁 assets/          # Recursos como imágenes y SVG
│   │   └── react.svg
│   ├── 📁 components/      # Componentes modulares
│   │   ├── Inicio.jsx      # Componente de inicio
│   │   ├── ModalNotifications.jsx # Manejador de notificaciones
│   │   ├── TablaFondos.jsx # Tabla interactiva de fondos
│   │   ├── UserSelection.jsx # Componente de selección de usuarios
│   │   └── UserTransactions.jsx # Transacciones detalladas
│   ├── 📁 config/          # Configuración global
│   │   └── index.js
│   ├── 📁 context/         # Contextos para estado global
│   │   └── UserContext.jsx
│   ├── App.css             # Estilos globales
│   ├── App.jsx             # Componente Raíz
│   ├── main.jsx            # Punto de Entrada
├── 📜 .env                 # Variables de entorno
├── 📜 .gitignore           # Archivos ignorados por Git
├── 📜 package-lock.json    # Bloqueo de dependencias
├── 📜 README.md            # Documentación del proyecto
```

---

## ⚙️ **Instalación y Configuración**
1️⃣ **Clonar el repositorio:**
```bash
 git clone https://https://github.com/lpb21/btgPactualFront
```

2️⃣ **Instalar dependencias:**
```bash
 cd btgPactualFront
 npm install
```

3️⃣ **Ejecutar la aplicación:**
```bash
 npm run dev
```

4️⃣ **Configurar la API:**
- Asegurar que el backend esté corriendo en `http://localhost:3000`

---

## 🚀 **Uso de la Aplicación**
1. Selecciona un usuario desde el contexto
2. Consulta los fondos disponibles en la tabla interactiva
3. Suscríbe o cancela la suscripción con los botones correspondientes
4. Muestra la data actualizada
5. Envía una notificación por SMS o email desde la modal emergente

---

## 📝 **Características Principales**
✅ Listado de fondos de inversión con paginación y búsqueda
✅ Suscripción y cancelación con confirmación de usuario
✅ Notificaciones por correo o SMS al usuario
✅ Diseño limpio y responsivo con Tailwind CSS
✅ Modal dinámica para gestión de notificaciones

---

## 🔧 **Personalización**

📌 Para cambiar el código de país en SMS, edita `VITE_CODE_COUNTRY`:

---

## 🛠️ **Contribución**
Si deseas contribuir, puedes hacerlo mediante un **fork** del proyecto y enviando un **pull request** con tus mejoras 🚀.

---

## 📩 **Contacto**
📧 Email: leonardoparrasoft@gmail.com
🔗 LinkedIn: [Tu perfil](https://linkedin.com/in/leonardparra)

---

💡 *¡Gracias por revisar este proyecto! Espero que sea de utilidad para ti.* 🚀





##  Descripción

Este proyecto es el frontend de la aplicación BTG, desarrollado con **React**. Proporciona una interfaz de usuario interactiva y dinámica para gestionar las funcionalidades del sistema, incluyendo la visualización de datos, la gestión de usuarios y la interacción con la API backend.

## ️ Tecnologías Utilizadas

- **React** - Librería para la construcción de interfaces de usuario
- **React Router** - Enrutamiento del lado del cliente
- **Axios** - Cliente HTTP para realizar peticiones a la API backend
- **Styled Components** - Estilos CSS en componentes
- **Context API** - Manejo del estado global de la aplicación
- **React Icons** - Librería de iconos vectoriales

---

##  Estructura del Proyecto

```bash
BTGPACTUALFRONT/
├── principal/
│   ├── Layout.jsx           # Componente de layout principal
│   └── SideMenu.jsx         # Componente de menú lateral
├── public/
│   └── ...                  # Archivos públicos (HTML, favicon, etc.)
├── src/
│   ├── assets/
│   │   └── react.svg         # Activos estáticos
│   ├── components/
│   │   ├── Inicio.jsx        # Componente de inicio
│   │   ├── ModalNotifications.jsx # Componente de modal de notificaciones
│   │   ├── TablaFondos.jsx    # Componente de tabla de fondos
│   │   ├── UserSelection.jsx  # Componente de selección de usuario
│   │   └── UserTransactions.jsx # Componente de transacciones de usuario
│   ├── config/
│   │   └── index.js          # Configuración de la aplicación
│   ├── context/
│   │   └── ...              # Contextos para el manejo del estado global
│   ├── App.css               # Estilos globales de la aplicación
│   ├── App.jsx               # Componente principal de la aplicación
│   ├── index.css             # Estilos del punto de entrada
│   ├── main.jsx              # Punto de entrada de la aplicación
│   └── styles.css            # Estilos reutilizables
├── .env                      # Variables de entorno
├── .gitignore                # Archivos ignorados por Git
├── eslint.config.js         # Configuración de ESLint
├── index.html                # Archivo HTML principal
├── modalNotifications.css    # Estilos específicos del modal de notificaciones
├── package-lock.json         # Dependencias del proyecto
└── README.md                 # Documentación del proyecto
Instalación y Configuración
1️⃣ Clonar el Repositorio
Bash

git clone https://[https://github.com/lpb21/btgPactualFront](https://www.google.com/search?q=https://github.com/lpb21/btgPactualFront)
cd btgPactualFront
2️⃣ Instalar Dependencias
Bash

npm install
3️⃣ Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

Fragmento de código

REACT_APP_API_URL=http://localhost:5000/v1 # URL de la API backend
4️⃣ Ejecutar la Aplicación
Para desarrollo:

Bash

npm run dev
La aplicación correrá en http://localhost:3000.

Para producción:

Bash

npm run build
npm run preview
Despliegue en AWS (S3 y CloudFront)
Este frontend está configurado para ser desplegado en AWS utilizando S3 para el almacenamiento de archivos estáticos y CloudFront como CDN para mejorar el rendimiento.

Pasos para desplegar:
Construir la aplicación para producción:

Bash

npm run build
Crear un bucket S3 y configurar el alojamiento de sitios web estáticos.

Subir los archivos de la carpeta build al bucket S3.

Configurar CloudFront para distribuir los archivos desde el bucket S3.

Configurar variables de entorno para producción en AWS.

️ Contribución
Si deseas contribuir, sigue estos pasos:

Haz un fork del repositorio
Crea una nueva rama (git checkout -b feature-nueva)
Realiza tus cambios y haz un commit (git commit -m 'Agrega nueva función')
Sube tu rama (git push origin feature-nueva)
Crea un Pull Request
Licencia
Este proyecto está bajo la licencia MIT.

**¡Gracias por contribuir! **


Este `README.md` proporciona una descripción completa de tu proyecto frontend React, incluyendo la estructura del proyecto, las tecnologías utilizadas, las instrucciones de instalación y configuración, y los pasos para el despliegue en AWS. Puedes personalizarlo aún más según las necesidades específicas de tu proyecto.