"use strict";
//  Interfaces e Tipos Avançados
function exibirProdutoComPagamento(produto, pagamento) {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}
const produtoExemplo = { nome: 'Geladeira', preco: 5000, categoria: 'Eletrônicos' };
const formaPagamentoExemplo = 'pix';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));
function exibirInformacoesEmpregado(empregado) {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}
const pessoaEmpregadaExemplo = { nome: 'Marcio', idade: 25, empresa: 'TechCorp', salario: 4000 };
console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));
