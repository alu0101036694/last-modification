"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
require("./database/mongoose.js");
var products_js_1 = require("./models/products.js");
var users_js_1 = require("./models/users.js");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
// ------------------------------------------------- Rutas de productos ------------------------------------------------- //
// Crear una producto
app.post('/products', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = new products_js_1.Product(req.body);
                console.log("Creando producto...");
                return [4 /*yield*/, product.save()];
            case 1:
                _a.sent();
                res.status(201).send(product);
                console.log("Producto creado correctamente");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).send(error_1);
                console.log("Error al crear el producto");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Obtener todos los productos almacenados
app.get('/products', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('Buscando todos los productos almacenados...');
                return [4 /*yield*/, products_js_1.Product.find({})];
            case 1:
                products = _a.sent();
                console.log('Mostrando todos los productos almacenados');
                res.send(products);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send(error_2);
                console.log('Error al buscar todos los productos almacenados:');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Obtener un producto por su ID
app.get('/products/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('Buscando producto por ID...');
                return [4 /*yield*/, products_js_1.Product.findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (!product) {
                    console.log('Producto no encontrado');
                    return [2 /*return*/, res.status(404).send()];
                }
                console.log('Mostrando producto por ID...');
                return [2 /*return*/, res.send(product)];
            case 2:
                error_3 = _a.sent();
                console.log('Ha habido un error al mostrar el producto por ID:');
                return [2 /*return*/, res.status(500).send(error_3)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Eliminar una producto por su ID
app["delete"]('/products/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, products_js_1.Product.findByIdAndDelete(req.params.id)];
            case 1:
                product = _a.sent();
                if (!product) {
                    return [2 /*return*/, res.status(404).send()];
                }
                return [2 /*return*/, res.send(product)];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(500).send(error_4)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Actualizar una producto por su ID
app.patch('/products/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
// ------------------------------------------------ Rutas de usuarios ------------------------------------------------ //
// Crear un usuario
app.post('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log("Creando usuario...");
                user = new users_js_1.User(req.body);
                return [4 /*yield*/, user.save()];
            case 1:
                _a.sent();
                console.log("Usuario guardado correctamente");
                res.status(201).send(user);
                console.log("Usuario creado correctamente");
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(400).send(error_5);
                console.log("Error al crear el usuario");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Obtener todos los usuarios almacenados
app.get('/users', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('Buscando todos los usuarios almacenados...');
                return [4 /*yield*/, users_js_1.User.find({})];
            case 1:
                users = _a.sent();
                console.log('Mostrando todos los usuarios almacenados');
                res.send(users);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.status(500).send(error_6);
                console.log('Error al buscar todos los usuarios almacenados:', error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Obtener un usuario por su username
app.get('/users/:username', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('Buscando usuario por username...');
                return [4 /*yield*/, users_js_1.User.findOne({
                        username: req.params.username
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    console.log('Usuario no encontrado');
                    return [2 /*return*/, res.status(404).send()];
                }
                console.log('Mostrando usuario por username...');
                return [2 /*return*/, res.send(user)];
            case 2:
                error_7 = _a.sent();
                console.log('Ha habido un error al mostrar el usuario por username:', error_7);
                return [2 /*return*/, res.status(500).send(error_7)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Eliminar un usuario por su username
app["delete"]('/users/:username', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, users_js_1.User.findOneAndDelete({
                        username: req.params.username
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).send()];
                }
                return [2 /*return*/, res.send(user)];
            case 2:
                error_8 = _a.sent();
                return [2 /*return*/, res.status(500).send(error_8)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// -------------------------------------------------- Rutas no definidas -------------------------------------------------- //
// Ruta por defecto
app.get('*', function (req, res) {
    console.log("Error: La ruta no ha sido definida correctamente");
    return res.status(404).send();
});
// ---------------------------------------------------- Servidor ---------------------------------------------------- //
app.listen(port, function () {
    console.log("El servidor express est\u00E1 escuchando en el puerto ".concat(port));
});
