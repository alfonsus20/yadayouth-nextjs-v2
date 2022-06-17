import cn from "classnames";
import React from "react";
import { CommonShape, CommonSize } from "../../types/theme";

type Appearance = "primary" | "secondary" | "tertiary";

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
      className={cn("hover:opacity-90 transition-opacity disabled:opacity-75", {
        rounded: shape === "rounded",
        "rounded-full": shape === "pill",
        "bg-blue": appearance === "primary",
        "px-10 py-2": size === "lg",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
