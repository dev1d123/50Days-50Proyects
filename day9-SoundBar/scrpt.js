const buttons = document.querySelectorAll(".btn");
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

buttons.forEach((button) => {
    button.addEventListener('click', function(){
        stop();
        let audio = document.getElementById(button.textContent);
        audio.play();
    })
});

function stop(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}