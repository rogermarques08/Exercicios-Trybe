const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 15,
  professor: "Maria Clara",
  turno: "noite",
};

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turnoC = (objeto, chave, valor) => {
  objeto[chave] = valor;
};
turnoC(lesson2, "turno", "noite");
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keys = (objeto) => Object.keys(objeto);
// console.log(keys(lesson2))

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const lengthObj = (objeto) => Object.keys(objeto).length;
// console.log(lengthObj(lesson2))

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueObj = (objeto) => Object.values(objeto);
// console.log(valueObj(lesson3))

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
// console.log(allLessons)

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const students = () => {
  const n1 = allLessons.lesson1.numeroEstudantes;
  const n2 = allLessons.lesson2.numeroEstudantes;
  const n3 = allLessons.lesson3.numeroEstudantes;
  const total = n1 + n2 + n3;
  return total;
};
// console.log(students())

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

const verifyPair = (obj, key, value) => {
  const getEntries = Object.entries(obj);
  let verify = false;
  for (let index in getEntries) {
    if (getEntries[index][0] === key && getEntries[index][1] === value)
      verify = true;
  }
  return verify;
};
// console.log(verifyPair(lesson2, "professor", "Carlos"));

const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj)
  for (let index in array) {
    if (obj[array[index]].materia === 'Matemática') {
        total += obj[array[index]].numeroEstudantes
    }
  }
  return total;
};
//   console.log(getNumberOfStudentsMath(allLessons));

// const getInfo = (obj, name) => {
//   const allLessons = [];
//   let allStudent = 0;
//   const array = Object.values(obj);
//   for (index in array) {
//     if (array[index].professor === name) {
//       allLessons.push(array[index].materia);
//       allStudent += array[index].numeroEstudantes;
//     }
//   }
//   return { aulas: allLessons, estudantes: allStudent };
// };

// const createReport = (allLessons, name) => {
//   const report = {};
//   report.professor = name;
//   Object.assign(report, getInfo(allLessons, name));
//   return report;
// };
// console.log(createReport(allLessons, "Maria Clara"));

const getReportInfos = (obj, name) => {
    let lesson = [];
    let students = 0;
    const array = Object.values(obj)
    for (let index in array) {
        if (array[index].professor === name) {
            lesson.push(array[index].materia)
            students += array[index].numeroEstudantes
        }
    }
    return {Aulas: lesson, Estudantes: students }
}

const report = (allLessons, name) => {
    const result = {}
    result.professor = name
    Object.assign(result, getReportInfos(allLessons, name))
    return result;
}

console.log(report(allLessons, "Maria Clara"));

