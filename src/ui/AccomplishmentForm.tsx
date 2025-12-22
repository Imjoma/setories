import { useState } from "react";
import type { AccomplishCardProps } from "../types/accomplishment";
import { generateRandomString } from "../utils/generateId";

type CustomProps = Pick<AccomplishCardProps, "handleAdd"> & {
  count: number;
};

const AccomplishmentForm = ({ handleAdd, count }: CustomProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (handleAdd) {
      handleAdd({
        title: title,
        count: count,
        id: generateRandomString(),
      });
    }

    setTitle("");
  };
  return (
    <form className="container-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🌟 You shine bright that time..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">+</button>
    </form>
  );
};

export default AccomplishmentForm;
