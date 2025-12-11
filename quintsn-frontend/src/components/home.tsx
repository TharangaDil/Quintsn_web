"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform ,useInView} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

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

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [particles, setParticles] = useState<Particle[]>([]);
    const ref = useRef<HTMLDivElement | null>(null);
     const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

     const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

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
    <>
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
    <section
          id="about"
          ref={sectionRef}
          className="relative flex items-center min-h-screen px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
        >
          {/* Parallax Background */}
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
              className="mb-12 sm:mb-16 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                About Us
              </motion.div>
    
              <h2 className="mb-4 text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Who We Are
              </h2>
    
              <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
                Quintessential Technologies is a leading technology solutions provider,
                dedicated to transforming businesses through innovative software development,
                cloud solutions, and digital transformation services.
              </p>
            </motion.div>
    
            {/* Content Grid */}
            <div className="container relative z-10 mx-auto">
              <motion.div
                style={{ opacity, y }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                {/* Text Section */}
                <motion.div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
                      About Us
                    </span>
                  </motion.div>
    
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    Applications are only one piece of the puzzle{" "}
                    
                  </motion.h2>
    
                  <motion.div
                    className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-justify"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p>
                      At Quintessential, we go beyond being an ERP provider. Headquartered in Dubai, UAE, we’re a team of passionate 
                      business technology consultants, fueled by deep industry knowledge and a mastery of diverse technology solutions. We view technology as a strategic tool, the key to unlocking your full potential and achieving operational excellence.
                    </p>
                    <p>
                     Our team of highly skilled professionals brings a results-driven approach to every project. We offer 
                     comprehensive business technology services, ranging from strategic IT planning to implementation, maintenance, 
                     and ongoing support.
                    </p>
                  </motion.div>
    
                  {/* Stats with Hover Zoom Animation */}
    <motion.div
      className="flex flex-wrap gap-6 sm:gap-8 pt-4"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {[
        { title: "Business Consultancy", href: "/businessConsultant" },
        { title: "Application Implementation & Support", href: "/appMaintenance" },
        { title: "Application Development", href: "/appDevelopment" },
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative inline-block text-sm sm:text-base text-muted-foreground font-medium cursor-pointer
                     hover:text-primary transition-colors duration-300"
        >
          {item.title}
    
          {/* Hover Glow Effect */}
          <span className="absolute -inset-1 rounded-lg bg-primary/10 blur opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.a>
      ))}
    </motion.div>
    
                </motion.div>
    
                {/* Image Section */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div
                    className="relative overflow-hidden shadow-2xl rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/img/aboutus.jpg"
                      alt="Team collaboration"
                      width={800}
                      height={500}
                      className="w-full h-[260px] sm:h-[380px] md:h-[500px] object-cover"
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
              </motion.div>
            </div>
          </div>
        </section>
    </>
  );
}
