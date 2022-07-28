// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

function body() {
    const corpo = document.getElementsByTagName('body')[0];
    const filho = document.createElement('h1');
    filho.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
    corpo.appendChild(filho)
    console.log(corpo)
}
body()

