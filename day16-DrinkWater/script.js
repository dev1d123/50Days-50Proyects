const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters') 
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
updateBigCup()

//event listeners
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') &&  !smallCups[idx].nextElementSibling.classList.contains('full')){
        //si el seleccionado contiene full y el vecino no esta lleno
        idx--;
        //descontar
    }

    //pintar desde 0 hasta idx
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()

}

function updateBigCup(){

    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    //porcentaje de lo llenado, agregando y removiendo estilos
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    //porcentaje de lo restante, agregando y removiendo estilos
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }


}