"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import {
  Code2,
  Cloud,
  Smartphone,
  Database,
  Laptop
} from "lucide-react";

interface Service {
  icon: typeof Code2 | typeof Cloud | typeof Smartphone | typeof Database;
  title: string;
  description: string;
  features: string[];
  route: string;
}

interface Tech {
  name: string;
  color: string;
}


export default function Services() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services: Service[] = [
    {
      icon: Code2,
      title: "Business Consultancy",
      description:
        "We analyse your current systems and workflows to identify opportunities for optimisation and growth",
      features: [],
      route: "/businessConsultant",
    },
    {
      icon: Cloud,
      title: "Application Implementation Maintenance & Support",
      description:
        "Our team ensures a smooth transition and provides ongoing support to maximise your ROI and achieve long-term success.",
      features: [],
      route: "/appMaintenance",
    },
    {
      icon: Smartphone,
      title: "Application Development",
      description:
        "We go beyond simply recommending ERP systems. We develop a customised plan that integrates seamlessly with your existing infrastructure and empowers your team..",
      features: [],
      route: "/appDevelopment",
    },
    {
      icon: Laptop,
      title: "Digital Marketing",
      description:
        "Transform your data into actionable insights with advanced analytics and BI solutions.",
      features: ["Data Warehousing", "Real-time Analytics", "Custom Dashboards"],
      route: "/data-analytics",
    },
  ];

  return (
    <section id="services" className="relative  overflow-hidden sm:py-16 ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute rounded-full top-40 left-20 w-96 h-96 bg-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            What We Offer
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
            Comprehensive technology solutions designed to accelerate your business growth and drive digital innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link key={service.title} href={service.route}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative cursor-pointer group"
              >
                <div className="h-full p-6 transition-all duration-300 border rounded-xl bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } }}
                    className="flex items-center justify-center mb-4 transition-all rounded-lg w-14 h-14 bg-linear-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="mb-3 text-lg font-semibold transition-colors text-foreground group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 transition-opacity opacity-0 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 group-hover:opacity-100 -z-10" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
