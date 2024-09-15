// 5.Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média
let student = [
  { name: "Lucas", grade1: 10.0, grade2: 7.0 },
  { name: "Sofia", grade1: 8.0, grade2: 4.5 },
  { name: "Gabriel", grade1: 7.0, grade2: 9.0 },
  { name: "Laura", grade1: 5.0, grade2: 7.5 },
  { name: "Rafael", grade1: 6.5, grade2: 8.9 },
];

for (key of student) {  
  let media = (key.grade1 + key.grade2) / 2;
  console.log(`Nome: ${key.name} - Média Final: ${media}`);
}