import type { Accomplishment } from "../types/accomplishment";

type RankingActionsProps = {
  // Accomplishment Cards info
  totalItems: Accomplishment[];
  curentCardItem: Accomplishment;
  maxItems: number;
  //   Next and Back Card
  count: number;
  decrement: () => void;
  increment: () => void;
  //   Saving Likes
  currentLikeCounts: number;
  setLike: (value: number) => void;
};

const RankingActions = ({
  totalItems,
  maxItems,
  count,
  decrement,
  increment,
  currentLikeCounts,
  curentCardItem,
  setLike,
}: RankingActionsProps) => {
  const isFirstItem = count === 0 ? true : false;
  const isLastItem = count >= maxItems ? true : false;

  // Current Accomplishment item
  const accomplishmentItem = curentCardItem;
  //   const cardId = accomplishmentItem.id;
  //   const cardLikes = accomplishmentItem.likelihood;

  //   Capturing the current cards info from totalItems
  const isItemFound = totalItems.find(
    (item) => item.id === accomplishmentItem.id
  );

  // This will handle the likelihood of the previous card
  const handleNext = () => {
    // Save the like counts of the previous card
    console.log("Total Items:", totalItems);
    console.log("Curent Item:", accomplishmentItem);

    if (isItemFound) {
      isItemFound.likelihood = currentLikeCounts;
    }
    // Moves to the next card
    increment();
    console.log(currentLikeCounts);
    console.log("The previous item state:", accomplishmentItem);
    //  Reset the like counts from the parent element RankingCanvas
    setLike(0);
  };

  const handleBack = () => {
    if (isItemFound.likelihood !== 0) {
      setLike(isItemFound.likelihood);
    }

    decrement();
    console.log("The previous item state:", isItemFound);
  };

  return (
    <div className="ranking-actions">
      <button disabled={isFirstItem} onClick={() => handleBack()}>
        Back
      </button>
      <button disabled={isLastItem} onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
};

export default RankingActions;
