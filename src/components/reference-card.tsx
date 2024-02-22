import { Card } from "./ui/card";

interface Props {
  role: string;
  name: string;
  description: string | React.ReactNode;
  link: string;
}

export function ReferenceCard({ role, description, name, link }: Props) {
  return (
    <Card className="flex flex-col gap-5 overflow-hidden border border-muted bg-gray-50 p-8 text-sm">
      <div className="leading-6">{description}</div>
      <div className="flex flex-col gap-2">
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-2 font-semibold hover:text-blue-500 hover:underline"
        >
          {name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <p className=" italic">{role}</p>
      </div>
    </Card>
  );
}
