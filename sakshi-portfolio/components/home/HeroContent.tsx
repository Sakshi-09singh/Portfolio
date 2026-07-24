'use client'

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Sparkles, Code2, Award, GraduationCap } from 'lucide-react'
import HeroButtons from './HeroButtons'
import SocialIcons from './SocialIcons'

const stats = [
  {
    icon: Award,
    value: '200+',
    label: 'DSA Problems',
    color: 'text-amber-400',
  },
  {
    icon: Code2,
    value: 'Intern',
    label: 'MetaUpSpace',
    color: 'text-cyan-400',
  },
  {
    icon: GraduationCap,
    value: 'MCA',
    label: 'KIET Ghaziabad',
    color: 'text-violet-400',
  },
]

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className='w-full lg:w-1/2 text-center lg:text-left'
    >
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md'
      >
        <span className='relative flex h-2.5 w-2.5'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
          <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500'></span>
        </span>
        <span className='text-xs font-semibold tracking-wide text-emerald-300'>
          Available for Roles & Internships
        </span>
      </motion.div>

      {/* Greeting */}
      <p className='mb-2 text-lg font-medium text-gray-300 flex items-center justify-center lg:justify-start gap-2'>
        <span>Hello, It&apos;s Me</span>
        <Sparkles size={18} className='text-amber-400 animate-pulse' />
      </p>

      {/* Name */}
      <h1 className='text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl'>
        Sakshi{' '}
        <span className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm'>
          Singh
        </span>
      </h1>

      {/* Typewriter */}
      <h2 className='mt-4 text-2xl font-semibold text-white sm:text-3xl'>
        And I&apos;m a{' '}
        <span className='text-cyan-400 underline decoration-cyan-500/40 underline-offset-8'>
          <Typewriter
            words={[
              'Frontend Developer',
              'Problem Solver',
              'Software Developer',
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* Description */}
      <p className='mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg'>
        Passionate MCA student and Frontend Developer Intern at MetaUpSpace. I
        craft modern, high-performance web applications with clean architecture,
        sleek UI design, and responsive user experiences.
      </p>

      {/* Stat Counter Grid */}
      <div className='mt-8 grid grid-cols-3 gap-3 max-w-lg'>
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className='rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur-md hover:border-violet-500/40 hover:bg-white/[0.06] transition duration-300'
            >
              <Icon size={18} className={`mx-auto mb-1 ${s.color}`} />
              <div className='text-base font-extrabold text-white'>
                {s.value}
              </div>
              <div className='text-[11px] font-medium text-gray-400'>
                {s.label}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Buttons */}
      <div className='mt-8'>
        <HeroButtons />
      </div>

      {/* Social Icons */}
      <div className='mt-8'>
        <SocialIcons />
      </div>
    </motion.div>
  )
}
