// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'kiwi', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'nutella', 'granola'];

const fruitSalad = (fruit, additional) => [...additional, ...fruit, 'banana'];

// console.log(fruitSalad(specialFruit, additionalItens));


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const newObject = { ...user, ...jobInfos }

const text = ({ name, age, nationality, profession, squad, squadInitials }) => `Olá, me chamo ${name}, tenho ${age} anos e sou ${nationality}. Sou ${profession} e atualmente trablho na ${squadInitials} - ${squad}`;

// console.log(newObject)
// console.log(text(newObject))

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [teste, log] = saudacoes
// log(teste);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]

// console.log(comida, animal, bebida)

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares

// console.log(numerosPares)

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;

// console.log(multiply(8));