// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

function body() {
    // const corpo = document.getElementsByTagName('body')[0];
    const filho = document.createElement('h1');
    filho.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
    document.body.appendChild(filho)
}
body()

//🚀 Adicione a tag main com a classe main-content como filho da tag body;

function main() {
    const son = document.createElement('main');
    son.className = 'main-content'
    document.body.appendChild(son);
    console.log(body)
}
main()

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

function section() {
    const father = document.getElementsByTagName('main')[0];
    const son = document.createElement('section');
    son.className = 'center-content'
    father.appendChild(son)
}
section()
