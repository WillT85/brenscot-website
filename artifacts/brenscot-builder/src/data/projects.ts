import project1 from '@assets/image_1776005185036.png';
import project2 from '@assets/13_02_extt_сс3_Post_Ps_1776005476200.jpg';
import project3 from '@/assets/images/project-3.png';
import project1Video from '@assets/Moving_Photo_1780474811282.mp4';
import project3Video from '@assets/24_robertson_st_1780477602300.mp4';
import chermsideImg from '@assets/566_Rode_Rd5_1780487252712.png';
import rode1 from '@assets/566_Rode_Rd12_1780545649913.png';
import rode2 from '@assets/566_Rode_Rd13_1780545655150.png';
import rode3 from '@assets/566_Rode_Rdpng_1780545657814.png';
import rode4 from '@assets/566_Rode_Rd10_1780545665978.png';
import rode5 from '@assets/566_Rode_Rd8_1780545691992.png';
import rode6 from '@assets/566_Rode_Rd6_1780545705141.png';
import rode7 from '@assets/566_Rode_Rd7_1780545705142.png';
import rode8 from '@assets/566_Rode_Rd1_1780545705142.png';
import rode9 from '@assets/566_Rode_Rd2_1780545705144.png';
import rode10 from '@assets/566_Rode_Rd4_1780545705146.png';
import rode12 from '@assets/af8ba881-f530-417d-86f4-6748a88dc5de_1780545716183.png';
import rode13 from '@assets/566_Rode_Rd3_1780545723852.png';
import robertson0 from '@assets/robertson_n0_1780546300000.jpg';
import robertson1 from '@assets/robertson_n1_1780546300000.jpg';
import robertson2 from '@assets/robertson_n2_1780546300000.jpg';
import robertson3 from '@assets/robertson_n3_1780546300000.jpg';
import robertson4 from '@assets/robertson_n4_1780546300000.jpg';
import robertson5 from '@assets/robertson_n5_1780546300000.jpg';
import robertson6 from '@assets/robertson_n6_1780546300000.jpg';
import robertson8 from '@assets/robertson_n8_1780546300000.jpg';
import robertson9 from '@assets/robertson_n9_1780546300000.jpg';
import robertson10 from '@assets/robertson_n10_1780546300000.jpg';
import robertson11 from '@assets/robertson_n11_1780546300000.jpg';
import robertson12 from '@assets/robertson_n12_1780546300000.jpg';
import robertson13 from '@assets/robertson_n13_1780546300000.jpg';
import robertson14 from '@assets/robertson_n14_1780546300000.jpg';
import robson0 from '@assets/image6_1780546725723_trim.jpg';
import robson1 from '@assets/image3_1780546747690_trim.jpg';
import robson2 from '@assets/image13_1780546759834_trim.jpg';
import robson3 from '@assets/image19_1780546768572_trim.jpg';
import robson4 from '@assets/image21_1780546782994_trim.jpg';
import robson5 from '@assets/image23_1780546782994_trim.jpg';
import robson6 from '@assets/image4_1780546782996_trim.jpg';
import robson7 from '@assets/image5_1780546782997_trim.jpg';
import robson8 from '@assets/image7_1780546782997_trim.jpg';
import robson9 from '@assets/image9_1780546782998_trim.jpg';
import robson10 from '@assets/image10_1780546782998_trim.jpg';
import robson11 from '@assets/image12_1780546782999_trim.jpg';
import zillmereImg from '@assets/clontarf_zillmere_trimmed.png';
import northgateImg from '@assets/northgate_bellaire_trimmed.png';
import altaRoadImg from '@assets/alta_aerial_trimmed_1780601000000.png';
import wildily13Img from '@assets/wildily13_aerial_1780601200000.jpg';
import altaRoadVideo from '@assets/alta_hero_video_1780600100000.mp4';
import altaG0 from '@assets/alta_clean0_1780600000000.jpg';
import altaG1 from '@assets/alta_clean1_1780600000000.jpg';
import altaG2 from '@assets/alta_clean2_1780600000000.jpg';
import altaG3 from '@assets/alta_clean3_1780600000000.jpg';
import altaG4 from '@assets/alta_clean4_1780600000000.jpg';
import altaG5 from '@assets/alta_clean5_1780600000000.jpg';
import altaG6 from '@assets/alta_clean6_1780600000000.jpg';
import altaG7 from '@assets/alta_clean7_1780600000000.jpg';
import altaG8 from '@assets/alta_clean8_1780600000000.jpg';
import altaG9 from '@assets/alta_clean9_1780600000000.jpg';
import altaG10 from '@assets/alta_clean10_1780600000000.jpg';
import altaG11 from '@assets/alta_clean11_1780600000000.jpg';
import altaG12 from '@assets/alta_clean12_1780600000000.jpg';
import zillmereImg2 from '@assets/zillmere_aerial_trimmed.png';
import king15G2 from '@assets/king15_g2_1780601600000.jpg';
import king15G3 from '@assets/king15_g3_1780601600000.jpg';
import king15G4 from '@assets/king15_g4_1780601600000.jpg';
import king15N1 from '@assets/king15_n1_1780545200000.jpg';
import king15N2 from '@assets/king15_n2_1780545200000.jpg';
import king15N3 from '@assets/king15_n3_1780545200000.jpg';
import king15N4 from '@assets/king15_n4_1780545200000.jpg';
import king15N5 from '@assets/king15_n5_1780545200000.jpg';
import king15N6 from '@assets/king15_n6_1780545200000.jpg';
import king15N7 from '@assets/king15_n7_1780545200000.jpg';
import king15N8 from '@assets/king15_n8_1780545200000.jpg';
import king15N9 from '@assets/king15_n9_1780545200000.jpg';
import king15N10 from '@assets/king15_n10_1780545200000.jpg';
import king15N11 from '@assets/king15_n11_1780545200000.jpg';
import king15N12 from '@assets/king15_n12_1780545200000.jpg';
import king15N13 from '@assets/king15_n13_1780545200000.jpg';

export type ProjectStatus = "completed" | "ongoing";

export type KeyInfo = {
  landArea?: string;
  floorArea?: string;
  carSpaces?: string;
  availability?: string;
  units?: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  image?: string;
  imagePosition?: string; // CSS object-position for the card image (default centered)
  gallery?: string[];
  video?: string; // shared media: shown on cards (home + Projects) AND detail hero
  heroVideo?: string; // detail-page hero only; never shown on cards
  playbackRate?: number;
  description: string;
  status: ProjectStatus;
  keyInfo?: KeyInfo;
};

export const projects: Project[] = [
  {
    slug: "15-king-court-north-lakes",
    title: "15 King Court, North Lakes",
    location: "North Lakes, QLD",
    image: project1,
    video: project1Video,
    gallery: [king15G2, king15G3, king15G4, king15N1, king15N2, king15N3, king15N4, king15N5, king15N6, king15N7, king15N8, king15N9, king15N10, king15N11, king15N12, king15N13],
    description: "A premium industrial warehouse development delivering modern, high-clearance space designed for efficient logistics and distribution operations.",
    status: "completed",
  },
  {
    slug: "566-rode-rd-chermside",
    title: "566 Rode Rd, Chermside",
    location: "Chermside, QLD",
    image: chermsideImg,
    description: "A landmark commercial and industrial development in one of Brisbane's key growth corridors, combining functional warehousing with contemporary design.",
    status: "completed",
    gallery: [rode1, rode2, rode3, rode4, rode5, rode6, rode7, rode8, rode9, rode10, rode12, rode13],
  },
  {
    slug: "24-robertson-st-brendale",
    title: "24 Robertson St, Brendale",
    location: "Brendale, QLD",
    image: project3,
    video: project3Video,
    playbackRate: 0.25,
    description: "A purpose-built industrial facility located in the established Brendale industrial precinct, engineered for durability and operational flexibility.",
    status: "completed",
    gallery: [robertson11, robertson12, robertson13, robertson14, robertson0, robertson1, robertson2, robertson3, robertson4, robertson5, robertson6, robertson8, robertson9, robertson10],
  },
  {
    slug: "34-36-bell-are-ave-northgate",
    title: "34-36 Bell-Are Ave, Northgate",
    location: "Northgate, QLD",
    image: northgateImg,
    description: "A modern warehouse and commercial development offering well-connected, high-performance space close to major freight and transport routes.",
    status: "completed",
  },
  {
    slug: "34-40-robson-st-clontarf",
    title: "34-40 Robson St Clontarf",
    location: "Clontarf, QLD",
    image: zillmereImg,
    description: "A large-scale industrial development providing flexible warehouse units built to the highest standards of quality and functionality.",
    status: "completed",
    gallery: [robson0, robson1, robson2, robson3, robson4, robson5, robson6, robson7, robson8, robson9, robson10, robson11],
    keyInfo: {
      availability: "Open for Enquiry",
    },
  },
  {
    slug: "13-wildily-road-caboolture",
    title: "13 Wildily Road, Caboolture",
    location: "Caboolture, QLD",
    image: wildily13Img,
    description: "An industrial development within a thriving growth region, delivering robust, future-ready warehouse and distribution facilities.",
    status: "completed",
  },
  {
    slug: "59-alta-road-caboolture",
    title: "59 Alta Road, Caboolture",
    location: "Caboolture, QLD",
    image: altaRoadImg,
    heroVideo: altaRoadVideo,
    gallery: [altaG0, altaG1, altaG2, altaG4, altaG8, altaG11, altaG6, altaG7, altaG12, altaG10, altaG3, altaG9, altaG5],
    description: "A contemporary industrial estate offering versatile warehouse space designed to support a wide range of business operations.",
    status: "completed",
    keyInfo: {
      landArea: "0.63 ha (1.56 acres)",
      floorArea: "3100 m²",
      carSpaces: "33",
      availability: "SOLD",
      units: "1",
    },
  },
  {
    slug: "535-zillmere-zillmere",
    title: "535 Zillmere, Zillmere",
    location: "Zillmere, QLD",
    image: zillmereImg2,
    description: "An industrial logistics facility delivering high-performance warehouse space with excellent access to Brisbane's transport network.",
    status: "ongoing",
  },
];

export const extraProjects: Project[] = [
  {
    slug: "47-noble-ave-northgate",
    title: "47 Noble Ave, Northgate",
    location: "Northgate, QLD",
    description: "A modern industrial development delivering high-quality warehouse space within Brisbane's established Northgate industrial precinct.",
    status: "ongoing",
  },
  {
    slug: "lot-83-37-wildlily-road-caboolture",
    title: "Lot 83, 37 Wildlily Road, Caboolture",
    location: "Caboolture, QLD",
    description: "A purpose-built industrial facility within a master-planned estate, designed for flexible warehousing and distribution operations.",
    status: "ongoing",
  },
  {
    slug: "lot-80-25-wildlily-road-caboolture",
    title: "Lot 80, 25 Wildlily Road, Caboolture",
    location: "Caboolture, QLD",
    description: "A robust, future-ready warehouse development located in one of South-East Queensland's fastest-growing industrial regions.",
    status: "ongoing",
  },
  {
    slug: "lot-74-18-barr-road-caboolture",
    title: "Lot 74, 18 Barr Road, Caboolture",
    location: "Caboolture, QLD",
    description: "A versatile industrial development offering high-clearance warehouse space with excellent connectivity to major transport routes.",
    status: "ongoing",
  },
  {
    slug: "lot-82-33-wildlily-road-caboolture",
    title: "Lot 82, 33 Wildlily Road, Caboolture",
    location: "Caboolture, QLD",
    description: "A contemporary design & construct project delivering quality commercial and industrial warehouse facilities.",
    status: "ongoing",
  },
  {
    slug: "lot-84-mcnaught-road-caboolture",
    title: "Lot 84, Mcnaught Road, Caboolture",
    location: "Caboolture, QLD",
    description: "A premier industrial development providing modern, efficient warehouse units built to the highest standards.",
    status: "ongoing",
  },
];

export const allProjects: Project[] = [...projects, ...extraProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
