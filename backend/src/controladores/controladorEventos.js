const Evento = require('../modelos/Evento');

// Crear un nuevo evento
exports.crearEvento = async (req, res) => {
  try {
    const { nombre, fecha, hora, ubicacion, descripcion } = req.body;
    const nuevoEvento = new Evento({ nombre, fecha, hora, ubicacion, descripcion });
    await nuevoEvento.save();
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los eventos
exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find({});
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un evento
exports.actualizarEvento = async (req, res) => {
  try {
    const evento = await Evento.findOneAndUpdate(
      { _id: req.params.id },  // Filtrando por ID
      req.body,
      { new: true }
    );
    if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(evento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un evento
exports.eliminarEvento = async (req, res) => {
  try {
    const evento = await Evento.findOneAndDelete({ _id: req.params.id });
    if (!evento) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

