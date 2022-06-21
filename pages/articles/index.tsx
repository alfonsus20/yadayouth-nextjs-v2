import { SearchIcon, SortDescendingIcon } from "@heroicons/react/outline";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ArticleCard } from "../../components/Card";
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";
import { fetchArticles } from "../../models/article";
import { Article } from "../../types/entities/article";

type Props = {
  data?: Array<Article>;
};

const Articles: NextPage<Props> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Head>
        <title>Artikel</title>
      </Head>
      <section className="pt-6 pb-4 sm:pb-12 flex flex-col">
        <div className="flex justify-between sm:items-center mb-4 flex-col sm:flex-row gap-y-4">
          <h2 className="font-bold text-3xl text-black-light">Artikel Baru</h2>
          <div className="flex gap-2 items-center justify-center flex-wrap">
            <Input
              variant="secondary"
              placeholder="Search"
              shape="pill"
              icon={<SearchIcon />}
              className="flex-auto"
            />
            <IconButton
              icon={<SortDescendingIcon />}
              variant="secondary"
              shape="pill"
            />
          </div>
        </div>
        {data && (
          <div className="mx-auto hidden sm:block">
            <div className="mb-4 relative mx-auto">
              <Image
                src={data[0].articleImage}
                objectFit="cover"
                objectPosition="top"
                width={1200}
                height={600}
                className="rounded-lg"
                alt={data[0].title}
              />
            </div>
            <div>
              <p className="text-2xl font-bold mb-2 text-black-light">
                {data[0].title}
              </p>
              <p className="text-justify">{data[0].preview}</p>
            </div>
          </div>
        )}
      </section>
      <section className="flex gap-12 flex-wrap justify-center pb-12 sm:pb-20">
        {data?.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            imageURL={article.articleImage}
            title={article.title}
            preview={article.preview}
          />
        ))}
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchArticles();

  return { props: { data: data.results } };
};

export default Articles;
