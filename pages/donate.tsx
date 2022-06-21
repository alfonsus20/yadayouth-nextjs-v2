import Head from "next/head";
import Image from "next/image";
import { DonationCard } from "../components/Card";
import DonationBg from "../public/bg/home.jpg";
import GopayLogo from "../public/donate/gopay.svg";
import MandiriLogo from "../public/donate/mandiri.svg";
import { DONATION_AIMS } from "../utils/constants";

const Donate = () => {
  return (
    <div>
      <Head>Donasi</Head>
      <section
        style={{ minHeight: "calc(100vh - 80px)" }}
        className="relative flex items-center"
      >
        <div className="max-w-screen-2xl px-8 py-16 xs:px-16">
          <div className="max-w-3xl relative z-10 pb-12">
            <h1 className="text-[2.5rem] sm:text-5xl font-semibold leading-normal">
              Melalui donasi yang baik, Anda dapat memberikan dampak positif
              bagi pemberdayaan anak-anak di Indonesia!
            </h1>
          </div>
        </div>
        <Image
          layout="fill"
          src={DonationBg}
          alt="home"
          objectFit="cover"
          placeholder="blur"
        />
      </section>
      <section className="max-w-screen-xl mx-auto px-8 py-16 xs:px-16">
        <h2 className="font-bold text-center text-4xl mb-12">
          Seluruh dana akan digunakan untuk{" "}
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {DONATION_AIMS.map((item, idx) => (
            <DonationCard key={idx} {...item} />
          ))}
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-8 py-16 xs:px-16">
        <h2 className="font-bold text-center text-4xl mb-12">
          Bagaimana Cara Donasi ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-12 text-lg">
          <div className="space-y-4">
            <div className="flex gap-x-6">
              <div className="flex-none w-32">
                <Image src={MandiriLogo} alt="mandiri" />
              </div>
              <div>
                <p className="font-bold">1330016450835</p>
                <p>a/n indira.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex-none w-32">
                <Image src={GopayLogo} alt="gopay" />
              </div>
              <div>
                <p className="font-bold">081230269075</p>
                <p>a/n indira.</p>
              </div>
            </div>
          </div>
          <p className="text-justify">
            Harap tambahkan Rp1 ke donasi (Misalnya: untuk donasi 50k, buatlah
            menjadi Rp50.001 dan/atau tambahkan deskripsi “sumbangan pemuda
            yada” di deskripsi/catatan untuk membantu kami menghitung dana yang
            terkumpul secara akurat)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;
