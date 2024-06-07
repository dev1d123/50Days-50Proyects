const boxes = document.querySelectorAll(".box");
console.log(boxes);

window.addEventListener('scroll', move);

move();


function move(){
    const aux = window.innerHeight/5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        //gets the distance from the top of the viewport to the top of the current box element.
        console.log(boxTop);
        console.log(aux);
        if(boxTop < aux) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
