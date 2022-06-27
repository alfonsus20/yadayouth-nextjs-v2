import WideArticle from ".";
import { render, screen } from "@testing-library/react";

const mockedProps = {
  imageURL: "http://google.com",
  title: "Title test",
  preview: "Preview test",
  id: 1,
};

describe("Wide article unit test", () => {
  it("should render correctly", () => {
    render(<WideArticle {...mockedProps} />);
    expect(screen.getByTestId("card-image")).toBeVisible();
    expect(screen.getByTestId("card-title")).toBeVisible();
    expect(screen.getByTestId("card-preview")).toBeVisible();

    expect(screen.getByTestId("card-title").textContent).toEqual("Title test");
    expect(screen.getByTestId("card-preview").textContent).toEqual(
      "Preview test"
    );
  });

  it("should match snapshot", () => {
    const container = render(<WideArticle {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
