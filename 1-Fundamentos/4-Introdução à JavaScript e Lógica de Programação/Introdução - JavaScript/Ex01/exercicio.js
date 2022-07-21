//Exercicio 1

// const a = 12
// const b = 34

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

//Exercicio 2

// const a = 34
// const b = 93

// if (a > b) {
//     console.log("a é maior que b")
// } else {
//     console.log('b é menor que a')
// }

//Exercicio 3

// const a = 45
// const b = 92
// const c = 27

// if (a > b && a > c) {
//     console.log(' a é o maior número!');
// } else if (b > a && b > c) {
//     console.log('b é o maior número!');
// } else {
//     console.log('c é o maior número!');

//Exercicio 4

// const a = 0

// if (a > 0) {
//     console.log('Valor positivo!')
// } else if (a < 0) {
//     console.log('Valor negativo!')
// } else {
//     console.log ('Valor neutro!')
// }

//Exercicio 5

// const a = -80
// const b = -30
// const c = 70

// if (a + b + c < 0) {
//     console.log('Erro!')
// } else if (a + b + c === 180) {
//     console.log('True')
// } else if (a + b + c < 180) {
//     console.log('False')
// } 

//Exercicio 6

// const peça = 'rainha'

// switch (peça.toLowerCase()) {
//     case ('peão'):
//         console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//         break;

//     case ("rainha"):
//         console.log("Rainha-> Diagonal, horizontal e vertical.");
//         break;

//     case ("cavalo"):
//         console.log("Cavalo -> 'L' pode pular sobre as peças.");
//         break;

//     case ("torre"):
//         console.log('Torre -> Horizontal e vertical.');
//         break;

//     case 'rei':
//         console.log('Rei-> Uma casa apenas para qualquer direção.');
//         break;

//     case 'bispo':
//         console.log('Bispo-> Diagonal.');
//         break;

//     default:
//         console.log('Erro,Peça inexistente')
// }

//Exercicio 7

// const nota = 0

// if (nota < 0 || nota > 100) {
//     console.log('Erro!')
// } else if (nota < 50) {
//     console.log('F')
// } else if (nota >= 50) {
//     console.log('E')
// } else if (nota >= 60) {
//     console.log('D')
// } else if (nota >= 70) {
//     console.log('C')
// } else if (nota >= 80) {
//     console.log('B')
// } else {
//     console.log('A')
// }

//Exercicio 8

// const a = 1
// const b = 2
// const c = 3

// if (a % 2 === 0 || b % 2 === 0 || c % 2 == 0) {
//     console.log("true")
// } else {
//     console.log('False')
// }

//Exercio 9 

// const a = 4
// const b = 2
// const c = 6

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log("true")
// } else {
//     console.log('False')
// }

//Exercicio 10

// const custo = 100
// const valorDeVenda = 150
// let imposto = 0.2
// let custoTotal = custo * imposto + custo
// let lucro = valorDeVenda - custoTotal

// console.log(lucro)

//Exercicio 11

const salario = 5500
let inss = 570.88
let salarioBase = salario - inss
let ir = salarioBase * 0.275 - 869.36
let salrioLiquido = salarioBase -  ir

console.log(salrioLiquido)


