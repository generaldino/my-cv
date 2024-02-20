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
    "Ambitious product leader with 7+ years of experience. Happy to roll up his sleeves and join in designing or writing code to get things done. Passionate about building & working with high-performing, cross-functional teams. Happiest at the intersection of strategy, design, code, & team collaboration. When not at work you can find me digging in to a good book, in the gym or out for a run.",
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
      about:
        "Seed startup, raised $3m to increase revenue for Sales Reps selling on WhatsApp and iMessage",
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
      about:
        "Pre-seed startup, raised $500k to build Crypto trading solutions for institutional customers",
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
      about:
        "Non-profit community in London fostering connections between the Levantine diaspora working tech",
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
      about: "Top US Global Investment Bank",
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
      about: "Leading Japanese Investment Bank",
      description: [
        "Exposure to DCM & Equity Structured products",
        "Originate, structure and market equity derivative solutions to clients",
        "Example products: Equity Financing, Hedging, Yield Enhancement",
      ],
    },
  ],
  skills: [
    "Product Strategy",
    "Team Leadership",
    "People Management",
    "Product Design",
    "Project Management",
    "Product Development",
    "Copy / Marketing",
    "DevOps",
    "Design System",
    "UX / UI / User Research",
  ],
  references: [
    {
      name: "Scott Warren",
      role: "Lead Front End Engineer @ Compose",
      description:
        "Danny is an extremely hard working and intellectually curious person. I worked with Danny closely over the time I worked at Compose, and he is without a doubt one of the most hard working and dedicated people I have ever worked with. \n No matter the challenge, Danny always picked up whatever skill he needed to get the job done, this ranged from learning how to program, how to design, what goes into good UX, or how to manage a team. It always impressed me how quickly he was able to pick up new skills and apply them to his work. \n Danny is also a natural leader. He was always there to listen, but also extremely helpful with his feedback. He is extremely pragmatic, and always has a good sense of what is the most important thing to work on. \n I have no reservations in both recommending Danny, but also in saying that I truly hope that I work with him again in the future. He is a great person to work with, and I am sure he will be a great asset to any team he joins.",
    },
    {
      name: "Scott Warren",
      role: "Lead Front End Engineer",
      description: "A platform to build and grow your online business",
    },
    {
      name: "Scott Warren",
      role: "Lead Front End Engineer",
      description: "A platform to build and grow your online business",
    },
    {
      name: "Scott Warren",
      role: "Lead Front End Engineer @ Compose",
      description: "A platform to build and grow your online business",
    },
  ],
} as const;
