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

// Notes:
// - Initial ui load - show template card only
// - - draftTitle and template card must be empty before adding new empty card
// - - - add button will show then change the state of of the previous textared to readOnly

const AddAccomplishButton = ({
  handleAdd,
  accomplishments,
  draftTitle,
  handleDelete,
  setDraftTitle,
}: FewCardProps) => {
  const isMax = accomplishments.length < 20;
  const lastItem = accomplishments[accomplishments.length - 1];

  const handleAddClick = () => {
    if (draftTitle.trim() === "") return;
    // Deleting the template card
    if (lastItem.id === "abcde") {
      handleDelete(lastItem.id);
    }

    if (handleAdd) {
      //   Adding the new card in the state
      handleAdd({
        title: draftTitle,
        count: accomplishments.length,
        id: generateRandomString(),
      });
    }
    setDraftTitle("");
  };

  return (
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
  );
};

export default AddAccomplishButton;
