// 🎂 Countdown Timer
const targetDate = new Date("October 2, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdownTimer");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownEl.textContent = "🎉 Happy Birthday janvi 🎉";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// 🎁 Surprise Button + Confetti
document.getElementById("surpriseBtn").addEventListener("click", function() {
    const msg = document.getElementById("hiddenMessage");
    msg.style.display = "block";
    launchConfetti();
});

function launchConfetti() {
    const container = document.querySelector(".surprise");
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}

function getRandomColor() {
    const colors = ["#ff4081", "#ffeb3b", "#4caf50", "#2196f3", "#ff5722", "#9c27b0"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 🎈 Balloon Popping Game
const gameArea = document.getElementById("gameArea");
const scoreboard = document.getElementById("scoreboard");
let score = 0;
let balloonId = 0;
const balloonColors = [
    "radial-gradient(circle at 30% 30%, #ff5f6d, #ffc371)",
    "radial-gradient(circle at 30% 30%, #24c6dc, #514a9d)",
    "radial-gradient(circle at 30% 30%, #ff9a9e, #fad0c4)",
    "radial-gradient(circle at 30% 30%, #7de2d1, #b9b6e5)",
    "radial-gradient(circle at 30% 30%, #fbc7a4, #f8b500)"
];

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("game-balloon");
    balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.left = Math.random() * (gameArea.clientWidth - 60) + "px";
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    balloon.id = "balloon-" + balloonId++;
    gameArea.appendChild(balloon);

    balloon.addEventListener("click", () => popBalloon(balloon));
    balloon.addEventListener("animationend", () => {
        if (gameArea.contains(balloon)) {
            gameArea.removeChild(balloon);
        }
    });
}

function popBalloon(balloon) {
    balloon.classList.add("pop");
    score++;
    scoreboard.textContent = "Score: " + score;
    setTimeout(() => {
        if (gameArea.contains(balloon)) gameArea.removeChild(balloon);
    }, 300);
}

setInterval(() => {
    if (gameArea.childElementCount < 7) {
        createBalloon();
    }
}, 800);

// 🎵 Music Control
const music = document.getElementById("birthdayMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        btn.textContent = "🔊 Pause Music";
    } else {
        music.pause();
        btn.textContent = "▶️ Play Music";
    }
});

const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

surpriseBtn.addEventListener('click', () => {
    hiddenMessage.classList.toggle('show');

    if (hiddenMessage.classList.contains('show')) {
        createSparks();
    }
});

function createSparks() {
    for (let i = 0; i < 30; i++) { // number of sparks
        const spark = document.createElement('div');
        spark.classList.add('spark');

        // Random positions for animation
        spark.style.setProperty('--x1', `${Math.random() * 200 - 100}px`);
        spark.style.setProperty('--y1', `${-Math.random() * 150}px`);
        spark.style.setProperty('--x2', `${Math.random() * 200 - 100}px`);
        spark.style.setProperty('--y2', `${-Math.random() * 300}px`);
        spark.style.setProperty('--x3', `${Math.random() * 200 - 100}px`);
        spark.style.setProperty('--y3', `${-Math.random() * 450}px`);
        spark.style.setProperty('--x4', `${Math.random() * 200 - 100}px`);
        spark.style.setProperty('--y4', `${-Math.random() * 600}px`);

        hiddenMessage.appendChild(spark);

        // Remove spark after animation
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}

function createHangingLights(ten) {
    const container = document.getElementById('lightsContainer');
    container.innerHTML = ''; // Clear previous bulbs if any

    for (let i = 0; i < numBulbs; i++) {
        const light = document.createElement('div');
        light.classList.add('hanging-light');
        light.style.left = `${(i + 1) * (100 / (numBulbs + 1))}%`;

        const wire = document.createElement('div');
        wire.classList.add('wire');

        const bulb = document.createElement('div');
        bulb.classList.add('bulb');

        light.appendChild(wire);
        light.appendChild(bulb);
        container.appendChild(light);
    }
}

function createHangingLights(numBulbs) {
    const container = document.getElementById('lightsContainer');
    container.innerHTML = ''; // Clear previous bulbs if any

    for (let i = 0; i < numBulbs; i++) {
        const light = document.createElement('div');
        light.classList.add('hanging-light');
        light.style.left = `${(i + 1) * (100 / (numBulbs + 1))}%`;

        const wire = document.createElement('div');
        wire.classList.add('wire');

        const bulb = document.createElement('div');
        bulb.classList.add('bulb');

        light.appendChild(wire);
        light.appendChild(bulb);
        container.appendChild(light);
    }
}

// Example: create 5 bulbs
createHangingLights(13);
1