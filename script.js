let startTime;
let elapsedTime = 0;
let timerInterval;
let lapTimes = [];
let paused = false;

const timeDisplay = document.getElementById('timeDisplay');
const lapsList = document.getElementById('lapsList');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const toggleThemeBtn = document.getElementById('toggleTheme');

// Start the timer
startBtn.addEventListener('click', () => {
    if (!paused) {
        startTime = Date.now() - elapsedTime;
    } else {
        startTime = Date.now() - elapsedTime;
    }
    timerInterval = setInterval(updateTimer, 100);
    timeDisplay.classList.add('bounce');
});

// Pause the timer
pauseBtn.addEventListener('click', () => {
    paused = true;
    clearInterval(timerInterval);
    timeDisplay.classList.remove('bounce');
});

// Reset the timer
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapTimes = [];
    timeDisplay.textContent = "00:00:00";
    lapsList.innerHTML = '';
    paused = false;
    timeDisplay.classList.remove('bounce');
});

// Record lap time
lapBtn.addEventListener('click', () => {
    let currentTime = timeDisplay.textContent;
    lapTimes.push(currentTime);
    let lapElement = document.createElement('li');
    lapElement.textContent = `Lap ${lapTimes.length}: ${currentTime}`;
    lapsList.appendChild(lapElement);
});

// Toggle dark mode
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Update the timer display
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds % 60;

    timeDisplay.textContent = 
        `${hours < 10 ? '0' + hours : hours}:` +
        `${minutes < 10 ? '0' + minutes : minutes}:` +
        `${seconds < 10 ? '0' + seconds : seconds}`;
}
