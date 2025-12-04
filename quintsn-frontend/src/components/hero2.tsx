import { motion,useScroll,useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-background via-accent/10 to-background">
      {/* Animated Background Shapes with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
        >
          <Sparkles className="w-4 h-4" />
          <span>Welcome to Innovation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Transforming Ideas Into{" "}
          <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text">
            Digital Excellence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl text-muted-foreground text-balance"
        >
          At Quintessential Technologies, we deliver cutting-edge technology solutions
          that empower businesses to thrive in the digital age. From software development
          to cloud solutions, we're your trusted partner in innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className="transition-shadow shadow-lg group shadow-primary/20 hover:shadow-xl hover:shadow-primary/30" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" variant="secondary" className="transition-shadow shadow-md hover:shadow-lg" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4 sm:gap-8 sm:mt-20"
        >
          {[
            { label: "Years Experience", value: "10+" },
            { label: "Projects Delivered", value: "500+" },
            { label: "Happy Clients", value: "200+" },
            { label: "Team Members", value: "50+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="p-4 transition-colors border sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <div className="mb-1 text-2xl font-bold sm:text-3xl md:text-4xl text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
