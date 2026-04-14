README.md

# Semana 4 — Autenticación JWT con Express

## Descripción
Proyecto grupal desarrollado en el marco de la asignatura Taller de Plataformas Web de AIEP. Consiste en un servidor backend construido con Node.js y Express que implementa autenticación segura mediante JSON Web Tokens (JWT), almacenamiento de sesión en cookies y protección de rutas privadas mediante middleware.

## Integrantes
- José Alvarez
- Ignacio de la Vega
- Sebastián Alvarez

## Tecnologías utilizadas
- Node.js
- Express.js
- JSON Web Token (JWT)
- Cookie-Parser
- Dotenv

## Estructura del proyecto
semana4-auth-jwt/
├── controllers/
│   └── authController.js
├── middleware/
│   └── verificarToken.js
├── public/
│   ├── index.html
│   └── bienvenida.html
├── routes/
│   └── auth.js
├── .env.example
├── .gitignore
├── app.js
└── package.json

## Cómo ejecutar el proyecto
1. Clonar el repositorio
2. Instalar dependencias con `npm install`
3. Crear un archivo `.env` basado en `.env.example` y agregar las claves secretas
4. Ejecutar el servidor con `node app.js`
5. Abrir el navegador en `http://localhost:3000`

## Rutas disponibles
| Método | Ruta | Descripción | Protegida |
|--------|------|-------------|-----------|
| POST | `/auth/login` | Inicia sesión y genera token JWT | No |
| POST | `/auth/logout` | Cierra sesión y elimina la cookie | No |
| GET | `/auth/privado` | Acceso a zona privada | Sí |

## Usuarios de prueba
| Usuario | Contraseña |
|---------|------------|
| admin | admin123 |
| jose | jose123 |
| ignacio | ignacio123 |
| sebastian | sebastian123 |

## Seguridad implementada
- Token JWT con expiración de 1 hora
- Cookie con flag httpOnly para proteger contra ataques XSS
- Middleware que verifica el token antes de acceder a rutas privadas
- Variables de entorno para proteger claves secretas
- Respuesta HTTP 401 ante credenciales incorrectas o token inválido
