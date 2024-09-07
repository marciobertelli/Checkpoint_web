"use strict";
//  Exercícios de Classes e Herança
//----------------EXERCICIO 1
class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao() {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricaoDetalhada() {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}
const gerenteExemplo = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
console.log(gerenteExemplo.descricaoDetalhada());
//----------------EXERCICIO 2
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    exibirSaldo() {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo, limiteCredito) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }
    exibirSaldo() {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}
const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
console.log(contaCorrenteExemplo.exibirSaldo());
