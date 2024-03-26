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
      <p className="fixed  bottom-0 left-0 right-0 hidden border-t border-t-muted bg-background  p-1 text-center text-sm text-muted-foreground md:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        to open the command menu
      </p>
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
