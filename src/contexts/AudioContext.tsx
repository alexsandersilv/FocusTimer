import React, { createContext, useContext, useState } from 'react';

import type { AudioContextProps } from '../types/contexts/audio';

import { bonfireAudio, coffeeShopAudio, forestAudio, rainAudio } from '../assets/audios/audios';

const AudioContext = createContext({} as AudioContextProps);
export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlayingBonfireAudio, setIsPlayingBonfireAudio] = useState<boolean>(false);
  const [isPlayingCoffeeShopAudio, setIsPlayingCoffeeShopAudio] = useState<boolean>(false);
  const [isPlayingForestAudio, setIsPlayingForestAudio] = useState<boolean>(false);
  const [isPlayingRainAudio, setISplayingRainAudio] = useState<boolean>(false);

  function play(music: string, volume: string) {
    if (music == "bonfire") {
      bonfireAudio.play(); setIsPlayingBonfireAudio(true);
      bonfireAudio.volume = Number(volume) / 100;

      coffeeShopAudio.pause(); setIsPlayingCoffeeShopAudio(false);
      forestAudio.pause(); setIsPlayingForestAudio(false);
      rainAudio.pause(); setISplayingRainAudio(false);
    } else if (music == "coffee") {
      coffeeShopAudio.play(); setIsPlayingCoffeeShopAudio(true);
      coffeeShopAudio.volume = Number(volume) / 100;

      bonfireAudio.pause(); setIsPlayingBonfireAudio(false);
      forestAudio.pause(); setIsPlayingForestAudio(false);
      rainAudio.pause(); setISplayingRainAudio(false);
    } else if (music == "forest") {
      forestAudio.play(); setIsPlayingForestAudio(true);
      forestAudio.volume = Number(volume) / 100;

      bonfireAudio.pause(); setIsPlayingBonfireAudio(false);
      coffeeShopAudio.pause(); setIsPlayingCoffeeShopAudio(false);
      rainAudio.pause(); setISplayingRainAudio(false);
    } else if (music == "rain") {
      rainAudio.play(); setISplayingRainAudio(true);
      rainAudio.volume = Number(volume) / 100;

      bonfireAudio.pause(); setIsPlayingBonfireAudio(false);
      coffeeShopAudio.pause(); setIsPlayingCoffeeShopAudio(false);
      forestAudio.pause(); setIsPlayingForestAudio(false);
    }
  }

  return (
    <AudioContext.Provider value={{
      play,
      isPlayingBonfireAudio,
      isPlayingCoffeeShopAudio,
      isPlayingForestAudio,
      isPlayingRainAudio
    }}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioContext);

  const hasContext = ctx ?? undefined;

  if (!hasContext) throw new Error("Context not found");

  return hasContext;
}