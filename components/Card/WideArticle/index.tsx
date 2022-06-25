import Image from "next/image";
import Link from "next/link";

type Props = {
  imageURL: string;
  title: string;
  preview: string;
  id: number;
};

const WideArticle = ({ id, imageURL, title, preview }: Props) => {
  return (
    <Link href={`/articles/${id}`} passHref>
      <div className="cursor-pointer flex flex-col xs:flex-row items-center gap-x-8">
        <div className="relative xs:mb-3 flex-shrink-0 xs:w-80 sm:w-96">
          <Image
            src={imageURL}
            alt={title}
            width={1200}
            height={800}
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
            data-testid="card-image"
          />
        </div>
        <div className="text-sm">
          <p
            className="text-xl font-bold mb-2 text-black-light"
            data-testid="card-title"
          >
            {title}
          </p>
          <p className="line-clamp-3 sm:line-clamp-4" data-testid="card-preview">
            {preview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WideArticle;
