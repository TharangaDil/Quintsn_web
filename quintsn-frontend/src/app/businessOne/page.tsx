"use client";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import BusinessOneHero from "@/components/ui/businessOneHero";
import React from "react";
import { CheckSquare } from "lucide-react";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gray-50 py-20 px-6">
        <BusinessOneHero/>
      <div className="max-w-7xl mx-auto mt-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is SAP Business One?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            A single, affordable ERP solution to manage your entire small
            business – from accounting and financials, purchasing, inventory,
            sales and customer relationships to reporting and analytics.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/img/AI.jpg" // update image path
              alt="SAP Business One Dashboard"
              width={600}
              height={400}
              className="w-full max-w-xl h-auto object-contain"
              priority
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Gain greater control over your business or subsidiary with SAP
              Business One. Streamline key processes, gain greater insight into
              your business, and make decisions based on real-time information
              – so you can drive profitable growth.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-800">
                <CheckSquare className="text-blue-600 w-5 h-5" />
                On-premise or cloud deployment
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckSquare className="text-blue-600 w-5 h-5" />
                Integrated business intelligence
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckSquare className="text-blue-600 w-5 h-5" />
                Integration with the SAP HANA platform
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <CheckSquare className="text-blue-600 w-5 h-5" />
                Quick deployment
              </li>
            </ul>

            {/* Button */}
            <a
              href="/sap-solution-brief"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-8 py-3 rounded-md shadow-md"
            >
              SAP Solution Brief
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
