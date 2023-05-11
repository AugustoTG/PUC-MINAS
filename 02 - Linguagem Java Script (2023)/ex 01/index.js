const backgroud = document.querySelector('body');
const execute = ()=>{
    alert('Hello Word');
}

const changeColor = ()=>{
    const text = document.querySelector('#text');
    text.addEventListener('mouseover', ()=> {backgroud.style.background = "#fff655"});
    text.addEventListener('mouseout', ()=> {backgroud.style.background = "green"});
}
changeColor()

