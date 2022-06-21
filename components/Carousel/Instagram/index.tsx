import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import Slider, { Settings } from "react-slick";
import { IGPost } from "../../../types/entities/igPost";

type Props = {
  data: IGPost[];
};

const Instagram = ({ data }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slider, setSlider] = useState<Slider>();

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
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
        className={cn("h-2 w-2 mt-4 rounded-full", {
          "bg-blue": activeSlide === i,
          "bg-gray": activeSlide !== i,
        })}
      />
    ),
  };

  return (
    <Slider {...settings}>
      {data.map((post,idx) => (
        <div key={idx}>
          <div className="p-4 flex justify-center">
            <Image src={post.media_url} alt="post" width={450} height={450} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Instagram;
