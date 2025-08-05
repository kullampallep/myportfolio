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
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-10 w-24",
    },
    
    {
      title: "Figma",
      src: "/images/logos/figma.png",
      className: "h-10 w-8",
    },
    
  ];
  return (
 <div className="w-full max-w-4xl mx-auto">
  <Heading
    as="h2"
    className="font-black text-lg md:text-lg lg:text-lg mt-10 text-left"
  >
    Tech Stack
  </Heading>

  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {stack.map((item) => (
      <div
        key={item.src}
        className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
        title={item.title}
      >
        <Image
          src={item.src}
          alt={item.title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    ))}
  </div>

  <div className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base space-y-1">
    <p>
      <span className="font-semibold text-gray-800">Languages & Tools:</span>{" "}
      Python, Java, SQL, C, JavaScript, HTML, CSS, R, Git, GitHub
    </p>
    <p>
      <span className="font-semibold text-gray-800">Design & Marketing:</span>{" "}
      Figma, Canva, Salesforce Marketing Cloud
    </p>
    <p>
      <span className="font-semibold text-gray-800">Applications & APIs:</span>{" "}
      Flask, Django, React, scikit-learn, Heroku, Amazon S3, SQLite, PostgreSQL, Jira
    </p>
  </div>
</div>




  );
};
