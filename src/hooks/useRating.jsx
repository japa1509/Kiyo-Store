import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export const useRating = (initialRating = 0) => {
  const [rating, setRating] = useState(initialRating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar
            key={i}
            className="text-black cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setRating(i);
            }}
          />
        ) : (
          <FaRegStar
            key={i}
            className="text-black cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setRating(i);
            }}
          />
        )
      );
    }
    return stars;
  };

  return { rating, setRating, renderStars };
};
