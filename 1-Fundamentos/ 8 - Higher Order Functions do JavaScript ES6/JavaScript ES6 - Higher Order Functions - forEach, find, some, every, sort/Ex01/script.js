//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

// console.log(findDivisibleBy3And5())

///2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((item) => item.length === 4)

// console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => {
    const find = musicas.find((obj) => obj.id === id);
    return find.title
}

// console.log(findMusic('31031685'))

// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => item === name)

// console.log(hasName(names, 'Ana'))

//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

const verifyAges = (arr, minimumAge) => arr.every((item) => item.age >= minimumAge)

// console.log(verifyAges(people, 18));

// 1 - Utilize sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

people.sort((a , b) => a.age > b.age ? 1 : -1)

console.log(people);
