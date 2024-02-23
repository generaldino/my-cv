import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export interface ToolProps {
  name: string;
  category: string;
  logo: string;
  description: string;
  link: string;
}

export function ToolCard({
  description,
  name,
  link,
  logo,
  category,
}: ToolProps) {
  return (
    <Card key={name}>
      <div className="flex flex-col rounded bg-gray-50 p-4">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image
              className="max-h-8 rounded-sm"
              src={logo}
              alt="tool logo"
              height={24}
              width={24}
            />
            <h3 className="font-semibold leading-none">{name}</h3>
          </div>
        </CardHeader>
        <CardContent className="mt-2">
          <p className="text-xs font-medium italic text-gray-900">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
