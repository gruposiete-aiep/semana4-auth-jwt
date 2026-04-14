const jwt = require('jsonwebtoken');

// Este es el guardia de seguridad que verifica el token
const verificarToken = (req, res, next) => {

    // Buscamos el token en las cookies del navegador
    const token = req.cookies.token;

    // Si no hay token, acceso denegado
    if (!token) {
        return res.status(401).json({ 
            message: 'Acceso denegado. No hay token.' 
        });
    }

    // Si hay token, verificamos que sea válido y no esté vencido
    try {
        const verificado = jwt.verify(token, process.env.JWT_SECRET);
        
        // Guardamos los datos del usuario para usarlos en la ruta privada
        req.usuario = verificado;
        
        // Todo bien, dejamos pasar al usuario
        next();

    } catch (error) {
        // Si el token es inválido o expiró
        res.status(401).json({ 
            message: 'Token inválido o expirado.' 
        });
    }
};

module.exports = verificarToken;