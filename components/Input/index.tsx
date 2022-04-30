import React from "react";
import { CommonShape } from "../../types/theme";
import cn from "classnames";

import styles from "./style.module.scss";

type InputProps = {
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
}: InputProps) => {
  return (
    <div
      className={cn(className, styles["input"], {
        [styles["input-primary"]]: variant === "primary",
        [styles["input-secondary"]]: variant === "secondary",
        "is-box": shape === "box",
        "is-pill": shape === "pill",
        "is-rounded": shape === "rounded",
      })}
    >
      <input {...rest} />
      {icon}
    </div>
  );
};

export default Input;
