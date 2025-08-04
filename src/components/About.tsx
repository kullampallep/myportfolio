"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    '/images/sunset.jpg',
    '/images/dance.jpeg',
    '/images/uva.jpg',
    '/images/photography.jpg'
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/* 
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hi there, thanks for stopping by! I’m Pravallika Kullampalle, 
          a computer science student at the University of Virginia, 
          graduating in December 2025 with a minor in business from the McIntire School of Commerce.

        </Paragraph>
        <Paragraph className=" mt-4">
          I’ve always loved creating things, whether it’s designing an app, 
          writing a short story, or choreographing a dance. Building, with code or creativity, 
          is how I express myself.

        </Paragraph>

        <Paragraph className=" mt-4">
          I’m passionate about developing tools and experiences that are both technically sound and 
          people-focused. Whether I’m automating workflows in the cloud, designing user interfaces, 
          or exploring machine learning, I’m motivated by the impact technology can have when paired 
          with thoughtful design and real-world purpose.
        </Paragraph>

        <Paragraph className=" mt-4">
         Through my internships at Deloitte and Verisign, I’ve built full-stack applications, automated data pipelines, and turned information into insight.
        I’ve worked with Python, Java, JavaScript, React, Django, and SQL, and I hold certifications in AWS Cloud, Azure AI, and Salesforce Marketing. 
        I’m especially interested in how technology, business, and the human experience work together and eager to learn new technologies.
        </Paragraph>
        <Paragraph className=" mt-4">
          Outside of work, I enjoy dancing, writing, photography, and running a nonprofit bakery with friends. 
          I also find inspiration in time spent outdoors and through reading.

        </Paragraph>
        <Paragraph className=" mt-4">
          Thanks for learning a bit about me, I’m always excited to connect and learn more about you, 
          reach me here: qkm3zr@virginia.edu. 

        </Paragraph>
        
      </div>
    </div>
  );
}
