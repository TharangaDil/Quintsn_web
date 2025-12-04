"use client";
import Navigation from "@/components/navigation";
import RaysBackground from "@/components/ui/serviceHero";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
        <Navigation/>
      <RaysBackground
        theme="dark"
        animated={true}
        animationSpeed={1}
        opacity={0.7}
        blurAmount={8}
        colors={{
          purple: 'rgba(169, 73, 207, 1)',
          yellow: 'rgba(238, 248, 86, 1)',
          pink: 'rgba(248, 72, 202, 1)',
          teal: 'rgba(119, 235, 195, 1)',
          blue: 'rgba(77, 71, 214, 1)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Hello Next.js!</h1>
        </div>
      </RaysBackground>
    </div>
  );
}
