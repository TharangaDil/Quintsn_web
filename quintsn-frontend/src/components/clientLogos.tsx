"use client";

import { motion,useInView } from "framer-motion";
import { useRef } from "react";

interface Client {
  name: string;
  color: string;
}

export default function ClientLogos() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients: Client[] = [
    { name: "TechCorp", color: "from-blue-500 to-blue-600" },
    { name: "InnovateLabs", color: "from-purple-500 to-purple-600" },
    { name: "DataStream", color: "from-green-500 to-green-600" },
    { name: "CloudSys", color: "from-orange-500 to-orange-600" },
    { name: "DigitalHub", color: "from-pink-500 to-pink-600" },
    { name: "SmartTech", color: "from-indigo-500 to-indigo-600" },
    { name: "FutureSoft", color: "from-teal-500 to-teal-600" },
    { name: "NextGen", color: "from-red-500 to-red-600" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className=" ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading 
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="mb-2 text-xl font-semibold sm:text-2xl text-muted-foreground">
            Trusted by Leading Companies
          </h3>
          <p className="text-sm text-muted-foreground">
            Join hundreds of successful businesses working with us
          </p>
        </motion.div>*/}

       
          

          <motion.div
            className="flex gap-12"
            animate={{ x: [0, -clients.length * 208] }} // 208 = approx width + gap per logo
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: (index % clients.length) * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="shrink-0"
              >
                <div className="flex items-center justify-center w-40 h-20 gap-3 transition-all border rounded-lg border-border/50 bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group">
                  <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${client.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-semibold text-foreground">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        
      </div>
    </section>
  );
}
