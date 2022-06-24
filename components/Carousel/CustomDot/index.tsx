import cn from "classnames";
import { DotProps } from "react-multi-carousel";

const CustomDot = ({ onClick, ...rest }: DotProps) => {
  const { active } = rest;
  return (
    <li
      data-testid="dot"
      className={cn("w-2 h-2 transform sm:scale-75 rounded-full mx-3", {
        "bg-blue": active,
        "bg-gray": !active,
      })}
      onClick={onClick}
    ></li>
  );
};

export default CustomDot;
