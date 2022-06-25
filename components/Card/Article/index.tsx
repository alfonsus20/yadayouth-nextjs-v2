import Image from "next/image";
import Link from "next/link";

type ArticleProps = {
  imageURL: string;
  title: string;
  preview: string;
  id: number;
};

const Article = ({ id, imageURL, title, preview }: ArticleProps) => {
  return (
    <Link href={`/articles/${id}`} passHref>
      <div className="cursor-pointer max-w-[360px]">
        <div className="relative w-full aspect-[16/9] mb-3">
          <Image
            src={imageURL}
            alt={title}
            layout="fill"
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
          <p className="line-clamp-3" data-testid="card-preview">
            {preview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
