//Acesse o elemento elementoOndeVoceEsta.

// let text = document.querySelector('#elementoOndeVoceEsta');
// console.log(text);

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// let text = document.querySelector('#elementoOndeVoceEsta').parentNode;
// console.log(text)

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// let text1 = document.querySelector('#primeiroFilhoDoFilho')
// text1.innerHTML = "Olá"

//Acesse o primeiroFilho a partir de pai

// let text = document.querySelector('#pai').children[0];
// text.style.backgroundColor = "red"
// console.log(text)

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

// let text = document.querySelector("#elementoOndeVoceEsta").parentNode.firstElementChild;
// console.log(text);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

// let text = document.querySelector("#elementoOndeVoceEsta").nextSibling;
// console.log(text)

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

// let text = document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
// console.log(text);

//Agora acesse o terceiroFilho a partir de pai.

// let text = document.getElementById('pai').lastElementChild.previousElementSibling;
// console.log(text)

//Crie um irmão para elementoOndeVoceEsta.

// let add = 'lets go brother'
// let main = document.getElementById('pai');
// let paragraph = document.createElement('p')
// paragraph.innerText = add
// main.appendChild(paragraph)

//Crie um filho para elementoOndeVoceEsta.

// let add = 'Vrau'
// let pai = document.getElementById('elementoOndeVoceEsta');
// let titulo = document.createElement('h1');
// titulo.innerText = add;
// pai.appendChild(titulo)

//Crie um filho para primeiroFilhoDoFilho.

// let add = "Xablau"
// let pai = document.getElementById('primeiroFilhoDoFilho');
// let subtitulo = document.createElement('h2');
// subtitulo.innerText = add;
// subtitulo.className = "teste"
// pai.appendChild(subtitulo)

//A partir desse filho criado, acesse terceiroFilho.

// let text =document.querySelector('h2').parentNode.parentNode.parentNode.lastElementChild.previousElementSibling
// console.log(text)

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

// let pai = document.querySelector('#pai');
// let filhos = document.querySelectorAll('.remove')
// for (let index in filhos) {
//     let elemento = filhos[index];
//     pai.removeChild(elemento);
// }



