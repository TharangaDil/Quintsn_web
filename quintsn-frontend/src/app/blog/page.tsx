"use client";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import BlogHero from "@/components/ui/blogHero";
import { motion } from "framer-motion";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const blogPosts: BlogPost[] = [
   {
    title: "The ROI of CRM Systems: Is It Worth the Investment?",
    description:
      "Why KSA/UAE companies see CRM as a way to make money, not just a cost If your business in the ...",
    image:
      "/img/zoho.png",
  },
  {
    title: "CRM vs. Excel: Why UAE Companies Are Making the Switch",
    description:
      "CRM vs Excel is the big question for UAE businesses in 2025. In today’s fast-paced business environment, staying ahead means ...",
    image:
       "/img/crm.png",
  },
 
  {
    title: "ZOHO CRM for Small Businesses: Empowering UAE SMEs for Growth",
    description:
      "ZOHO CRM for small businesses is transforming how UAE startups and SMEs compete with industry giants. In today’s fast-paced market, ...",
    image:
      "/img/small.png",
  },
  {
    title: "Top 10 Features of ZOHO CRM That Will Transform Your Sales Process",
    description:
      "In today’s hyper-competitive business environment, sales teams can no longer rely on guesswork, manual tracking, or disconnected systems to manage...",
    image:
       "/img/top.png",
  },
  {
    title: "What Is a CRM and Why Every UAE Business Needs One in 2025 | Quintessential Technologies",
    description:
      "Discover how a CRM system helps UAE businesses automate processes, boost sales, and stay competitive in 2025. What Is a ...",
    image:
      "/img/uae.png",
  },
  {
    title: "What is SAP Business One used for?",
    description:
      "Small and medium businesses (SMBs) are the cornerstone of the global economy, contributing more than half of all jobs worldwide ...",
    image:
      "/img/sap.png",
  },
  {
    title: "Empowering Decision-Making with SAP Business One Alert Management",
    description:
      "Empowering Decision-Making with SAP Business One Alert ManagementIn todayâ€™s fast-paced business environment, staying on top of critical activities and decisions ...",
    image:
      "/img/decision.png",
  },
  {
    title: "How to Create Custom Fields in SAP Business One",
    description:
      "Adding custom fields in SAP Business One is an incredibly valuable way for businesses to capture critical, unique data specific ...",
    image:
      "/img/custom.png",
  },
];

export default function BlogPage() {
  return (
    <>
    <section className="px-6 py-20 bg-gray-50 min-h-screen">
        <Navigation/>
        <BlogHero/>
        
        <head>
          <title>Business Technology Blog UAE | Quintessential Technologies</title>
        </head>
      <div className="container mx-auto max-w-7xl mt-20">
        
       
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>

                <a
                  href={post.link || "#"}
                  className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
