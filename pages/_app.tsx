import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
