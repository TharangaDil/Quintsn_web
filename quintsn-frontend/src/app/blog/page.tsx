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
    title: "CRM vs Excel: Why UAE Companies Are Switching",
    description:
      "CRM vs Excel is the big question for UAE businesses in 2025. In today’s fast-paced environment...",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
  },
  {
    title: "The ROI of CRM Systems: Is It Worth The Investment?",
    description:
      "Why UAE companies see CRM as a way to make money, not just a cost...",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
  {
    title: "Zoho CRM for Small Businesses: UAE Case Study",
    description:
      "Zoho CRM is empowering UAE startups and SMEs to compete with industry giants...",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
    <section className="px-6 py-20 bg-gray-50 min-h-screen">
        <Navigation/>
        <BlogHero/>
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
