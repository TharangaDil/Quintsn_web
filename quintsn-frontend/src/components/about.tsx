"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Section */}
        <motion.div
          ref={ref}
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Preheading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            About Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unleash Growth. Your Trusted Partner in Business{" "}
            <span className="bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Transformation
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Quintessential Technologies is a leading technology solutions provider, dedicated to transforming businesses through innovative software development, cloud solutions, and digital transformation services.
            </p>
            <p>
              We go beyond software. Our team of certified consultants empowers businesses across MENA, North America, and MEA. Technology is a strategic tool to unlock your full potential and achieve operational excellence.
            </p>
          </motion.div>

          {/* Services / Stats Links */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6 pt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { title: "Business Consultancy", href: "/businessConsultant" },
              { title: "Application Implementation & Support", href: "/appMaintenance" },
              { title: "Application Development", href: "/appDevelopment" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-block text-sm sm:text-base text-muted-foreground font-medium cursor-pointer hover:text-primary transition-colors duration-300"
              >
                {item.title}
                <span className="absolute -inset-1 rounded-lg bg-primary/10 blur opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 relative w-full max-w-lg sm:max-w-xl lg:max-w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/img/aboutus.jpg"
              alt="Team collaboration"
              width={800}
              height={500}
              className="w-full h-60 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Glow */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-20 h-20 sm:w-28 sm:h-28 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
