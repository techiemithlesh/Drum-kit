const keys  = Array.from(document.querySelectorAll('.box_container'));



const keyCode = {
    A: 65,
    S: 70,
    D: 71,
    F: 72,
    G: 73,
    H: 74,
    J: 75,
    k: 76,
    L: 77,
}

function playSound(e) {
    const audio = document.querySelector(
        `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`);

        const key = document.querySelector(
            `div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
        );

        if(!audio) return;

        audio.currentTime = 0;
        audio.play();

}



window.addEventListener('keydown', playSound);

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log("hello");
        playSound(e);
    })
})





