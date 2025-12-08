"use client";

import { useRef } from "react";
import { motion,useScroll,useTransform,useInView } from "framer-motion";
import Image from "next/image";
import Mission from "../../components/mission";

import Navigation from "@/components/navigation";

import Footer from "@/components/footer";
import ChooseUs from "@/components/ui/chooseUs";
import ConsultancyHero from "@/components/ui/consultancyHero";
import SelectedUs from "@/components/ui/selectedUs";


export default function BussinessConsultant() {
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
      className="relative flex items-center min-h-screen px-6 py-24 overflow-hidden"
    >
     
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -50]),
        }}
      />
      <div>
         <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Navigation/>
          <ConsultancyHero/>
          

          
        </motion.div>



    {/*second*/}
      <div className="container relative z-10 mx-auto mt-20">
        

        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
        >
          <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl ml-[60px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={200}
                height={150}
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>

          {/* Text Section */}
          <motion.div className="space-y-6">
            

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ml-[60px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             We are at your Service{" "}
            
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground ml-[60px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Our team of consultants are highly experienced and certified in various ERP systems, including SAP, Oracle, 
                Microsoft Dynamics and SAGE. We keep up-to-date with the latest trends and technologies in the industry, and 
                we use this knowledge to help our clients stay ahead of the curve.
              </p>
              <p>
                We believe in providing exceptional customer service and maintaining long-term relationships with our clients. 
                Our goal is to help you succeed by maximizing the potential of your Applications/ERP system.
              </p>
              <p>
                Contact us today to learn more about our services and how we can help your business achieve its goals with a 
                powerful and efficient application/ERP system.
              </p>
              
              
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
        <SelectedUs/>
        
      </div>

   
    
      </div>
      
    </section>
   
    <Footer/>

    </>
    
  );
}
