import NavbarMobile from "./navbar.mobile";
import { render } from "@testing-library/react";

const mockedProps = {
  onClose: jest.fn(),
  isNavbarMobileOpen: false,
};

jest.mock('next/router', () => require('next-router-mock'));

describe('Navbar mobile unit test', () => {
  it('should match snapshot', () => {
    const container = render(<NavbarMobile {...mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
