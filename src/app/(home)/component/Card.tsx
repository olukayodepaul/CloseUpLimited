import React from "react";
import StarRating from "./StarRating";
import CartIcon from "./Carticons";
import HeartIcon from "./LoveIcon";
import { CardProps } from "../../../utils/types";

const Card = ({ productname, description, discount, price }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg ml-4 mr-4 sm:ml-8 sm:mr-8 lg:ml-20 lg:mr-20">
      <img
        src="http://localhost:3000/images/imges.png"
        alt=""
        className="w-full h-auto"
      />
      <div className="p-4">
        <div className="text-sm">{productname}</div>
        <span className="text-base roboto font-bold">{price}</span>

        <div className="flex items-center gap-2">
          <span className=" line-through opacity-75 custom-layout">
            Rs. {discount}
          </span>
          <span className="font-bold text-xs p-2 bg-yellow-500 rounded-s-2xl text-gray-600">
            Save 100%
          </span>
        </div>

        <div className="flex items-center mt-2 gap-1 mb-4">
          <StarRating rating={4} />
          <p className="font-bold text-gray-700 text-xs">Best Ratings</p>
        </div>

        <p className="mb-4 text-xs">{description}</p>

        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-blue-200 custom-layout">
            Buy Now
          </div>
          <button className="px-2 py-1 rounded-lg bg-gray-300 hover:bg-blue-200 ">
            <CartIcon />
          </button>
          <button className="px-2 py-1 rounded-lg bg-blue-400 hover:bg-blue-200">
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
