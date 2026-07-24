'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import { Experience } from './types'

type ExperienceCardProps = {
  experience: Experience
  side: 'left' | 'right'
}

export default function ExperienceCard({
  experience,
  side,
}: ExperienceCardProps) {
  const isLeft = side === 'left'

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-[40px_1fr] gap-5 md:grid-cols-[1fr_90px_1fr] md:items-center"
    >
      {/* ================= MOBILE ================= */}
      <div className="relative flex justify-center md:hidden">
        <div className="z-20 h-5 w-5 rounded-full border-4 border-cyan-400 bg-[#070B17] shadow-[0_0_20px_rgba(34,211,238,.5)]" />
      </div>

      <div className="md:hidden">
        <Card experience={experience} />
      </div>

      {/* ================= DESKTOP ================= */}

      {/* LEFT */}
      <div
        className={`relative hidden md:block ${
          isLeft ? 'pr-16' : 'invisible'
        }`}
      >
        {isLeft && (
          <>
            <div className="absolute right-0 top-1/2 h-[2px] w-16 -translate-y-1/2 bg-gradient-to-r from-violet-500 to-cyan-400" />
            <Card experience={experience} />
          </>
        )}
      </div>

      {/* CENTER */}
      <div className="relative hidden justify-center md:flex">
        <div className="z-20 h-6 w-6 rounded-full border-4 border-cyan-400 bg-[#070B17] shadow-[0_0_25px_rgba(34,211,238,.5)]" />
      </div>

      {/* RIGHT */}
      <div
        className={`relative hidden md:block ${
          !isLeft ? 'pl-16' : 'invisible'
        }`}
      >
        {!isLeft && (
          <>
            <div className="absolute left-0 top-1/2 h-[2px] w-16 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-violet-500" />
            <Card experience={experience} />
          </>
        )}
      </div>
    </motion.div>
  )
}

function Card({ experience }: { experience: Experience }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,.18)]">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
          {experience.duration}
        </span>

        <div className="flex items-center gap-2 text-sm text-cyan-400">
          <MapPin size={15} />
          {experience.location}
        </div>
      </div>

      <h3 className="mt-6 text-3xl font-bold text-white">
        {experience.role}
      </h3>

      <p className="mt-2 text-lg font-medium text-violet-400">
        {experience.company}
      </p>

      <p className="mt-6 leading-8 text-gray-400">
        {experience.description}
      </p>

      <div className="my-7 h-px bg-white/10" />

      <ul className="space-y-3">
        {experience.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-gray-300">
            <span className="mt-[9px] h-2 w-2 rounded-full bg-cyan-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-violet-500/40 hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}