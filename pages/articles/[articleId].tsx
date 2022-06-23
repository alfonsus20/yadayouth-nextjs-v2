import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { fetchArticles, fetchArticlesById } from "../../models/article";
import { Article } from "../../types/entities/article";

type Props = {
  data: Article;
};

const ArticleDetail: NextPage<Props> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-8 px-8 lg:px-0">
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="mb-4">
        <h2 className="text-gray-600 font-bold text-3xl mb-2">{data.title}</h2>
        <p className="text-orange-500">
          {dayjs(data.timePublised).format("dddd, DD MMMM YYYY")}
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <Image
          src={data.articleImage}
          alt="gambar"
          width={900}
          height={480}
          objectFit="cover"
          objectPosition='center'
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { articleId } = ctx.params!;

  try {
    const { data } = await fetchArticlesById(`${articleId}`);
    return { props: { data : data.result } };
  } catch (e) {
    return { props: {}, notFound: true, revalidate: 60 * 60 * 24 };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchArticles();
  const paths = data.results.map((article) => ({
    params: { articleId: article.id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export default ArticleDetail;
