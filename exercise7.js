// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
  { nome: "Teclado", preco: 100.0, desconto: 10 },
  { nome: "Mouse", preco: 200.0, desconto: 10 },
  { nome: "SSD", preco: 300.0, desconto: 10 },
  { nome: "Monitor", preco: 400.0, desconto: 10 },
  { nome: "WebCam", preco: 500.0, desconto: 10 },
];

console.log("Produtos sem aplicar desconto");
produtos.forEach((produto) => {
  console.log(produto);
});

console.log("Produtos com desconto");

produtos.forEach((produto) => {
     produto.preco = produto.preco - produto.preco * (produto.desconto / 100);
  }
);

produtos.forEach((produto) => {
  console.log(produto);
});