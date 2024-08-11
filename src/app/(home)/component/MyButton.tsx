import React from "react";

interface MyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean;
  className: string;
}

const MyButton = ({
  onClick,
  disabled,
  className,
  children,
}: MyButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
