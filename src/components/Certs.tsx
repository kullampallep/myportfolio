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
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10"
      >
        Certifications
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (

          <Image
            src={item.src}
            key={item.src}
            width={`800`}
            height={`800`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
            title={item.title}
          />


        ))}
      </div>
    </div>
  );
};
