var imagen = document.getElementById("back");
var progress = document.getElementById("texto");

let count = 0;
const intervalo = setInterval(progressCount, 25);
function progressCount(){
    if(count <= 100){
        progress.textContent = count+"%";
        imagen.style.filter = `blur(${10 - count / 10}px)`;
        progress.style.opacity = `${1 - count / 100}`;
        count++;
    }else{
        clearInterval(intervalo);
    }
    console.log(count);
}
