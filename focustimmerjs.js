let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let workBtn = document.getElementById("work");
let shortBreakBtn = document.getElementById("short-break");
let longBreakBtn = document.getElementById("long-break");

let countdown;
let timeLeft = 25 * 60; // default work time (seconds)

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("⏰ Time’s up! Take a break.");
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// Mode switcher
function setMode(minutes, button) {
    document.querySelectorAll(".mode-buttons button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    clearInterval(countdown);
    timeLeft = minutes * 60;
    updateTimerDisplay();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

workBtn.addEventListener("click", () => setMode(25, workBtn));
shortBreakBtn.addEventListener("click", () => setMode(5, shortBreakBtn));
longBreakBtn.addEventListener("click", () => setMode(15, longBreakBtn));

updateTimerDisplay();