import type { Accomplishment } from "../types/accomplishment";

import { useRef } from "react";

type CustomCardProps = {
  accomplishment: Accomplishment;
  setLike: (value: number) => void;
  like: number;
};
const DisplayAccomplishCard = ({
  accomplishment,
  like,
  setLike,
}: CustomCardProps) => {
  // const [like, setLike] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  //   Like
  const startIncrementing = () => {
    setLike((prev) => {
      if (prev >= 100) return prev;
      return prev + 1;
    });

    timerRef.current = setInterval(() => {
      setLike((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  const stopIncrementing = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Dislike
  const startDecrementing = () => {
    setLike((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });

    timerRef.current = setInterval(() => {
      setLike((prev) => {
        if (prev <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 30);
  };

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
              onMouseUp={stopIncrementing}
              onMouseLeave={stopIncrementing}
              onTouchStart={(e) => {
                e.preventDefault();
                startIncrementing();
              }}
              onTouchEnd={stopIncrementing}
            >
              👍
            </button>
            <button
              onMouseDown={startDecrementing}
              onMouseUp={stopIncrementing}
              onMouseLeave={stopIncrementing}
              onTouchStart={(e) => {
                e.preventDefault();
                startDecrementing();
              }}
              onTouchEnd={stopIncrementing}
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
