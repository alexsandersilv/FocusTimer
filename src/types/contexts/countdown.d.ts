export type CountdownContextProps = {
  minutes: number;
  seconds: number;
  startCountdown: () => void;
  stopCountdown: () => void;
  addFiveMinutes: () => void;
  removeFiveMinutes: () => void;
}