import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Pravallika Kullampalle",
  description:
    "Pravallika Kullampalle is currently learning. She is passionate about the intersection of technology, business, and the human experience.",
};

export default function AboutPage() {
  const images = [
    '/images/sunset.jpg',
    '/images/dance.jpg',
    '/images/uva.jpg',
    '/images/photography.jpg'
  ];
  return (
    <Container>
      
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
