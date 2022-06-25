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
        "col-span-12 sm:col-span-6 md:col-span-3 md:min-h-[350px] flex flex-col p-8 md:pt-32 rounded-3xl relative shadow-lg",
        {
          "bg-neon--orange": color === "orange",
          "bg-neon--green": color === "green",
          "bg-neon--yellow": color === "yellow",
          "bg-neon--blue": color === "blue",
        }
      )}
      data-testid="card"
    >
      <div className="md:absolute md:-top-24 md:-right-4 mx-auto md:mx-0 md:w-56 md:h-56">
        <Image src={image} alt={title} width={220} height={220} quality={100} data-testid="card-image" />
      </div>
      <div className="text-white">
        <h3 className="font-semibold text-xl mb-1" data-testid="card-title">{title}</h3>
        <p className="text-lg" data-testid="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Impact;
