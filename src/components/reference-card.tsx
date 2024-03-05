import Image from "next/image";
import { Card } from "./ui/card";
import { Reference } from "@/data/resume-data.types";

export function ReferenceCard({
  role,
  description,
  name,
  link,
  picture,
}: Reference) {
  return (
    <Card className="flex flex-col gap-5 overflow-hidden border border-muted p-8 text-sm">
      <div className="flex flex-col gap-3">
        {description.map((item, index) => (
          <p key={index} className="ml-4 py-[2px] leading-5">
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-2">
        <Image
          className=" w-12 rounded-full"
          alt={name}
          width={24}
          height={24}
          src={picture}
          unoptimized={true}
        />
        <div className="flex flex-col gap-2">
          <a
            href={link}
            target="_blank"
            className="flex items-center gap-2 font-semibold hover:text-primary hover:underline"
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
      </div>
    </Card>
  );
}
