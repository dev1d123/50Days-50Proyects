const words = document.getElementById('tags'); 
const textArea = document.getElementById('textarea');

 textArea.focus();

textArea.addEventListener('keyup', (e) =>{
    crearBox(e.target.value)
    if(e.key === "Enter"){
        console.log("Selecconando random");
    }
})




function crearBox(input){
    const boxes = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    words.innerHTML='';

    boxes.forEach(box => {
        //intentando crear:w elementos
        const tag = document.createElement('div');
        tag.classList.add('box');
        tag.innerText = box;
        boxes.appendChild(tag);

    });
}