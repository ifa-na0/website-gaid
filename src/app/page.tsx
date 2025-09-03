"use client";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorks";

export default function Page() {
  return (
    <main>
      <Hero />
      <HowItWorksSection className="bg-white py-24" />
    </main>
  );
}
