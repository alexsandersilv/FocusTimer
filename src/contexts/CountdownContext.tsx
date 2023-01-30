import React, { createContext, useContext, useState, useEffect } from 'react';

import type { CountdownContextProps } from '../types/contexts/countdown';

const CountdownContext = createContext({} as CountdownContextProps);
export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  const [isCountdownActive, setIsCountdownActive] = useState(false);

  let countdownTimeout: number;
  let countdownIsFinish = minutes == 0  && seconds == 0;

  useEffect(() => {
    countdownTimeout = setTimeout(() => {
      if (isCountdownActive && !countdownIsFinish) {
        setSeconds(seconds - 1);
        if (seconds == 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }

      if (countdownIsFinish) {
        stopCountdown();
      }
    }, 1000);
  }, [minutes, seconds, isCountdownActive]);

  function startCountdown() {
    setIsCountdownActive(true);
  }

  function stopCountdown() {
    if (isCountdownActive) {
      clearTimeout(countdownTimeout);
      setIsCountdownActive(false);
      setMinutes(0);
      setSeconds(0);
    }
  }

  function addFiveMinutes() {
    if (minutes <= 54) {
      setMinutes(minutes + 5);
    }
  }

  function removeFiveMinutes() {
    if (minutes >= 6) {
      setMinutes(minutes - 5);
    }
  }

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      startCountdown,
      stopCountdown,
      addFiveMinutes,
      removeFiveMinutes
    }}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const ctx = useContext(CountdownContext);

  const hasContext = ctx ?? undefined;

  if (!hasContext) {
    throw new Error("Context not found");
  }

  return ctx
}