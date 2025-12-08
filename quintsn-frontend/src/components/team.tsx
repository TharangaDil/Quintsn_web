"use client";

import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";

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

export default function Team() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers: TeamMember[] = [
    { name: "Michael Anderson", role: "CEO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael1", bio: "Visionary leader with 15+ years in technology innovation.", social: { linkedin: "#", twitter: "#", email: "michael@quintessential.com" } },
    { name: "Sarah Mitchell", role: "CTO", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah1", bio: "Expert in cloud architecture and AI solutions.", social: { linkedin: "#", twitter: "#", email: "sarah@quintessential.com" } },
    { name: "David Park", role: "Head of Engineering", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David1", bio: "Passionate about building scalable systems and leading high-performing teams.", social: { linkedin: "#", twitter: "#", email: "david@quintessential.com" } },
    { name: "Jessica Williams", role: "VP of Product Design", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica1", bio: "Creative designer focusing on user-centric experiences.", social: { linkedin: "#", twitter: "#", email: "jessica@quintessential.com" } },
    { name: "Robert Chen", role: "Head of Data Science", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert1", bio: "Data scientist specializing in machine learning.", social: { linkedin: "#", twitter: "#", email: "robert@quintessential.com" } },
    { name: "Emily Rodriguez", role: "Director of Cloud Solutions", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily1", bio: "Cloud expert helping businesses migrate and optimize infrastructure.", social: { linkedin: "#", twitter: "#", email: "emily@quintessential.com" } },
    { name: "James Thompson", role: "VP of Cybersecurity", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James1", bio: "Security specialist ensuring robust protection for client digital assets.", social: { linkedin: "#", twitter: "#", email: "james@quintessential.com" } },
    { name: "Lisa Kumar", role: "Head of Client Success", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa1", bio: "Dedicated to building lasting relationships and ensuring client satisfaction.", social: { linkedin: "#", twitter: "#", email: "lisa@quintessential.com" } },
  ];

  return (
    <section id="team" className="relative py-20 overflow-hidden sm:py-28 bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/5 to-transparent" />
      <motion.div
        className="absolute rounded-full top-40 right-20 w-96 h-96 bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

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
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden transition-all duration-300 border rounded-2xl bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-linear-to-br from-primary/10 to-accent/10">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Social overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity opacity-0 bg-linear-to-t from-primary/90 via-primary/60 to-transparent group-hover:opacity-100"
                  >
                    <div className="flex gap-3">
                      <motion.a href={member.social.linkedin} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Linkedin className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a href={member.social.twitter} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Twitter className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a href={`mailto:${member.social.email}`} whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Mail className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-semibold transition-colors text-foreground group-hover:text-primary">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute w-8 h-8 transition-opacity border-t-2 border-r-2 rounded-tr-lg opacity-0 top-4 right-4 border-primary/20 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
       
      </div>
    </section>
  );
}
