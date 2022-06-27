import Input from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserIcon } from "@heroicons/react/outline";

const mockedProps = {
  onChange: jest.fn(),
};

describe("Input unit test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const container = render(<Input variant="secondary" {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should simulate change", () => {
    render(<Input variant="secondary" {...mockedProps} />);
    fireEvent.change(screen.getByTestId("input-wrapper").firstChild!, {
      target: { value: "test value" },
    });
    expect(mockedProps.onChange).toHaveBeenCalled();
  });

  it("should be able to render icon", () => {
    render(
      <Input {...mockedProps} icon={<UserIcon className="w-5 h-5 icon" />} />
    );
    expect(screen.getByTestId("input-wrapper").childNodes.length).toEqual(2);
    expect(screen.getByTestId("input-wrapper").lastChild).toHaveClass(
      "w-5 h-5 icon"
    );
  });

  it("should be rendered in a correct appearance", () => {
    render(<Input variant="secondary" {...mockedProps} />);
    expect(screen.getByTestId("input-wrapper").className).toContain(
      "bg-gray-light placeholder:text-gray"
    );
  });

  it("should render correct shape", () => {
    const elBox = render(<Input variant="secondary" {...mockedProps} />);
    expect(screen.getByTestId("input-wrapper").className).toContain("is-box");
    elBox.unmount();

    const elPill = render(
      <Input variant="secondary" shape="pill" {...mockedProps} />
    );
    expect(screen.getByTestId("input-wrapper").className).toContain("is-pill");
    elPill.unmount();

    const elRounded = render(
      <Input variant="secondary" shape="rounded" {...mockedProps} />
    );
    expect(screen.getByTestId("input-wrapper").className).toContain(
      "is-rounded"
    );
    elRounded.unmount();
  });
});
