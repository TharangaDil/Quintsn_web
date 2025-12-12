"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ThreeDImageRing from "./ui/imageRing"; 
import Link from "next/link";

import {
  Code2,
  Cloud,
  Smartphone,
  Database,
  Laptop,
  Building2,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  Users2,
  Briefcase,
  Linkedin, Mail, Twitter,
  ChevronLeft, ChevronRight, Quote, Star
} from "lucide-react";
import { Button } from "./ui/button";

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
interface Solution {
  icon: typeof Building2 | typeof ShoppingCart | typeof GraduationCap | typeof HeartPulse | typeof Landmark | typeof Factory | typeof Users2 | typeof Briefcase;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}
interface SocialLinks {
  linkedin: string;
  twitter: string;
  email: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

interface TechnologyItem {
  name: string;
  logo: string;
}
interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}



export default function Home() {

  const heroImages = [
    "/img/tech_company.jpg",
    "/img/meeting.jpg",
    "/img/lap.jpg",
    "/img/cloud.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [particles, setParticles] = useState<any[]>([]);

  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      height: Math.random() * 200 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));

    setParticles(generatedParticles);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef(null);
const solutionsRef = useRef(null);
const teamRef = useRef(null);
const techRef = useRef(null);
const testimonialsRef = useRef(null);
  const sectionRef = useRef<HTMLElement | null>(null);

const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
const techInView = useInView(techRef, { once: true, margin: "-100px" });
const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    const services: Service[] = [
      {
        icon: Code2,
        title: "Business Consultancy",
        description:
          "We analyse your current systems and workflows to identify opportunities for optimisation and growth",
        features: [],
        route: "/businessConsultancy",
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
          "Our team ensures a smooth transition and provides ongoing support to maximise your ROI and achieve long-term success",
        features: [],
        route: "/",
      },
      {
        icon: Cloud,
        title: "Artificial Intelligence",
        description:
          "Our team ensures a smooth transition and provides ongoing support to maximise your ROI and achieve long-term success.",
        features: [],
        route: "/",
      },
    ];


 

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacityAbout = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const yAbout = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const { scrollYProgress: techProgress } = useScroll({ target: techRef });

 

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
  
  

  /*IMAGE RING ITEMS */
  const items = [
    { url: "/img/ring1.jpg", label: "Services", href: "/" },
    { url: "/img/ring2.jpg", label: "Blog", href: "/blog" },
    { url: "/img/ring3.jpg", label: "SAP Business One", href: "/" },
    { url: "/img/ring4.jpg", label: "SAP by Design", href: "/businessConsultant" },
    { url: "/img/ring5.jpg", label: "Microsoft Dynamic 365", href: "/" },
    { url: "/img/ring6.jpg", label: "SAGE ERP 300", href: "/blog" },
    { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
     { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
      { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
       { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
  ];

   const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

     const teamMembers: TeamMember[] = [
    { name: "Michael Anderson", role: "CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael1", bio: "Visionary leader with 15+ years in technology innovation.", social: { linkedin: "#", twitter: "#", email: "michael@quintessential.com" } },
    { name: "Sarah Mitchell", role: "CTO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah1", bio: "Expert in cloud architecture and AI solutions.", social: { linkedin: "#", twitter: "#", email: "sarah@quintessential.com" } },
    { name: "David Park", role: "Head of Engineering", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David1", bio: "Passionate about building scalable systems and leading high-performing teams.", social: { linkedin: "#", twitter: "#", email: "david@quintessential.com" } },
    { name: "Jessica Williams", role: "VP of Product Design", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica1", bio: "Creative designer focusing on user-centric experiences.", social: { linkedin: "#", twitter: "#", email: "jessica@quintessential.com" } },
  ];

  const technologies: TechnologyItem[] = [
  { name: "React", logo: "/img/home1.png" },
  { name: "TypeScript", logo: "/img/home2.png" },
  { name: "Node.js", logo: "/img/home3.png" },
  { name: "Python", logo: "/img/home4.png" },
  { name: "AWS", logo: "/img/home5.png" },
  { name: "Docker", logo: "/img/home6.png" },
  { name: "Kubernetes", logo: "/img/home7.png" },
  { name: "TensorFlow", logo: "/img/home8.png" },
  { name: "PostgreSQL", logo: "/img/home9.png" },
];
  const duplicated = [...technologies, ...technologies];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "Quintessential Technologies transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations. The results speak for themselves - we've seen a 200% increase in efficiency.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content:
        "Working with Quintessential was a game-changer for our company. Their cloud migration expertise saved us time and money while improving our infrastructure significantly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Digital Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content:
        "The mobile app they developed for us is exceptional. The attention to detail, user experience, and technical execution were outstanding. Our customers love it and our business has grown exponentially.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "VP of Engineering, DataStream",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      content:
        "Their data analytics solution gave us insights we never had before. The team was professional, responsive, and delivered beyond our requirements. Best technology partner we've ever worked with.",
      rating: 5,
    },
  ];


 // Next Slide
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Previous Slide
  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
const [paused, setPaused] = useState(false);
  // Auto Slide Every 5 Seconds
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, paused]);





    
  return (
    <main className="w-full overflow-hidden">

     
      {/*  HERO SECTION */}
    

      <section id="hero" className="relative w-full h-screen overflow-hidden">

        {/* Background slideshow */}
        {heroImages.map((image: string, index: number) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 0.25 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ scale: scaleHero }}
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

        {/* Hero content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6"
          style={{ opacity: opacityHero }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-5xl space-y-6 text-center"
          >
            <motion.h1
            className="text-6xl font-bold tracking-tight md:text-6xl lg:text-7xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[oklch(0.75_0.20_195)] via-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent ">
              Quintessential Technologies
            </span>
          </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto lg:text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Struggling to manage multiple systems and manual workflows? You're not alone.
            But you don't have to settle for inefficiency. Quintessential can help you
            navigate the complex landscape of business technology solutions and find the
            perfect fit for your business.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="px-8 py-4  rounded-full bg-gradient-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] text-white font-semibold text-lg shadow-lg transition-all duration-300 "
            >
              Schedule A Meeting
            </motion.button>
          </motion.div>

          {/* Scroll icon */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
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

        {/* Floating particles */}
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

      

     
      {/* IMAGE RING SECTION 
     
<section>
  <div className="w-full h-[600px] overflow-hidden">
        <ThreeDImageRing images={items} />
      </div>
</section>*/}
      

    
      {/*  ABOUT SECTION */}
      
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
              
              {/* Content Grid */}
              <div className="container relative z-10 mx-auto lg:ml-11 ">
                <motion.div
                  style={{ opacity, y }}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 "
                >
                  {/* Text Section */}
                  <motion.div className="space-y-6">
                    
      
                    <motion.h2
                      className="sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      Applications are only one piece of the puzzle{" "}
                      
                    </motion.h2>
      
                    <motion.div
                      className="space-y-4 lg:text-lg md:text-xl leading-relaxed text-muted-foreground text-justify"
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
                      className="relative overflow-hidden shadow-2xl rounded-2xl lg:mr-20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/img/aboutus.jpg"
                        alt="Team collaboration"
                        width={500}
                        height={300}
                        className="w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover"
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

      {/*Services Section*/}
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
                ref={servicesRef}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={servicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  What We Offer
                </motion.div>
                <h2 className="mb-4  font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
                  Our Services
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
                  Comprehensive technology solutions designed to accelerate your business growth and drive digital innovation.
                </p>
              </motion.div>
      
              {/* Services Grid */}
              <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <Link key={service.title} href={service.route}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
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
      
      
      {/* Solutions Section */}
     <section id="solutions" className="relative py-5 overflow-hidden sm:py-16 bg-linear-to-b from-background via-accent/5 to-background">
      {/* Background decorations */}
      <div className="absolute rounded-full top-20 right-10 w-96 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 blur-3xl" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={solutionsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={solutionsInView? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
              animate={solutionsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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

       
      </div>
    </section>


{/* Team Section */}
    <section id="team" className="relative overflow-hidden sm:py-16 bg-background">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />
          <motion.div
            className="absolute rounded-full top-40 right-20 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
    
          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.div
              ref={teamRef}
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Meet Our Team
              </motion.div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
                The Minds Behind Our Success
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
                Our talented team of experts is dedicated to delivering innovative solutions and exceptional service.
              </p>
            </motion.div>
    
            {/* Team Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={teamInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative overflow-hidden transition-all duration-300 border rounded-2xl bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-square bg-linear-to-br from-primary/10 to-accent/10">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Social overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-end justify-center pb-4 sm:pb-6 transition-opacity opacity-0 bg-linear-to-t from-primary/90 via-primary/60 to-transparent group-hover:opacity-100"
                      >
                        <div className="flex gap-3">
                          <motion.a href={member.social.linkedin} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                            <Linkedin className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a href={member.social.twitter} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                            <Twitter className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a href={`mailto:${member.social.email}`} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                            <Mail className="w-5 h-5 text-white" />
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
    
                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="mb-1 text-lg font-semibold transition-colors text-foreground group-hover:text-primary">{member.name}</h3>
                      <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                    </div>
    
                    {/* Decorative corner */}
                    <div className="absolute w-6 h-6 sm:w-8 sm:h-8 transition-opacity border-t-2 border-r-2 rounded-tr-lg opacity-0 top-3 right-3 sm:top-4 sm:right-4 border-primary/20 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


{/* Technologies Section */}
   <section
  id="technologies"
  ref={techRef}
  className="relative py-20 overflow-hidden"
>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={techInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-6"
  >
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        Our Technology Stack
      </h2>
      <p className="text-muted-foreground mt-2">
        Modern, scalable and industry-leading technologies we work with.
      </p>
    </div>

    {/* Scrolling Logos */}
    <div className="py-8 overflow-hidden">
                  <motion.div
                    className="flex gap-12"
                    animate={{
                      x: [0, -1 * technologies.length * (120 + 48)],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                      },
                    }}
                  >
                    {duplicated.map((tech, idx) => (
                      <motion.div
                        key={`${tech.name}-${idx}`}
                        className="flex-shrink-0 group"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative w-[120px] h-[120px] rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                          {/* Glow */}
                          <motion.div
                            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                            style={{
                              background:
                                "radial-gradient(circle at 50% 50%, oklch(0.62 0.18 195 / 0.1), transparent 70%)",
                            }}
                          />
    
                          {/* Logo */}
                          <motion.img
                            src={tech.logo}
                            alt={tech.name}
                            className="relative z-10 object-contain w-16 h-16 transition-all duration-300 filter  group-hover:grayscale-0"
                            
                            whileHover={{ filter: "grayscale(0%)" }}
                          />
    
                          {/* Name */}
                          <motion.div
                            className="absolute left-0 right-0 text-center transition-opacity duration-300 opacity-0 bottom-2 group-hover:opacity-100"
                            initial={{ y: 10 }}
                            whileHover={{ y: 0 }}
                          >
                            <span className="text-xs font-semibold bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
                              {tech.name}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="max-w-3xl mx-auto text-muted-foreground">
                We stay at the forefront of technology, continuously expanding our expertise in cloud,
                AI, and next-gen software engineering.
              </p>
            </motion.div>
  </motion.div>
</section>

 
{/* Testimonials Section */}

       <section className="relative py-16 overflow-hidden sm:py-16 bg-linear-to-b from-background via-primary/5 to-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full top-20 right-20 w-96 h-96 bg-accent/10 blur-3xl"
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
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Client Success Stories
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-balance">
            What Our Clients Say
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">

            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-8 border shadow-xl sm:p-12 rounded-2xl bg-card border-border/50 shadow-primary/5"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center mb-6 rounded-full w-14 h-14 bg-linear-to-br from-primary/20 to-accent/20"
              >
                <Quote className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <p className="mb-8 text-lg leading-relaxed text-foreground">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 p-1 rounded-full bg-linear-to-br from-primary/10 to-accent/10"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="transition-transform rounded-full hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="transition-transform rounded-full hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </main>
  );
}
