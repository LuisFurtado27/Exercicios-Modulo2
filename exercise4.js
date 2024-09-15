// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


const person = [
    { name: "Lara", age: 25, city:  "Gravatai" },
    { name: "Sara", age: 38, city:  "Porto Alegre"},
    { name: "Luke", age: 19, city:  "Florianópolis"},
    { name: "Noah", age: 40, city:  "Criciuma"},
];

for(let key of person){ 
        console.log(`Nome: ${key.name}  Idade: ${key.age} Cidade: ${key.city}.`);
    }