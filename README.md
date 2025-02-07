Gestión de Eventos

Descripción

Aplicación CRUD para la gestión de eventos, permitiendo a los usuarios registrarse, autenticarse y gestionar eventos mediante una interfaz intuitiva en React y un backend en Node.js 
con MongoDB.

Características:
Registro e inicio de sesión de usuarios con JWT.
Creación, edición, eliminación y listado de eventos.
Filtrado de eventos por fecha y ubicación.
Diseño responsivo con Material-UI / Bootstrap.
API RESTful con Express y autenticación con middleware.
Tecnologías Utilizadas
Backend: Node.js, Express, MongoDB, JWT.
Frontend: React, Material-UI / Bootstrap, Context API.
Base de Datos: MongoDB con Mongoose.


Instalación y Configuración

1. Clonar el Repositorio

git clone https://github.com/tuusuario/GestionEventos.git
cd GestionEventos

2. Configurar el Backend
   
cd backend
npm install

Configurar variables de entorno (backend/.env)

PORT=5000

MONGO_URI=mongodb://localhost:27017/gestioneventos
JWT_SECRET= Clave_segura_jwt

Ejecutar el servidor

npm start

3. Configurar el Frontend

cd frontend
npm install

Configurar variables de entorno (frontend/.env)

REACT_APP_API_URL=http://localhost:5000/api
Ejecutar la aplicación React
npm start

Uso
Registrar un usuario desde la página de registro.
Iniciar sesión para acceder a las funcionalidades.
Crear, editar y eliminar eventos desde la interfaz.
Filtrar eventos por fecha y ubicación para encontrar fácilmente.
