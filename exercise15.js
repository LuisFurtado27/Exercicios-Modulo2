// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 4500 },
    { tipo: 'saída', valor: 50 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 150 },
    { tipo: 'saída', valor: 250 },
    { tipo: 'saída', valor: 100 },
    { tipo: 'saída', valor: 1200 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$ ${saldoFinal}`);