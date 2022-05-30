import Impact1Img from "../public/impact/1.png";
import Impact2Img from "../public/impact/2.png";
import Impact3Img from "../public/impact/3.png";
import Impact4Img from "../public/impact/4.png";

import Service1Img from "../public/service/1.png";
import Service2Img from "../public/service/2.png";
import Service3Img from "../public/service/3.png";

export const BASE_URL = "https://api.yada-youth.id/api";

export const IMPACTS = [
  {
    image: Impact1Img,
    color: "orange",
    title: "144 anak",
    description: "Jumlah anak yang terbantu",
  },
  {
    image: Impact2Img,
    color: "yellow",
    title: "2 tempat",
    description: "Jumlah panti asuhan",
  },
  {
    image: Impact3Img,
    color: "blue",
    title: "21 Program",
    description: "Jumlah program yang sudah di jalankan",
  },
  {
    image: Impact4Img,
    color: "green",
    title: "4859 hadirin",
    description: "Jumlah hadirin berbagai program",
  },
];

export const SERVICES = [
  {
    title: "Donasi",
    description:
      "Kami terbuka untuk donasi dengan semua keuntungan akan diberikan kepada anak-anak di Indonesia",
    buttonText: "Donasi",
    buttonHref: "/donasi",
    image: Service1Img,
    color: "red",
  },
  {
    title: "Pelayanan komunitas",
    description:
      "Kami melakukan kerja sukarela untuk mendidik, mendistribusikan makanan, dan memberdayakan anak-anak",
    buttonText: "Pelayanan komunitas",
    buttonHref: "/",
    image: Service2Img,
    color: "yellow",
  },
  {
    title: "Webinar",
    description:
      "Kami menyediakan webinar pengembangan diri untuk membantu mendanai layanan masyarakat",
    buttonText: "Ikut Webinar",
    buttonHref: "/",
    image: Service3Img,
    color: "blue",
  },
];
