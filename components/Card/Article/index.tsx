import React from "react";
import Image from "next/image";

type ArticleProps = {
  imageURL: string;
  title: string;
  preview: string;
};

const Article = ({ imageURL, title, preview }: ArticleProps) => {
  return (
    <div className="cursor-pointer max-w-[360px]">
      <div className="relative w-full aspect-[16/9] mb-3">
        <Image
          src={imageURL}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>
      <div className="text-sm">
        <p className="text-xl font-bold mb-2 text-black-light">{title}</p>
        <p className="line-clamp-3">{preview}</p>
      </div>
    </div>
  );
};

export default Article;
