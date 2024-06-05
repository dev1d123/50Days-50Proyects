var buttonClose = document.getElementById("close");

var buttonOptions = document.getElementById("options");

var documentRotate = document.getElementById("container");
var circleRotate = document.getElementById("circle");

var lista = document.getElementById("lista");

buttonOptions.addEventListener('click', function() {
    documentRotate.style.transform = "rotate(-20deg)";
    documentRotate.style.transformOrigin = "top left"; 
    circleRotate.style.transform = "rotate(-70deg)";
    lista.style.left = "-20px";
});

buttonClose.addEventListener('click', function(){
    documentRotate.style.transform = "rotate(0deg)";
    circleRotate.style.transform = "rotate(0deg)";
    lista.style.left = "-500px";

});