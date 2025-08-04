import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.webp",
      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-10 w-10",
    },
    {
      title: "SQL",
      src: "/images/logos/sql.png",

      className: "h-10 w-10",
    },
    {
      title: "scikit_learn",
      src: "/images/logos/scikit_learn.png",

      className: "h-10 w-10",
    },

    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-10 w-14",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
