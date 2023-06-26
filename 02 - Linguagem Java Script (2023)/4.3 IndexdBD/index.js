
let bd;
let reqBD = indexedDB.open('meuBD', 1);

const livros = [
    {id: 1, titulo: 'Ilída', autor: 'Homero'},
    {id: 2, titulo: 'Odisseia', autor: 'Homero'}
]

reqBD.onsuccess = () => {
    bd = reqBD.result;
};

reqBD.onerror = ()=>{
console.log(reqBD.error);

};

reqBD.onupgradeneeded = (e) =>{
    bd = reqBD.result;
    if(!bd.objectStoreNames.contains('livros')){
        bd.createObjectStore('livros', {keyPath: 'id'})
    }
}

function incluir(){
    let id = document.querySelector('#idlivro');
    let titulo = document.querySelector('#titulo');
    let autor = document.querySelector('#autor');

    let livro = {
        id: id.value,
        titulo: titulo.value,
        autor: autor.value,
    }
    let trasacaoBD = bd.trasaction(['livros'], 'readwrite');
    let livrosOS = trasacaoBD.objectStore('livros');
    let reqOS = livrosOS.add(livros);
    reqOS.onsuccess = (e) =>{
        console.log(reqOS.result)
    }
    reqOS.onerror = (e) =>{
        console.log(reqOS.error);
    }
}
