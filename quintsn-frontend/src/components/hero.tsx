"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImages: string[] = [
  "/img/tech_company.jpg",
  "/img/meeting.jpg",
  "/img/lap.jpg",
  "/img/cloud.jpg",
];

type Particle = {
  height: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // ✅ Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // ✅ SAFE particle generation (NO hydration mismatch)
  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 20 }).map(() => ({
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));

    setParticles(generatedParticles);
  }, []);

  // ✅ Scroll handler
  const scrollToNext = (): void => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <head>
        <title>ERP & CRM Consulting Services - Quintessential Technologies</title>
      </head>
      {/* ✅ Background Slideshow */}
      {heroImages.map((image: string, index: number) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImageIndex === index ? 0.25 : 0,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ scale }}
        >
          <div
            className="w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${image})`,
              filter: "brightness(0.4) saturate(0.8)",
            }}
          />
        </motion.div>
      ))}

      

      {/* ✅ Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-5xl space-y-6 text-center"
        >
          {/* ✅ Heading */}
          <motion.h1
            className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[oklch(0.75_0.20_195)] via-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
              Quintessential Technologies
            </span>
          </motion.h1>

          {/* ✅ Subtitle */}
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Struggling to manage multiple systems and manual workflows? You're not alone.
            But you don't have to settle for inefficiency. Quintessential can help you
            navigate the complex landscape of business technology solutions and find the
            perfect fit for your business.
          </motion.p>

          {/* ✅ CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] text-white font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ✅ Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToNext}
          >
            <span className="text-sm font-medium tracking-widest text-muted-foreground">
              SCROLL
            </span>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-8 h-8 border-2 rounded-full border-primary"
            >
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ✅ SAFE PARTICLES (NO HYDRATION ERROR) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            style={{
              height: `${p.height}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
