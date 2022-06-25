import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import InstagramLogo from "../../public/sosmed/instagram.svg";
import LinkedinLogo from "../../public/sosmed/linkedin.svg";
import TiktokLogo from "../../public/sosmed/tiktok.svg";

const Footer = () => {
  return (
    <div className="px-8 max-w-screen-xl mx-auto w-full" id="contact">
      <div className="flex justify-between items-center py-8 flex-col sm:flex-row gap-2">
        <div className="flex items-center gap-x-2 flex-col sm:flex-row">
          <Link href="/">
            <a className="relative w-28 sm:w-20 h-28 sm:h-20">
              <Image src={Logo} alt="logo" layout="fill" />
            </a>
          </Link>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-2xl">Yada Youth Indonesia</p>
            <p>Empowering Children of Tomorrow</p>
          </div>
        </div>
        <div>
          <ul className="flex gap-x-4">
            <li>
              <a
                href="https://www.instagram.com/yadayouth.id"
                target="_blank"
                rel="noopen noreferrer"
              >
                <Image
                  src={InstagramLogo}
                  alt="instagram"
                  className="transition cursor-pointer scale-75 hover:scale-100"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@yadayouth.id"
                target="_blank"
                rel="noopen noreferrer"
              >
                <Image
                  src={TiktokLogo}
                  alt="tiktok"
                  className="transition cursor-pointer scale-75 hover:scale-100"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/yada-youth/"
                target="_blank"
                rel="noopen noreferrer"
              >
                <Image
                  src={LinkedinLogo}
                  alt="linkedin"
                  className="transition cursor-pointer scale-75 hover:scale-100"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
          <div className="text-center sm:text-right font-semibold">
            <p>Tentang Kami</p>
            <p>081230269075</p>
          </div>
        </div>
      </div>
      <footer className="text-center sm:pt-4 pb-10 font-semibold">
        &copy; Copyright 2022
      </footer>
    </div>
  );
};

export default Footer;
