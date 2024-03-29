function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.

//   🚀 Exercício 1:
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>


function monthdays() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ulDays = document.getElementById('days');
    for (let index in decemberDaysList) {
        let day = document.createElement('li');
        day.className = 'day'
        day.innerText = decemberDaysList[index];
        ulDays.appendChild(day)
        if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
            day.className += ' holiday'
        }
        if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
            day.className += ' friday'
        }
    }
}
monthdays()
// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

let string = 'Feriado'
function creatButtom(string) {
    const buttomContainer = document.getElementsByClassName('buttons-container')[0];
    const buttom = document.createElement('button');
    buttom.id = 'btn-holiday'
    buttom.innerText = string
    buttomContainer.appendChild(buttom)
}
creatButtom(string)

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à cor inicial


function changeColorButton() {
    const buttom = document.querySelector('#btn-holiday')
    const classHolliday = document.querySelectorAll('.holiday')
    const newColor = 'green';
    const backgroundColor = 'rgb(238,238,238)';

    buttom.addEventListener('click', function () {
        for (let index in classHolliday) {
            if (classHolliday[index].style.backgroundColor === newColor) {
                classHolliday[index].style.backgroundColor = backgroundColor;
            } else {
                classHolliday[index].style.backgroundColor = newColor;
            }
        }
    })
}
changeColorButton()

//🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

let string2 = 'Sexta-feira'
function creatButtom2(string2) {
    const buttomContainer = document.querySelector('.buttons-container');
    const buttom = document.createElement('button');
    buttom.id = 'btn-friday';
    buttom.innerText = string2
    buttomContainer.appendChild(buttom)
}
creatButtom2(string2)

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.


function friday(unset) {
    const friday = document.querySelectorAll('.friday');
    const buttom = document.getElementById('btn-friday');
    const text = 'Sextou'
    buttom.addEventListener('click', function () {
        for (let index in friday) {
            if (friday[index].innerHTML !== text) {
                friday[index].innerHTML = text;
            } else {
                friday[index].innerHTML = unset[index];
            }
        }
    })
}
const unset = [4, 11, 18, 25]
friday(unset)

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom".Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// function zoom() {
//     const getDays = document.querySelectorAll('.day');
//     getDays.addEventListener('mouseover', function (evento) {
//         evento.target.style.fontSize = '40px'
//     })
// }
// zoom()

function dayMouseOver() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    });
}
dayMouseOver()
// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let text = 'Cozinhar'
function task(text) {
    const myTasks = document.querySelector('.my-tasks');
    let span = document.createElement('span');
    span.innerText = text
    myTasks.appendChild(span)
}
task(text)

// 🚀 Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let color = 'blue'
function colorTask(color) {
    const myTasks = document.querySelector('.my-tasks');
    let div = document.createElement('div');
    div.className = 'task';
    div.style.background = color
    myTasks.appendChild(div)
}
colorTask(color)

// 🚀 Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTask() {
    let task = document.querySelector('.task');
    task.addEventListener('click', function () {
        task.className = 'class-selected'
    })
    let taskSelected = document.querySelector('.class-selected');
    taskSelected.addEventListener('click', function () {
        taskSelected.className = 'task'
    })
}
selectTask()
