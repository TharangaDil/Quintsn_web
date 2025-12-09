"use client";

import ThreeDImageRing from "./ui/imageRing";


export default function ImageRing() {
  const items = [
    { url: "/img/ring1.jpg", label: "Services", href: "/" },
    { url: "/img/ring2.jpg", label: "Blog", href: "/blog" },
    { url: "/img/ring3.jpg", label: "SAP Business One", href: "/" },
    { url: "/img/ring4.jpg", label: "SAP by Design", href: "/businessConsultant" },
    { url: "/img/ring5.jpg", label: "Microsoft Dynamic 365", href: "/" },
    { url: "/img/ring6.jpg", label: "SAGE ERP 300", href: "/blog" },
    { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
    { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
    { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
    { url: "/img/ring7.jpg", label: "Oracle Netsuit", href: "/" },
    
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden">
      
  <ThreeDImageRing images={items}  />
</div>

  );
}
