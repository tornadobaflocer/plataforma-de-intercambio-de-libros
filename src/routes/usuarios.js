const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Registrar un nuevo usuario
router.post('/registro', async (req, res) => {
  const nuevoUsuario = new Usuario(req.body);
  await nuevoUsuario.save();
  res.status(201).json(nuevoUsuario);
});

// Iniciar sesión
router.post('/login', async (req, res) => {
  const usuario = await Usuario.findOne({ email: req.body.email });
  if (usuario && usuario.contrasena === req.body.contrasena) {
    res.json(usuario);
  } else {
    res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
});

module.exports = router;
