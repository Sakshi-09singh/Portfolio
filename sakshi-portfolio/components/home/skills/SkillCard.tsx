'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type Skill = {
  name: string
  icon: IconType
}

type SkillCardProps = {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

export default function SkillCard({
  title,
  icon: CategoryIcon,
  skills,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40"
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <CategoryIcon className="h-6 w-6 text-violet-400" />

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-y-8">
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              className="group flex cursor-pointer flex-col items-center justify-center"
            >
              <Icon
                className="
                  mb-3
                  text-4xl
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:text-cyan-300
                  group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
                "
              />

              <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}