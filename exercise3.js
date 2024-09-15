// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 1,
    desconto: 10,
    estoque: 100
};

let valorMinimo = 100;
let resultado = {};

for (let propriedade in produto) {
    if (produto[propriedade] > valorMinimo) {
        resultado[propriedade] = produto[propriedade];
    }
}

console.log(resultado);