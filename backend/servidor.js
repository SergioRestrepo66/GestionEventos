const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const BaseDatosMongo = require('./src/confuguracionBD/BaseDatosMongo');
BaseDatosMongo();

const app = express();



// Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000/api/autenticacion',
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Rutas
app.use('/api/eventos', require('./src/rutas/rutasEvento'));
app.use('/api/autenticacion', require('./src/rutas/rutasAutenticacion'));


app.use((req, res, next)=>{
  res.status(404).json({mensaje: 'Ruta no encontrada'})
})

app.use((error, req, res, next)=>{
  console.error(error.stack);
  res.status(500).json({ mensaje: 'Error en el servidor', error: error.message})
})

const PORT = process.env.PORT || 5002;


// Inicio del servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
