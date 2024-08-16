"use client";

import React from "react";
import CardSales01 from "../component/CardSales01";
export default function showCard() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="flex items-center justify-center mx-auto adjust_screen">
        <div className="resizes__containers">
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
          <CardSales01 />
        </div>
      </div>
    </div>
  );
}
