"use client";

import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Eye, Heart } from "lucide-react";

interface Card {
  icon: typeof Compass | typeof Eye | typeof Heart;
  title: string;
  content: string;
  gradient: string;
  iconBg: string;
}

export default function Mission() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards: Card[] = [
    {
      icon: Compass,
      title: "Our Mission",
      content:
        "Our mission is to empower businesses with the knowledge, tools, and strategic insights needed to embrace application solutions effectively. By combining our deep understanding of various ERP platforms and applications with industry-specific expertise, we help clients unlock their full potential and navigate the complexities of digital transformation.",
      gradient: "from-primary/10 to-accent/10",
      iconBg: "from-primary/20 to-accent/20",
    },
    {
      icon: Eye,
      title: "Our Vision",
      content:
        "At Quintessential, we envision a business landscape where every organization, regardless of size or industry, can harness the power of cutting-edge application technology to streamline processes, enhance decision-making, and achieve sustainable growth and success.",
      gradient: "from-accent/10 to-primary/10",
      iconBg: "from-accent/20 to-primary/20",
    },
    {
      icon: Heart,
      title: "Our Values",
      content:
        "Integrity, Innovation, Excellence, and Client Success form the cornerstone of everything we do. We believe in transparent communication, continuous learning, and maintaining the highest ethical standards while delivering solutions that exceed expectations and create meaningful impact.",
      gradient: "from-primary/10 to-accent/10",
      iconBg: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-20 overflow-hidden sm:py-28 bg-linear-to-b from-background via-accent/5 to-background"
    >
      {/* Decorative elements */}
      <div className="absolute rounded-full top-20 right-10 w-72 h-72 bg-primary/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 left-10 w-96 h-96 bg-accent/5 blur-3xl" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
            Our Purpose
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            Mission, Vision & Values
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
            Guided by our core principles, we strive to make a positive impact through
            technology and innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              <div
                className={`h-full p-8 rounded-2xl bg-linear-to-br ${card.gradient} border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${card.iconBg} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow`}
                >
                  <card.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold text-foreground">{card.title}</h3>

                {/* Content */}
                <p className="leading-relaxed text-muted-foreground">{card.content}</p>

                {/* Decorative corner */}
                <div className="absolute w-8 h-8 transition-opacity border-t-2 border-r-2 rounded-tr-lg opacity-0 top-4 right-4 border-primary/20 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 border sm:flex-row rounded-2xl bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 border-border/50">
            <div className="flex-1 text-left">
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 font-medium transition-shadow rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
