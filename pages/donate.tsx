import Image from "next/image";
import { DonationCard } from "../components/Card";
import DonationBg from "../public/bg/home.jpg";
import GopayLogo from "../public/donate/gopay.png";
import MandiriLogo from "../public/donate/mandiri.png";
import OvoLogo from "../public/donate/ovo.png";
import { DONATION_AIMS } from "../utils/constants";

const Donate = () => {
  return (
    <div>
      <section
        style={{ minHeight: "calc(100vh - 80px)" }}
        className="relative flex items-center"
      >
        <div className="max-w-screen-2xl px-16">
          <div className="max-w-3xl relative z-10 pb-12">
            <h1 className="text-5xl font-semibold leading-normal">
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
      <section className="max-w-screen-xl mx-auto p-16">
        <h2 className="font-bold text-center text-4xl mb-12">
          Seluruh dana akan digunakan untuk{" "}
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {DONATION_AIMS.map((item, idx) => (
            <DonationCard key={idx} {...item} />
          ))}
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto p-16">
        <h2 className="font-bold text-center text-4xl mb-12">
          Bagaimana Cara Donasi ?
        </h2>
        <div className="flex items-center gap-12 text-lg">
          <div className="space-y-4">
            <div className="flex gap-x-6">
              <div className="flex-none w-32">
                <Image src={MandiriLogo} alt="mandiri" width={600} height={160} />
              </div>
              <div>
                <p className="font-bold">1330016450835</p>
                <p>a/n indira.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex-none w-32">
                <Image src={OvoLogo} alt="ovo" width={600} height={180} />
              </div>
              <div>
                <p className="font-bold">1330016450835</p>
                <p>a/n indira.</p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex-none w-32">
                <Image src={GopayLogo} alt="gopay" width={600} height={150} />
              </div>
              <div>
                <p className="font-bold">1330016450835</p>
                <p>a/n indira.</p>
              </div>
            </div>
          </div>
          <div>
            Harap tambahkan Rp1 ke donasi (Misalnya: untuk donasi 50k, buatlah
            menjadi Rp50.001 dan/atau tambahkan deskripsi “sumbangan pemuda
            yada” di deskripsi/catatan untuk membantu kami menghitung dana yang
            terkumpul secara akurat)
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
