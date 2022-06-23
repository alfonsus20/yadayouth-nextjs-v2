import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
};

const About = ({ image, title, description }: Props) => {
  return (
    <div className="text-center space-y-8">
      <div>
        <h3
          className="text-gray-600 font-bold text-3xl mb-2"
          data-testid="card-title"
        >
          {title}
        </h3>
        <div className="h-1 bg-gray-600 w-1/5 mx-auto" />
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          className="rounded-xl"
          data-testid="card-image"
        />
      </div>
      <p data-testid="card-description">{description}</p>
    </div>
  );
};

export default About;
