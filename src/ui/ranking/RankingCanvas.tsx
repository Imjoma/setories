import useToggler from "../../hooks/useToggler";
import useCount from "../../hooks/useCount";
import type { Accomplishment } from "../../types/accomplishment";
import DisplayAccomplishCard from "../DisplayAccomplishCard";
import RankingActions from "./RankingActions";
import { useState } from "react";

type RankingCanvasProps = {
  rankingItems: Accomplishment[];
};

const RankingCanvas = ({ rankingItems }: RankingCanvasProps) => {
  const [value, toggleValue] = useToggler(false);
  const [count, increment, decrement] = useCount(
    0,
    Math.max(0, rankingItems.length - 1)
  );
  const [like, setLike] = useState(0);

  // 🚨 To avoid verbose, will create an array of objects of id and likeCounts instead
  // [{id: string, likeCounts: number}]
  // will match the likeCounts to the current card easily

  if (!value)
    return <button onClick={() => toggleValue(true)}>Start ranking</button>;

  return (
    <div onClick={() => toggleValue(false)} className="ranking-background">
      <div onClick={(e) => e.stopPropagation()} className="ranking-container">
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
          count={count}
          increment={increment}
          decrement={decrement}
          currentLikeCounts={like}
          setLike={setLike}
          curentCardItem={rankingItems[count]}
        />
      </div>
    </div>
  );
};

export default RankingCanvas;
