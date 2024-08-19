import React from "react";
import Image from "next/image";
import StarRating from "../home/component/StarRating";

export default function CardSales03() {
  return (
    <div className="card3_main_container mb-10">
      <div className="resizes__card03">
        <Image
          src="/images/imges.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="object-cover inset-0 mb-1"
        />
        <div className="ml-0 text-stone-950">
          <p className="w-[170px] text-sky-800 mb-1 hover:text-amber-600 transition-colors duration-300 cursor-pointer text-sm">
            Digital Camera 4K, Ultra HD 48MP Photo 4K Video, Dual Lens Camera,
            18x Digital Zoom, Autofocus Camera for Photography, with Wi...
          </p>
          <div className="mb-1 flex align-middle gap-1">
            <StarRating rating={4} />
            <p className="text-xs text-sky-800">120</p>
          </div>
          <p className="text-xs mb-1">500+ view in the past month</p>
          <div className="text-2xl flex gap-1 mb-1">
            <div className="flex">
              <p className="text-xs align-middle mt-1">$</p>
              <p className="text-2xl tracking-[-2px] font-medium">59</p>
              <p className="text-xs mt-1 mr-2 pl-1">99</p>
            </div>
            <div className="text-xs mt-2">
              <span className="mr-1">List:</span>
              <span className="line-through">$32.99</span>
            </div>
          </div>
          <div className="flex align-middle gap-2 mb-1">
            <p className="text-xs">Delivery</p>
            <p className="font-bold text-xs">Wed, Sep 4</p>
          </div>
          <p className="text-xs mb-1">$32.99 Shipping</p>
          <p className="text-xs">Others information</p>
        </div>
      </div>
    </div>
  );
}
