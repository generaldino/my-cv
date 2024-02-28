import { Tool } from "@/data/resume-data.types";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export function ToolCard({ description, name, logo }: Tool) {
  return (
    <Card key={name}>
      <div className="flex flex-col items-center rounded border-[1px] bg-slate-50 p-3">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <Image
              className="min-h-8 rounded-sm"
              src={logo}
              alt="tool logo"
              height={32}
              width={24}
            />
            <h6 className="font-mono text-[14px] font-medium leading-none">
              {name}
            </h6>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}
