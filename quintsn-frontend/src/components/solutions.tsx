"use client";

import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  Users2,
  Briefcase,
} from "lucide-react";

interface Solution {
  icon: typeof Building2 | typeof ShoppingCart | typeof GraduationCap | typeof HeartPulse | typeof Landmark | typeof Factory | typeof Users2 | typeof Briefcase;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}

interface FeatureItem {
  title: string;
  description: string;
}

export default function Solutions() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions: Solution[] = [
    { icon: Building2, title: "Enterprise Solutions", description: "Comprehensive ERP and management systems to streamline operations.", color: "from-blue-500/10 to-blue-600/10", iconColor: "text-blue-600" },
    { icon: ShoppingCart, title: "E-Commerce Platforms", description: "Full-featured online retail solutions with secure payment processing.", color: "from-purple-500/10 to-purple-600/10", iconColor: "text-purple-600" },
    { icon: GraduationCap, title: "Education Technology", description: "Learning management systems and educational applications for digital classrooms.", color: "from-green-500/10 to-green-600/10", iconColor: "text-green-600" },
    { icon: HeartPulse, title: "Healthcare IT", description: "HIPAA-compliant healthcare solutions including EHR and telemedicine platforms.", color: "from-red-500/10 to-red-600/10", iconColor: "text-red-600" },
    { icon: Landmark, title: "Financial Services", description: "Secure fintech solutions for banking, payments, investment, and compliance.", color: "from-amber-500/10 to-amber-600/10", iconColor: "text-amber-600" },
    { icon: Factory, title: "Manufacturing & IoT", description: "Smart manufacturing solutions with IoT sensors and real-time monitoring.", color: "from-orange-500/10 to-orange-600/10", iconColor: "text-orange-600" },
    { icon: Users2, title: "HR & Workforce Management", description: "Complete HR management covering recruitment, payroll, and performance tracking.", color: "from-indigo-500/10 to-indigo-600/10", iconColor: "text-indigo-600" },
    { icon: Briefcase, title: "Professional Services", description: "Project management, time tracking, and client management solutions for service-based businesses.", color: "from-teal-500/10 to-teal-600/10", iconColor: "text-teal-600" },
  ];

  const features: FeatureItem[] = [
    { title: "Industry Expertise", description: "Deep understanding of industry-specific challenges and regulatory requirements." },
    { title: "Proven Track Record", description: "Delivered solutions across multiple industries with measurable ROI." },
    { title: "Continuous Support", description: "Ongoing maintenance, updates, and dedicated support to evolve with your business needs." },
  ];

  return (
    <section id="solutions" className="relative py-5 overflow-hidden sm:py-16 bg-linear-to-b from-background via-accent/5 to-background">
      {/* Background decorations */}
      <div className="absolute rounded-full top-20 right-10 w-96 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 blur-3xl" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
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
            Industry Solutions
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            Tailored Solutions for Every Industry
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
            We understand that every industry has unique challenges. Our specialized solutions are designed to address your specific needs and drive measurable results.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full p-6 transition-all duration-300 border rounded-xl bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  <solution.icon className={`w-7 h-7 ${solution.iconColor}`} />
                </motion.div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 text-center border rounded-xl bg-linear-to-br from-primary/5 to-accent/5 border-border/50"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
