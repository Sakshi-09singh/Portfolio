'use client'

import { motion } from 'framer-motion'

import FilterTabs from './FilterTabs'
import ProjectCard from './ProjectCard'
import { projects } from './projects'

export default function Projects() {
  return (
    <section
      id='projects'
      className='relative overflow-hidden bg-[#070B17] py-24'
    >
      {/* Background Glow */}
      <div className='absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]' />
      <div className='absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]' />

      <div className='relative mx-auto flex max-w-7xl flex-col items-center px-6'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-6 flex justify-center'
        >
          <div className='rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2'>
            <span className='text-xs font-semibold uppercase tracking-[3px] text-violet-300'>
              ✦ MY WORK
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-6 flex items-center justify-center gap-5'
        >
          <div className='h-[2px] w-16 bg-gradient-to-r from-transparent via-violet-500 to-violet-500 md:w-24' />

          <h2 className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl'>
            Projects
          </h2>

          <div className='h-[2px] w-16 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400 md:w-24' />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className='mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-gray-400'
        >
          A showcase of projects built with modern technologies, focusing on
          clean architecture, responsive design, and seamless user experiences
          that solve real-world problems.
        </motion.p>

        {/* Filter Tabs */}
        <div className='mt-10'>
          <FilterTabs />
        </div>

        {/* Cards */}
        <div className='mt-14 grid w-full grid-cols-1 gap-8 lg:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Button */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href='https://github.com/Sakshi-09singh'
          target='_blank'
          className='mt-16 rounded-xl border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500/20'
        >
          ✨ Explore More on GitHub →
        </motion.a>
      </div>
    </section>
  )
}
