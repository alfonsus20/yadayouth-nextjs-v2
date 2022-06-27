import IconButton from ".";
import { render } from "@testing-library/react";
import { UserIcon } from "@heroicons/react/outline";

const mockedProps = {
  icon: <UserIcon className="w-5 h-5 bg-green-500" />,
};

describe("Icon button unit test", () => {
  it("should match snapshot", () => {
    const container = render(<IconButton {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
