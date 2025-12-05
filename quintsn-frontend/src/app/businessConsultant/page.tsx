"use client";

import { useRef } from "react";
import { motion,useScroll,useTransform,useInView } from "framer-motion";
import Image from "next/image";


import Navigation from "@/components/navigation";
import Hero2 from "@/components/hero2";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";
import Products from "@/components/products";
import { ShineButton } from "@/components/ui/shineButton";


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
          <Hero2/>
          {/*}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Bussiness Consultancy
          </motion.div>*/}

        </motion.div>

      <div className="container relative z-10 mx-auto">
        

        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20"
        >
          
          {/* Text Section */}
          <motion.div className="space-y-6">
            
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              
            </motion.div>


            

            
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
          <motion.div className="space-y-6">
           

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             We are at your Service{" "}
              
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-justify mr-5"
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
        
        </motion.div>
        

      </div>


       {/*Expertise Part*/}
       <div className="container relative z-10 mx-auto">
        
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center mt-12">
            Why you should Choose Us?
          </h2>
          
        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20 "
        >
          
       
          <motion.div className="ml-44">
         
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <motion.div className="space-y-6">
           

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             Expertise{" "}
              
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
               Our consultants are experts in ERP implementation, optimization, integration, and support. We have worked with
               numerous organizations across various industries, and our team brings a wealth of knowledge and experience to
                every project.
              </p>
              
            </motion.div>

           
          </motion.div>
           
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
         
          
        <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl mt-20 mr-40"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              
            </motion.div>

        </motion.div>
        
      </div>

      {/*Consultants Part*/}
       <div className="container relative z-10 mx-auto">
        
        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20 "
        >
          <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl mt-20 ml-44"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              
            </motion.div>
          
       
          <motion.div className="mr-40">
            
         
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            
             <motion.div className="space-y-6">
              
           

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             Customized Solutions{" "}
              
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
               We understand that every business has unique needs, and we work closely with our clients to provide customized 
               solutions that meet those needs. We take the time to understand your business processes and objectives, and we 
               tailor our solutions to ensure that they align with your goals.
              </p>
              
            </motion.div>

           
          </motion.div>
           
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

      {/*Results-Driven Part*/}
       <div className="container relative z-10 mx-auto">
        
          
        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20 "
        >
          
       
          <motion.div className="ml-44">
         
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <motion.div className="space-y-6">
           

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             Results-Driven{" "}
              
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
               Our primary focus is on delivering results that help our clients achieve their business objectives. We are 
               committed to ensuring that our solutions provide measurable improvements in efficiency, productivity, and 
               profitability.
              </p>
              
            </motion.div>

           
          </motion.div>
           
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
         
          
        <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl mt-20 mr-40"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              
            </motion.div>

        </motion.div>
        
      </div>
      {/*Client Satisfaction Part*/}
       <div className="container relative z-10 mx-auto">
          
        <motion.div
          style={{ opacity, y }}
          className="grid items-center gap-12 md:grid-cols-2 lg:gap-20 "
        >
           <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl mt-20 ml-44"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={300}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              
            </motion.div>
       
          <motion.div className="mr-40">
         
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <motion.div className="space-y-6">
           

            <motion.h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
             Client Satisfaction{" "}
              
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
               We prioritize client satisfaction and are dedicated to delivering exceptional service and support.
                We are committed to building long-term relationships with our clients and helping them achieve 
                sustained success.
              </p>
              
            </motion.div>

           
          </motion.div>
           
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
      {/*contact Part*/}
       <div className="container relative z-10 mx-auto">
        
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-foreground text-center mt-20">
           Contact Us
          </h2>
          
        <motion.div
          style={{ opacity, y }}
          className=" "
        >
          
       
          <motion.div className="ml-44 mr-40 ">
         
            {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <motion.div className="space-y-6">
           

            <motion.div
              className="space-y-4 text-lg leading-relaxed text-muted-foreground text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
               If you are interested in our business consultancy services or have any questions, please don’t hesitate to 
               contact us. Our team is ready to help you achieve your business objectives and unlock your full potential.
              </p>
              
            </motion.div>
           <div className="w-full mt-15 flex justify-center items-center">
              <ShineButton label="CONTACT US" />
            </div>


           
          </motion.div>
          <Products/>
           
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
    <Footer/>
    
    </>
  );
}
