
console.log(nome)
function ajax(){
    try {
        const xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function (){
            if(xhttp.readyState == 4){
                if(xhttp.status == 200){
                    const objeto =  JSON.parse(xhttp.responseText);
                    console.log(objeto)
                
                }else{
                    console.warning('status:' + xhttp.status)
                }
            }
        };

        xhttp.open('GET', '', true);
        xhttp.send();
    } catch(e){
        console.log("erro na comunicação com servidor");
    }
    
}
