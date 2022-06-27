import useEffectOnce from "./useEffectOnce";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

const mockedCallback = jest.fn();

const TestComponent = () => {
  useEffectOnce(mockedCallback);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        data-testid="btn-count"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Button {count}
      </button>
    </div>
  );
};

describe("useEffectOnce hook unit test", () => {
  it("should call callback function only once even though the component's state is updated", () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByTestId("btn-count"));
    expect(mockedCallback).toHaveBeenCalledTimes(1);
  });
});
