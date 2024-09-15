// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

// Objeto empresa com departamentos e funcionários
const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: [ { nome: 'Karine' }, { nome: 'Sara' }]
        },
        {
            nome: 'Desenvolvimento de Software',
            funcionarios: [{ nome: 'Luis' }, { nome: 'Eduardo' }, { nome: 'Antony' }]
        },
        {
            nome: 'Marketing',
            funcionarios: [{ nome: 'Joyce' }, { nome: 'Luke' }]
        }
    ]
};

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    
    for (const funcionario of departamento.funcionarios) {
        console.log(`- Funcionário: ${funcionario.nome}`);
    }
}