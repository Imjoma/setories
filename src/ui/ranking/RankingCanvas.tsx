import useToggler from "../../hooks/useToggler";
import useCount from "../../hooks/useCount";
import type { Accomplishment } from "../../types/accomplishment";
import DisplayAccomplishCard from "../DisplayAccomplishCard";

type RankingCanvasProps = {
  rankingItems: Accomplishment[];
};

const RankingCanvas = ({ rankingItems }: RankingCanvasProps) => {
  const [value, toggleValue] = useToggler(false);
  const [count, increment, decrement] = useCount(
    0,
    Math.max(0, rankingItems.length - 1)
  );

  console.log("RankingCanvas:", rankingItems);

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
          />
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
