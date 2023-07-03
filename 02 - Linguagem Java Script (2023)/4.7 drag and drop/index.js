const box = document.querySelector('.box');

onload=() =>{
    box.ondragstart = (e)=>{
        console.log(e)
        box.classList.add("color")
        e.dataTransfer.setData('text/plain', box.id);
    };

    box.ondragend = (e)=>{
        box.classList.remove('color')
    };
    for(const z of document.querySelectorAll('.zona')){
        z.ondragover = (e) =>{
            e.preventDefault();
            z.classList.add('zonaOver')
        };
        z.ondragleave = (e) =>{
            e.preventDefault();
            z.classList.remove('zonaOver')
        };
        z.ondrop = (e) =>{
            e.preventDefault();
            const idCaixa = e.dataTransfer.getData('text/plain');
            const elemento = document.getElementById(idCaixa);
            z.appendChild(elemento);
            z.classList.remove('zonaOver');
        };
    }
}

