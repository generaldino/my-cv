import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Mufg from "../../public/mufg.svg";
import Ucl from "../../public/ucl.svg";
import Imperial from "../../public/imperial.svg";

export const RESUME_DATA = {
  name: "Danny Hakim",
  initials: "DH",
  location: "London, United Kingdom",
  locationLink: "https://maps.app.goo.gl/NvEcBSZjEi7fSWV47",
  about:
    "Full stack product leader, with track record of figuring out what to do & making it happen",
  summary:
    "Product Leader happy to roll up his sleeves and join in designing or writing code to get things done.Passionate about building and working with high-performing, cross-functional teams, to transform innovative ideas into market-ready products to test informed hypotheses and get a product that resonates with users. At my best wearing multiple hats, whether it's strategy, designing, coding, or collaborating with colleagues.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/60073397?s=400&u=d5db1cbd76876a2ead2cb75b2478a8d5698d8b7b&v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "dannyhakim25@gmail.com",
    tel: "+44 7826 555787",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danhakim/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/realDannyHakim",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Imperial College",
      degree: "Msc in Financial Engineering",
      logo: Imperial,
      start: "2015",
      end: "2016",
    },
    {
      school: "University College London & London School of Economics",
      degree: "BEng in Mechanical Engineering with Finance",
      logo: Ucl,
      start: "2011",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Mitsubishi UFJ Securities",
      link: "https://www.bk.mufg.jp/global/productsandservices/corpandinvest/index.html",
      badges: ["London, UK"],
      title: "Analyst, Capital Markets",
      logo: Mufg,
      start: "2014",
      end: "2015",
      description: [
        "Exposure to DCM & Equity Structured products",
        "Originate, structure and market equity derivative solutions to clients.",
        "Example products: Equity Financing, Hedging, Yield Enhancement, Stake building & Disposal solutions",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      // logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      // logo: CDGOLogo,
    },
  ],
} as const;
