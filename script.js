let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;
let interval;

function startStop() {
  if (running) {
    clearInterval(interval);
    document.getElementById('startStop').innerText = 'Start';
    running = false;
  } else {
    interval = setInterval(updateDisplay, 10);
    document.getElementById('startStop').innerText = 'Stop';
    running = true;
  }
}

function reset() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  running = false;
  document.getElementById('startStop').innerText = 'Start';
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function updateDisplay() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  document.getElementById('minutes').innerText = padTime(minutes);
  document.getElementById('seconds').innerText = padTime(seconds);
  document.getElementById('milliseconds').innerText = padTime(milliseconds);
}

function padTime(time) {
  return time < 10 ? '0' + time : time;
}

function lap() {
  if (running) {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    document.getElementById('laps').appendChild(lapItem);
  }
}
