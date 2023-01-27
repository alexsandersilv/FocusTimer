export type AudioContextProps = {
  play: (music: string, volume: string) => void;
  isPlayingBonfireAudio: boolean;
  isPlayingCoffeeShopAudio: boolean;
  isPlayingForestAudio: boolean;
  isPlayingRainAudio: boolean;
}