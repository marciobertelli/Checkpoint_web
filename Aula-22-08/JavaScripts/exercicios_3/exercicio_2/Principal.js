"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação do namespace Financeiro
const Financeiro_1 = require("./Financeiro");
// Criação de instâncias e utilização das funções do namespace
const orcamentoExemplo = new Financeiro_1.Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());
const valorComImposto = Financeiro_1.Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);
const valorComDesconto = Financeiro_1.Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
