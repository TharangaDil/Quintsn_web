import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

type FooterLink = {
  name: string;
  href: string;
};

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  link: string;
  color: string;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/aboutDetails" },
      { name: "Services", href: "/servicesDetails" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
    Applications: [
      { name: "SAP Business Onet", href: "#services" },
      { name: "SAP by Design", href: "#services" },
      { name: "Microsoft Dynamic 365", href: "#services" },
      { name: "SAGE ERP 300", href: "#services" },
      { name: "Oracle Netsuit", href: "#services" },
    ],
    
  };

  const socialLinks: SocialLink[] = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      link: "https://wa.me/971561289803",
      color: "hover:text-green-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/QuintessentialTechnologies",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com/quintessentialtechnology",
      color: "hover:text-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/company/quintessential-technologie",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="border-t bg-linear-to-b from-accent/5 to-background border-border/50 bg-gray-200">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-16 " >
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 space-x-2 group">
              <div className="flex items-center justify-center w-[200px] rounded-lg bg-linear-to-br from-primary to-primary/70">
                <span className="text-lg font-bold text-primary-foreground">
                  <img 
                  src="/img/logo.png"   
                  alt="Logo"
                  className="object-contain w-full h-full"
                 />
                </span>
              </div>
              
            </Link>
            <p className="mb-6 leading-relaxed text-muted-foreground text-justify text-[14px] mr-10">
              Quintessential Technologies: ERP and Business Technology Consulting for Growth. We empower Trading & 
              Service companies across MENA, North America, and MEA
            </p>

            
          </div>
          {/* Contact Info */}
            <div className="space-y-6 text-sm">
              <h3 className="mb-4 font-semibold capitalize text-foreground">Contact</h3>
              <a
                href="mailto:sales@quintsn.com"
                className="flex items-center gap-2 transition-colors text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" />
               sales@quintsn.com
              </a>
              <a
                href="tel:+971 561 289 803"
                className="flex items-center gap-2 transition-colors text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                +971 561 289 803
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>No:401, Mohammad Saleh al GURG, Dubai, UAE.</span>
              </div>
            </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-4 font-semibold capitalize text-foreground">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors text-muted-foreground hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className=" border-t border-border/50">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Copyright */}
            <p className="text-xs text-center text-muted-foreground md:text-left">
              Copyright © {currentYear} ERP & CRM Consulting Services | Powered by ERP & CRM Consulting Services
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground transition-all ${social.color} hover:border-current`}
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
