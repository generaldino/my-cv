import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  role: string;
  name: string;
  description: string | React.ReactNode; // Allow React nodes for descriptions
}

export function ProjectCard({ role, description, name }: Props) {
  return (
    <Card className="flex flex-col gap-5 overflow-hidden border border-muted bg-gray-50 p-8 text-sm">
      <div className="leading-6">{description}</div>
      <div className="flex flex-col gap-2">
        <p className=" font-semibold">{name}</p>
        <p className=" italic">{role}</p>
      </div>
    </Card>
  );
}
