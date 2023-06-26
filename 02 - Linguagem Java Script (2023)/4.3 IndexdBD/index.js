
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
