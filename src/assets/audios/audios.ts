const bonfireAudio = new Audio('/src/assets/audios/bonfire.wav');
const coffeeShopAudio = new Audio('/src/assets/audios/coffeeShop.wav');
const forestAudio = new Audio('/src/assets/audios/forest.wav');
const rainAudio = new Audio('/src/assets/audios/rain.wav');

bonfireAudio.loop = true;
coffeeShopAudio.loop = true;
forestAudio.loop = true;
rainAudio.loop = true;

export { bonfireAudio, coffeeShopAudio, forestAudio, rainAudio }