import { render } from '@testing-library/react';
import Home, { getStaticProps } from '.';
import * as svc from '../models/igPost';
import igPosts from '../__mocks__/igPosts.json';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe('Index page unit test', () => {
  it('should match snapshot', async () => {
    jest.spyOn(svc, 'fetchIGPosts').mockResolvedValue({
      data: igPosts,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });
    await getStaticProps({});
    const container = render(<Home data={igPosts.results} />);
    expect(container).toMatchSnapshot();
  });
});
