// src/components/ui/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyles = "px-4 py-2 font-medium transition duration-200";

  const variants = {
    primary:
      "bg-[#FF8600] text-white hover:opacity-80 focus:ring-2 focus:ring-orange-300",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-100 focus:ring-2 focus:ring-orange-300",
    ghost: "text-orange-500 hover:underline",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
