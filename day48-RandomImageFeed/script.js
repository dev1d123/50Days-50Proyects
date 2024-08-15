const container = document.querySelector('.container');
const url = 'https://picsum.photos/id/';

const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    const size = getRandomNr();
    const seed = Math.floor(Math.random() * 300); 
    img.src = `${url}${seed}/${size}`;
    console.log(`${url}${seed}/${size}`);
    container.appendChild(img);
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300; 
}
