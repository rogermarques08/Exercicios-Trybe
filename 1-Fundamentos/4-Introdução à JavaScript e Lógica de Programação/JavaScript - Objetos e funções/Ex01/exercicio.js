//Exercicio 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem vinda,', info.personagem ,'!')

//Exercicio 2

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info.recorrente = 'Sim'

//   console.log(info)

//Exercicio 3 

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// for (let key in info) {
//     console.log(key)
// }

//Exercicio 4

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// info.recorrentes = 'Sim'
// for (let key in info) {
//     console.log(info[key])
// }

//Exercicio 5

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota:  'O último MacPatinhas',
// };

// console.log(info.personagem, 'e', info2.personagem)
// console.log(info.origem, 'e', info2.origem)
// console.log(info.nota, 'e', info2.nota)


// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//     ],
// };

//Exercicio 6

// console.log ('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo)

//Exercicio 7

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

//   console.log(leitor)

//Exercicio 8

//   console.log('Julia tem', leitor.livrosFavoritos.length, 'livros favoritos')

//FUNÇÕES

//Exercicio 1

// function verificaPalindrome(word) {

//     let reverse = '';
//     for (let index = 0; index < word.length; index += 1) {
//         reverse += word[word.length - 1 - index]
//     }
//     if (reverse == word) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(verificaPalindrome('arara')); //true
// console.log(verificaPalindrome('desenvolvimento')); //false

// Exercicio 2

// function maiorIndice(numeros) {
//     let maior = '';
//     let indice = '';
//     for (let index = 0; index < numeros.length; index += 1) {
//         if (numeros[index] > maior) {
//             maior = numeros[index]
//             indice = index
//         }
//     }
//     return indice;
// }
    
// console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

// Exercicio 3

// function menorIndice(numeros) {
//     let menor = numeros[0];
//     let indice = '';

//     for ( let index in numeros) {
//         if (numeros[index] < menor) {
//             menor = numeros[index];
//             indice = index;
//         }
//     }
//     return indice;
// }

// console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]))

// Exercicio 4

// function maiorPalavra(array) {
//     let maior = array[0];
//     for (let index in array) {
//         if (array[index].length > maior.length) {
//             maior = array[index]
//         }
//     }
//     return maior;
// }

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])) 

//Exercicio 5 -- Incompleto

// function maiorRepetidor(numeros) {

//     let comparador;
//     let repetidor;

//     for ( let index in numeros) {
//         comparador = numeros[index] 

//         for (let index2 in numeros) {
//             if (comparador === numeros[index]) {
//                 repetidor === numeros[index]
//             }
//         }
//     }

//     return repetidor;
// }

// console.log([2, 3, 2, 5, 8, 2, 3])

// Exercicio 6

function somatoria(numero) {
    let result = 0;

    for (let index = 0; index <= numero; index += 1) {
        result = result + index
    }
    return result
}
console.log(somatoria(5))