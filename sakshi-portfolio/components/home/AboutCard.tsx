"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AboutCardProps {
  icon: ReactNode;
  title: string;
  heading: string;
  description: string;
}

export default function AboutCard({
  icon,
  title,
  heading,
  description,
}: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-[linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.02))]
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-400/20
        hover:shadow-[0_15px_45px_rgba(34,211,238,.12)]
      "
    >
      {/* Cyan Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="relative flex items-start gap-6">
        {/* Icon Box */}
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400/10
            bg-cyan-400/10
            text-cyan-400
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-cyan-400/15
          "
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <p className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {heading}
          </h3>

          <p className="mt-3 leading-7 text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}