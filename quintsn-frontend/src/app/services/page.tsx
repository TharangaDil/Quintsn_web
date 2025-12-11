import Link from "next/link";
import  { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {Object.entries(servicesData).map(([key, value]) => (
          <Link
            key={key}
            href={`/services/${key}`}
            className="p-6 border rounded-2xl hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{value.title}</h2>
            <p className="text-muted-foreground">Learn more →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
