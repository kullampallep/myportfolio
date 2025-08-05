import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const Certs = () => {
  const stack = [
    {
      title: "AWS Certified Cloud Practitioner",
      src: "/images/logos/aws.webp",
      className: "h-10 w-14",
    },
    {
      title: "Azure AI Fundmentals",
      src: "/images/logos/azure.png",
      className: "h-10 w-10",
    },
    {
      title: "Certified Salesforce Marketing Associate",
      src: "/images/logos/salesforce.png",

      className: "h-10 w-10",
    },
    
  ];
  return (
    <div className="w-full max-w-4xl mx-auto">
  <Heading
    as="h2"
    className="font-black text-lg md:text-lg lg:text-lg mt-10 text-left"
  >
    Certifications
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

  <div className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base space-y-1 text-left">
    <p>
      <span className="font-semibold text-gray-800">Certifications:</span>{" "}
      AWS Certified Cloud Practitioner, Certified Salesforce Marketing Associate, Azure AI Fundamentals
    </p>
  </div>
</div>

  );
};
