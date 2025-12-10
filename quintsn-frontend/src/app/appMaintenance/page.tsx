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

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="relative flex items-center min-h-screen px-4 sm:px-6 py-24 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
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
              <motion.div className="space-y-6">
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                  Application Implementation
                </motion.h2>

                <motion.div className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify">
                  <p>
                    Our consultants will guide you through the entire implementation process, from planning to deployment. We 
                    work with you to ensure that your ERP system/application is tailored to your business needs and is integrated 
                    with your existing systems as required.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="relative">
                <motion.div className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]">
                  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                    <Image
                      src="/img/appmaintain.jpg"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= SECOND ================= */}
          <div className="container relative z-10 mx-auto mt-20">
            <motion.div
              style={{ opacity, y }}
              className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
            >
              <motion.div className="relative overflow-hidden shadow-2xl rounded-2xl ml-0 md:ml-[60px]">
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                  <Image
                    src="/img/optimizationimg.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div className="space-y-6">
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                  Application Optimization
                </motion.h2>

                <motion.div className="text-base sm:text-lg ml-0 md:ml-[60px]">
                  <p>
                    We help you get the most out of your ERP system by identifying areas for improvement and implementing 
                    solutions to increase efficiency and productivity.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= THIRD ================= */}
          <div className="container relative z-10 mx-auto mt-10">
            <motion.div
              style={{ opacity, y }}
              className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
            >
              <motion.div className="space-y-6">
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                  Support
                </motion.h2>

                <motion.div className="text-base sm:text-lg ml-0 md:ml-[60px]">
                  <p>
                    Our team provides ongoing support and maintenance for your ERP system to ensure it continues to operate 
                    smoothly and effectively.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]">
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                  <Image src="/img/support.jpg" alt="support" fill className="object-cover" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= FOURTH ================= */}
          <div className="container relative z-10 mx-auto mt-20">
            <motion.div
              style={{ opacity, y }}
              className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
            >
              <motion.div className="relative overflow-hidden shadow-2xl rounded-2xl ml-0 md:ml-[60px]">
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                  <Image src="/img/training.jpg" alt="training" fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div className="space-y-6">
                <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]">
                  Training
                </motion.h2>

                <motion.div className="text-base sm:text-lg ml-0 md:ml-[60px]">
                  <p>
                    We offer training sessions for your employees to help them learn how to use the ERP system efficiently 
                    and effectively.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SelectedUs />
      <Footer />
    </>
  );
}
