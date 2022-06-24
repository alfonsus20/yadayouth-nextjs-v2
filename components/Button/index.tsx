import cn from "classnames";
import React from "react";
import { CommonShape, CommonSize } from "../../types/theme";

type Appearance =
  | "primary"
  | "secondary"
  | "tertiary"
  | "default"
  | "danger"
  | "warning"
  | "info";

type Props = {
  shape?: CommonShape;
  appearance?: Appearance;
  size?: CommonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  shape = "rounded",
  appearance = "primary",
  size = "md",
  children,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        "hover:opacity-90 transition-opacity disabled:opacity-75 disabled:cursor-not-allowed py-2 flex items-center",
        className,
        {
          rounded: shape === "rounded",
          "rounded-full": shape === "pill",
          "bg-white text-gray-600": appearance === "default",
          "bg-blue text-white": appearance === "primary",
          "bg-yellow text-white": appearance === "secondary",
          "bg-orange text-white": appearance === "tertiary",
          "bg-red-light text-white": appearance === "danger",
          "bg-yellow-light text-white": appearance === "warning",
          "bg-blue opacity-90 text-white": appearance === "info",
          "px-10 text-lg": size === "lg",
          "px-6  text-md": size === "md",
          "px-3 text-sm": size === "sm",
        }
      )}
      {...rest}
    >
      {leftIcon && <span className="mr-3">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-3">{rightIcon}</span>}
    </button>
  );
};

export default Button;
