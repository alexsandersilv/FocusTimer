'use client';

import { useCountdown } from '../../contexts/CountdownContext';

export function CountdownDisplay() {
  const { minutes, seconds } = useCountdown();

  let minutesDisplay = minutes.toString().padStart(2, '0');
  let secondsDisplay = seconds.toString().padStart(2, '0');

  return (
    <div className="countdown">
      <span>{minutesDisplay}</span>
      <span>:</span>
      <span>{secondsDisplay}</span>
    </div>
  )
}