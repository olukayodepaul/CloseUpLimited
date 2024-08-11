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
    <HeartIcon className={`h-6 w-6 ${className} `} style={{ fill: color }} />
  );
};

export default LoveIcon;
