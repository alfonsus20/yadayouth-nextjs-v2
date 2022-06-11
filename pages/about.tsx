import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { AboutCard } from "../components/Card";
import AboutBg from "../public/bg/about.jpg";
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
      <section className="max-w-screen-xl mx-auto p-16 grid grid-cols-2 gap-x-10">
        {VISION_MISSION.map((item, idx) => (
          <AboutCard key={idx} {...item} />
        ))}
      </section>
      <section className="h-[500px] bg-gradient-to-b from-[#E5AB1A] rounded-t-[80px]">
        <div className="max-w-screen-xl mx-auto p-16">
          <h3 className="text-white text-4xl font-bold text-center">
            Perjalanan Yada Youth
          </h3>
        </div>
      </section>
      <section className="h-[500px] bg-gradient-to-b from-[#686DEC] rounded-t-[80px]">
        <div className="max-w-screen-xl mx-auto p-16">
          <h3 className="text-white text-4xl font-bold text-center">
            Program yang Pernah Dilakukan
          </h3>
        </div>
      </section>
    </div>
  );
};

export default About;
