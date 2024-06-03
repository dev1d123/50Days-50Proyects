var imagenes = document.querySelectorAll(".elem");

var active = imagenes[0];
active.style.width = "100%";
active.querySelector(".text").style.opacity = "1";
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', function(){
        active = imagen;
        imagenes.forEach(img =>{
            if(img != active){
                img.style.width = "10%";
                img.querySelector(".text").style.opacity = "0";
    
            }
        });
        active.style.width = "100%";
        active.querySelector(".text").style.opacity = "1";

    });
});
