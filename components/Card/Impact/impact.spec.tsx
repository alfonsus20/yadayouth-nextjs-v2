import { render, screen } from "@testing-library/react";
import { ImpactCard } from "..";
import MockedImage from "../../../public/bg/home.jpg";

const mockedProps = {
  image: MockedImage,
  title: "Title",
  description: "Description",
  color: "yellow",
};

const className =
  "col-span-12 sm:col-span-6 md:col-span-3 md:min-h-[350px] flex flex-col p-8 md:pt-32 rounded-3xl relative shadow-lg";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe("Impact card unit test", () => {
  it("should render correctly", () => {
    render(<ImpactCard {...mockedProps} />);
    expect(screen.getByTestId("card-image")).toBeVisible();
    expect(screen.getByTestId("card-title")).toBeVisible();
    expect(screen.getByTestId("card-description")).toBeVisible();

    expect(screen.getByTestId("card-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("card-description")).toHaveTextContent(
      "Description"
    );
  });

  it("should match snapshot", () => {
    const container = render(<ImpactCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render correct color", () => {
    const containerYellow = render(
      <ImpactCard {...mockedProps} color="yellow" />
    );
    expect(screen.getByTestId("card")).toHaveClass(
      `${className} bg-neon--yellow`
    );
    containerYellow.unmount();

    const containerBlue = render(<ImpactCard {...mockedProps} color="blue" />);
    expect(screen.getByTestId("card")).toHaveClass(
      `${className} bg-neon--blue`
    );
    containerBlue.unmount();

    const containerGreen = render(
      <ImpactCard {...mockedProps} color="green" />
    );
    expect(screen.getByTestId("card")).toHaveClass(
      `${className} bg-neon--green`
    );
    containerGreen.unmount();

    const containerOrange = render(
      <ImpactCard {...mockedProps} color="orange" />
    );
    expect(screen.getByTestId("card")).toHaveClass(
      `${className} bg-neon--orange`
    );
    containerOrange.unmount();
  });
});
