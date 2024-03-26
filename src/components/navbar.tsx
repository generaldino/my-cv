import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import Logo from "../../public/logo.svg";
import { CommandTrigger } from "./command-trigger";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 border-b border-muted bg-[#ffffff99] backdrop-blur-sm dark:bg-[#00000099]">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex-start flex items-center gap-5">
          <div>
            <Link href="/">
              <Image src={Logo} alt="" width={40} height={40} />
            </Link>
          </div>
          {/* <div>
            <Link href="/#about">About</Link>
            <Link href="/#work_experience">Work Experience</Link>
            <Link href="/#values">Values</Link>
            <Link href="/#references">References</Link>
            <Link href="/#education">Education</Link>
            <Link href="/#tooling">Tooling</Link>
          </div> */}
        </div>
        <div className="flex gap-3">
          <CommandTrigger
            links={
              [
                // {
                //   url: RESUME_DATA.personalWebsiteUrl,
                //   title: "Personal Website",
                // },
                // ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                //   url: socialMediaLink.url,
                //   title: socialMediaLink.name,
                // })),
              ]
            }
          />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
