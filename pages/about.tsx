import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { AboutCard } from "../components/Card";
import AboutBg from "../public/bg/about.jpg";
import HanifImg from "../public/founder/hanif.png";
import StephaniImg from "../public/founder/stephani.png";
import Logo from "../public/logo.png";

import { VISION_MISSION } from "../utils/constants";

const About = () => {
  return (
    <div>
      <section
        style={{ minHeight: "calc(100vh - 80px)" }}
        className="relative flex justify-center items-center"
      >
        <div className="max-w-screen-lg px-16 text-center text-white">
          <div className="relative z-10 pb-8">
            <h1 className="text-5xl font-bold">TENTANG KAMI</h1>
            <div className="bg-blue h-2 w-1/3 my-4 mx-auto rounded-md"></div>
            <p className="text-lg mb-4">
              Yada Youth adalah organisasi nirlaba yang bertujuan untuk fokus
              pada pemberdayaan anak-anak dan remaja Indonesia yang hidup dalam
              kemiskinan melalui upaya kolektif untuk meminimalkan faktor
              sistemik yang menyebabkan kemiskinan.
            </p>
            <Link href="#selengkapnya" passHref>
              <Button size="lg" shape="pill">
                SELENGKAPNYA
              </Button>
            </Link>
          </div>
        </div>
        <Image
          layout="fill"
          src={AboutBg}
          alt="home"
          objectFit="cover"
          placeholder="blur"
          objectPosition="top"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-neutral-900 opacity-50"></div>
      </section>
      <section className="max-w-screen-xl mx-auto p-16 grid sm:grid-cols-2 gap-10">
        {VISION_MISSION.map((item, idx) => (
          <AboutCard key={idx} {...item} />
        ))}
      </section>
      <section className="bg-gradient-to-b from-[#E5AB1A] rounded-t-[80px]">
        <div className="max-w-screen-lg mx-auto p-16">
          <h3 className="text-white text-4xl font-bold text-center mb-28">
            Behind Yada Youth
          </h3>
          <div className="relative">
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-20 h-[75%] hidden lg:flex flex-col justify-between items-center">
              <div className="bg-orange h-12 w-12 rounded-full"></div>
              <div className="bg-orange h-12 w-12 rounded-full mb-16"></div>
              <div className="bg-orange h-12 w-12 rounded-full"></div>
              <div className="w-4 absolute bg-orange left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 h-[98%]"/>
            </div>
            <div className="bg-[#686DEC] text-white p-8 rounded-2xl relative max-w-2xl mx-auto mb-20">
              <div className="rounded-full border-4 border-white w-48 h-48 overflow-hidden absolute -top-20 -left-12">
                <Image src={HanifImg} alt="hanif" width={250} height={250} />
              </div>
              <h2 className="font-bold text-4xl mt-6 mb-8 ml-32">Hanif</h2>
              <p>
                Hanif adalah pendiri dan direktur Yada Youth Indonesia. Melalui
                kehidupan kampusnya, dia memiliki latar belakang akademis yang
                kuat dan sering terlibat dalam kegiatan ekstrakurikuler. Yang
                membuatnya mendapat predikat Mahasiswa Berprestasi Ketiga di
                universitasnya, Institut Teknologi Sepuluh Nopember (ITS).
                Selain itu, ia juga sangat bersemangat dalam berwirausaha, yang
                membawanya untuk ikut mendirikan PT. Grup Milenial Global. Hanif
                memiliki komitmen jangka panjang untuk mengatasi kemiskinan,
                melihat sebagian besar karya ilmiah dan inovasinya berfokus pada
                penyelesaian masalah keuangan, ekonomi, dan sosial di pedesaan.
                Kini, didorong oleh mimpi masa kecilnya, ia bertekad untuk
                memberdayakan anak-anak miskin di seluruh Indonesia melalui Yada
                Youth Indonesia.
              </p>
            </div>
            <div className="bg-[#686DEC] text-white p-8 rounded-2xl relative max-w-2xl mx-auto flex flex-col md:flex-row gap-8 mb-28">
              <div className="rounded-full overflow-hidden w-full md:w-56 md:h-56 md:flex-shrink-0 flex justify-center">
                <Image src={Logo} alt="logo" width={250} height={250} />
              </div>
              <div>
                <h2 className="font-bold text-4xl mb-4">YadaYouth.id</h2>
                <p>
                  19 Februari 2021 YadaYouth.id di bangun oleh dua anak muda
                  yaitu Hanif dan Stephani.
                </p>
              </div>
            </div>
            <div className="bg-[#686DEC] text-white p-8 rounded-2xl relative max-w-2xl mx-auto">
              <div className="rounded-full border-4 border-white w-48 h-48 overflow-hidden absolute -top-20 -left-12">
                <Image
                  src={StephaniImg}
                  alt="stephani"
                  width={250}
                  height={250}
                />
              </div>
              <h2 className="font-bold text-4xl mt-6 mb-8 ml-32">Stephani</h2>
              <p>
                Stephani adalah wakil direktur Yada Youth Indonesia yang saat
                ini menjadi mahasiswa di Universitas Gadjah Mada. Sepanjang
                sekolah menengah, ia dikenal sebagai siswa aktif dengan prestasi
                akademik yang baik, lulus dengan IPK 3,8 dari 4,0. Dia sangat
                tergila-gila dengan konektivitas manusia dalam organisasi
                sosial. Upaya Stephani dalam advokasi untuk Anak dimulai pada
                tahun 2019 ketika ia menjabat sebagai penggalangan dana di
                UNICEF Indonesia untuk kampanye penyediaan sanitasi dan
                pendidikan untuk Anak Papua. Ia kemudian melanjutkan perannya
                sebagai relawan pembangunan di Panti Asuhan Karunia, sebuah
                panti asuhan yang dibangun khusus untuk Yatim Papua di Surabaya.
                Stephani berjuang untuk keyakinan bahwa anak-anak tanpa
                memandang latar belakang harus diberikan kesempatan yang sama
                seperti mereka yang lahir dalam situasi yang lebih istimewa dan
                saat ini berjuang untuk tujuan melalui Yada Youth Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#686DEC] rounded-t-[80px]">
        <div className="max-w-screen-xl mx-auto p-16">
          <h3 className="text-white text-4xl font-bold text-center mb-8">
            Program yang Pernah Dilakukan
          </h3>
        </div>
      </section>
    </div>
  );
};

export default About;
