import { Tool } from "@/data/resume-data.types";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export function ToolCard({ description, name, logo }: Tool) {
  return (
    <Card key={name}>
      <CardHeader>
        <div className=" flex min-h-28 flex-col items-center justify-center gap-3 rounded-md border-2 border-muted bg-transparent p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground ">
          <Image
            className="min-h-6"
            src={logo}
            alt="tool logo"
            height={24}
            width={24}
          />
          <a className="font-mono font-medium leading-none">{name}</a>
        </div>
      </CardHeader>
    </Card>
  );
}
