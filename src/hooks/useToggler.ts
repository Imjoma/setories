import { useState } from "react";

type ToggleFn = (next?: boolean) => void;
type UseToggleReturn = [boolean, ToggleFn];

export default function useToggler(initialState: boolean): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialState);

  function toggleValue(next?: boolean) {
    setValue((prev) => (typeof next === "boolean" ? next : !prev));
  }

  return [value, toggleValue];
}
