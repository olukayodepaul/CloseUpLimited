"use client";

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CardSales03 from "../component/CardSales03";

export default function showCard() {
  return (
    <>
      <div className="carousel__container">
        <div className="carousel__content">
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
          <CardSales03 />
        </div>
        <button className="carousel__button carousel__button--prev bg-white text-gray-500 active:bg-slate-300 active:text-white focus:outline-none hover:text-amber-600">
          <ChevronRightIcon className="h-8 w-8" />
        </button>
        <button className="carousel__button carousel__button--next bg-white text-gray-500 active:bg-slate-300 active:text-white focus:outline-none hover:text-amber-600">
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
      </div>
    </>
  );
}
