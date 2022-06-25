import { fireEvent, render, screen } from '@testing-library/react';
import Articles, { getStaticProps } from '.';
import * as svc from '../../models/article';
import articleList from '../../__mocks__/articleList.json';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Article list page unit test', () => {
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
    mockRouter.push({ query: {} });
  });

  it('should match snapshot', async () => {
    await getStaticProps({});
    const container = render(<Articles data={articleList.results} />);
    expect(container).toMatchSnapshot();
  });

  it('should simulate search by keyword', () => {
    render(<Articles data={articleList.results} />);
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'losing' },
    });
    fireEvent.submit(screen.getByTestId('search-form'));
    expect(mockRouter.query).toEqual({ keyword: 'losing' });
    expect(screen.getByTestId('list-section')).toBeInTheDocument();
    expect(screen.queryByTestId('main-section')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('card-title').length).toEqual(1);
    expect(
      screen.getAllByTestId('card-title')[0].textContent?.toLowerCase()
    ).toContain('losing');
  });

  it('should simulate sorting', () => {
    render(<Articles data={articleList.results} />);

    expect(screen.getByTestId('btn-asc')).not.toBeVisible();
    expect(screen.getByTestId('btn-desc')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('btn-toggle-sorting'));
    expect(screen.getByTestId('btn-asc')).toBeVisible();
    expect(screen.getByTestId('btn-desc')).toBeVisible();
    fireEvent.click(screen.getByTestId('btn-asc'));
    expect(mockRouter.query).toEqual({ sortDirection: 'ASC' });
    expect(
      screen.getAllByTestId('card-title').map((el) => el.textContent)
    ).toEqual([
      'Dampak Kemiskinan pada Akses Anak ke Edukasi Seks',
      'Losing 10 Kgs a Week, Is It Possible? – Unhealthy Eating Habits of Youths',
      'YADA IMPACT 3.0: Digital Era Empowers the Child Potential',
    ]);

    fireEvent.click(screen.getByTestId('btn-toggle-sorting'));
    expect(screen.getByTestId('btn-asc')).toBeVisible();
    expect(screen.getByTestId('btn-desc')).toBeVisible();
    fireEvent.click(screen.getByTestId('btn-desc'));
    expect(mockRouter.query).toEqual({ sortDirection: 'DESC' });
    expect(
      screen.getAllByTestId('card-title').map((el) => el.textContent)
    ).toEqual([
      'YADA IMPACT 3.0: Digital Era Empowers the Child Potential',
      'Losing 10 Kgs a Week, Is It Possible? – Unhealthy Eating Habits of Youths',
      'Dampak Kemiskinan pada Akses Anak ke Edukasi Seks',
    ]);
  });

  it('should remove sortDirection query params when the value is not equal to ASC and DESC', () => {
    mockRouter.push({ query: { sortDirection: 'NAIK' } });
    render(<Articles data={articleList.results} />);
    expect(mockRouter.query).toEqual({ sortDirection: '' });
  });

  it('should handle when there is not search result', () => {
    render(<Articles data={articleList.results} />);
    fireEvent.change(screen.getByTestId('search-input'), {
      target: { value: 'xxx' },
    });
    fireEvent.submit(screen.getByTestId('search-form'));
    expect(screen.getByTestId('not-found-articles')).toBeInTheDocument();
  });
});
