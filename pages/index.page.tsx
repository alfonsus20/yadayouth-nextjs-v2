import Head from 'next/head';
import HomeBg from '../public/bg/home.jpg';
import Image from 'next/image';
import ServiceBg from '../public/bg/service.jpg';
import { fetchIGPosts } from '../models/igPost';
import { IGPost } from '../types/entities/igPost';
import { ImpactCard, ServiceCard } from '../components/Card';
import { IMPACTS, SERVICES } from '../utils/constants';
import { InstagramCarousel } from '../components/Carousel';
import type { GetStaticProps, NextPage } from 'next';

type Props = {
  data: IGPost[];
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Yada Youth</title>
      </Head>
      <section
        style={{ minHeight: 'calc(100vh - 80px)' }}
        className="relative flex items-center"
      >
        <div className="max-w-screen-2xl px-8 xs:px-16 min-h-[400px] flex items-center">
          <div className="max-w-xl relative z-10 pt-8 pb-20">
            <h1 className="text-3xl xxs:text-4xl sm:text-5xl font-semibold">
              PEMBERDAYAAN ANAK UNTUK MASA DEPAN
            </h1>
            <div className="bg-blue h-1 w-full my-4"></div>
            <p className="text-md xs:text-lg">
              Kami memberikan pelayanan kepada masyarakat dimana semua
              keuntungan akan diberikan kepada anak-anak Indonesia
            </p>
          </div>
        </div>
        <Image
          layout="fill"
          src={HomeBg}
          alt="home"
          objectFit="cover"
          placeholder="blur"
        />
      </section>
      <section className="max-w-[1200px] mx-auto px-8 xs:px-16 py-16">
        <h2 className="font-bold text-3xl xs:text-4xl text-center mb-10 md:mb-32 px-8">
          Dampak Kami
        </h2>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {IMPACTS.map((impact, idx) => (
            <ImpactCard {...impact} key={idx} />
          ))}
        </div>
      </section>
      <section className="relative">
        <Image
          layout="fill"
          src={ServiceBg}
          alt="service"
          objectFit="cover"
          placeholder="blur"
          objectPosition="bottom"
        />
        <div className="px-8 xs:px-16 pt-24 pb-52 max-w-screen-2xl mx-auto relative z-10">
          <h2 className="font-bold text-3xl xs:text-4xl text-center mb-28 text-white px-8">
            Layanan Kami
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-20 justify-around">
            {SERVICES.map((service, idx) => (
              <ServiceCard {...service} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto px-8 xs:px-16 py-16 rounded-t-[4.5rem] bg-white relative bottom-20">
        <h2 className="font-bold text-3xl xs:text-4xl text-center mb-8 px-8">
          Recent Post
        </h2>
        <InstagramCarousel data={data} />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await fetchIGPosts();
  return { props: { data: data.results }, revalidate: 60 * 60 * 24 };
};

export default Home;
