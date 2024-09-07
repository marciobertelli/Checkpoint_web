"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pedido_1 = require("./Pedido");
const Cliente_1 = require("./Cliente");
const clienteExemplo = new Cliente_1.Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido_1.Pedido(clienteExemplo, 'Notebook', 4500);
console.log(pedidoExemplo.exibirPedido());
