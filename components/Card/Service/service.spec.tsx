import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import singletonRouter from 'next/router';
import { ServiceCard } from "..";
import MockedImage from "../../../public/bg/home.jpg";

const mockedProps = {
  image: MockedImage,
  color: "yellow",
  title: "Title",
  description: "Description",
  buttonText: "Button",
};

jest.mock('next/router', () => require('next-router-mock'));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="image" />;
  },
}));

describe("Service card unit test", () => {
  it("should render correctly", () => {
    render(<ServiceCard {...mockedProps} />);

    expect(screen.getByTestId("card-image")).toBeVisible();
    expect(screen.getByTestId("card-title")).toBeVisible();
    expect(screen.getByTestId("card-description")).toBeVisible();
    expect(screen.getByTestId("card-btn")).toBeVisible();

    expect(screen.getByTestId("card-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("card-description")).toHaveTextContent(
      "Description"
    );
    expect(screen.getByTestId("card-btn")).toHaveTextContent("Button");
  });

  it("should match snapshot", () => {
    const container = render(<ServiceCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render correct background color and button appearance", () => {
    const containerDefault = render(
      <ServiceCard {...mockedProps} color=''/>
    );
    expect(screen.getByTestId("card-btn").className).toContain(
      "bg-white text-gray-600"
    );
    containerDefault.unmount();

    const containerYellow = render(
      <ServiceCard {...mockedProps} color="yellow" />
    );

    expect(screen.getByTestId("card").className).toContain("bg-yellow");
    expect(screen.getByTestId("card-btn").className).toContain(
      "bg-yellow-light text-white"
    );
    containerYellow.unmount();

    const containerRed = render(<ServiceCard {...mockedProps} color="red" />);
    expect(screen.getByTestId("card").className).toContain("bg-red");
    expect(screen.getByTestId("card-btn").className).toContain(
      "bg-red-light text-white"
    );
    containerRed.unmount();

    const containerBlue = render(<ServiceCard {...mockedProps} color="blue" />);
    expect(screen.getByTestId("card").className).toContain("bg-blue-lotus");
    expect(screen.getByTestId("card-btn").className).toContain(
      "bg-blue opacity-90 text-white"
    );
    containerBlue.unmount();
  });

  it("should disable button when there is no link (button href)", () => {
    render(<ServiceCard {...mockedProps} color="yellow" />);
    expect(screen.getByTestId("card-btn")).toBeDisabled();
  });

  it("should not disable button when there is a link (button href)", () => {
    render(
      <ServiceCard {...mockedProps} color="yellow" buttonHref="/donate" />
    );
    expect(screen.getByTestId("card-btn")).not.toBeDisabled();
  });

  it("should call window.open() when the button is clicked and isOpenNewPage is true", () => {
    render(
      <ServiceCard
        {...mockedProps}
        color="yellow"
        buttonHref="https://google.com"
        isOpenNewPage
      />
    );
    fireEvent.click(screen.getByTestId("card-btn"));
    expect(window.open).toHaveBeenCalledWith("https://google.com");
  });

  it("should redirect to correct page when the button is clicked", () => {
    mockRouter.setCurrentUrl("/");
    render(
      <ServiceCard
        {...mockedProps}
        color="yellow"
        buttonHref="donate"
      />
    );
    fireEvent.click(screen.getByTestId("card-btn"));
    expect(singletonRouter.pathname).toEqual("/donate")
  });
});
