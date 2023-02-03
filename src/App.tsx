import { CountdownProvider } from './contexts/CountdownContext';
import { AudioProvider } from './contexts/AudioContext'

import Countdown from './components/server/Countdown';
import Audio from './components/server/Audio';

import './App.css';
import { ThemeSwitcher } from './components/client/ThemeSwitcher';

export default function App() {
  return (
    <main>
      <ThemeSwitcher />
      <CountdownProvider>
        <Countdown />
      </CountdownProvider>
      <AudioProvider>
        <Audio />
      </AudioProvider>
    </main>
  )
}