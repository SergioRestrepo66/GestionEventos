const express = require('express');
const { crearEvento, obtenerEventos, actualizarEvento, eliminarEvento } = require('../controladores/ControladorEventos');

const router = express.Router();

// Rutas para eventos
router.post('/', crearEvento); // Crear evento
router.get('/', obtenerEventos); // Listar eventos
router.put('/:id', actualizarEvento); // Actualizar evento
router.delete('/:id', eliminarEvento); // Eliminar evento

module.exports = router;

