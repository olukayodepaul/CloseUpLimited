import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import StarRating from "../home/component/StarRating";

function CardSales01({ item }: { item: any }) {
  console.log();

  const priceString = item.price.toString();
  const priceParts = priceString.split(".");
  console.log(priceString);

  return (
    //----note that this is the expose compose
    // import CardSales01 from "../component/CardSales01";
    //Adjustment design
    // <div>
    //   <meta
    //     name="viewport"
    //     content="width=device-width, initial-scale=1.0"
    //   ></meta>
    //   <div className="flex items-center justify-center mx-auto adjust_screen">
    //     <div className="resizes__containers">
    //       <CardSales01 />
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="rounded-lg  border border-gray-100 h-[580px] mb-5">
        <div className="overflow-hidden">
          <Image
            src="/images/imges.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover inset-0 w-full h-full transition-transform duration-500 ease-in-out hover:scale-105 "
          />
        </div>

        <blockquote className="p-2">
          <div className="mb-2 flex items-center">
            <p className="text-xs text-zinc-700 hover:text-amber-600 transition-colors duration-300 cursor-pointer">
              Sponsored
            </p>
            <InformationCircleIcon className="h-4 w-4 text-zinc-700 ml-1 hover:text-amber-600 transition-colors duration-300 cursor-pointer" />
          </div>

          <p className="mb-1 hover:text-amber-600 transition-colors duration-300 cursor-pointer">
            {`${item.name} ${item.description}`}
          </p>
          <div className="mb-1">
            <StarRating rating={4} />
          </div>
          <p className="text-xs mb-1">500+ bought in past month</p>
          <div className="text-2xl flex align-middle mb-2">
            <p className="text-sm align-middle mt-1">$</p>
            <p className="text-4xl tracking-[-2px] font-medium">{`${priceParts[0]}`}</p>
            <p className="text-sm mt-1 mr-2 pl-1">{`${priceParts[1]}`}</p>
            <p className="text-sm mt-3">
              <span className="mr-1">List:</span>
              <span className="line-through">{`$${item.price}`}</span>
            </p>
          </div>

          <div className="flex items-center text-xs mb-1">
            <p className="bg-lime-600 py-1 px-2 text-white hover:bg-lime-700 transition-colors duration-300 cursor-pointer">
              Save 25%
            </p>
            <a
              href="/more-discount"
              className="pl-3  hover:text-amber-600 transition-colors duration-300 cursor-pointer"
            >
              More Discount
            </a>
          </div>

          <div>
            <span className="mr-2 text-sm">Delivery</span>
            <span className="font-bold text-sm">Wed, Sep 4</span>
          </div>
          <div className="text-xs mt-1">Ships to Lagos</div>
          <p className="mb-3"></p>
          <button className="bg-yellow-400 p-2 pr-5 pl-5 text-xs rounded-2xl border border-gray-100 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors duration-300">
            Add to Cart
          </button>
        </blockquote>
      </div>
    </div>
  );
}

export default CardSales01;
