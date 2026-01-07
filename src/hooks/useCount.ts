import { useState } from "react";

type UseCountReturn = [number, () => void, () => void];

const useCount = (initial: number, maxValue: number): UseCountReturn => {
  const [count, setCount] = useState<number>(initial);

  const increment = () => {
    if (count >= Math.max(0, maxValue - 1)) return;
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  return [count, increment, decrement];
};

export default useCount;
