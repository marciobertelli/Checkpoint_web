"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Financeiro = void 0;
// Definição do namespace Financeiro
var Financeiro;
(function (Financeiro) {
    function calcularImposto(valor, taxa) {
        return valor * taxa;
    }
    Financeiro.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor - (valor * taxa);
    }
    Financeiro.calcularDesconto = calcularDesconto;
    class Orcamento {
        constructor(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        exibirOrcamento() {
            return `Itens: ${this.itens.join(', ')}, Valor Total: R$${this.valorTotal.toFixed(2)}`;
        }
    }
    Financeiro.Orcamento = Orcamento;
})(Financeiro || (exports.Financeiro = Financeiro = {}));
