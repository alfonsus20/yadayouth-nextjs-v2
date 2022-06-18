import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { LINK_PATHS } from "../../utils/constants";

type Props = {
  isNavbarMobileOpen: boolean;
  onClose: () => void;
};

const NavbarMobile = ({ isNavbarMobileOpen, onClose }: Props) => {
  const { pathname } = useRouter();
  return (
    <div
      className={cn(
        "w-full bg-white absolute top-0 mt-20 flex md:hidden flex-col items-center transition-transform left-0 transform duration-700",
        {
          "translate-x-0": isNavbarMobileOpen,
          "-translate-x-full": !isNavbarMobileOpen,
        }
      )}
    >
      {LINK_PATHS.map((link, idx) => (
        <Link href={link.href} key={idx}>
          <a
            onClick={onClose}
            className={cn("px-4 py-6 relative", {
              "font-bold": pathname === link.href,
            })}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavbarMobile;
