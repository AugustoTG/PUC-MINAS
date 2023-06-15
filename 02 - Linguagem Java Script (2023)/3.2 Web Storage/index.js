// window.localStorege armazenamento local permanente
//window.sessionStorege armazenamento local na secção

// para armazenar valores usa-se localStorege.setItem("chave", "valor")

const conteudo = document.querySelector('.conteudo')
conteudo.appendChild('p')

let usuario = {
    nome: 'João',
    idade: 25,
    filhos: [
        {nome: 'Cleber', idade: 12},
        {nome: 'Maria', idade: 1}
    ],
    casado: true,
}