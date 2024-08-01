//seleccionar todos los botones
//a cada boton darle un addeventlistener para darle la clase active.
const buttons = document.querySelectorAll('.faq-toggle');
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        button.parentElement.classList.toggle('active');
        /*
        Si la clase está presente en el elemento, toggle() la elimina; si no está presente, toggle() la añade.
        */
    })
})