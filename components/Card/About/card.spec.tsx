import { render, screen } from "@testing-library/react";
import { AboutCard } from "..";
import MockedImage from "../../../public/bg/home.jpg";

const mockedProps = {
  image: MockedImage,
  title: "Title",
  description: "Description",
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe("About card unit test", () => {
  it("should render correctly", () => {
    render(<AboutCard {...mockedProps} />);
    expect(screen.getByTestId("card-title")).toBeVisible();
    expect(screen.getByTestId("card-image")).toBeVisible();
    expect(screen.getByTestId("card-description")).toBeVisible();

    expect(screen.getByTestId("card-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("card-description")).toHaveTextContent("Description");
  });

  it("should match snapshot", () => {
    const container = render(<AboutCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
