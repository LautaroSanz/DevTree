"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESM ecmascript modules
const app = (0, express_1.default)();
//routing
app.get('/', (req, res) => {
    res.send('Hola Mundo en express /Ts');
});
app.get('/ecommerce', (req, res) => {
    res.send('Ecommerce en express');
});
const port = process.env.PORT || 4000;
app.listen(port, () => { console.log('Servidor Running en el puerto:', port); });
//# sourceMappingURL=index.js.map