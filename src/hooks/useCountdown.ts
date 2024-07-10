import { useEffect, useState, useRef } from "react";

export const useCountdown = (initialTargetTime: number) => {
  const [countDown, setCountDown] = useState(initialTargetTime);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const setIntervalHandler = () => {
    clearExistingInterval();
    intervalRef.current = setInterval(() => {
      setCountDown((prev) => {
        if (prev <= 1) {
          clearExistingInterval();
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearExistingInterval();
    };
  }, []);

  const startCounter = () => {
    setCountDown(initialTargetTime);
    setIntervalHandler();
  };

  const resetCounter = () => {
    setCountDown(initialTargetTime);
    setIntervalHandler();
  };

  return { countDown, startCounter, resetCounter };
};
