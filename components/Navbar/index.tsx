import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-8 py-2 flex justify-between items-center sticky top-0 bg-white">
      <div className="w-16 h-16">
        <Image width={200} height={200} src="/logo.png" alt="logo" />
      </div>
      <div className="flex">
        <div>
          <Link href="/">
            <a className="px-4">Beranda</a>
          </Link>
          <Link href="/">
            <a className="px-4">Tentang Kami</a>
          </Link>
          <Link href="/">
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
    </div>
  );
};

export default Navbar;
