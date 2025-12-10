"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Mission from "../../components/mission";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutHero from "@/components/ui/aboutHero";

export default function AboutDetails() {
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
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative flex items-center min-h-screen px-4 sm:px-6 py-24 overflow-hidden"
      >
        <head>
          <title>About Us | Business Technology Consultancy in UAE – QT</title>
        </head>
        
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />

        <div className="w-full">
          <Navigation/>
          <AboutHero/>
          <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center mt-20"
        >
          

          <h2 className="mb-4 text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Who We Are
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
            Quintessential Technologies is a leading technology solutions provider,
            dedicated to transforming businesses through innovative software development,
            cloud solutions, and digital transformation services.
          </p>
        </motion.div>

          <div className="container relative z-10 mx-auto">
            <motion.div
              style={{ opacity, y }}
              className="grid items-center gap-10 sm:gap-12 md:grid-cols-2 lg:gap-20"
            >
              {/* Text Section */}
              <motion.div className="space-y-6">
                <motion.span
                  className="text-sm font-semibold tracking-widest uppercase bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent"
                >
                  About Us
                </motion.span>

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
              <motion.div className="relative">
                <motion.div className="relative overflow-hidden shadow-2xl rounded-2xl">
                  <Image
                    src="/img/aboutus.jpg"
                    alt="Team collaboration"
                    width={800}
                    height={500}
                    className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Glow */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            <Mission />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
