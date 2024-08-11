import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const LoveIcon = ({ className }: { className?: string }) => {
  return (
    <HeartIcon className={`h-6 w-6 ${className} `} style={{ fill: "red" }} />
  );
};

export default LoveIcon;
