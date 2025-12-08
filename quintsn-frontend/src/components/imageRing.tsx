"use client";

import ThreeDImageRing from "./ui/imageRing";


export default function ImageRing() {
  const items = [
    { url: "/img/img1.png", label: "Home", href: "/" },
    { url: "/img/img2.png", label: "About", href: "/aboutDetails" },
    { url: "/img/img3.png", label: "Services", href: "/servicesDetails" },
    { url: "/img/img4.png", label: "Business Consultancy", href: "/businessConsultant" },
    { url: "/img/img5.png", label: "Contact", href: "/" },
    { url: "/img/img6.png", label: "Blog", href: "/" },
    { url: "/img/img8.png", label: "Support", href: "/" },
    { url: "/img/img9.png", label: "Careers", href: "/" },
  ];

  return (
    <div className="w-full h-[600px] ">
      
  <ThreeDImageRing images={items} />
</div>

  );
}
