
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

let i = 0;
function changeImg(){
    sliderShow.setAttribute('src', img[i]);
    if(i < img.length - 1){
        i++;
    }else{
        i=0;
    }
    console.log(i)
    setTimeout(changeImg(), 50000);
}
window.onload = changeImg; 




