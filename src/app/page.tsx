import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Pravallika</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a I am a rising fourth year student at the University of Virginia pursuing a Bachelor of Science in Computer Science in the School of Engineering and a minor in Business from McIntire School of Commerce, graduating in December 2025. 
  
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        <Highlight> I&apos;m excited about building applications with impact, and learning about Cloud and AI/ML Technologies.</Highlight>
       {""}I am always interested in connecting with other technology professionals to learn about new opportunities. Please feel free to contact me at qkm3zr@virginia.edu.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
