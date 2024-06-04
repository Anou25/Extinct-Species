var audio1 = new Audio();
audio1.src = "sounds/dodo1.mp3"

var audio2 = new Audio();
audio2.src = "sounds/tasmanian-tiger.mp3"

var audio4 = new Audio();
audio4.src = "sounds/pyrenean-ibex.mp3"

var audio5 = new Audio();
audio5.src = "sounds/stellar-seacow.mp3"



function playAudioForDuration() {
    const audio = document.getElementById('audio');
    const duration = 5000; // Duration in milliseconds (5000ms = 5 seconds)

    audio.play();

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }, duration);
}
function playAudioForDuration1() {
    const audio = document.getElementById('audio6');
    const duration = 5000; // Duration in milliseconds (5000ms = 5 seconds)

    audio.play();

    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }, duration);
}
let currentIndex = 0;

function slideCards(direction) {
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards to show in one slide
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginLeft) + parseFloat(getComputedStyle(cards[0]).marginRight);
    const maxIndex = Math.ceil(totalCards / visibleCards) - 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const offset = -currentIndex * cardWidth * visibleCards;
    cardsContainer.style.transform = `translateX(${offset}px)`;
}
document.addEventListener('DOMContentLoaded', () => {
    slideCards(0);
});
