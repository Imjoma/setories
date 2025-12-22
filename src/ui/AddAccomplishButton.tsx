import { generateRandomString } from "../utils/generateId";
import type {
  AccomplishCardProps,
  Accomplishment,
} from "../types/accomplishment";

type FewCardProps = Pick<AccomplishCardProps, "handleAdd" | "handleDelete"> & {
  accomplishments: Accomplishment[];
  draftTitle: string;
  setDraftTitle: (inputTitle: string) => void;
};

const AddAccomplishButton = ({
  handleAdd,
  accomplishments,
  setDraftTitle,
}: FewCardProps) => {
  const isMax = accomplishments.length < 20;

  const handleAddClick = () => {
    if (handleAdd) {
      handleAdd({
        title: "New Accomplishment",
        count: accomplishments.length,
        id: generateRandomString(),
      });
    }
    setDraftTitle("");
  };

  return (
    <>
      <button
        style={{
          display: isMax ? "block" : "none",
        }}
        disabled={!isMax}
        onClick={() => isMax && handleAddClick()}
        className="button-add-accomplishments"
      >
        +
      </button>
    </>
  );
};

export default AddAccomplishButton;
