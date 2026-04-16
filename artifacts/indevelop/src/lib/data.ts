import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";
import project4 from "@/assets/images/project-4.png";
import project5 from "@/assets/images/project-5.png";
import project6 from "@/assets/images/project-6.png";
import project7 from "@/assets/images/project-7.png";
import project8 from "@/assets/images/project-8.png";

import team1 from "@/assets/images/team-1.png";
import team2 from "@/assets/images/team-2.png";
import team3 from "@/assets/images/team-3.png";
import team4 from "@/assets/images/team-4.png";
import team5 from "@/assets/images/team-5.png";
import team6 from "@/assets/images/team-6.png";

export const projects = [
  {
    id: "1",
    title: "The Aurora Tower",
    category: "Residential",
    location: "Brisbane CBD",
    value: "$450M",
    status: "Under Construction",
    description: "A soaring 70-story residential tower offering panoramic views of the Brisbane River and beyond. The Aurora redefines luxury city living.",
    image: project1,
    gallery: [project1, project5, project2],
    completion: "2026"
  },
  {
    id: "2",
    title: "Eagle Street Pier Revitalization",
    category: "Commercial",
    location: "Brisbane CBD",
    value: "$800M",
    status: "DA Approved",
    description: "A premier commercial precinct bringing together world-class dining, premium office space, and expansive public realm on the river's edge.",
    image: project2,
    gallery: [project2, project6, project3],
    completion: "2028"
  },
  {
    id: "3",
    title: "Queens Plaza Retail",
    category: "Retail",
    location: "Queen Street Mall",
    value: "$120M",
    status: "Completed",
    description: "A high-end retail destination featuring international luxury brands and bespoke boutique offerings in the heart of Brisbane.",
    image: project3,
    gallery: [project3, project7, project2],
    completion: "2022"
  },
  {
    id: "4",
    title: "TradeCoast Logistics Hub",
    category: "Industrial",
    location: "Port of Brisbane",
    value: "$85M",
    status: "Completed",
    description: "State-of-the-art logistics and distribution facility strategically located at the Port of Brisbane for optimal supply chain efficiency.",
    image: project4,
    gallery: [project4, project8, project6],
    completion: "2023"
  },
  {
    id: "5",
    title: "Lumina Residences",
    category: "Residential",
    location: "South Brisbane",
    value: "$150M",
    status: "Completed",
    description: "Boutique luxury apartments offering the perfect blend of architectural elegance and vibrant cultural precinct living.",
    image: project5,
    gallery: [project5, project1, project3],
    completion: "2021"
  },
  {
    id: "6",
    title: "Vertex Corporate Centre",
    category: "Commercial",
    location: "Fortitude Valley",
    value: "$210M",
    status: "Under Construction",
    description: "A sustainable, A-grade office tower designed for the modern workforce, featuring extensive end-of-trip facilities and green spaces.",
    image: project6,
    gallery: [project6, project2, project4],
    completion: "2025"
  },
  {
    id: "7",
    title: "The Laneway",
    category: "Retail",
    location: "West End",
    value: "$45M",
    status: "Completed",
    description: "An activated retail and dining laneway seamlessly integrated into the heritage fabric of West End.",
    image: project7,
    gallery: [project7, project3, project5],
    completion: "2020"
  },
  {
    id: "8",
    title: "Acacia Ridge Industrial Estate",
    category: "Industrial",
    location: "Acacia Ridge",
    value: "$60M",
    status: "Completed",
    description: "Premium industrial warehouses designed for flexible operations and heavy vehicle access.",
    image: project8,
    gallery: [project8, project4, project1],
    completion: "2019"
  }
];

export const team = [
  {
    id: "1",
    name: "Alistair Montgomery",
    title: "Chief Executive Officer",
    image: team1
  },
  {
    id: "2",
    name: "Eleanor Vance",
    title: "Chief Financial Officer",
    image: team2
  },
  {
    id: "3",
    name: "Julian Reed",
    title: "Director of Development",
    image: team3
  },
  {
    id: "4",
    name: "Marcus Chen",
    title: "Head of Commercial",
    image: team4
  },
  {
    id: "5",
    name: "Sarah Jenkins",
    title: "Head of Residential",
    image: team5
  },
  {
    id: "6",
    name: "David O'Connor",
    title: "General Counsel",
    image: team6
  }
];

export const news = [
  {
    id: "1",
    title: "Indevelop Secures Final Approval for $800M Eagle Street Precinct",
    date: "October 12, 2023",
    excerpt: "The cornerstone of our commercial portfolio has received the green light, paving the way for a transformative addition to Brisbane's riverfront.",
    image: project2
  },
  {
    id: "2",
    title: "Sustainability in Focus: Achieving 6-Star Green Star Ratings",
    date: "September 28, 2023",
    excerpt: "Our commitment to sustainable development continues with Vertex Corporate Centre achieving the highest environmental certification.",
    image: project6
  },
  {
    id: "3",
    title: "The Future of Luxury Residential in South East Queensland",
    date: "August 15, 2023",
    excerpt: "An insight into the shifting demands of premium residential buyers and how Indevelop is meeting the call for integrated lifestyle spaces.",
    image: project1
  }
];