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
  .catch(err => console.error(err));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la plataforma de intercambio de libros');
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});