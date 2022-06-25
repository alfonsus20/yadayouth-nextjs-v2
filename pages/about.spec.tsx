import { render } from '@testing-library/react';
import * as svc from '../models/event';
import pastEvents from '../__mocks__/pastEvents.json';
import About, { getStaticProps } from './about.page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe('About page unit test', () => {
  it('should match snapshot', async () => {
    jest.spyOn(svc, 'fetchPastEvents').mockResolvedValue({
      data: pastEvents,
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
    });
    await getStaticProps({});
    const container = render(<About data={pastEvents.results} />);
    expect(container).toMatchSnapshot();
  });
});
