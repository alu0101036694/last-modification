import { Document, Schema, model } from 'mongoose';

// Producto: nombre, descripción, precio, categoría (enumerado con diferentes opciones: deporte, videojuegos, etc.), 
// usuarios que han comprado el producto.
export interface ProductInterface extends Document {
    nombre: string,
    descripcion: string,
    precio: number,
    categoria: string
    usuarios:  string
}

// Se crea el esquema de la base de datos, especificando propiedades y tipos de datos.
const ProductsSchema = new Schema<ProductInterface>({
    nombre: {
        type: String,
        required: true,
        trim: true,
        uniqued: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    precio: {
        type: Number,
        required: true,
        trim: true,
    },
    categoria: {
        type: String,
        required: true,
        trim: true,
    },
    usuarios: {
        type: String,
        required: true,
    }
});

export const Product = model<ProductInterface>('Product', ProductsSchema);