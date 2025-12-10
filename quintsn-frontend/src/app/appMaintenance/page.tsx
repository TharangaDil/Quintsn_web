"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AppHero from "@/components/ui/appHero";
import SelectedUs from "@/components/ui/selectedUs";

export default function AppMaintenance() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariantLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  };

  const imageVariantRight = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative flex flex-col items-center min-h-screen px-4 sm:px-6 py-24 overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        {/* Hero */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariant}
          className="mb-16 text-center w-full"
        >
          <Navigation />
          <AppHero />
        </motion.div>

        {/* ================= FIRST ================= */}
        <div className="container relative z-10 mx-auto">
          <motion.div
            style={{ opacity, y }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          >
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                Application Implementation
              </h2>
              <p className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify">
                Our consultants will guide you through the entire implementation process, from planning to deployment. 
                We work with you to ensure that your ERP system/application is tailored to your business needs and is 
                integrated with your existing systems as required.
              </p>
            </motion.div>

            <motion.div
              variants={imageVariantRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image src="/img/appmaintain.jpg" alt="Team collaboration" fill className="object-cover" />
              </div>
              {/* Floating Glow */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= SECOND ================= */}
        <div className="container relative z-10 mx-auto mt-20">
          <motion.div
            style={{ opacity, y }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          >
            <motion.div
              variants={imageVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-2xl rounded-2xl ml-0 md:ml-[60px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image src="/img/optimizationimg.jpg" alt="Optimization" fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                Application Optimization
              </h2>
              <p className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify">
                We help you get the most out of your ERP system by identifying areas for improvement and implementing 
                solutions to increase efficiency and productivity.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= THIRD ================= */}
        <div className="container relative z-10 mx-auto mt-20">
          <motion.div
            style={{ opacity, y }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          >
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                Support
              </h2>
              <p className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify">
                Our team provides ongoing support and maintenance for your ERP system to ensure it continues to 
                operate smoothly and effectively.
              </p>
            </motion.div>

            <motion.div
              variants={imageVariantRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image src="/img/support.jpg" alt="Support" fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= FOURTH ================= */}
        <div className="container relative z-10 mx-auto mt-20">
          <motion.div
            style={{ opacity, y }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          >
            <motion.div
              variants={imageVariantLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden shadow-2xl rounded-2xl ml-0 md:ml-[60px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image src="/img/training.jpg" alt="Training" fill className="object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                Training
              </h2>
              <p className="text-base sm:text-lg ml-0 md:ml-[60px]">
                We offer training sessions for your employees to help them learn how to use the ERP system efficiently and effectively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SelectedUs />
      <Footer />
    </>
  );
}
