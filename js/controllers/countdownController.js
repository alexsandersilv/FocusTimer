import { 
  minutesDisplay, 
  secondsDisplay, 
  startCountdownButton, 
  stopCountdownButton, 
  addMinutesToCountdown, 
  rmMinutesToCountdown 
} from '../elements.js';

let timeIsUp;
let stopCountdown;

let minutesDisplayValue;
let secondsDisplayValue;

function countdown(minutes, seconds) {

  stopCountdown = setInterval(() => {
  
    minutesDisplayValue = Number(minutes.textContent);
    secondsDisplayValue = Number(seconds.textContent);

    timeIsUp = minutesDisplayValue == 0 && secondsDisplayValue == 0; 

    if (timeIsUp) {
      handleStopCountdownClick();
      return
    }

    if (secondsDisplayValue == 0) {
      minutes.textContent = minutesDisplayValue - 1; 
      seconds.textContent = 59;
    }
    
    if (secondsDisplayValue >= 1) {
      seconds.textContent = secondsDisplayValue - 1;
    }

    if (minutesDisplayValue.toString().length == 1) {
      minutes.textContent = minutes.textContent.padStart(2, '0');
    }

    if (secondsDisplayValue.toString().length == 1) {
      seconds.textContent = seconds.textContent.padStart(2, '0');
    }

  }, 1000);
}

function handleStartCountdownClick() {
  countdown(minutesDisplay, secondsDisplay);
}

function handleStopCountdownClick() {
  clearTimeout(stopCountdown);
}

function handleAddMinutesClick() {
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
}

function handleRmMinutesClick() {
  if (minutesDisplay.textContent > 5) {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  }
}

startCountdownButton.addEventListener('click', handleStartCountdownClick);
stopCountdownButton.addEventListener('click', handleStopCountdownClick);
addMinutesToCountdown.addEventListener('click', handleAddMinutesClick);
rmMinutesToCountdown.addEventListener('click', handleRmMinutesClick);
