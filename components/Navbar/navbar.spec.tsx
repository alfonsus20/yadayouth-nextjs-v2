import Navbar from ".";
import { render } from "@testing-library/react";

const mockedProps = {
  onHamburgerButtonClick: jest.fn(),
  isNavbarMobileOpen: false,
};

jest.mock('next/router', () => require('next-router-mock'));

describe('Navbar unit test', () => {
  it('should match snapshot', () => {
    const container = render(<Navbar {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
