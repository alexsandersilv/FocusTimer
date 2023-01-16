import { floretsButton, rainButton, urbanButton, bonfireButton } from '../elements.js';

function handleFloretsButtonClick(){  
  floretsButton.classList.add('active');
  rainButton.classList.remove('active');
  urbanButton.classList.remove('active');
  bonfireButton.classList.remove('active');
}

function handleRainButtonClick() {
  floretsButton.classList.remove('active');
  rainButton.classList.add('active');
  urbanButton.classList.remove('active');
  bonfireButton.classList.remove('active');
}

function handleUrbanButtonClick() {
  floretsButton.classList.remove('active');
  rainButton.classList.remove('active');
  urbanButton.classList.add('active');
  bonfireButton.classList.remove('active');
}

function handleBonfireButtonClick() {
  floretsButton.classList.remove('active');
  rainButton.classList.remove('active');
  urbanButton.classList.remove('active');
  bonfireButton.classList.add('active');
}

floretsButton.addEventListener('click', handleFloretsButtonClick);
rainButton.addEventListener('click', handleRainButtonClick);
urbanButton.addEventListener('click', handleUrbanButtonClick);
bonfireButton.addEventListener('click', handleBonfireButtonClick);