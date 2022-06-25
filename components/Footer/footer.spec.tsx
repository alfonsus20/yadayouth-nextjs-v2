import { render } from "@testing-library/react";
import Footer from ".";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe("Footer unit test", () => {
  it("should match snapshot", () => {
    const container = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
