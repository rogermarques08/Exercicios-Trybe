// 🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

//   const test = Object.entries(professionalBoard)
//   const obj = test
//   console.log(obj)
// Pesquisa
const searchEmployee = (id, detail) => {
 let result = '';

 for (let index in professionalBoard) {
    let array = professionalBoard[index]

    if (array.id === id) {
      result = array
    }
 }

 if(!result) {
  throw new Error('ID não identificada')
 }

 if(!result[detail]) {
  throw new Error('Informação indisponível')
 }

 return result[detail]

}; 

module.exports = { sum, myRemove, myFizzBuzz, searchEmployee };
