import { 
  startCountdownButton, stopCountdownButton, addMinutesToCountdown, rmMinutesToCountdown,
  forestButton, rainButton, coffeeShopButton, bonfireButton,
  forestVolumeInput, rainVolumeInput, coffeeShopVolumeInput, bonfireVolumeInput
} from './elements.js';

import { handleStartCountdownClick, handleStopCountdownClick, handleAddMinutesClick, handleRmMinutesClick  } from './controllers/countdownController.js';

import { 
  handleForestButtonClick, handleRainButtonClick, handleCoffeeShopButtonClick, handleBonfireButtonClick,
  handleForestButtonChange, handleRainButtonChange, handleCoffeeShopButtonChange, handleBonfireButtonChange
} from './controllers/audioController.js';

startCountdownButton.addEventListener('click', handleStartCountdownClick);
stopCountdownButton.addEventListener('click', handleStopCountdownClick);
addMinutesToCountdown.addEventListener('click', handleAddMinutesClick);
rmMinutesToCountdown.addEventListener('click', handleRmMinutesClick);

forestButton.addEventListener('click', handleForestButtonClick);
rainButton.addEventListener('click', handleRainButtonClick);
coffeeShopButton.addEventListener('click', handleCoffeeShopButtonClick);
bonfireButton.addEventListener('click', handleBonfireButtonClick);

forestVolumeInput.addEventListener("change", handleForestButtonChange);
rainVolumeInput.addEventListener("change", handleRainButtonChange);
coffeeShopVolumeInput.addEventListener("change", handleCoffeeShopButtonChange);
bonfireVolumeInput.addEventListener("change", handleBonfireButtonChange);
