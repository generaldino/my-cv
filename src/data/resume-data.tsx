import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import Mufg from "../../public/mufg.svg";
import Ucl from "../../public/ucl.svg";
import Imperial from "../../public/imperial.svg";
import Jpm from "../../public/jpm.svg";
import Qnt from "../../public/qnt.svg";
import Lit from "../../public/lit.svg";
import Compose from "../../public/compose.svg";

export const RESUME_DATA = {
  name: "Danny Hakim",
  initials: "DH",
  location: "London, United Kingdom",
  locationLink: "https://maps.app.goo.gl/NvEcBSZjEi7fSWV47",
  about:
    "Full stack product leader, with track record of figuring out what to do & making it happen",
  summary:
    "Product Leader happy to roll up his sleeves and join in designing or writing code to get things done. Passionate about building and working with high-performing, cross-functional teams, to transform innovative ideas into market-ready products to test informed hypotheses and get a product that resonates with users. At my best wearing multiple hats, whether it's strategy, designing, coding, or collaborating with colleagues.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/60073397?s=400&u=d5db1cbd76876a2ead2cb75b2478a8d5698d8b7b&v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "dannyhakim25@gmail.com",
    tel: "+44 7826 555787",
    social: [
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
      start: "Sep 2015",
      end: "Jun 2016",
    },
    {
      school: "University College London & London School of Economics",
      degree: "BEng in Mechanical Engineering with Finance",
      logo: Ucl,
      start: "Sep 2011",
      end: "Jun 2014",
    },
  ],
  work: [
    {
      company: "Compose",
      link: "https://compose.im/",
      badges: ["London, UK"],
      title: "Co-founder, Product & Engineering",
      logo: Compose,
      start: "Dec 2020",
      end: "Present",
      description: [
        "Ensured team understood customers problems and empowered to deliver innovative solutions",
        "Managed day to day of the Product, Design and Engineering team (12+ individuals) ",
        "Worked with Design & Engineering team to flesh out solutions and review work and jam with the team to overcome any blockers encountered",
        "Frequently joined in designing or writing code to get things done with my team",
        "Fostered a culture of trust & accountability across the team. Instilled a “Yes, and…” mindset to set ego aside and productively achieve winning solutions",
      ],
    },
    {
      company: "Quanterium",
      link: "https://www.linkedin.com/company/quanterium-tech/",
      badges: ["London, UK"],
      title: "Co-founder",
      logo: Qnt,
      start: "Oct 2018",
      end: "Dec 2020",
      description: [
        "Identified key problems faced by customers and define strategy to solve them through our product",
        "Led sales effort marketing the product to prospect clients with 15 financial institutions onboarded",
        "Partnered with Technical Co-founder to build trading platform",
        "Worked with external lawyers to define & build Compliance & KYC process to onboard customers",
      ],
    },
    {
      company: "Levant in Tech",
      link: "https://www.linkedin.com/company/levant-in-tech/",
      badges: ["London, UK"],
      title: "Co-founder",
      logo: Lit,
      start: "Nov 2017",
      end: "Present",
      description: [
        "Organise & host quarterly in person networking events for our community members",
        "Talented community members from every part of tech venture capital, big tech & startups",
      ],
    },
    {
      company: "JP Morgan",
      link: "https://www.jpmorgan.com/global",
      badges: ["London, UK"],
      title: "Analyst, Hedge Fund Sales",
      logo: Jpm,
      start: "Jun 2016",
      end: " Oct 2018",
      description: [
        "Covered key Hedge Fund clients for JP Morgan based in the UK, France and US",
        "Marketed trade execution, financing & settlement services to prospect clients",
        "Responsible for growing new business opportunities with existing customers",
        "Identified cross-sell opportunities, mostly derivatives & structured products",
        "Organised networking events for key clients in London and Paris",
      ],
    },
    {
      company: "Mitsubishi UFJ Securities",
      link: "https://www.bk.mufg.jp/global/productsandservices/corpandinvest/index.html",
      badges: ["London, UK"],
      title: "Analyst, Capital Markets",
      logo: Mufg,
      start: "Jun 2014",
      end: "Jul 2015",
      description: [
        "Exposure to DCM & Equity Structured products",
        "Originate, structure and market equity derivative solutions to clients",
        "Example products: Equity Financing, Hedging, Yield Enhancement",
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
      title: "Co-founder",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: Lit,
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
