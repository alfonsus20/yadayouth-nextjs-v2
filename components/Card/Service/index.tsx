import Image, { StaticImageData } from "next/image";
import React from "react";
import cn from "classnames";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  color: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

const Service = ({
  image,
  color,
  title,
  description,
  buttonText,
  buttonHref,
}: Props) => {
  return (
    <div
      className={cn(
        "relative px-6 pt-20 md:pt-16 pb-8 flex-[0_1_400px] rounded-3xl text-white",
        {
          "bg-[#E5AB1A]": color === "yellow",
          "bg-[#E14B4B]": color === "red",
          "bg-[#686DEC]": color === "blue",
        }
      )}
    >
      <div className="absolute -top-12 left-10 bg-white rounded-xl">
        <Image src={image} alt={title} width={85} height={85} />
      </div>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <p className="text-lg mb-5">{description}</p>
      <Link href={buttonHref}>
        <a
          className={cn("px-10 py-2 rounded-full", {
            "bg-[#FF5C5C]": color === "red",
            "bg-[#FBBB1B]": color === "yellow",
            "bg-[#222AEF]": color === "blue",
          })}
        >
          {buttonText}
        </a>
      </Link>
    </div>
  );
};

export default Service;
