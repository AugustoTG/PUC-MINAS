const login = document.getElementById('login')
const nome = document.getElementById('name')
const password = document.getElementById('senha')
onload = ()=>{
    login.onsubmit = () => {
        nome.onchange = () =>{
            console.log(nome)
        }
       if(nome.value === '' || password.value === ''){
            alert('preencha todos os campos')
            return false;
       }
        return true;
    }
}