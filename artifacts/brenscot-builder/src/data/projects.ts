import project1 from '@assets/image_1776005185036.png';
import project2 from '@assets/13_02_extt_сс3_Post_Ps_1776005476200.jpg';
import project3 from '@/assets/images/project-3.png';
import project1Video from '@assets/Moving_Photo_1780474811282.mp4';
import project3Video from '@assets/24_robertson_st_1780477602300.mp4';
import chermsideImg from '@assets/566_Rode_Rd5_1780487252712.png';
import zillmereImg from '@assets/clontarf_zillmere_trimmed.png';
import northgateImg from '@assets/northgate_bellaire_trimmed.png';
import altaRoadImg from '@assets/Screenshot_2026-06-04_070043_1780527659288.png';
import zillmereImg2 from '@assets/zillmere_aerial_trimmed.png';

export type Project = {
  slug: string;
  title: string;
  location: string;
  image: string;
  video?: string;
  playbackRate?: number;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "15-king-court-north-lakes",
    title: "15 King Court, North Lakes",
    location: "North Lakes, QLD",
    image: project1,
    video: project1Video,
    description: "A premium industrial warehouse development delivering modern, high-clearance space designed for efficient logistics and distribution operations.",
  },
  {
    slug: "566-rode-rd-chermside",
    title: "566 Rode Rd, Chermside",
    location: "Chermside, QLD",
    image: chermsideImg,
    description: "A landmark commercial and industrial development in one of Brisbane's key growth corridors, combining functional warehousing with contemporary design.",
  },
  {
    slug: "24-robertson-st-brendale",
    title: "24 Robertson St, Brendale",
    location: "Brendale, QLD",
    image: project3,
    video: project3Video,
    playbackRate: 0.25,
    description: "A purpose-built industrial facility located in the established Brendale industrial precinct, engineered for durability and operational flexibility.",
  },
  {
    slug: "34-36-bell-are-ave-northgate",
    title: "34-36 Bell-Are Ave, Northgate",
    location: "Northgate, QLD",
    image: northgateImg,
    description: "A modern warehouse and commercial development offering well-connected, high-performance space close to major freight and transport routes.",
  },
  {
    slug: "34-40-robson-st-clontarf",
    title: "34-40 Robson St Clontarf",
    location: "Clontarf, QLD",
    image: zillmereImg,
    description: "A large-scale industrial development providing flexible warehouse units built to the highest standards of quality and functionality.",
  },
  {
    slug: "13-wildily-road-caboolture",
    title: "13 Wildily Road, Caboolture",
    location: "Caboolture, QLD",
    image: project2,
    description: "An industrial development within a thriving growth region, delivering robust, future-ready warehouse and distribution facilities.",
  },
  {
    slug: "59-alta-road-caboolture",
    title: "59 Alta Road, Caboolture",
    location: "Caboolture, QLD",
    image: altaRoadImg,
    description: "A contemporary industrial estate offering versatile warehouse space designed to support a wide range of business operations.",
  },
  {
    slug: "535-zillmere-zillmere",
    title: "535 Zillmere, Zillmere",
    location: "Zillmere, QLD",
    image: zillmereImg2,
    description: "An industrial logistics facility delivering high-performance warehouse space with excellent access to Brisbane's transport network.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
