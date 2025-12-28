import type { Accomplishment } from "../types/accomplishment";

import { useState, useRef } from "react";

type CustomCardProps = {
  accomplishment: Accomplishment;
};
const DisplayAccomplishCard = ({ accomplishment }: CustomCardProps) => {
  const [like, setLike] = useState(0);
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
            // Mobile Events
            onTouchStart={(e) => {
              e.preventDefault(); // Prevents "ghost" clicks and context menus
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
            // Mobile Events
            onTouchStart={(e) => {
              e.preventDefault(); // Prevents "ghost" clicks and context menus
              startDecrementing();
            }}
            onTouchEnd={stopIncrementing}
          >
            👎
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayAccomplishCard;
