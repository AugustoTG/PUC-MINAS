const arquivos = document.querySelector('#file')
const btnArquivos = document.querySelector('#btnArquivos')
const arq = document.querySelector('#arq')
onload = () =>{
    
    arquivos.onchange = () => {
        arq.innerHTML = Array.from(arquivos.files).map(f => f.name).join('<br/>')
        // for(let i = 0; i<arquivos.files.length; i++){
        //     arq.innerHTML += arquivos.files[i].name + '<br/>'
        //     console.log(arquivos.files[i])
        // }
    }
    btnArquivos.onclick = () => {
        arquivos.click()
    }
}