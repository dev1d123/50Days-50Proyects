//set the prev as false

var prevB = document.querySelector("#prev");
var nextB = document.querySelector("#next");

prevB.classList.add("desactivate")


var numbers = document.querySelector(".progress");
var n1 = numbers.querySelector("#step1");
console.log(n1);
n1.style.border = "4px solid blue";

var position = 1;

function next(){
    position++;
    if(position == 5){
        position--;
        return;
    }
    console.log("Esa posicion es: ", position);
    if(position == 4){
        //desactivar next
        console.log("waos");
        nextB.classList.remove("activate");
        nextB.classList.add("desactivate");
    }else if (position != 1){
        //desactivar prev
        console.log("xd?")
        prevB.classList.remove("desactivate");
        prevB.classList.add("activate");
    }
    console.log("modificando");
    var mod = numbers.querySelector(`#step${position}`);
    mod.style.border = "4px solid blue";
}

function prev(){
    if(position != 1){
        var mod = numbers.querySelector(`#step${position}`);
        mod.style.border = "4px solid gray";
        position--;
        if(position == 1){
            prevB.classList.remove("activate");
            prevB.classList.add("desactivate");
        }
        if(position != 4){
            nextB.classList.remove("desactivate");
            nextB.classList.add("activate");
        }
    }
}