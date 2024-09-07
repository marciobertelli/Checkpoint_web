//  Interfaces e Tipos Avançados

//----------------EXERCICIO 1

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
  }
  
  const produtoExemplo: Produto = { nome: 'Geladeira', preco: 5000, categoria: 'Eletrônicos' };
  const formaPagamentoExemplo: FormaPagamento = 'pix';
  
  console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));



//----------------EXERCICIO 2

type Pessoa = {
    nome: string;
    idade: number;
  };
  
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  type PessoaEmpregada = Pessoa & Empregado;
  
  function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
  }
  
  const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Marcio', idade: 25, empresa: 'TechCorp', salario: 4000 };
  console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));