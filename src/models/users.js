"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var validator_1 = require("validator");
// Se crea el esquema de la base de datos, especificando propiedades y tipos de datos.
var UsersSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
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
        validate: function (value) {
            if (!validator_1["default"]["default"].isEmail(value)) {
                throw new Error('Error: El email no es válido');
            }
        }
    }
});
exports.User = (0, mongoose_1.model)('User', UsersSchema);
