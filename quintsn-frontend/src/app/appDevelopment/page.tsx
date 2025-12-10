"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AppHero from "@/components/ui/appHero";
import SelectedUs from "@/components/ui/selectedUs";
import DevelopmentHero from "@/components/ui/developmentHero";
import ChooseUs from "@/components/ui/chooseUs";

export default function AppDevelopment() {
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
        className="relative flex flex-col items-center min-h-screen px-4 sm:px-6 py-24 overflow-hidden"
      >
        <head>
          <title>Application Development UAE | Custom Mobile & Web Apps by QT</title>
        </head>
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center w-full"
        >
          <Navigation />
          <DevelopmentHero />
        </motion.div>

        {/* ================= FIRST ================= */}
        <div className="container relative z-10 mx-auto">
          <motion.div
            style={{ opacity, y }}
            className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
          >
            <motion.div className="space-y-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cloud-Native Application Development
              </motion.h2>

              <motion.div
                className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  Our expert team of developers creates custom cloud-native applications tailored to your business needs. 
                  By leveraging microservices architecture, containers, and serverless computing, we design applications that are
                  highly scalable, fault-tolerant, and easily maintainable. This approach ensures optimal resource utilization and 
                  rapid deployment, facilitating quicker time-to-market for your products and services.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                  <Image
                    src="/img/cloudcomp.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
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
            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl ml-0 md:ml-[60px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image
                  src="/img/appmigration.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div className="space-y-6">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Legacy Application Migration
              </motion.h2>

              <motion.div
                className="text-base sm:text-lg mr-0 md:mr-[60px] text-justify"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  Modernize your legacy applications by migrating them to the cloud. We carefully assess your existing systems, 
                  plan migration strategies, and execute seamless transitions to cloud platforms. This process not only enhances 
                  the performance and reliability of your applications but also reduces operational overhead and infrastructure 
                  costs.
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
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:ml-[60px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Continuous Monitoring and Support
              </motion.h2>

              <motion.div
                className="text-base sm:text-lg ml-0 md:ml-[60px] text-justify"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p>
                  The cloud landscape evolves, and we’re here to ensure your applications do too. Our services include 
                  continuous monitoring, performance analysis, and regular updates to keep your applications running smoothly 
                  and securely. Our dedicated support team is available to address any issues and provide timely assistance.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl mr-0 md:mr-[60px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px]">
                <Image
                  src="/img/monitoring.jpg"
                  alt="monitoring"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-linear-to-br from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] rounded-full blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ChooseUs />
      <Footer />
    </>
  );
}
