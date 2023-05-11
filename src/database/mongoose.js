"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
(0, mongoose_1.connect)('mongodb://127.0.0.1:27017/modificacion').then(function () {
    console.log('Conectado a la base de datos');
})["catch"](function () {
    console.log('Error al conectar a la base de datos');
});
