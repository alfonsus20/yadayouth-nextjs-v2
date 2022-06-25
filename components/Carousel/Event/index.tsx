import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Event } from "../../../types/entities/event";
import CustomDot from "../CustomDot";

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

const EventCard = ({ data }: Props) => {
  return (
    <Carousel
      ssr={true}
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
              src={event.image}
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

export default EventCard;
