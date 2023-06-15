// window.localStorege armazenamento local permanente
//window.sessionStorege armazenamento local na secção

// para armazenar valores usa-se localStorege.setItem("chave", "valor")
let usuario = {
    nome: 'João',
    idade: 25,
    filhos: [
        {nome: 'Cleber', idade: 12},
        {nome: 'Maria', idade: 1}
    ],
    casado: true,
}

const conteudo = document.querySelector('.conteudo')
const p = document.createElement('p')
p.innerText = JSON.stringify(usuario)
conteudo.appendChild(p)

localStorage.setItem('usuario', JSON.stringify(usuario))

const strUsuario = localStorage.getItem('usuario')
const strUsuario2 = JSON.parse(strUsuario)
console.log(strUsuario2, typeof strUsuario2)

// opções para a remoção do valor associado a uma chave
// localStorage.removeItem('chave')
// delete localStorage.chave,
// delete lovalStorage['chave']
//obção para a remoção de todos os dados:
// localStorage.clear()