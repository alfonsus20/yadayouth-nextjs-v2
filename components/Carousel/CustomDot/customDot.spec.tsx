import { fireEvent, render, screen } from "@testing-library/react";
import CustomDot from ".";

const mockedProps = {
  active: false,
  onClick: jest.fn(),
};

describe("Custom dot unit test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const container = render(<CustomDot {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should simulate click", () => {
    render(<CustomDot {...mockedProps} />);
    fireEvent.click(screen.getByTestId("dot"));
    expect(mockedProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("should render correct color", () => {
    const activeDot = render(<CustomDot {...mockedProps} active />);
    expect(screen.getByTestId("dot").className).toContain("bg-blue");
    expect(screen.getByTestId("dot").className).not.toContain("bg-gray");
    activeDot.unmount();

    const inactiveDot = render(<CustomDot {...mockedProps} />);
    expect(screen.getByTestId("dot").className).toContain("bg-gray");
    expect(screen.getByTestId("dot").className).not.toContain("bg-blue");
    inactiveDot.unmount();
  });
});
