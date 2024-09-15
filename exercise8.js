// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const movies = [
  { title: "Matrix", director: "Lilly e Lana Wachowski", anoLancamento: 1999 },
  { title: "O Senhor dos Anéis: A Sociedade do Anel", director: "Peter Jackson", anoLancamento: 2001 },
  { title: "A Origem", director: "Christopher Nolan", anoLancamento: 2010 },
  { title: "A Rede Social", director: "David Fincher", anoLancamento: 2010 },
  { title: "Pirates of Silicon Valley", director: "Martyn Burke", anoLancamento: 1999 },
  { title: "Os Estagiários", director: "Shawn Levy", anoLancamento: 2013 },
];

let movieName = [];
movies.forEach((movie) => {
  movieName.push(movie.title);
});

console.log(movieName);