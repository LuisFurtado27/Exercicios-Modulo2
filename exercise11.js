// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'João', produto: 'Caderno', quantidade: 2 },
    { cliente: 'Ana', produto: 'Caneta', quantidade: 5 },
    { cliente: 'João', produto: 'Lápis', quantidade: 3 },
    { cliente: 'Ana', produto: 'Caderno', quantidade: 1 },
    { cliente: 'Pedro', produto: 'Caneta', quantidade: 2 }
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
    const { cliente, quantidade } = pedido;
    if (totalPorCliente[cliente]) {
        totalPorCliente[cliente] += quantidade;
    } else {
        totalPorCliente[cliente] = quantidade;
    }
});

console.log(totalPorCliente);