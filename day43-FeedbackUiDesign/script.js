const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')

const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    console.log("waos")
    console.log(e);
    if(e.target.classList.contains('rating')){
        console.log("Has seleccionado una casilla")
        removeActive()
        e.target.classList.add('active')
        console.log(e.target.innerHTML);
        selectedRating = e.target.querySelector('small').textContent;
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = ``;
    panel.innerHTML = `
        <i class="fas fas-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>

    `
})


function removeActive(){
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}