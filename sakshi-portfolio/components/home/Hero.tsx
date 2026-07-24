"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#070B17] pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-6 lg:px-12">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}