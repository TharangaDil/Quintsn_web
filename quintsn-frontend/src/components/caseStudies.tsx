"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion,useScroll,useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Global E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Built a scalable marketplace handling 10M+ transactions monthly with AI-powered recommendations.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
    tags: ["React", "AWS", "AI/ML"],
  },
  {
    title: "Healthcare Management System",
    category: "Healthcare",
    description:
      "HIPAA-compliant platform streamlining patient care across 50+ clinics with real-time data sync.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["Node.js", "PostgreSQL", "Security"],
  },
  {
    title: "FinTech Mobile App",
    category: "Finance",
    description:
      "Award-winning mobile banking app with biometric authentication and instant payments.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    tags: ["React Native", "Blockchain", "Security"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Analytics",
    description:
      "Real-time business intelligence platform processing 1TB+ data daily with predictive insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Python", "TensorFlow", "Data Science"],
  },
  {
    title: "Smart City IoT Platform",
    category: "IoT",
    description:
      "Connected infrastructure solution managing 100K+ sensors across metropolitan area.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
    tags: ["IoT", "Cloud", "Real-time"],
  },
  {
    title: "Enterprise Resource Planning",
    category: "Enterprise",
    description:
      "Unified ERP system integrating HR, finance, and operations for Fortune 500 company.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Microservices", "Kubernetes", "Integration"],
  },
];

export default function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto">
        <motion.div style={{ opacity, y }} className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent"
          >
            Our Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Case Studies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground"
          >
            Real-world success stories showcasing our expertise in delivering
            transformative solutions.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="cursor-pointer group"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Background image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.12_0.02_240)] via-[oklch(0.12_0.02_240)]/80 to-transparent" />
                </motion.div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold border rounded-full bg-primary/20 backdrop-blur-sm border-primary/30 text-primary">
                      {study.category}
                    </span>
                  </motion.div>

                  {/* Title + Description */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="space-y-2"
                  >
                    <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                      {study.title}

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          x: hoveredIndex === index ? 0 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.div>
                    </h3>

                    <p className="text-sm text-white/80">{study.description}</p>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mt-4"
                  >
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-white/10 backdrop-blur-sm text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Border Glow */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-2xl group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.18 195 / 0.3), oklch(0.55 0.15 200 / 0.3))",
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
