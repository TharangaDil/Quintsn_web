"use client";

import ThreeDImageRing from "./ui/imageRing";


export default function ImageRing() {
  const items = [
    { url: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "Services", href: "/serviceDetails" },
    { url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "Blog", href: "/blog" },
    { url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "SAP Business One", href: "/servicesDetails" },
    { url: "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "SAP by Design", href: "/businessConsultant" },
    { url: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "Microsoft Dynamic 365", href: "/" },
    { url: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "SAGE ERP 300", href: "/blog" },
    { url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200", label: "Oracle Netsuit", href: "/servicesDetails" },
    
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden">
      
  <ThreeDImageRing images={items} />
</div>

  );
}
