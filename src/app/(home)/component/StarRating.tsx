import React from "react";
import { StarRatingProps } from "../../../utils/types";

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starType = index < rating ? "text-yellow-500" : "text-gray-300";
    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${starType}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.16-.77L12 2 11.16 8.47 2 9.24l5.46 4.73L5.82 21z"
          clipRule="evenodd"
        />
      </svg>
    );
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
