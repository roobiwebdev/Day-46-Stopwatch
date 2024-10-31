let display = document.querySelector(".display");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener("click", () => {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(() => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let second = Math.floor((elapsedTime / 1000) % 60);
    let milisecond = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, 0);
    minute = String(minute).padStart(2, 0);
    second = String(second).padStart(2, 0);
    milisecond = String(milisecond).padStart(2, 0);

    display.textContent = `${hours}:${minute}:${second}:${milisecond}`;
  }, 10);
  isRunning = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = `00:00:00:00`;
});
