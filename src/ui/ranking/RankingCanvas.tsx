import useToggler from "../../hooks/useToggler";
import useCount from "../../hooks/useCount";
import type { Accomplishment } from "../../types/accomplishment";
import DisplayAccomplishCard from "../DisplayAccomplishCard";
import RankingActions from "./RankingActions";
import { useState } from "react";

const RankingCanvas = ({
  rankingItems,
}: {
  rankingItems: Accomplishment[];
}) => {
  const [value, toggleValue] = useToggler(false);
  // for card navigation
  const [count, increment, decrement] = useCount(0, rankingItems.length);
  // for card sorting
  const [ranking, setRanking] = useState([]);
  // for card liking
  const [like, setLike] = useState(0);

  // ✔️ To avoid verbose, will create an array of objects of id and likeCounts instead
  // [{id: string, likeCounts: number}]
  // will match the likeCounts to the current card easily

  if (!value)
    return <button onClick={() => toggleValue(true)}>Start ranking</button>;

  return (
    <div onClick={() => toggleValue(false)} className="ranking-background">
      <div onClick={(e) => e.stopPropagation()} className="ranking-container">
        <div className="ranking-header">
          Original: {JSON.stringify(rankingItems)}
        </div>
        <div className="ranking-header">New: {JSON.stringify(ranking)}</div>
        <div className="ranking-body">
          {/* Change this to DisplayAccomplishCard */}
          {/* make the size of the AccomplishCards explicit */}

          <DisplayAccomplishCard
            key={rankingItems[count].id}
            accomplishment={rankingItems[count]}
            like={like}
            setLike={setLike}
          />
        </div>
        <RankingActions
          totalItems={rankingItems}
          maxItems={rankingItems.length - 1}
          curentCardItem={rankingItems[count]}
          count={count}
          navigateNext={increment}
          navigatePrev={decrement}
          likeCounts={like}
        />
      </div>
    </div>
  );
};

export default RankingCanvas;
