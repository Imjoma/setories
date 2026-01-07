import type { Accomplishment } from "../../types/accomplishment";

type RankingActionsProps = {
  // Accomplishment Cards info
  totalItems: Accomplishment[];
  curentCardItem: Accomplishment;
  maxItems: number;
  //   Card Navigation
  count: number;
  navigateNext: () => void;
  navigatePrev: () => void;
  //   Saving Likes
  likeCounts: number;
};

const RankingActions = ({
  totalItems,
  maxItems,
  count,
  navigateNext,
  navigatePrev,
  likeCounts,
  curentCardItem,
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

    // Moves to the next card
    navigateNext();
    console.log(likeCounts);
    console.log("The previous item state:", accomplishmentItem);
    //  Reset the like counts from the parent element RankingCanvas
  };

  const handleBack = () => {
    navigatePrev();
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
