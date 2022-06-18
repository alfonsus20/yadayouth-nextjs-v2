import cn from "classnames";
import Image, { StaticImageData } from "next/image";

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
        "col-span-12 sm:col-span-6 md:col-span-3 min-h-[350px] flex flex-col justify-center rounded-3xl px-8 relative shadow-lg",
        {
          "bg-orange shadow-orange/50": color === "orange",
          "bg-green shadow-green/50": color === "green",
          "bg-yellow shadow-yellow/50": color === "yellow",
          "bg-blue shadow-blue/50": color === "blue",
        }
      )}
    >
      <div className="md:absolute md:-top-24 md:-right-4 mx-auto md:mx-0 md:w-56 md:h-56">
        <Image src={image} alt={title} width={220} height={220} quality={100} />
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Impact;
