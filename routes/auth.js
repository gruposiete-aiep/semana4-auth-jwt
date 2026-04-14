// Importamos express y creamos el router
const express = require('express');
const router = express.Router();

// Importamos el controlador que tiene la lógica
const authController = require('../controllers/authController');

// Importamos el middleware que verifica el JWT
const verificarToken = require('../middleware/verificarToken');

// Ruta de login - cualquiera puede acceder
router.post('/login', authController.login);

// Ruta de logout - cierra la sesión
router.post('/logout', authController.logout);

// Ruta privada - solo accesible con token válido
router.get('/privado', verificarToken, authController.privado);

module.exports = router;