import { useState } from "react";
import type { Accomplishment } from "../types/accomplishment";

export function useAccomplishments(initial: Accomplishment[]) {
  const [accomplishments, setAccomplishments] = useState(initial);
  const [top7, setTop7] = useState<Accomplishment[]>([]);

  const handleAddToTop7 = (id: string) => {
    const itemToAdd = accomplishments.find((item) => item.id === id);
    const alreadyExist = top7.find((item) => item.id === id);
    if (!itemToAdd || alreadyExist) return;
    setTop7((prev) => [...prev, itemToAdd]);
  };

  const handleDelete = (id: string) => {
    const filteredAccomplishments = accomplishments.filter(
      (item) => item.id !== id
    );
    console.log(filteredAccomplishments);
    setAccomplishments(filteredAccomplishments);

    const itemOnTop7 = top7.find((item) => item.id === id);
    if (itemOnTop7) {
      const newTop7 = top7.filter((item) => item.id !== id);
      setTop7(newTop7);
    }
  };

  const handleAdd = (item: Accomplishment) => {
    setAccomplishments((prev) => [item, ...prev]);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newArr = [...accomplishments];
    [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]];
    setAccomplishments(newArr);
  };

  const moveDown = (index: number) => {
    if (index === accomplishments.length - 1) return;
    const newArr = [...accomplishments];
    [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]];
    setAccomplishments(newArr);
  };

  return {
    accomplishments,
    top7,
    handleAdd,
    handleDelete,
    handleAddToTop7,
    moveUp,
    moveDown,
  };
}
