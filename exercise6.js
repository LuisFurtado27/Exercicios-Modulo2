// Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.
const funcionarios = [
  { nome: "Beatriz", cargo: "cargo1", salario: 5000.38 },
  { nome: "Felipe", cargo: "cargo2", salario: 6000.52 },
  { nome: "Juliana", cargo: "cargo3", salario: 3000.25 },
  { nome: "Marcos", cargo: "cargo4", salario: 2000.78 },
  { nome: "Vanessa", cargo: "cargo5", salario: 4500.30 },
];

for (let key of funcionarios) {
  if (key.salario > 3500) {
    console.log(`Nome: ${key.nome} - Salário:  ${key.salario.toFixed(2)}`);
  }
}