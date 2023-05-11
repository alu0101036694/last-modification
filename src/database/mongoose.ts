import { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27017/modificacion').then(() => {
  console.log('Conectado a la base de datos');
}).catch(() => {
  console.log('Error al conectar a la base de datos');
});