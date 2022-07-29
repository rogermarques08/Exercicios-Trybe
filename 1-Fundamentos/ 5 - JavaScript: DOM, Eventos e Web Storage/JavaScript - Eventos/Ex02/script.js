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
        if (decemberDaysList[index] === 2 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
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
    const buttom = document.getElementById('btn-holiday')
    let onOf = true;

    if (onOf) {
        buttom.addEventListener('click', function () {
            const classHolliday = document.querySelectorAll('.holiday');
            for (let index in classHolliday) {
                classHolliday[index].style.background = 'red'
            }
            onOf = false;
        })
    } else {
        buttom.addEventListener('click', function () {
            const classHolliday = document.querySelectorAll('.holiday');
            for (let index in classHolliday) {
                classHolliday[index].style.background = 'unset'
            }
            onOf = true;
        })
    }
}
changeColorButton()