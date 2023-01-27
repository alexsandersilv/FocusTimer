import { CountdownDisplay } from '../client/CountdownDisplay';
import { CountdownButtonsControllers } from '../client/CountdownButtonsControllers';

export default function Countdown() {
  return (
    <div id="timer">
      <CountdownDisplay />
      <CountdownButtonsControllers />
    </div>
  )
}