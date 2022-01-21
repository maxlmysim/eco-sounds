function playAudio() {
    buttonPause.style.display = 'block';
    buttonPlay.style.display = 'none';
    audio.play();
}

function pauseAudio() {
    buttonPause.style.display = 'none';
    buttonPlay.style.display = 'block';
    audio.pause();
}

function changeStyle(event) {
    let activeList = ['.logo-bird', '.nav__item'];
    let background = document.querySelector('.main-container');

    background.style.backgroundImage = `url(./assets/img/${event.target.dataset.sound}.jpg)`;
    activeList.forEach((tagName) => {
        document.querySelectorAll(tagName).forEach((element) => {
            element.classList.remove('active');
        });
    });

    event.target.classList.add('active');
}

function changeSound(event) {
    if (event.target.dataset.sound) {

        audio.src = `./assets/audio/${event.target.dataset.sound}.mp3`;

        changeStyle(event);
        playAudio();
    }

}

const audio = document.querySelector('.audio');
const chooseSound = document.querySelector('.header-container');
const buttonPlay = document.querySelector('.main__button-play');
const buttonPause = document.querySelector('.main__button-pause');

chooseSound.addEventListener('click', changeSound);
buttonPlay.addEventListener('click', playAudio);
buttonPause.addEventListener('click', pauseAudio);
