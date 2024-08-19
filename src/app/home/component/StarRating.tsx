import React from "react";
import { StarRatingProps } from "../../../utils/types";

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const isActive = index < rating;
    const fillColor = isActive ? "fill-yellow-400" : "fill-gray-300";
    const borderColor = "stroke-gray-500";
    const hoverFillColor = "group-hover:fill-yellow-300"; // Hover color

    return (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${fillColor} ${borderColor} mx-[-1px] group cursor-pointer`} // Added cursor-pointer class
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        style={{ strokeWidth: "0.5px" }} // Thinner border width
      >
        <path
          className={`transition-colors duration-300 ${hoverFillColor}`} // Smooth transition for color change
          d="M12 2l2.39 4.85L20 8.23l-3.61 3.52L17.5 16l-5.5-2.89L6.5 16l1.11-4.75L4 8.23l5.61-.38L12 2z"
        />
      </svg>
    );
  });

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
