import Image, { StaticImageData } from "next/image";
import React from "react";
import cn from "classnames";

type Props = {
  image: StaticImageData;
  color: string;
  title: string;
  description: string;
};

const Impact = ({ image, color, title, description }: Props) => {
  return (
    <div
      className={cn(
        "col-span-3 min-h-[350px] flex flex-col justify-center rounded-3xl px-8 relative shadow-lg",
        {
          "bg-orange shadow-orange/50": color === "orange",
          "bg-green shadow-green/50": color === "green",
          "bg-yellow shadow-yellow/50": color === "yellow",
          "bg-blue shadow-blue/50": color === "blue",
        }
      )}
    >
      <div className="absolute -top-24 -right-4">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Impact;
