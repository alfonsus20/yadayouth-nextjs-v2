import React from "react";
import { ArticleCard } from "..";
import { render, screen } from "@testing-library/react";

const mockedProps = {
  imageURL: "http://google.com",
  title: "Title test",
  preview: "Preview test",
};

describe("Article Card unit test", () => {
  it("should render correctly", () => {
    render(<ArticleCard {...mockedProps} />);
    expect(screen.getByTestId("card-image")).toBeInTheDocument();
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const container = render(<ArticleCard {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render title and description correctly", () => {
    render(<ArticleCard {...mockedProps} />);
    expect(screen.getByTestId("card-title").textContent).toEqual("Title test");
    expect(screen.getByTestId("card-description").textContent).toEqual(
      "Preview test"
    );
  });
});
