import { render, screen } from "@testing-library/react";
import { DonationCard } from "..";

const mockedDescription = "Mocked Description";
const className = "col-span-1 rounded-xl p-8 relative shadow-lg text-white";

describe("Donation card unit test", () => {
  it("should render correctly", () => {
    render(<DonationCard description={mockedDescription} color="yellow" />);
    expect(screen.getByTestId("card-content")).toBeVisible();
    expect(screen.getByTestId("card-content")).toHaveTextContent("Mocked Description")
  });

  it("should match snapshot", () => {
    const container = render(
      <DonationCard description={mockedDescription} color="yellow" />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render correct color", () => {
    const containerYellow = render(
      <DonationCard description={mockedDescription} color="yellow" />
    );
    expect(screen.getByTestId("card-content")).toHaveClass(
      `${className} bg-neon--yellow`
    );
    containerYellow.unmount();

    const containerBlue = render(
      <DonationCard description={mockedDescription} color="blue" />
    );
    expect(screen.getByTestId("card-content")).toHaveClass(
      `${className} bg-neon--blue`
    );
    containerBlue.unmount();

    const containerGreen = render(
      <DonationCard description={mockedDescription} color="green" />
    );
    expect(screen.getByTestId("card-content")).toHaveClass(
      `${className} bg-neon--green`
    );
    containerGreen.unmount();

    const containerOrange = render(
      <DonationCard description={mockedDescription} color="orange" />
    );
    expect(screen.getByTestId("card-content")).toHaveClass(
      `${className} bg-neon--orange`
    );
    containerOrange.unmount();
  });
});
