const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  ubicacion: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model('Evento', eventoSchema);

