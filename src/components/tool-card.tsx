import { Tool } from "@/data/resume-data.types";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export function ToolCard({ description, name, logo }: Tool) {
  return (
    <Card key={name}>
      <div className="flex flex-col items-center rounded border-[1px] border-[#C1D0FF] bg-[#F7F9FF] p-3 hover:bg-[#E1E9FF]">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <Image
              className="min-h-8 rounded-sm"
              src={logo}
              alt="tool logo"
              height={32}
              width={24}
            />
            <a className="font-mono text-[14px] font-medium leading-none">
              {name}
            </a>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}
