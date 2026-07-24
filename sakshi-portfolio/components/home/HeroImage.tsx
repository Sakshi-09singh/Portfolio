"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:flex w-1/2 items-center justify-center"
    >
      <div className="relative">
        {/* Purple Glow */}
        <div className="absolute -inset-5 rounded-full bg-violet-600/30 blur-3xl"></div>

        {/* Cyan Glow */}
        <div className="absolute inset-5 rounded-full bg-cyan-500/20 blur-2xl"></div>

        {/* Image */}
        <div className="relative h-[430px] w-[430px] overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.35)]">
          <Image
            src="/images/profile.png" 
            alt="Sakshi Singh"
            fill
            priority
            sizes="430px"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}