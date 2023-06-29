const arquivos = document.querySelector('#file')
const btnArquivos = document.querySelector('#btnArquivos')
const arq = document.querySelector('#arq')
const arquivoTexto = document.querySelector('#arquivoTexto')
onload = () =>{
    
    arquivos.onchange = () => {
        arq.innerHTML = Array.from(arquivos.files).map(f => f.name).join('<br/>')
        // for(let i = 0; i<arquivos.files.length; i++){
        //     arq.innerHTML += arquivos.files[i].name + '<br/>'
        //     console.log(arquivos.files[i])
        // }
        let fr = new FileReader();
        fr.readAsDataURL(arquivos.files[0]);
        fr.onload = (e) => {
            arq.innerHTML = e.target.result;
        }
    }
    btnArquivos.onclick = () => {
        arquivos.click()
    }

    arquivoTexto.onchange = () => {
        let fr = new FileReader();
        fr.readAsText(arquivoTexto.files[0], 'UTF-8');
        fr.onload = (e) => {
            arq.innerHTML = e.target.result;
        }
    }
}