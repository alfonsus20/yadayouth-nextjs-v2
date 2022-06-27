import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/Navbar/navbar.mobile';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.scss';
import type { AppProps } from "next/app";

const setSmoothScroll = (isSmooth: boolean) => {
  document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleNavbarMobile = () => {
    setIsNavbarMobileOpen((prev) => !prev);
  };

  const closeNavbarMobile = () => {
    setIsNavbarMobileOpen(false);
  };

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
