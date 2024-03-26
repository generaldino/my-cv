import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import Logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#ffffff99] backdrop-blur-sm dark:bg-[#00000099]">
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
        <div className="w-full flex-1 gap-2 md:w-auto md:flex-none">
          <button className="relative inline-flex h-8 w-full items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64">
            Quick Actions...
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
