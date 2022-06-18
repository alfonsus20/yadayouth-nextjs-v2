import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { fetchArticles, fetchArticlesById } from "../../models/article";
import { Article } from "../../types/entities/article";

type Props = {
  data: Article;
};

const ArticleDetail: NextPage<Props> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-8 px-8 lg:px-0">
      <div className="mb-4">
        <h2 className="text-gray-600 font-bold text-3xl">{data.title}</h2>
        <p className="text-orange-500">{dayjs(data.timePublised).format("dddd, DD MMMM YYYY")}</p>
      </div>
      <div className="flex justify-center mb-4">
        <Image src={data.articleImage} alt="gambar" width={850} height={450} objectFit='cover' />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { articleId } = ctx.params!;

  try {
    const { data } = await fetchArticlesById(`${articleId}`);
    console.log(data);
    return { props: { data } };
  } catch (e) {
    return { props: {}, notFound: true };
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
