"use client";
import React from "react";
import { Button } from "./ui/button";
import { LuMail } from "react-icons/lu";
import { SocialLink } from "@/data/resume-data.types";
import { toast } from "sonner";
import { CategoryIcon } from "./ui/icon";

/**
 * SocialsContainer is responsible for
 */
const Component = ({ email, socials, telephone }: ComponentProps) => {
  return (
    <>
      <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
        {email ? (
          <Button
            className="size-8"
            variant="outline"
            size="icon"
            onClick={() => {
              navigator.clipboard
                .writeText(email)
                .then(() => {
                  toast("Email copied to clipboard");
                })
                .catch((err) => {
                  console.error("Error copying email to clipboard: ", err);
                });
            }}
          >
            <LuMail className="size-4" />
          </Button>
        ) : null}
        {socials.map((social) => (
          <Button
            key={social.name}
            className="size-8"
            variant="outline"
            size="icon"
            onClick={() => {
              window.open(social.url, "_blank");
            }}
          >
            <CategoryIcon iconName={social.icon} />
          </Button>
        ))}
      </div>
      <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
        {email ? (
          <a href={`mailto:${email}`}>
            <span className="underline">{email}</span>
          </a>
        ) : null}
        {telephone ? (
          <a href={`tel:${telephone}`}>
            <span className="underline">{telephone}</span>
          </a>
        ) : null}
      </div>
    </>
  );
};

Component.displayName = "SocialsContainer";

interface ComponentProps {
  email: string;
  socials: SocialLink[];
  telephone: string;
}

export { Component as SocialsContainer };
