import Impact1Img from "../public/impact/1.svg";
import Impact2Img from "../public/impact/2.svg";
import Impact3Img from "../public/impact/3.svg";
import Impact4Img from "../public/impact/4.svg";

import Service1Img from "../public/service/1.svg";
import Service2Img from "../public/service/2.svg";
import Service3Img from "../public/service/3.svg";

import MissionImg from "../public/about/mission.jpg";
import VisionImg from "../public/about/vision.jpg";

export const BASE_URL = "https://api.yada-youth.id/api";

export const LINK_PATHS = [
  { href: "/", name: "Beranda" },
  { href: "/about", name: "Tentang Kami" },
  { href: "/articles", name: "Artikel" },
  { href: "/donate", name: "Donasi" },
  { href: "#contact", name: "Kontak Kami" },
];

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
    buttonHref: "/donate",
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

export const VISION_MISSION = [
  {
    image: VisionImg,
    title: "VISI KAMI",
    description:
      "Membangun masyarakat yang cocok untuk masa depan umat manusia, di mana anak-anak, remaja, dan pemuda diberi makan dengan baik, berpendidikan baik, sehat, setara, dilindungi, dan dirawat.",
  },
  {
    image: MissionImg,
    title: "MISI KAMI",
    description:
      "Terus meningkatkan standar hidup anak-anak, remaja, dan remaja untuk membantu mereka hidup lebih bahagia, memberdayakan mereka untuk mencapai lebih banyak, dan berkontribusi lebih banyak kepada masyarakat",
  },
];

export const DONATION_AIMS = [
  {
    color: "orange",
    description:
      "Bantu Salurkan suplai makanan bernutrisi kepada anak-anak dengan gizi buruk untuk mendukung pemulihan mereka",
  },
  {
    color: "blue",
    description:
      "Membantu keluarga yang hidup dalam kemiskinan dalam bentuk tunjangan untuk mendukung dan meningkatkan taraf hidup mereka",
  },
  {
    color: "yellow",
    description:
      "Memberikan akses layanan pendidikan bagi keluarga terkait stunting anak untuk meminimalkan pertumbuhan stunting di Indonesia",
  },
  {
    color: "green",
    description:
      "Mendukung pembangunan infrastruktur sanitasi dan pendidikan yang layak di pedesaan dan pedesaan",
  },
];
