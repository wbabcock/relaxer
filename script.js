const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
    text.innerHTML = "Breathe In!";
    container.classList.add('grow');
    container.classList.remove('shrink');

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.classList.add('shrink');
            container.classList.remove('grow');
         }, holdTime);
    }, breatheTime);
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);