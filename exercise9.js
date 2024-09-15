// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const person = [
  { name: "Person1", age: 95, city: "Gravatai" },
  { name: "Person2", age: 17, city: "Porto Alegre" },
  { name: "Person3", age: 96, city: "Florianópolis" },
  { name: "Person4", age: 20, city: "Canoas" },
  { name: "Person5", age: 25, city: "Viamão" },
  { name: "Person6", age: 79, city: "Garibaldi" },
  { name: "Person7", age: 38, city: "São Borja" },
  { name: "Person8", age: 28, city: "Pelotas" },
];

let count = 0;
person.forEach((people) => {
  if (people.age > 30) count++;
});

console.log(`-> ${count} clientes tem mais de 30 anos`);