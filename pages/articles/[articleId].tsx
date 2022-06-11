import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

const ArticleDetail = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-8">
      <div className="mb-4">
        <h2 className="text-gray-600 font-bold text-3xl">Yada Youth 2.0</h2>
        <p className="text-orange-500">Februari 4, 2022</p>
      </div>
      <div className="flex justify-center mb-4">
        <Image src="/bg/about.jpg" alt="gambar" width={850} height={450} />
      </div>
      <div className="space-y-2">
        {[...Array(7).keys()].map((_,idx) => (
          <p key={idx}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            dolores ab adipisci, esse vitae provident pariatur eius tenetur
            iusto beatae obcaecati consectetur repudiandae temporibus officia.
            Consequatur ut repellendus quibusdam recusandae? Aut non repellat
            perspiciatis neque cum iure et earum voluptate minus velit. Sunt
            fugit nisi possimus cum sequi dolor ullam itaque, eaque qui quia,
            soluta omnis sapiente. Minima, harum quibusdam? Vitae, magnam
            perspiciatis rem cupiditate non veniam reiciendis doloribus
            doloremque assumenda
          </p>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const { mahasiswaId } = ctx.params!;

  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [{ params: { mahasiswaId: "1" } }], fallback: "blocking" };
};

export default ArticleDetail;
