import express = require( "express");
import './database/mongoose.js';
import { Product } from "./models/products.js";
import { User } from "./models/users.js";
import { connect } from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

// ------------------------------------------------- Rutas de productos ------------------------------------------------- //

// Crear una producto
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    console.log(`Creando producto...`);
    await product.save();
    res.status(201).send(product);
    console.log(`Producto creado correctamente`);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error al crear el producto`);
  }
});

// Obtener todos los productos almacenados
app.get('/products', async (req, res) => {
  try {
    console.log('Buscando todos los productos almacenados...');
    const products = await Product.find({});
    console.log('Mostrando todos los productos almacenados');
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
    console.log('Error al buscar todos los productos almacenados:');
  }
});

// Obtener un producto por su ID
app.get('/products/:id', async (req, res) => {
  try {
    console.log('Buscando producto por ID...');
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Producto no encontrado');
      return res.status(404).send();
    }
    console.log('Mostrando producto por ID...');
    return res.send(product);
  } catch (error) {
    console.log('Ha habido un error al mostrar el producto por ID:');
    return res.status(500).send(error);
  }
});

// Eliminar una producto por su ID
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    return res.send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Actualizar una producto por su ID
app.patch('/products/:id', async (req, res) => {});

// ------------------------------------------------ Rutas de usuarios ------------------------------------------------ //

// Crear un usuario
app.post('/users', async (req, res) => {
  try {
    console.log(`Creando usuario...`);
    const user = new User(req.body);
    await user.save();
    console.log(`Usuario guardado correctamente`);
    res.status(201).send(user);
    console.log(`Usuario creado correctamente`);
  } catch (error) {
    res.status(400).send(error);
    console.log(`Error al crear el usuario`);
  }
});

// Obtener todos los usuarios almacenados
app.get('/users', async (req, res) => {
  try {
    console.log('Buscando todos los usuarios almacenados...');
    const users = await User.find({});
    console.log('Mostrando todos los usuarios almacenados');
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
    console.log('Error al buscar todos los usuarios almacenados:', error);
  }
});

// Obtener un usuario por su username
app.get('/users/:username', async (req, res) => {
  try {
    console.log('Buscando usuario por username...');
    const user = await User.findOne({
      username: req.params.username as string,
    });
    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(404).send();
    }
    console.log('Mostrando usuario por username...');
    return res.send(user);
  } catch (error) {
    console.log('Ha habido un error al mostrar el usuario por username:', error);
    return res.status(500).send(error);
  }
});

// Eliminar un usuario por su username
app.delete('/users/:username', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({
      username: req.params.username as string,
    });
    if (!user) {
      return res.status(404).send();
    }
    return res.send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});


// -------------------------------------------------- Rutas no definidas -------------------------------------------------- //

// Ruta por defecto
app.get('*', (req, res) => {
  console.log(`Error: La ruta no ha sido definida correctamente`);
  return res.status(404).send();
});

// ---------------------------------------------------- Servidor ---------------------------------------------------- //

app.listen(port, () => {
  console.log(`El servidor express está escuchando en el puerto ${port}`);
});