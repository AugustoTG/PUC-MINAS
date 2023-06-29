const arquivos = document.querySelector('#file')
onload = () =>{
    arquivos.onchange = () => {
        for(let i = 0; i<arquivos.files.length; i++){
            console.log(arquivos.files[i])
        }
    }
}