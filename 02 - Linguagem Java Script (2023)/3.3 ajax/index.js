const nome = document.getElementById('nome');
const idade = document.querySelector('#idade');
const filhos = document.querySelector('#filhos');
console.log(nome)
function ajax(){
    try {
        const xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4){
                if(xhttp.status == 200){
                    const usuario =  JSON.parse(xhttp.responseText);
                    console.log(usuario)
                    nome.innerHTML = usuario.nome;
                    idade.innerHTML = usuario.idade;
                    filhos.innerHTML = usuario.filhos.map((e) => e.nome)
                    
                }else{
                    console.warning('status:' + xhttp.status)
                }
            }
        };

        xhttp.open('GET', 'dados.json', true);
        xhttp.send();
    } catch(e){
        console.log("erro na comunicação com servidor");
    }
    
}
