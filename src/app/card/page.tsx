"use client";

import React from "react";
import CardSales01 from "../component/CardSales01";
export default function showCard() {
  return (
    <div className="flex">
      <CardSales01 />
      <CardSales01 />
      <CardSales01 />
    </div>
  );
}
