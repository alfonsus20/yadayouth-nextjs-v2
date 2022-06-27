import Button from "../../Button";
import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

type Props = {
  image: StaticImageData;
  color: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  isOpenNewPage?: boolean;
};

const Service = ({
  image,
  color,
  title,
  description,
  buttonText,
  buttonHref,
  isOpenNewPage = false,
}: Props) => {
  const router = useRouter();

  return (
    <div
      data-testid="card"
      className={cn(
        "relative px-6 pt-20 md:pt-16 pb-8 flex-[0_1_400px] rounded-3xl text-white",
        {
          "bg-yellow": color === "yellow",
          "bg-red": color === "red",
          "bg-blue-lotus": color === "blue",
        }
      )}
    >
      <div className="absolute -top-12 left-10 bg-white rounded-xl">
        <Image
          src={image}
          alt={title}
          width={85}
          height={85}
          data-testid="card-image"
        />
      </div>
      <h3 className="font-bold text-xl mb-1" data-testid="card-title">
        {title}
      </h3>
      <p className="text-lg mb-5" data-testid="card-description">
        {description}
      </p>
      <Button
        data-testid="card-btn"
        shape="pill"
        appearance={`${
          color === "red"
            ? "danger"
            : color === "yellow"
            ? "warning"
            : color === "blue"
            ? "info"
            : "default"
        }`}
        disabled={!buttonHref}
        onClick={() => {
          if (isOpenNewPage) {
            window.open(buttonHref);
          } else {
            router.push(`/${buttonHref}`);
          }
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Service;
