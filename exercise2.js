// 2.Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
let livro = {
  titulo: "Mais Esperto Que o Diabo",
  autor: "Napoleon Hill",
  anoPublicidade: 2011,
  genero: "Desenvolvimento pessoal, autoajuda",
  //editora: "Citadel Editora",
};

console.log("este valor" + livro.editora)
console.log("")

for (let key in livro) {
  console.log(key + ": " + livro[key]);
}

for (let book in livro) {
    if (livro.editora == undefined) {
      livro.editora = "Editora Não Definida";
    } else {
      livro.editora = livro.editora;
    }
  }
console.log(" ");
console.log("DEPOIS");

for (let key in livro) {
  console.log(key + ": " + livro[key]);
}