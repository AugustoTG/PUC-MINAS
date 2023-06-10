const login = document.getElementById('login')
const nome = document.getElementById('name')
const password = document.getElementById('senha')
const idade = document.getElementById('idade')
const botao = document.getElementById('botao')
onload = ()=>{
    login.onsubmit = () => {
        nome.onchange = () =>{
            console.log(nome.value)
        }
       if(nome.value === '' || password.value === '' || idade.value === ''){
            alert('preencha todos os campos')
            return false;
       }
        return true;
    }
//     if(nome.value !== '' && password.value !== ''){
//         return botao.disabled = false
//      }else{
//         botao.disabled = true
//     }
}
