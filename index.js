// Importa el módulo express
import express from 'express';

// Crea una instancia de la aplicación express
const app = express();

// Define un endpoint GET en la ruta '/'
app.get('/', (req, res) => {
  // Envía una respuesta con el mensaje
  res.send('¡Hola, mundo desde mi API REST!');
});

// Define el puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
