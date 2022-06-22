import cn from "classnames";
import Image from "next/image";
import Carousel, { DotProps } from "react-multi-carousel";
import { IGPost } from "../../../types/entities/igPost";

type Props = {
  data: IGPost[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomDot = ({ onClick, ...rest }: DotProps) => {
  const { active } = rest;
  return (
    <button
      className={cn("w-2 h-2 rounded-full mx-3", {
        "bg-blue": active,
        "bg-gray": !active,
      })}
      onClick={onClick}
    ></button>
  );
};

const Instagram = ({ data }: Props) => {
  return (
    <Carousel
      ssr={true}
      responsive={responsive}
      arrows={false}
      infinite={true}
      showDots={true}
      customDot={<CustomDot />}
      autoPlay={true}
    >
      {data.map((post, idx) => (
        <a
          href={post.permalink}
          key={idx}
          target="_blank"
          rel="noopen noreferrer"
        >
          <div className="p-4 flex justify-center mb-2">
            <Image src={post.media_url} alt="post" width={450} height={450} />
          </div>
        </a>
      ))}
    </Carousel>
  );
};

export default Instagram;
