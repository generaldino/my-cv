import Mufg from "../../public/mufg.svg";
import Ucl from "../../public/ucl.svg";
import Imperial from "../../public/imperial.svg";
import Jpm from "../../public/jpm.svg";
import Qnt from "../../public/qnt.svg";
import Lit from "../../public/lit.svg";
import Compose from "../../public/compose.svg";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { ResumeData } from "./resume-data.types";

export const RESUME_DATA: ResumeData = {
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
        icon: GrLinkedin,
      },
      {
        name: "X",
        url: "https://twitter.com/realDannyHakim",
        icon: GrTwitter,
      },
    ],
  },
  values: [
    "Continuous Growth & Learning",
    "Prioritise Impact",
    "Passion & Proactivity",
    "Transparency",
    "Clear & Concise Communication",
    "Accountability & Integrity",
  ],
  tool_categories: {
    devTools: {
      name: "Dev Tools",
      icon: "GrLinkedin",
    },
    designTools: {
      name: "Design Tools",
      icon: "GrLinkedin",
    },
  },
  tools: [
    {
      name: "GitHub",
      categoryId: "devTools",
      logo: Imperial,
      description: "Version control, CI/CD, code review, issue tracking",
      link: "https://twitter.com/realDannyHakim",
    },
    {
      name: "Figma",
      categoryId: "designTools",
      logo: Imperial,
      description: "Collaborative interface design tool",
      link: "https://twitter.com/realDannyHakim",
    },
    {
      name: "GitHub",
      categoryId: "devTools",
      logo: Imperial,
      description: "Version control, CI/CD, code review, issue tracking",
      link: "https://twitter.com/realDannyHakim",
    },
    {
      name: "GitHub",
      categoryId: "devTools",
      logo: Imperial,
      description: "Version control, CI/CD, code review, issue tracking",
      link: "https://twitter.com/realDannyHakim",
    },
    {
      name: "GitHub",
      categoryId: "devTools",
      logo: Imperial,
      description: "Version control, CI/CD, code review, issue tracking",
      link: "https://twitter.com/realDannyHakim",
    },
    {
      name: "GitHub",
      categoryId: "devTools",
      logo: Imperial,
      description: "Version control, CI/CD, code review, issue tracking",
      link: "https://twitter.com/realDannyHakim",
    },
  ],
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
      link: "https://www.linkedin.com/in/scott-warren-b5686938/",
      role: "Lead Front End Engineer @ Compose",
      description:
        "Danny is an extremely hard working and intellectually curious person. I worked with Danny closely over the time I worked at Compose, and he is without a doubt one of the most hard working and dedicated people I have ever worked with. \n No matter the challenge, Danny always picked up whatever skill he needed to get the job done, this ranged from learning how to program, how to design, what goes into good UX, or how to manage a team. It always impressed me how quickly he was able to pick up new skills and apply them to his work. \n Danny is also a natural leader. He was always there to listen, but also extremely helpful with his feedback. He is extremely pragmatic, and always has a good sense of what is the most important thing to work on. \n I have no reservations in both recommending Danny, but also in saying that I truly hope that I work with him again in the future. He is a great person to work with, and I am sure he will be a great asset to any team he joins.",
    },
    {
      name: "Bailey Matthews",
      link: "https://www.linkedin.com/in/baileyjm02/",
      role: "Full-Stack Software Engineer @ Compose",
      description:
        "During my time at Compose, I have had the privilege of working under the leadership of Danny. As the Chief Product Officer of our company, he has consistently demonstrated a deep understanding of both technical and product-related challenges. \n Danny possesses a unique blend of technical knowledge and strategic vision, which is indispensable in the process of building and refining our products. He has a knack for listening to and understanding the technical solutions proposed by the team, incorporating them seamlessly into our product development roadmap. \n What truly sets Danny apart is his ability to get things functional and then iterate upon them effectively. He understands the importance of delivering value to our customers quickly while maintaining a long-term vision for product success. His leadership has been instrumental in guiding our team towards building innovative and impactful products. \n I highly recommend Danny for any leadership role in product management or technical strategy. His combination of technical expertise, strategic thinking, and collaborative leadership style make him an invaluable asset to any organisation.",
    },
    {
      name: "Edward Anders",
      link: "https://www.linkedin.com/in/edward-anders/",
      role: "Founders Associate @ Compose",
      description:
        "Danny was one of my managers for almost three years, and the first manager I had in my career. \n Danny led product development, management and strategy at Compose and I was so impressed with how much he learnt, and then passed onto the team. He instilled a brilliant culture of learning and development, taking the approach that anyone can get involved with what they were enthusiastic in. \n Danny would always make the time to help explain what was happening from a product perspective and was always transparent about what his team were doing. \n I couldn't have wished for a better mentor in Danny. He helped me learn so much about product and engineering but is more just an all-round lovely person to work with!",
    },
    {
      name: "Zoe Geidelberg",
      link: "https://www.linkedin.com/in/zoegeidelberg/",
      role: "Product Designer @ Compose",
      description:
        'Danny is a passionate, jack-of-all-trades type of Chief of Product - if he does not have an answer for you in the moment, he will come back to you the next day with the solution. \n He owns both technical and design perspectives, being able to translate technical problems into something easy to understand, making him the "Go to" guy of the team. With this in mind, he can help the developers with code, as well as jump on the designs with me when needed. \n He has a strong vision of product and think he would be an asset to any team. On a personal level, Danny is someone that you can trust, lean on for advice and also has a lot of empathy as a manager - I would love the chance to work with him again!',
    },
    {
      name: "Emily Taylor",
      link: "https://www.linkedin.com/in/emilyflorencetaylor/",
      role: "Product Engineer @ Compose",
      description:
        "I had the privilege of working under Danny, our Chief Product Officer at Compose, as a Product Engineer. \n Danny's ability to seamlessly navigate roles in design, coding, and product management was not only inspiring but also instrumental in elevating our product development processes. His versatility set a benchmark for flexibility and adaptability within our team. \n His commitment to my professional growth has been a significant catalyst in my career. Danny's mentorship, coupled with the opportunities he provided for learning and tackling more complex projects, enabled me to enhance my technical skills substantially. \n Moreover, Danny's empathetic approach to leadership was pivotal in fostering a culture of clear communication and support. He created an environment where every team member felt valued and confident in their contributions. I am deeply grateful for his guidance and support.",
    },
    {
      name: "Vlad Hadarean",
      link: "https://www.linkedin.com/in/vlad-hadarean-691065115/",
      role: "Full-Stack Software Engineer @ Compose",
      description:
        "Working for Danny has been a privilege. His knack for asking the right questions guarantees a deep understanding of any tasks, highlighting his exceptional problem-solving skills. Danny excels at identifying and addressing process inefficiencies, challenging outdated procedures to foster improvement. His readiness to find middle ground ensures maximum value is always provided, no matter the limitations. Danny's combination of approachability, effective communication, and leadership not only sets him apart but also marks him as an exemplary leader and top tier manager.",
    },
    {
      name: "Karim Nahas",
      link: "https://www.linkedin.com/in/karimnahas/",
      role: "Co-founder & CTO at AI Gen",
      description:
        "Danny was one of my co-founders at Compose. We were partners and friends throughout a crazy five-year startup journey. Right from the start, Danny's unwavering dedication and hard work were crystal clear. He was always stepping out of his comfort zone, pushing himself to grow and expand his skills and knowledge. As he took on the role of Chief Product Officer, he immersed himself in everything from product design and customer success to coding. In the span of only a couple of years, he became one of the most knowledgeable people I know on product research and development. \n But what really makes Danny stand out is his heart. He has innate ability to make every team member feel valued and supported. Danny's genuine care and positive attitude were foundational pillars for our team, fostering an environment perfect for collaboration and growth. \n Moreover, Danny's leadership style is deeply rooted in team spirit. He has an exceptional talent for listening and elevating those around him, facing challenges with a collective strength. His resilience and optimistic 'can-do' attitude were key to our accomplishments. With Danny, it was never a question of whether we could do something, but rather how we would do it. \n To put it simply, Danny is a talented hard-working individual with a broad skill set and a deep capacity for empathy and inspiration. It was awesome to work with him. I am convinced that he will continue to achieve amazing things and make a positive difference wherever he goes.",
    },
  ],
};
