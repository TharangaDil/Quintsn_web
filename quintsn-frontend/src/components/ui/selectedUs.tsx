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
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />

      <div className="w-full">
        {/* Header */}
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

        {/* ✅ Reusable Feature Block */}
        {[
          {
            title: "Expertise",
            text:
              "Our consultants are experts in ERP implementation, optimization, integration, and support.",
            reverse: false,
          },
          {
            title: "Customized Solutions",
            text:
              "We understand that every business has unique needs and provide customized solutions.",
            reverse: true,
          },
          {
            title: "Results-Driven",
            text:
              "Our focus is on delivering measurable improvements in efficiency and profitability.",
            reverse: false,
          },
          {
            title: "Client Satisfaction",
            text:
              "We prioritize client satisfaction and build long-term partnerships.",
            reverse: true,
          },
        ].map((item, index) => (
          <div key={index} className="container mx-auto mt-20">
            <motion.div
              style={{ opacity, y }}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="relative order-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
              <motion.div className="space-y-6 order-2">
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

        {/* ✅ Contact Section */}
        <div className="container mx-auto mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground">
            If you are interested in our consultancy services, feel free to
            contact us. Our team is ready to help.
          </p>

          <div className="flex justify-center mt-10">
            <ShineButton label="CONTACT US" />
          </div>
        </div>

        {/* ✅ Products Carousel */}
        <div className="container mx-auto mt-32">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Products we offer
          </h2>

          <div className="relative overflow-hidden py-12">
            <motion.div
              className="flex gap-12"
              animate={{ x: [0, -1 * technologies.length * 168] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }}
            >
              {duplicated.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-2xl bg-card border flex items-center justify-center shadow-lg">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
