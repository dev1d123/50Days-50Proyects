var boton = document.getElementById("btn");
var active = false;
var text = document.getElementById("text");

boton.addEventListener('click', function(){
    if(active){
        text.style.width = "0px";
        text.style.padding = "0px";
    }else{
        text.style.width = "200px";
        text.style.padding = "15px";
    }
    active = !active;
});