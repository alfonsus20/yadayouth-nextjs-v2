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
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  shape = "rounded",
  appearance = "primary",
  size = "md",
  children,
  ...rest
}: Props) => {
  return (
    <button
      className={cn(
        "hover:opacity-90 transition-opacity disabled:opacity-75 disabled:cursor-not-allowed py-2",
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
      {children}
    </button>
  );
};

export default Button;
