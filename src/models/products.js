"use strict";
exports.__esModule = true;
exports.Product = void 0;
var mongoose_1 = require("mongoose");
// Se crea el esquema de la base de datos, especificando propiedades y tipos de datos.
var ProductsSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        uniqued: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    usuarios: {
        type: String,
        required: true
    }
});
exports.Product = (0, mongoose_1.model)('Product', ProductsSchema);
