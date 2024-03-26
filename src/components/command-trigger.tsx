"use client";

import * as React from "react";

import { Button } from "./ui/button";
import { LuCommand } from "react-icons/lu";
import { CommandMenu } from "./command-menu";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandTrigger = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="w-full flex-1 md:w-auto md:flex-none">
        <button
          onClick={() => setOpen((open) => !open)}
          className="relative inline-flex h-full w-full items-center justify-start gap-20 whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Quick Actions...
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl md:hidden"
      >
        <LuCommand className="my-6 size-6" />
      </Button>
      <CommandMenu open={open} onOpenChange={setOpen} links={links} />
    </>
  );
};
