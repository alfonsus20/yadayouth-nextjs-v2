import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import { fetchArticles, fetchArticlesById } from '../../models/article';
import { Article } from '../../types/entities/article';

type Props = {
  data: Article;
  prev: number| null;
  next: number | null;
};

const ArticleDetail: NextPage<Props> = ({ data, prev, next }) => {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto pt-8 px-8 lg:px-0">
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="mb-4">
        <h2 className="text-gray-600 font-bold text-3xl mb-2">{data.title}</h2>
        <p className="text-orange-500">
          {dayjs(data.timePublised).format('dddd, DD MMMM YYYY')}
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <Image
          src={data.articleImage}
          alt="gambar"
          width={900}
          height={480}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <div className={classNames('flex', { 'mt-8': prev || next })}>
        {prev && (
          <Button
            leftIcon={<ChevronDoubleLeftIcon className="w-5 h-5 text-white" />}
            appearance="tertiary"
            onClick={() => router.push(`/articles/${prev}`)}
            className="mr-auto"
            data-testid="btn-prev"
          >
            Prev
          </Button>
        )}
        {next && (
          <Button
            rightIcon={
              <ChevronDoubleRightIcon className="w-5 h-5 text-white" />
            }
            appearance="tertiary"
            onClick={() => router.push(`/articles/${next}`)}
            className="ml-auto"
            data-testid="btn-next"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { articleId } = ctx.params!;

  try {
    const { data } = await fetchArticlesById(`${articleId}`);
    return {
      props: {
        data: data.result,
        prev: data.previous,
        next: data.next,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (e) {
    return { props: {}, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await fetchArticles();
  const paths = data.results.map((article) => ({
    params: { articleId: article.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
};

export default ArticleDetail;
