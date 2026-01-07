import useIntervalCounting from "../hooks/useIntervalCounting";
import type { Accomplishment } from "../types/accomplishment";

type CustomCardProps = {
  accomplishment: Accomplishment;
  // setLike has a number value or parameter that has a type value returning a number; and returns void
  setLike: (value: number | ((prev: number) => number)) => void;
  like: number;
};
const DisplayAccomplishCard = ({
  setLike,
  like,
  accomplishment,
}: CustomCardProps) => {
  const { startIncrementing, startDecrementing, stopInterval } =
    useIntervalCounting(setLike);

  return (
    <>
      {/* This will be break down into smaller components */}
      {/* DisplayCard - DisplayCardStatus */}
      <div className="card-accomplishments">
        <h4>{accomplishment?.title}</h4>
        <div className="card-footer">
          <div className="card-footer-info">
            <span>(Count: {accomplishment.count})</span>
            <span>({accomplishment.id})</span>
          </div>
          <div className="card-footer-actions">
            {like}
            <button
              onMouseDown={startIncrementing}
              onMouseUp={stopInterval}
              onMouseLeave={stopInterval}
              onTouchStart={(e) => {
                e.preventDefault();
                startIncrementing();
              }}
              onTouchEnd={stopInterval}
            >
              👍
            </button>
            <button
              onMouseDown={startDecrementing}
              onMouseUp={stopInterval}
              onMouseLeave={stopInterval}
              onTouchStart={(e) => {
                e.preventDefault();
                startDecrementing();
              }}
              onTouchEnd={stopInterval}
            >
              👎
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayAccomplishCard;
