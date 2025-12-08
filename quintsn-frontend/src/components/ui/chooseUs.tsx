"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { ShineButton } from "./shineButton";

interface TechnologyItem {
  name: string;
  logo: string;
}

const technologies: TechnologyItem[] = [
  { name: "React", logo: "/img/home1.png" },
  { name: "TypeScript", logo: "/img/home2.png" },
  { name: "Node.js", logo: "/img/home3.png" },
  { name: "Python", logo: "/img/home4.png" },
  { name: "AWS", logo: "/img/home5.png" },
  { name: "Docker", logo: "/img/home6.png" },
  { name: "Kubernetes", logo: "/img/home7.png" },
  { name: "TensorFlow", logo: "/img/home8.png" },
  { name: "PostgreSQL", logo: "/img/home9.png" },
];

const duplicated = [...technologies, ...technologies];

const FEATURES = [
  {
    title: "Expertise",
    text: "Our team comprises cloud architects, developers, and engineers with extensive experience in creating and migrating applications to cloud environments.",
  },
  {
    title: "Tailored Solutions",
    text: "We understand that every business is unique. Our solutions are customized to meet your specific requirements, ensuring optimal outcomes.",
  },
  {
    title: "Seamless Transition",
    text: "We minimize disruptions during migration, allowing you to enjoy the benefits of the cloud without unnecessary downtime.",
  },
  {
    title: "Cutting-Edge Technologies",
    text: "We stay up-to-date with the latest cloud technologies and trends, delivering solutions that are future-proof and innovative.",
  },
  {
    title: "Client Satisfaction",
    text: "We prioritize client satisfaction and are dedicated to delivering exceptional service and long-term success.",
  },
];

export default function ChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why you should Choose Us?
          </h2>
        </motion.div>

        {/* ✅ Features */}
        <div className="space-y-24">
          {FEATURES.map((item, i) => (
            <motion.div
              key={i}
              style={{ opacity, y }}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                    alt="Consulting"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground text-justify">
                  {item.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Contact Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
            If you are interested in our business consultancy services or have
            any questions, please don’t hesitate to contact us.
          </p>

          <div className="flex justify-center mt-10">
            <ShineButton label="CONTACT US" />
          </div>
        </div>

        {/* ✅ Products Carousel */}
        <div className="mt-32">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Products we offer
          </h2>

          <div className="relative overflow-hidden py-12">
            <motion.div
              className="flex gap-10"
              animate={{ x: [0, -1 * technologies.length * 170] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }}
            >
              {duplicated.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-2xl bg-card border flex items-center justify-center shadow"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
