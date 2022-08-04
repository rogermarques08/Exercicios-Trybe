function setBackground (color) {
    let main = document.querySelectorAll('.backgroundButtom')
    main.style.backgroundColor = color
    localStorage.setItem('backgroundColor', color)
}

const buttom = document.querySelector('.backgroundButtom');
buttom.addEventListener('click', function (evento) {
    setBackground(evento.target.innerHTML)
})

function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackground(backgroundColor)
}
initialize()