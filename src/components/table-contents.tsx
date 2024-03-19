"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "id", title: "About" },
  { id: "values", title: "Values" },
  { id: "work_experience", title: "Work Experience" },
  { id: "tooling", title: "Tooling" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "references", title: "References" },
];

const TableOfContents = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-5% 0px -90% 0px" },
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const handleClick = (id: string) => () => {
    const headerOffset = 80; // Adjust this value based on your fixed header height or desired offset
    const sectionElement = document.getElementById(id);

    if (sectionElement) {
      const sectionTop =
        sectionElement.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: sectionTop,
        behavior: "instant",
      });

      setCurrentSection(id); // Update the current section state
    }
  };

  return (
    <nav className="fixed right-20 w-36">
      <p className="mb-4 text-[15px] font-medium text-foreground">
        On This Page
      </p>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={
              currentSection === section.id
                ? "my-1 text-[15px] font-semibold text-primary"
                : "my-1 text-[15px] text-muted-foreground"
            }
            onClick={handleClick(section.id)}
          >
            <a href={`#${section.id}`} onClick={(e) => e.preventDefault()}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
