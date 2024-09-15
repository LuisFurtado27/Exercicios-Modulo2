// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produto

const vendas = [
  { produto: "Teclado", quantidade: 1, valor: 100.0 },
  { produto: "Mouse", quantidade: 1, valor: 200.0 },
  { produto: "SSD", quantidade: 3, valor: 300.0 },
  { produto: "Monitor", quantidade: 1, valor: 400.0 },
  { produto: "WebCam", quantidade: 2, valor: 500.0 },
];

let total = 0;

vendas.forEach((venda) => {
  total += venda.quantidade * venda.valor;
});

console.log(`-> O valor total da venda foi ${total}`);