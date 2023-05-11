import { ProductInterface } from './products.js';
import { Document, Schema, model } from 'mongoose';
import validator from 'validator';

// User: nombre, nombre de usuario (único), preferencia de compras (enumerado), correo electrónico,.
export interface UserInterface extends Document {
    nombre: string,
    username: string,
    preferencia: string,
    email: string,
}

// Se crea el esquema de la base de datos, especificando propiedades y tipos de datos.
const UsersSchema = new Schema<UserInterface>({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    preferencia: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value: string) {
            if (!validator.default.isEmail(value)) {
              throw new Error('Error: El email no es válido');
            }
        }
    }
});

export const User = model<UserInterface>('User', UsersSchema);