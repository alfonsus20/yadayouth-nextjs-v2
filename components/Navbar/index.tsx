import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerMenu from "react-hamburger-menu";
import { LINK_PATHS } from "../../utils/constants";

type Props = {
  onHamburgerButtonClick: () => void;
  isNavbarMobileOpen: boolean;
};

const Navbar = ({ onHamburgerButtonClick, isNavbarMobileOpen }: Props) => {
  const { pathname } = useRouter();

  return (
    <div className="px-8 py-2 flex justify-between items-center sticky top-0 bg-white z-20">
      <Link href="/">
        <a className="w-16 h-16">
          <Image width={200} height={200} src="/logo.png" alt="logo" />
        </a>
      </Link>
      <div className="hidden md:flex">
        <div>
          {LINK_PATHS.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <a
                className={cn("px-4 relative", {
                  "font-bold after:absolute after:w-8 after:h-[4px] after:bg-blue after:-bottom-2 after:transform after:-translate-x-1/2 after:left-1/2 after:right-1/2":
                    pathname === link.href,
                })}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <HamburgerMenu
          isOpen={isNavbarMobileOpen}
          menuClicked={onHamburgerButtonClick}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={2}
          animationDuration={0.5}
        />
      </div>
    </div>
  );
};

export default Navbar;
