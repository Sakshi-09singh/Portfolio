'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'

import { Project } from './types'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40'
    >
      <div className='flex flex-col lg:flex-row'>
        {/* Image */}
        <div className='relative h-[250px] w-full overflow-hidden rounded-l-3xl bg-[#0f172a] lg:h-auto lg:w-[42%]'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes='(max-width:1024px) 100vw, 40vw'
            className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
          />
        </div>

        {/* Content */}
        <div className='flex flex-1 flex-col p-6'>
          {/* Title */}
          <div className='mb-3'>
            <span className='inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-300'>
              {project.badge}
            </span>

            <h3 className='mt-4 text-2xl font-bold text-white'>
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className='mb-6 leading-7 text-gray-400'>{project.description}</p>

          {/* Technologies */}
          <div className='mb-8 flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className='mt-auto flex gap-3'>
            <Link
              href={project.github}
              target='_blank'
              className='flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:border-violet-500 hover:bg-white/5'
            >
              <FaGithub size={18} />
              GitHub
            </Link>

            <Link
              href={project.live}
              target='_blank'
              className='flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white transition hover:opacity-90'
            >
              Live Demo
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
