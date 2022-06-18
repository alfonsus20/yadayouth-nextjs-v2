import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
