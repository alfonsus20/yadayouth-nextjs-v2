import { render, screen } from "@testing-library/react";
import { ArticleCard } from "..";

const mockedProps = {
  imageURL: "http://google.com",
  title: "Title test",
  preview: "Preview test",
  id: 1,
};

describe("Article Card unit test", () => {
  it("should render correctly", () => {
    render(<ArticleCard {...mockedProps} />);
    expect(screen.getByTestId("card-image")).toBeVisible();
    expect(screen.getByTestId("card-title")).toBeVisible();
    expect(screen.getByTestId("card-preview")).toBeVisible();

    expect(screen.getByTestId("card-title")).toHaveTextContent("Title test");
    expect(screen.getByTestId("card-preview")).toHaveTextContent(
      "Preview test"
    );
  });

  it("should match snapshot", () => {
    const container = render(<ArticleCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
