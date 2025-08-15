const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = 'mongodb://localhost:27017/libros-intercambio';

// Conectar a MongoDB
// Configuración de mongoose para manejar la conexión a la base de datos
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1); // Termina el proceso si hay un error de conexión
  });

app.use(cors()); // Habilitar CORS para permitir solicitudes de diferentes orígenes
app.use(bodyParser.json()); // Middleware para analizar solicitudes JSON

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Ruta raíz que envía un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido a la plataforma de intercambio de libros');
});

// Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});