import cn from "classnames";
import React from "react";
import { CommonShape } from "../../types/theme";

type Props = {
  shape?: CommonShape;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  shape = "box",
  variant = "primary",
  className,
  icon,
  ...rest
}: Props) => {
  return (
    <div
      className={cn(className, "flex gap-x-1 px-3 sm:px-6 py-2 items-center", {
        "bg-gray-light placeholder:text-gray": variant === "secondary",
        "is-box": shape === "box",
        "is-pill": shape === "pill",
        "is-rounded": shape === "rounded",
      })}
      data-testid='input-wrapper'
    >
      <input className="flex-auto outline-none bg-transparent" {...rest} />
      {icon}
    </div>
  );
};

export default Input;
