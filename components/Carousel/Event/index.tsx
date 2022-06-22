import cn from "classnames";
import Image from "next/image";
import Carousel, { DotProps } from "react-multi-carousel";
import { Event } from "../../../types/entities/event";

type Props = {
  data: Event[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomDot = ({ onClick, ...rest }: DotProps) => {
  const { active } = rest;
  return (
    <button
      className={cn("w-2 h-2 transform sm:scale-75 rounded-full mx-3", {
        "bg-blue": active,
        "bg-gray": !active,
      })}
      onClick={onClick}
    ></button>
  );
};

const Event = ({ data }: Props) => {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      showDots={true}
      autoPlay={true}
      customDot={<CustomDot />}
    >
      {data.map((event, idx) => (
        <div key={idx} className="px-4 relative mb-10 xs:mb-5">
          <div className="flex justify-center">
            <Image
              src={event.images[0].image}
              alt="event"
              width={1200}
              height={800}
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
          <div className="text-white p-3 absolute transform sm:text-xs left-4 right-4 bottom-0 bg-gradient-to-b from-transparent to-neutral-900 rounded-b-lg">
            <h3 className="font-bold">{event.title}</h3>
            <p className="line-clamp-2">{event.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Event;
