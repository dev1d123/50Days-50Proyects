const button = document.getElementById("btn");
const joke = document.getElementById("joke");

console.log(button);

button.addEventListener('click', function(){
    callJokeThen();
});

async function callJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
            /*
            Tambien se puede usar 
            text/html - HTML response (default response format)
            application/json - JSON response
            text/plain - Plain text response
            */

        },
    }

    const result = await fetch('https://icanhazdadjoke.com', config);
    const data = await result.json();
    console.log(data)
    addJoke(data.joke);
}
function addJoke(text){ 
    joke.textContent = text;
}

function callJokeThen() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch('https://icanhazdadjoke.com', config)
        .then(result => result.json()) 
        .then(data => {
            console.log(data);
            addJoke(data.joke); 
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}