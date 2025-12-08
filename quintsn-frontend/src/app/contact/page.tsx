"use client";

import { motion,useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Navigation from "@/components/navigation";
import ContactHero from "@/components/ui/contactHero";
import Footer from "@/components/footer";

// TypeScript interfaces
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  link: string;
}

interface SocialLink {
  icon: React.ComponentType<any>;
  name: string;
  link: string;
  color: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
      icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@quintessential.com",
      link: "mailto:info@quintessential.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Innovation City, TC 12345",
      link: "#",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      link: "https://wa.me/15551234567",
      color: "hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-950",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/quintessential",
      color: "hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com/quintessential",
      color: "hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/company/quintessential",
      color: "hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950",
    },
  ];

  return (
    <>
    <section
      id="contact"
      className="relative py-20 overflow-hidden sm:py-28 bg-linear-to-b from-background via-accent/5 to-background"
    >
        <Navigation/>
        <ContactHero/>
      {/* Background decorations */}
      <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-accent/5 blur-3xl" />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
       

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 transition-all border rounded-xl bg-card border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center w-12 h-12 transition-colors rounded-lg bg-linear-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 shrink-0"
                    >
                      <info.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="mb-1 font-medium text-foreground">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center transition-all ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Optional Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center h-64 overflow-hidden border rounded-xl border-border/50 bg-linear-to-br from-primary/5 to-accent/5"
            >
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                <p className="text-sm">Map integration available</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 border shadow-xl rounded-2xl bg-card border-border/50 shadow-primary/5"
            >
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                {["name", "email", "phone", "message"].map((field, idx) => {
                  const isTextarea = field === "message";
                  const label = field === "name"
                    ? "Full Name"
                    : field === "email"
                    ? "Email Address"
                    : field === "phone"
                    ? "Phone Number"
                    : "Message";
                  const placeholder =
                    field === "name"
                      ? "John Smith"
                      : field === "email"
                      ? "john@example.com"
                      : field === "phone"
                      ? "+1 (555) 123-4567"
                      : "Tell us about your project...";
                  const InputComponent = isTextarea ? Textarea : Input;

                  return (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    >
                      <label
                        htmlFor={field}
                        className="block mb-2 text-sm font-medium text-foreground"
                      >
                        {label}
                      </label>
                      <InputComponent
                        id={field}
                        name={field}
                        type={isTextarea ? undefined : field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                        required
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        rows={isTextarea ? 5 : undefined}
                        className="transition-all resize-none focus:ring-2 focus:ring-primary/20"
                      />
                    </motion.div>
                  );
                })}

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
