const jwt = require('jsonwebtoken');

// Lista de usuarios ficticios
const usuarios = [
    { id: 1, usuario: 'admin', password: 'admin123' },
    { id: 2, usuario: 'jose', password: 'jose123' },
    { id: 3, usuario: 'ignacio', password: 'ignacio123' },
    { id: 4, usuario: 'sebastian', password: 'sebastian123' }
];

// FUNCIÓN DE LOGIN
exports.login = (req, res) => {
    const { usuario, password } = req.body;

    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (!usuarioEncontrado) {
        return res.status(401).json({ 
            message: 'Credenciales incorrectas. No autorizado.' 
        });
    }

    const token = jwt.sign(
        { id: usuarioEncontrado.id, usuario: usuarioEncontrado.usuario },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.cookie('token', token, { 
        httpOnly: true,
        secure: false,
        maxAge: 3600000
    });

    res.json({ 
        message: 'Login exitoso',
        usuario: usuarioEncontrado.usuario
    });
};

// FUNCIÓN DE LOGOUT
exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Sesión cerrada correctamente' });
};

// FUNCIÓN DE RUTA PRIVADA
exports.privado = (req, res) => {
    res.json({ 
        message: 'Acceso autorizado a ruta privada',
        usuario: req.usuario
    });
};