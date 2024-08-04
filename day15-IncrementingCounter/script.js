const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';
    
    const counting = () =>{ //arrow function
        //el + es unary plus -> para convertir cadenas en numeros
        const target = +counter.getAttribute('data-target')
        console.log(target);
        const c = +counter.innerText;
        
        const increment = target/200; //para que todos hagan un limite de sumas.
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(counting, 1) // si no se ha alcanzado llamar denuevo
        }else{
            counter.innerText = target;
        }
    }
    //llamar a la funcion
    counting();
});