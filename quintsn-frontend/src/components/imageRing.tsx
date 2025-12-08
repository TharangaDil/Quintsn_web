"use client";

import ThreeDImageRing from "./ui/imageRing";


export default function ImageRing() {
  const items = [
    { url: "/img/img1.png", label: "Services", href: "/serviceDetails" },
    { url: "/img/img2.png", label: "Blog", href: "/blog" },
    { url: "/img/img3.png", label: "SAP Business One", href: "/servicesDetails" },
    { url: "/img/img4.png", label: "SAP by Design", href: "/businessConsultant" },
    { url: "/img/img5.png", label: "Microsoft Dynamic 365", href: "/" },
    { url: "/img/img6.png", label: "SAGE ERP 300", href: "/blog" },
    { url: "/img/img8.png", label: "Oracle Netsuit", href: "/servicesDetails" },
    
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden">
      
  <ThreeDImageRing images={items} />
</div>

  );
}
