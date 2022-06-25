import { render } from '@testing-library/react';
import Donate from './donate.page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe('Donate page unit test', () => {
  it('should match snapshot', () => {
    const container = render(<Donate />);
    expect(container).toMatchSnapshot();
  });
});
