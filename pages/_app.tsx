import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/Navbar/navbar.mobile";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false);

  const toggleNavbarMobile = () => {
    setIsNavbarMobileOpen((prev) => !prev);
  };

  const closeNavbarMobile = () => {
    setIsNavbarMobileOpen(false);
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <NextNProgress color="blue" options={{ showSpinner: false }} />
      <Navbar
        onHamburgerButtonClick={toggleNavbarMobile}
        isNavbarMobileOpen={isNavbarMobileOpen}
      />
      <NavbarMobile
        isNavbarMobileOpen={isNavbarMobileOpen}
        onClose={closeNavbarMobile}
      />
      <main className="flex-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
