"use client";

import { motion,useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "./ui/button";

// TypeScript interface for a testimonial
interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 overflow-hidden sm:py-28 bg-linear-to-b from-background via-primary/5 to-background">
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
  );
}
