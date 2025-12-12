"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

import { Compass, Eye, Heart, CircleCheckBig,BrainCircuit,Blocks,Lightbulb } from "lucide-react";


interface Card {
  icon: typeof Compass | typeof Eye | typeof Heart;
  title: string;
  content: string;
  gradient: string;
  iconBg: string;
}

interface Excellence {
  title: string;
  description: string;
 
}
interface Reason {
  icon: typeof CircleCheckBig | typeof BrainCircuit | typeof Blocks | typeof Lightbulb;
  title: string;
  description: string;
}
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
   const reason: Reason[] = [
    {
      icon: CircleCheckBig,
      title: "Certified Experts",
      description:
        "Our team holds industry-recognised certifications, ensuring we deliver the best possible solutions for your unique needs.",
    
    },
    {
      icon: BrainCircuit,
      title: "Deep Industry Knowledge",
      description:
        "We understand the specific challenges and opportunities faced by Trading & Service companies, allowing us to tailor our solutions for maximum impact.",
    
    },
     {
      icon: Lightbulb,
      title: "Strategic Approach",
      description:
        "We go beyond simply implementing software. We partner with you to develop a comprehensive ERP strategy that aligns with your overall business goals.",
    
    },
    {
      icon: Blocks,
      title: "Proven Track Record",
      description:
        "We have a history of success in helping businesses of all sizes unlock their full potential through strategic ERP implementations.",
    
    },
  ];
  const excellence: Excellence[] = [
    {
   
      title: "Unveiling hidden opportunities",
      description:
        "We delve into your current business technology landscape, uncovering a roadmap for growth.",
    
    },
    {
   
      title: "Craft a seamless technology symphony",
      description:
        "We design a customised solution that integrates flawlessly with existing infrastructure, empowering your team and streamlining workflows.",
    
    },
    {
   
      title: "Ignite Growth",
      description:
        "We implement and optimise solutions that propel your business forward, driving sustainable growth.",
    
    },
  ];

  return (
   <main className="w-full overflow-hidden">
 
       <head>
          <title>About Us | Business Technology Consultancy in UAE – QT</title>
        </head>

     

{/* HERO SECTION */}
<section ref={sectionRef} className="relative min-h-screen px-6  overflow-hidden">

   <Navigation/>
    <section ref={ref} id="home" className="relative flex items-center justify-center  overflow-hidden ">
         {/* Animated Background Shapes with Parallax */}
         <motion.div style={{ y }} className="absolute inset-0 overflow-hidden  bg-3d-section bg-cover bg-center bg-no-repeat">
           <motion.div
             className="absolute w-64 h-64 rounded-full top-20 left-10 bg-primary/5 blur-3xl"
             animate={{
               x: [0, 50, 0],
               y: [0, 30, 0],
               scale: [1, 1.1, 1],
             }}
             transition={{
               duration: 8,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
           <motion.div
             className="absolute rounded-full top-40 right-20 w-96 h-96 bg-accent/10 blur-3xl"
             animate={{
               x: [0, -30, 0],
               y: [0, 50, 0],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 10,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
           <motion.div
             className="absolute rounded-full bottom-20 left-1/3 w-72 h-72 bg-primary/8 blur-3xl"
             animate={{
               x: [0, 40, 0],
               y: [0, -20, 0],
               scale: [1, 1.15, 1],
             }}
             transition={{
               duration: 12,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
         </motion.div>
   
         {/* Floating Particles */}
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-2 h-2 rounded-full bg-primary/20"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
             animate={{
               y: [-20, 20],
               opacity: [0.2, 0.5, 0.2],
             }}
             transition={{
               duration: 3 + Math.random() * 2,
               repeat: Infinity,
               delay: Math.random() * 2,
             }}
           />
         ))}
   
         {/* Content */}
         <motion.div style={{ opacity }} className="relative z-10 px-4 py-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
           
   
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance"
           >
             {" "}
             <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-white">
               Expert Consulting for Optimised Operations.
             </span>
           </motion.h1>
   
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl text-muted-foreground text-balance text-white"
           >
             Quintessential Technology goes beyond software. We’re expert business technology consultants, here to unlock your growth potential as a Trading & Service company.
           </motion.p>
   
           
   
         
         </motion.div>
       </section>
   
     </section>

  {/* ABOUT SECTION */}
      <section
        id="about"
        ref={sectionRef}
        className="relative flex items-center min-h-screen px-4 sm:px-6 py-24 overflow-hidden"
      >
        
        
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
          }}
        />

        <div className="w-full">
       
        
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

           
          </div>
        </div>
      </section>

{/*Excellence SECTION */}
<section id="excellence" className="relative  overflow-hidden sm:py-5 ">
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
          
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            We empower Trading & Service companies across MENA, North America, and MEA to achieve this excellence by
          </h2>
          
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
          {excellence.map((excellence, index) => (
            <div key={excellence.title}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative cursor-pointer group"
              >
                <div className="h-full p-6 transition-all duration-300 border rounded-xl bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 bg-gray-100">
                 

                  <h3 className="mb-3 text-lg font-semibold transition-colors text-foreground group-hover:text-primary">
                    {excellence.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {excellence.description}
                  </p>

                 

                  <div className="absolute inset-0 transition-opacity opacity-0 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 group-hover:opacity-100 -z-10" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>


{/*Reason SECTION */}
 <section id="services" className="relative  overflow-hidden sm:py-5 ">
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
       
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            Why Choose Quintessential?
          </h2>
          
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-4">
          {reason.map((reason, index) => (
            <div key={reason.title}>
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
                    <reason.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="mb-3 text-lg font-semibold transition-colors text-foreground group-hover:text-primary">
                    {reason.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>

                  

                  <div className="absolute inset-0 transition-opacity opacity-0 rounded-xl bg-linear-to-br from-primary/5 to-accent/5 group-hover:opacity-100 -z-10" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>


{/* MISSION SECTION */}
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
                  Schedule A Meeting
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
