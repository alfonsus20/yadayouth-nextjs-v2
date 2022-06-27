import * as svc from '../models/event';
import About, { getStaticProps } from './about.page';
import pastEvents from '../__mocks__/pastEvents.json';
import { render } from '@testing-library/react';

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe("About page unit test", () => {
  it("should match snapshot", async () => {
    jest.spyOn(svc, "fetchPastEvents").mockResolvedValue({
      data: pastEvents,
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    });
    await getStaticProps({});
    const container = render(<About data={pastEvents.results} />);
    expect(container).toMatchSnapshot();
  });
});
