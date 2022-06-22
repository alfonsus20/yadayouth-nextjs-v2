import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import Slider, { Settings } from "react-slick";
import { Event } from "../../../types/entities/event";

type Props = {
  data: Event[];
};

const Event = ({ data }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings: Settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    dots: true,
    customPaging: (i) => (
      <div
        className={cn("h-2 w-2 mt-4 rounded-full transform sm:scale-75", {
          "bg-blue": activeSlide === i,
          "bg-gray": activeSlide !== i,
        })}
      />
    ),
  };

  return (
    <Slider {...settings}>
      {data.map((event, idx) => (
        <div key={idx} className="px-4 relative">
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
    </Slider>
  );
};

export default Event;
