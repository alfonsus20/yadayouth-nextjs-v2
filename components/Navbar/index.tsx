import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  return (
    <div className="px-8 py-2 flex justify-between items-center sticky top-0 bg-white z-20">
      <Link href='/'>
        <a className="w-16 h-16">
          <Image width={200} height={200} src="/logo.png" alt="logo" />
        </a>
      </Link>
      <div className="hidden md:flex">
        <div>
          <Link href="/">
            <a className="px-4">Beranda</a>
          </Link>
          <Link href="/">
            <a className="px-4">Tentang Kami</a>
          </Link>
          <Link href="/articles">
            <a className="px-4">Artikel</a>
          </Link>
          <Link href="/">
            <a className="px-4">Donasi</a>
          </Link>
          <Link href="/">
            <a className="px-4">Kontak Kami</a>
          </Link>
        </div>
        <div className="px-4">ID</div>
      </div>
      <div className="block md:hidden">
        <HamburgerMenu
          isOpen={false}
          menuClicked={() => {}}
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
