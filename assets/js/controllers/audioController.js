import { forestButton, rainButton, coffeeShopButton, bonfireButton } from '../elements.js';

const forestAudio = new Audio("/assets/sounds/forest.wav");
const rainAudio = new Audio("/assets/sounds/rain.wav");
const bonfireAudio = new Audio("/assets/sounds/bonfire.wav");
const coffeeShopAudio = new Audio("/assets/sounds/coffeeShop.wav");

forestAudio.loop = true;
rainAudio.loop = true;
bonfireAudio.loop = true;
coffeeShopAudio.loop = true;

function playMusic(music) {

  if (music == "forest") {
    forestAudio.play();

    rainAudio.pause();
    bonfireAudio.pause();
    coffeeShopAudio.pause();
  } else if (music == "rain") {
    rainAudio.play();

    bonfireAudio.pause();
    coffeeShopAudio.pause();
    forestAudio.pause();
  } else if (music == "coffeeShop") {
    coffeeShopAudio.play();

    bonfireAudio.pause();
    forestAudio.pause();
    rainAudio.pause();
  } else if (music == "bonfire") {
    bonfireAudio.play();

    forestAudio.pause();
    rainAudio.pause();
    coffeeShopAudio.pause();
  }
}

function getElementToActiveClass() {
  let hasTagWhitActiveClass = document.querySelector('.active') ? true : false;

  if (hasTagWhitActiveClass) {
    document.querySelector('.active').classList.remove('active')
  }
}

export function handleForestButtonClick() {
  getElementToActiveClass();
  forestButton.classList.add('active');
  playMusic("forest");
}

export function handleRainButtonClick() {
  getElementToActiveClass();
  rainButton.classList.add('active');
  playMusic('rain');
}

export function handleCoffeeShopButtonClick() {
  getElementToActiveClass();
  coffeeShopButton.classList.add('active');
  playMusic('coffeeShop');
}

export function handleBonfireButtonClick() {
  getElementToActiveClass();
  bonfireButton.classList.add('active');
  playMusic("bonfire");
}
