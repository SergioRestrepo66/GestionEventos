const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../modelos/usuario');
const JWT_SECRET = process.env.JWT_SECRET || 'clave_segura_para_jwt';

// Registro de usuario
exports.register = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    const emailExistente = await Usuario.findOne({ email: req.body.email });
    if (emailExistente) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const nuevoUsuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      password: hashedPassword,
    });

    const usuarioGuardado = await nuevoUsuario.save();
    res.json({ data: usuarioGuardado });
  } catch (err) {
    console.error('Error del servidor:', err);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(400).json({ message: "correo o contraseña incorrectos" });

    const isMatch = await bcrypt.compare(password, usuario.password);
    if (!isMatch) return res.status(400).json({ message: "correo o contraseña incorrectos" });

    const token = jwt.sign(
      { id: usuario._id }, JWT_SECRET, { expiresIn: '1h' }
    );

    res.status(200).json({mensaje: 'Inicio de sesión exitoso',  token });
  } catch (err) {
    res.status(500).json({ mensaje: "Error en el servidor", error:err.message });
  }
};