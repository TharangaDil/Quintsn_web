"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { ShineButton } from "./shineButton";

interface TechnologyItem {
  name: string;
  logo: string;
}

interface FeatureItem {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
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

const features: FeatureItem[] = [
  {
    title: "Expertise",
    text:
      "Our consultants are experts in ERP implementation, optimization, integration, and support. We have worked with numerous organizations across various industries, and our team brings a wealth of knowledge and experience to every project.",
    image: "/img/expertise.jpg",
    reverse: false,
  },
  {
    title: "Customized Solutions",
    text:
      "We understand that every business has unique needs, and we work closely with our clients to provide customized solutions that meet those needs. We take the time to understand your business processes and objectives, and we tailor our solutions to ensure that they align with your goals.",
    image: "/img/solutions.jpg",
    reverse: true,
  },
  {
    title: "Results-Driven",
    text:
      "Our primary focus is on delivering results that help our clients achieve their business objectives. We are committed to ensuring that our solutions provide measurable improvements in efficiency, productivity, and profitability.",
    image: "/img/result.jpg",
    reverse: false,
  },
  {
    title: "Client Satisfaction",
    text:
      "We prioritize client satisfaction and are dedicated to delivering exceptional service and support. We are committed to building long-term relationships with our clients and helping them achieve sustained success.",
    image: "/img/client.jpg",
    reverse: true,
  },
];

export default function SelectedUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center min-h-screen px-4 sm:px-6 lg:px-12 py-16 sm:py-24 overflow-hidden"
    >
      {/* ✅ Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />

      <div className="w-full">
        {/* ✅ Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why you should Choose Us?
          </h2>
        </motion.div>

        {/* ✅ FEATURES */}
        {features.map((item, index) => (
          <div key={index} className="container mx-auto mt-20">
            <motion.div
              style={{ opacity, y }}
              className="grid items-center gap-10 md:grid-cols-2"
            >
              {/* ✅ IMAGE */}
              <motion.div
                className={`relative ${
                  item.reverse ? "md:order-2" : "md:order-1"
                }`}
                initial={{ opacity: 0, x: item.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* ✅ TEXT */}
              <motion.div
                className={`space-y-6 ${
                  item.reverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground text-justify">
                  {item.text}
                </p>
              </motion.div>
            </motion.div>
          </div>
        ))}

        

        {/* ✅ PRODUCTS */}
        <div className="container mx-auto mt-32">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Products we offer
          </h2>

          {/* Auto-scrolling carousel */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="relative"
                    >
                      {/* Fade edges */}
                      <div className="absolute top-0 bottom-0 left-0 z-10 w-32 bg-linear-to-r from-background to-transparent" />
                      <div className="absolute top-0 bottom-0 right-0 z-10 w-32 bg-linear-to-l from-background to-transparent" />
          
                      {/* Scroller */}
                      <div className="py-8 overflow-hidden">
                        <motion.div
                          className="flex gap-12"
                          animate={{
                            x: [0, -1 * technologies.length * (120 + 48)],
                          }}
                          transition={{
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 30,
                              ease: "linear",
                            },
                          }}
                        >
                          {duplicated.map((tech, idx) => (
                            <motion.div
                              key={`${tech.name}-${idx}`}
                              className="flex-shrink-0 group"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="relative w-[120px] h-[120px] rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Glow */}
                                <motion.div
                                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                  style={{
                                    background:
                                      "radial-gradient(circle at 50% 50%, oklch(0.62 0.18 195 / 0.1), transparent 70%)",
                                  }}
                                />
          
                                {/* Logo */}
                                <motion.img
                                  src={tech.logo}
                                  alt={tech.name}
                                  className="relative z-10 object-contain w-16 h-16 transition-all duration-300 filter  group-hover:grayscale-0"
                                  
                                  whileHover={{ filter: "grayscale(0%)" }}
                                />
          
                                {/* Name */}
                                <motion.div
                                  className="absolute left-0 right-0 text-center transition-opacity duration-300 opacity-0 bottom-2 group-hover:opacity-100"
                                  initial={{ y: 10 }}
                                  whileHover={{ y: 0 }}
                                >
                                  <span className="text-xs font-semibold bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
                                    {tech.name}
                                  </span>
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
        </div>
      </div>
    </section>
  );
}
