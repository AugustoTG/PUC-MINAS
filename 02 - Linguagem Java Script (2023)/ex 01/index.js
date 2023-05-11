const backgroud = document.querySelector('body');
const text = document.querySelector('#text');
const hour = document.querySelector('#hour')
const execute = ()=>{
    backgroud.style.background = "#fff"
    alert('Hello Word');
}

const changeColor = ()=>{
    text.addEventListener('mouseover', ()=> {backgroud.style.background = "#fff655"});
    text.addEventListener('mouseout', ()=> {backgroud.style.background = "green"});
}
changeColor()


(function(){
    hour = new Data();

})()
