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

//🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

function p(){
    const father = document.getElementsByTagName('section')[0];
    const son = document.createElement('p');
    son.innerText = 'Isso aqui é bom demais kkkkk'
    father.appendChild(son)
}
p()

//🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

function addClassSection() {
    const father = document.getElementsByTagName('main')[0];
    const section = document.createElement('section')
    section.className = 'left-content';
    father.appendChild(section);
}
addClassSection()

//🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

function addClassSection2() {
    const father = document.getElementsByTagName('main')[0];
    const section = document.createElement('section')
    section.className = 'right-content';
    father.appendChild(section)
}
addClassSection2()

//🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

function image() {
    const father = document.getElementsByTagName('section')[1];
    const image = document.createElement('img');
    image.src = 'https://picsum.photos/200'
    image.className = 'small-image'
    father.appendChild(image)

}
image()

//🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

function listNumbers(){
    const father = document.getElementsByTagName('section')[2];
    const list = document.createElement('ul');
    father.appendChild(list)
    for (let index = 1; index <= 10; index += 1){
        let itens = document.createElement('li');
        itens.innerHTML = [index]
        list.appendChild(itens)
    }
}
listNumbers()