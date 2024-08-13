import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const LoveIcon = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <button className="px-2 py-1 rounded-lg bg-blue-300 hover:bg-blue-200">
      <HeartIcon className={`h-6 w-6 ${className} `} style={{ fill: color }} />
    </button>
  );
};

export default LoveIcon;
