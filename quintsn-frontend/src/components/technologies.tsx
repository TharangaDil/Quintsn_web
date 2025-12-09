"use client";

import { useRef } from "react";
import { motion,useScroll,useTransform,useInView } from "framer-motion";

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

export default function Technologies() {
  const sectionRef = useRef<HTMLElement | null>(null);
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  // Duplicate technologies for infinite loop animation
  const duplicated = [...technologies, ...technologies];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative flex items-center min-h-screen px-6  overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto">
        <motion.div style={{ opacity, y }} className="space-y-16">
          {/* Header */}
          <div className="text-center">
               <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Tech Stack
          </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=" text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              Technologies We Master
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground"
            >
              Leveraging cutting-edge tools and frameworks to build robust, scalable solutions.
            </motion.p>
          </div>

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

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="max-w-3xl mx-auto text-muted-foreground">
              We stay at the forefront of technology, continuously expanding our expertise in cloud,
              AI, and next-gen software engineering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
