function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];  // Atualizamos o maior se o elemento atual for maior
        }
    }

    return maior;
}

const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(maiorNumero);  
console.log(maiorPalavra);