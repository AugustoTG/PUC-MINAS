const plus = document.querySelector('#plus');
const less = document.querySelector('#less');
let number = 0
let conteiner = document.querySelector('h1')


const plusNumber = ()=>{
   number++
   conteiner.innerHTML = number;
}
const lessNumber = ()=>{
    number--
    conteiner.innerHTML = number;
 }