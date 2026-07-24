'use client'

import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { skillCategories } from './skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070B17] py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-10 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-violet-300">
              ✦ MY SKILLS
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-5"
        >
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-violet-500 to-violet-500 md:w-24" />

          <h2 className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Skills
          </h2>

          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400 md:w-24" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-gray-400"
        >
          A collection of technologies, frameworks, and tools I use to build
          fast, scalable, and modern web applications while continuously
          improving my development skills.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}