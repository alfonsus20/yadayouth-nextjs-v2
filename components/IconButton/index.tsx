import cn from "classnames";
import React from "react";
import { CommonShape } from "../../types/theme";


type IconButtonProps = {
  variant?: "primary" | "secondary";
  icon: React.ReactNode;
  shape?: CommonShape;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  variant,
  icon,
  shape = "box",
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className={cn("px-4 py-2", {
        "bg-gray-light": variant === "secondary",
        "is-box": shape === "box",
        "is-pill": shape === "pill",
        "is-rounded": shape === "rounded",
      })}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default IconButton;
