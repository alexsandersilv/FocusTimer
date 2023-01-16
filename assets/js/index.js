import { 
  startCountdownButton, stopCountdownButton, addMinutesToCountdown, rmMinutesToCountdown,
  forestButton, rainButton, coffeeShopButton, bonfireButton 
} from './elements.js';

import { handleStartCountdownClick, handleStopCountdownClick, handleAddMinutesClick, handleRmMinutesClick  } from './controllers/countdownController.js';
import { handleForestButtonClick, handleRainButtonClick, handleCoffeeShopButtonClick, handleBonfireButtonClick } from './controllers/audioController.js';

startCountdownButton.addEventListener('click', handleStartCountdownClick);
stopCountdownButton.addEventListener('click', handleStopCountdownClick);
addMinutesToCountdown.addEventListener('click', handleAddMinutesClick);
rmMinutesToCountdown.addEventListener('click', handleRmMinutesClick);

forestButton.addEventListener('click', handleForestButtonClick);
rainButton.addEventListener('click', handleRainButtonClick);
coffeeShopButton.addEventListener('click', handleCoffeeShopButtonClick);
bonfireButton.addEventListener('click', handleBonfireButtonClick);
