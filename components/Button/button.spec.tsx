import Button from ".";
import { render, screen } from "@testing-library/react";
import { UserIcon } from "@heroicons/react/outline";

describe("Button unit test", () => {
  it("should match snapshot", () => {
    const container = render(<Button>Halo</Button>);
    expect(container).toMatchSnapshot();
  });

  it("should render correct shape", () => {
    const btnRounded = render(<Button shape="rounded">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("rounded");
    btnRounded.unmount();

    const btnDefault = render(<Button>Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("rounded");
    btnDefault.unmount();

    const btnPill = render(<Button shape="pill">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("rounded-full");
    btnPill.unmount();
  });

  it("should render correct size", () => {
    const btnLarge = render(<Button size="lg">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("px-10 text-lg");
    btnLarge.unmount();

    const btnMedium = render(<Button size="md">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("px-6 text-md");
    btnMedium.unmount();

    const btnSmall = render(<Button size="sm">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain("px-3 text-sm");
    btnSmall.unmount();
  });

  it("should render correct appearance", () => {
    const btnDefault = render(<Button appearance="default">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-white text-gray-600"
    );
    btnDefault.unmount();

    const btnWithNoAppearanceProp = render(<Button>Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-blue text-white"
    );
    btnWithNoAppearanceProp.unmount();

    const btnPrimary = render(<Button appearance="primary">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-blue text-white"
    );
    btnPrimary.unmount();

    const btnSecondary = render(<Button appearance="secondary">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-yellow text-white"
    );
    btnSecondary.unmount();

    const btnTertiary = render(<Button appearance="tertiary">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-orange text-white"
    );
    btnTertiary.unmount();

    const btnDanger = render(<Button appearance="danger">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-red-light text-white"
    );
    btnDanger.unmount();

    const btnWarning = render(<Button appearance="warning">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-yellow-light text-white"
    );
    btnWarning.unmount();

    const btnInfo = render(<Button appearance="info">Halo</Button>);
    expect(screen.getByTestId("button").className).toContain(
      "bg-blue opacity-90 text-white"
    );
    btnInfo.unmount();
  });

  it("should be able to render left and right icon", () => {
    render(
      <Button
        leftIcon={<UserIcon className="w-5 h-5 text-black-light" />}
        rightIcon={<UserIcon className="w-5 h-5 text-black-light" />}
      >
        Halo
      </Button>
    );
    expect(screen.getByTestId("left-icon")).toBeVisible();
    expect(screen.getByTestId("right-icon")).toBeVisible();
  });
});
