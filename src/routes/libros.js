const express = require('express');
const Libro = require('../models/Libro');
const router = express.Router();

// Listar libros disponibles
router.get('/', async (req, res) => {
  const libros = await Libro.find({ disponible: true });
  res.json(libros);
});

// Agregar un nuevo libro
router.post('/', async (req, res) => {
  const nuevoLibro = new Libro(req.body);
  await nuevoLibro.save();
  res.status(201).json(nuevoLibro);
});

module.exports = router;
