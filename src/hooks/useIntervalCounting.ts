import { useRef } from "react";

// setLike has a number value or parameter that has a type value returning a number; and returns void
type callbackLikeType = (value: number | ((prev: number) => number)) => void;

const useIntervalCounting = (callback: callbackLikeType) => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  //   Like
  const startIncrementing = () => {
    callback((prev) => {
      if (prev >= 100) return prev;
      return prev + 1;
    });

    timerRef.current = setInterval(() => {
      callback((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  //   Stop Interval
  const stopInterval = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Dislike
  const startDecrementing = () => {
    callback((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });

    timerRef.current = setInterval(() => {
      callback((prev) => {
        if (prev <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 30);
  };
  return { startIncrementing, stopInterval, startDecrementing };
};

export default useIntervalCounting;
