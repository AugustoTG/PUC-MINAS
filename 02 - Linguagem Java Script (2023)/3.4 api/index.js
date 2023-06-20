const resposta = document.getElementById('resposta');
function ajax(){
    try {
        const xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4){
                if(xhttp.status == 200){
                    const objeto =  JSON.parse(xhttp.responseText);
                    console.log(objeto)
                    // resposta.innerHTML = objeto.data.map((e)=>e.email).join('<br/>');
                    resposta.innerHTML = `${objeto.data.first_name} ${objeto.data.last_name}, ${objeto.data.email}`;
    
                }else{
                    console.warning('status:' + xhttp.status)
                }
            }
        };

        xhttp.open('GET',`https://reqres.in/api/users/1`, true);
        xhttp.send();
    } catch(e){
        console.log("erro na comunicação com servidor");
    }
    
};

function ajax__Post(){
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const nomeFinal = nome.value
    const emailFinal = email.value
    // console.log(nomeFinal, emailFinal)
    try {
        const xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4){
                console.log('status: ' + xhttp.status);
                const objeto =  JSON.parse(xhttp.responseText);
                console.log(objeto)
            }
        };
        let usuario ={
            first_name: nomeFinal,
            email: emailFinal
        };
        xhttp.open('POST','https://reqres.in/api/users', false);
        xhttp.send(JSON.stringify(usuario));
    } catch(e){
        console.log("erro na comunicação com servidor");
    }
};