import useToggler from "../../hooks/useToggler";
import useCount from "../../hooks/useCount";
import AccomplishItemCard from "../AccomplishItemCard";
import { useAccomplishments } from "../../hooks/useAccomplishments";
import type { Accomplishment } from "../../types/accomplishment";

type RankingCanvasProps = {
  rankingItems: Accomplishment[];
};

const RankingCanvas = ({ rankingItems }: RankingCanvasProps) => {
  const [value, toggleValue] = useToggler(false);
  const { accomplishments, handleDelete, handleAddToTop7 } = useAccomplishments(
    []
  );
  const [count, increment, decrement] = useCount(
    0,
    Math.max(0, rankingItems.length - 1)
  );

  console.log("RankingCanvas:", accomplishments);

  if (!value)
    return <button onClick={() => toggleValue(true)}>Start ranking</button>;

  return (
    <div onClick={() => toggleValue(false)} className="ranking-background">
      <div onClick={(e) => e.stopPropagation()} className="ranking-container">
        <div className="ranking-body">
          {/* Change this to DisplayAccomplishCard */}
          {/* make the size of the AccomplishCards explicit */}
          <div className="container-grid">
            <AccomplishItemCard
              key={rankingItems[count].id}
              index={rankingItems[count].count}
              accomplishment={rankingItems[count]}
              handleDelete={handleDelete}
              handleAddToTop7={handleAddToTop7}
            />
          </div>
        </div>
        <div className="ranking-footer">
          <button onClick={() => decrement()}>-</button>
          <p>{count}</p>
          <p>MaxVal {rankingItems.length - 1}</p>
          <button onClick={() => increment()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default RankingCanvas;
