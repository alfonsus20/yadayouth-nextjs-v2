import React from "react";
import cn from "classnames";
import { CommonShape } from "../../types/theme";

import styles from "./style.module.scss";

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
      className={cn(styles["icon-btn"], {
        [styles["icon-btn-primary"]]: variant === "primary",
        [styles["icon-btn-secondary"]]: variant === "secondary",
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
