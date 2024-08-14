import React from "react";
import StarRating from "./StarRating";
import CartIcon from "./Carticons";
import HeartIcon from "./LoveIcon";
import { CardProps } from "../../../utils/types";

// "Paul's comment: The product is subject to further extension.
// The next and previous buttons can be repositioned using CSS position:
// absolute, while the slides themselves can remain responsive by little css.
// The code base can be improve on at production level.
// the next and prevous button is hidden at a point where no more item is in the slide buffer
// Component can also be drill down as re-usable....
//Thanks.
//Paul Olukayode

const Cards = ({
  productname,
  description,
  discount,
  price,
  embla__slide,
}: CardProps) => {
  return (
    <>
      <div className={`${embla__slide}`}>
        <div className="w-[180px] h-[315px]">
          <div className=" bg-white rounded-lg">
            <img
              src="http://localhost:3000/images/imges.png"
              alt=""
              className="w-full"
            />
            <blockquote className="p-2">
              <p className="text-xs">{productname}</p>
              <p className="text-xl roboto font-bold">{price}</p>
              <p className=" line-through opacity-75 custom-layout">
                {discount}
              </p>
              <StarRating rating={4} />
              <div className="flex gap-2 mt-4">
                <CartIcon gbColor="text-gray-700" />
                <HeartIcon className="" color="red" />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
