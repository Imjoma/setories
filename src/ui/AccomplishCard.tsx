import type { AccomplishCardProps } from "../types/accomplishment";
import { useState } from "react";

type CustomCardProps = Omit<AccomplishCardProps, "handleAdd"> & {
  setDraftTitle: (inputTitle: string) => void;
};

const AccomplishCard = ({
  index,
  accomplishment,
  handleAddToTop7,
  handleDelete,
  setDraftTitle,
}: CustomCardProps) => {
  const [inputTitle, setInputTitle] = useState("");

  console.log("Working Input: ", inputTitle);
  return (
    <div key={accomplishment.id} className="card-accomplishments">
      <textarea
        placeholder="Your accomplishment was..."
        maxLength={200}
        value={accomplishment?.title || inputTitle}
        onChange={(e) => {
          setInputTitle(e.target.value);
          setDraftTitle(e.target.value);
        }}
        autoFocus
        // readOnly
      />
      <span>({index})</span>
      <span>({accomplishment.id})</span>

      <button
        onClick={() => {
          handleDelete(accomplishment.id);
        }}
      >
        delete
      </button>
      <button onClick={() => handleAddToTop7(accomplishment.id)}>add</button>
    </div>
  );
};

export default AccomplishCard;
