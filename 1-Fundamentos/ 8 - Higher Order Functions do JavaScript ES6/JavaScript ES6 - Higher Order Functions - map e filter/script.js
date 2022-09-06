const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//   🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

// const newFormat = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

const text = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

// console.log(text)

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const newObj = books.map((element) => {
    return {
        author: element.author.name,
        age: (element.releaseYear - element.author.birthYear)
    }
}).sort((a, b) => a.age - b.age)

// console.log(newObj)

const obj = (objeto) => objeto.map((element) => {
    return {
        author: element.author.name,
        age: element.releaseYear - element.author.birthYear
    }
}).sort((a, b) => a.age - b.age)

// console.log(obj(books))



// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

// const genre = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')

const genre = books.filter((element) => element.genre === 'Ficção Científica' || element.age === 'Fantasia')

console.log(genre)



// 🚀 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// Dica: use as funções filter e sort

const more60Years = books.filter((element) => (2022 - element.releaseYear) >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(more60Years)

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const names = genre.map((element) => element.author.name).sort();

// console.log(names)

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = more60Years.map((element) => element.name);

// console.log(oldBooks)

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.


const threeLetters = books.filter((element) => element.author.name === 'J. R. R. Tolkien')[0].name

// console.log(threeLetters)
