
const sliderShow = document.querySelector('.sliderShow')

const img = [
    'img/biel-morro-kcKiBcDTJt4-unsplash.jpg',
    'img/f1.jpg',
    'img/f2.jpg',
    'img/f3.jpg',
    'img/f4.jpg',
    'img/f5.jpg',
    'img/f6.jpg',
]
const time = 500;
const changeImg = ()=>{
    
    const i = 0;
    sliderShow.setAttribute("src", img[i]);
    if(i < img.length - 1){
        i++
    }else{
        i=0;
    }      
    setInterval(changeImg(), time)
}
window.onload = changeImg