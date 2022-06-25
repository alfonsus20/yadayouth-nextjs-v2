import ArticleDetail, { getStaticPaths, getStaticProps } from './[articleId].page';
import * as svc from '../../models/article';
import articleList from '../../__mocks__/articleList.json';
import articleSingle from '../../__mocks__/articleSingle.json';
import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Article detail unit test', () => {
  beforeEach(() => {
    jest.spyOn(svc, 'fetchArticles').mockResolvedValue({
      data: articleList,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', async () => {
    jest.spyOn(svc, 'fetchArticlesById').mockResolvedValue({
      data: articleSingle,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    await getStaticProps({ params: { articleId: '5' } });
    await getStaticPaths({});

    const container = render(
      <ArticleDetail
        data={articleSingle.result}
        next={articleList.next}
        prev={articleList.previous}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should handle not found article', async () => {
    jest.spyOn(svc, 'fetchArticlesById').mockRejectedValue({
      data: null,
      status: 404,
      headers: {},
      config: {},
    });

    await getStaticProps({ params: { articleId: '5' } });
    const res = await getStaticProps({ params: { articleId: '12' } });
    expect(res).toEqual({ props: {}, notFound: true });
  });

  it('should show prev button when prev prop exists and redirect to correct article detail page', async () => {
    jest.spyOn(svc, 'fetchArticlesById').mockResolvedValue({
      data: articleSingle,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    await getStaticProps({ params: { articleId: '5' } });

    render(<ArticleDetail data={articleSingle.result} prev={4} next={null} />);

    expect(screen.getByTestId('btn-prev')).toBeVisible();

    fireEvent.click(screen.getByTestId('btn-prev'));
    expect(mockRouter.pathname).toEqual('/articles/4');
  });

  it('should show next button when next prop exists and redirect to correct article detail page', async () => {
    jest.spyOn(svc, 'fetchArticlesById').mockResolvedValue({
      data: articleSingle,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });

    await getStaticProps({ params: { articleId: '5' } });

    render(<ArticleDetail data={articleSingle.result} next={6} prev={null} />);

    expect(screen.getByTestId('btn-next')).toBeVisible();

    fireEvent.click(screen.getByTestId('btn-next'));
    expect(mockRouter.pathname).toEqual('/articles/6');
  });
});
