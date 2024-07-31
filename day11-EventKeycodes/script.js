var event_key = document.getElementById("event_key");
var event_keyCode = document.getElementById("event_keyCode");
var event_code = document.getElementById("event_code");


var pressed = document.getElementById("key");
var main = document.getElementById("main");

function keyPressedHandler(event){
    main.style.display = "none";
    pressed.style.display = "flex";
    const keyPressed = event.key;
    event_key.textContent = event.key;
    event_keyCode.textContent = event.keyCode;
    event_code.textContent = event.code;
}


document.addEventListener('keydown', keyPressedHandler);