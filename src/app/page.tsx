import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Certs } from "@/components/Certs";
import { useEffect } from "react";
import posthog from "posthog-js";
import Image from "next/image";

export default function Home() {

  

  return (
    <Container>
      <div className="flex flex-row items-start gap-6 items-center">

      <div>
        <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there, I&apos;m Pravallika! </Heading>
      <Paragraph className="max-w-xl mt-4">
        I am a fourth year student at the University of Virginia, graduating in December of 2025, pursuing a Bachelor of Science in Computer Science through the School of Engineering and a minor in Business through the McIntire School of Commerce. 
  
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        <Highlight> I&apos;m excited about building applications with impact, and learning about Cloud and AI/ML Technologies.</Highlight>
       {""}I am always interested in connecting with other technology professionals to learn about new opportunities. Please feel free to contact me at qkm3zr@virginia.edu.
      </Paragraph>
      </div>

      <div>
      <Image
                  src= '/images/PravallikaHeadShot.jpg'
                  alt='Pravallika Headshot'
                  width={256} // or whatever size you want
                  height={256}
                  className="rounded-full object-cover"
      />
      </div>


      </div>

      
      <Certs />
      <TechStack />

      
      
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on

        <p className="text-gray-400 font-semibold mb-10">Click on each project to learn more!</p>

      </Heading>
      <Products />
    </Container>
  );
}
