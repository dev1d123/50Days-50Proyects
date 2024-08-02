const words = document.getElementById('tags'); 
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e) =>{
    console.log(e.target    .value);
    crearBox(textArea.value)

    if(e.key === "Enter"){
        setTimeout(()=>{
            e.target.value = '';
        },10)

        console.log("Seleccionando!");
        randomSelect();
    }

})




function crearBox(input){
    const boxes = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    console.log("Las cajas son: " + boxes);

    words.innerHTML='';

    boxes.forEach(box => {
        console.log("La etiqueta es " + box);
        //intentando crear elementos
        const tag = document.createElement('div');
        tag.classList.add('box');
        tag.innerText = box;

        words.appendChild(tag);

    });
}

function randomSelect(){
    const times = 30; //tiempo de iluminado del escogido
    //efecto, setInterval es asincrono
    const interval = setInterval(() => {
        const randomBox = pickRandomBox();
        highlighBox(randomBox);

        setTimeout(()=>{
            unHighlighBox(randomBox);
        }, 100);
    }, 100);

    //Escogiendo la opcion, luego de 3 segundos
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomBox = pickRandomBox()
            highlighBox(randomBox)
        }, 100)

    }, times * 100)


}

function pickRandomBox() {
    const boxes = document.querySelectorAll('.box')
    return boxes[Math.floor(Math.random() * boxes.length)]
}

function highlighBox(box) {
    box.classList.add('active')
}

function unHighlighBox(box) {
    box.classList.remove('active')
}

