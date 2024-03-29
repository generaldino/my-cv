import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { LuGlobe } from "react-icons/lu";
import { RESUME_DATA } from "@/data/resume-data";
import { ReferenceCard } from "@/components/reference-card";
import Image from "next/image";
import { groupToolsByCategory } from "./page.utils";
import { ToolCard } from "@/components/tool-card";
import { CategoryIcon } from "@/components/ui/icon";
import { SocialsContainer } from "@/components/socials-container";
import Navbar from "@/components/navbar";
import TableOfContents from "@/components/table-contents";
import { CommandTrigger } from "@/components/command-trigger";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    url: "https://www.dannyhakim.me",
    images: [
      { url: "https://www.dannyhakim.me/api/og", width: 1200, height: 600 },
    ],
  },
};

export default function Page() {
  const groupedTools = groupToolsByCategory(RESUME_DATA.tools);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-16">
      <Navbar />
      <TableOfContents />
      <section className="mx-auto w-full max-w-4xl space-y-8 pt-8">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <LuGlobe className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <SocialsContainer
              email={RESUME_DATA.contact.email}
              telephone={RESUME_DATA.contact.tel}
              socials={RESUME_DATA.contact.social}
            />
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 id="id" className="text-xl font-bold uppercase text-primary">
            About
          </h2>
          <p className="text-pretty font-mono text-sm leading-6 text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 id="values" className="text-xl font-bold uppercase text-primary">
            Values
          </h2>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.values.map((value) => {
              return (
                <Badge variant="secondary" key={value}>
                  {value}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2
            id="work_experience"
            className="text-xl font-bold uppercase text-primary"
          >
            Work Experience
          </h2>
          <div className="flex flex-col gap-10">
            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company}>
                  <div className="flex w-full flex-row gap-4">
                    <Image
                      className="max-h-8 rounded-sm"
                      src={work.logo}
                      alt="logo of work company"
                      height={32}
                      width={32}
                    />
                    <div className="w-full">
                      <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                            <a
                              className="hover:text-primary hover:underline"
                              href={work.link}
                            >
                              {work.company}
                            </a>

                            <span className="inline-flex gap-x-1">
                              {work.badges.map((badge) => (
                                <Badge
                                  variant="secondary"
                                  className="align-middle text-xs"
                                  key={badge}
                                >
                                  {badge}
                                </Badge>
                              ))}
                            </span>
                          </h3>
                          <div className="text-sm tabular-nums text-muted-foreground">
                            {work.start} - {work.end}
                          </div>
                        </div>

                        <h4 className="pb-3 font-mono text-sm leading-none">
                          {work.title}
                        </h4>
                      </CardHeader>
                      <CardContent className="text-xs">
                        <p className=" border-y px-4 py-3 text-[12px] font-medium italic text-foreground">
                          {work.about}
                        </p>
                        <ul className="list-disc pt-3">
                          {work.description.map((item, index) => (
                            <li
                              key={index}
                              className="ml-4 py-[2px] leading-5 text-muted-foreground"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 id="tooling" className="text-xl font-bold uppercase text-primary">
            Tooling
          </h2>
          {Object.keys(groupedTools).map((categoryId) => (
            <div className="flex flex-col gap-3" key={categoryId}>
              <h3 className=" flex items-center gap-2 font-semibold">
                <CategoryIcon
                  iconName={RESUME_DATA.tool_categories[categoryId].icon}
                />
                {RESUME_DATA.tool_categories[categoryId].name}
              </h3>
              <div className=" grid grid-cols-5 gap-4 pb-8">
                {groupedTools[categoryId].map((tool) => (
                  <ToolCard
                    key={tool.name}
                    name={tool.name}
                    description={tool.description}
                    logo={tool.logo}
                    link={tool.link}
                  />
                ))}
              </div>
            </div>
          ))}
        </Section>
        <Section>
          <h2
            id="education"
            className="text-xl font-bold uppercase text-primary"
          >
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <div className="flex w-full flex-row gap-4">
                  <Image
                    className="max-h-8 rounded-sm"
                    src={education.logo}
                    alt="logo of education institution"
                    height={32}
                    width={32}
                  />
                  <div className="w-full">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        <a
                          className="font-semibold leading-none hover:text-primary hover:underline"
                          href={education.link}
                          target="_blank"
                        >
                          {education.school}
                        </a>
                        <div className="text-sm tabular-nums text-muted-foreground">
                          {education.start} - {education.end}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                      {education.degree}
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 id="skills" className="text-xl font-bold uppercase text-primary">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge variant="secondary" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2
            id="references"
            className="text-xl font-bold uppercase text-primary"
          >
            References
          </h2>
          <p className="flex gap-1 font-sans text-sm italic">
            All references available on{" "}
            <a
              className="flex items-center gap-2 hover:text-primary hover:underline"
              href={
                "https://www.linkedin.com/in/danhakim/details/recommendations/"
              }
              target="_blank"
            >
              LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </p>
          <div className="flow-root max-w-full md:columns-2 md:gap-4">
            {RESUME_DATA.references.map((reference, index) => {
              return (
                <div key={index} className="pb-4">
                  <ReferenceCard
                    name={reference.name}
                    description={reference.description}
                    role={reference.role}
                    link={reference.link}
                    picture={reference.picture}
                  />
                </div>
              );
            })}
          </div>
          <p className="flex justify-end gap-1 font-sans text-sm font-light italic text-muted-foreground">
            Based on the awesome design from{" "}
            <a
              className="hover:text-primary hover:underline"
              href="https://cv.jarocki.me/"
              target="_blank"
            >
              Bartosz Jarocki
            </a>
          </p>
        </Section>
      </section>
    </main>
  );
}
