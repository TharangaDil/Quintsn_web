"use client";

import { motion} from "framer-motion";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Services from "@/components/services";
import Mission from "@/components/mission";
import ClientLogos from "@/components/clientLogos";
import Solutions from "@/components/solutions";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scrollToTop";
import CustomCursor from "@/components/customCursor";
import ScrollProgress from "@/components/scrollProgress";
import Technologies from "@/components/technologies";
import CaseStudies from "@/components/caseStudies";
import FAQ from "@/components/faq";
import Hero2 from "@/components/hero";
import ImageRing from "@/components/imageRing";


export default function HomePage() {
  return (
    <motion.div
      className="min-h-screen bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <CustomCursor/>
      <ScrollProgress/>
      <Navigation/>
      
      <Hero/>
      <ImageRing/>
      <About />
    
      <Services />
      <Technologies/>
      <Solutions />
      <Team />
       <CaseStudies/>
      <ClientLogos />
      <Testimonials />
     <FAQ/>
     
      <Footer />
      <ScrollToTop />
      
     
    </motion.div>
  );
}
