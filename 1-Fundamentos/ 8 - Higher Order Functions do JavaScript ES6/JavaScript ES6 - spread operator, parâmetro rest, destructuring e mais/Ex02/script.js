// 1 - Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.
// Dica: use spread operator.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    //   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// 2 - Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// Dica: use parâmetro rest.

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)

// console.log(sum(4,5,6));

// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa (variáveis alex e gunnar), retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// Dica: use object destructuring.

// <!-- name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade -->

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(gunnar))
// console.log(personLikes(alex))

// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring.


const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];
//bornIn: nascido em

// const filter = () => people.filter((element) => element.nationality === 'Australian' &&
//     element.bornIn <= 1999 &&
//     element.bornIn >= 1900)

// const filterPeople = () => people.filter(({ bornIn, nationality }) => nationality === 'Australian' &&
//     bornIn >= 1900 &&
//     bornIn < 2000)

// console.log(filter());
// console.log(filterPeople());

// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].
// Dica: use array destructuring.

const myList = [5, 2, 3];

const swap = ([first, second, third]) => [third, second, first];

// console.log(swap(myList))

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const cars = () => {
    return {
        palio,
        shelbyCobra,
        chiron,
    }
}

const cars2 = ([model, brand, year]) => ({model, brand, year})

// console.log(cars());
// console.log(cars2(palio));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
// Dica: use object destructuring.

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];
// measurementUnit: unidade de medida

//SEM OBJECT DESTRUCTING
// const shipLength = (ship) => `${ship.name} is ${ship.length} ${ship.measurementUnit} long`

//COM OBJECT DESTRUCTING
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params.

const greet = (name, cumprimento = 'Hi') => `${cumprimento} ${name}`

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// 9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica: use object destructuring e spread operator.
// OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.

// yearSeasons: estações do ano.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const months = ({summer, spring, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter]

// console.log(months(yearSeasons));

