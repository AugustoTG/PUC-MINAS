const desenho = document.querySelector('#desenho');

onload = ()=>{
    if(desenho.getContext){
        let ctx = desenho.getContext('2d');
        // ctx.fillRect(25,25,100,100);
        // ctx.clearRect(45,45,60,60);
        // ctx.strokeRect(50,50,50,50);
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'bkack'
        ctx.fillStyle = 'red'
        ctx.beginPath();
        ctx.arc(75,75,50,0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}