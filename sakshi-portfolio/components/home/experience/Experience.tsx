'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PiAirplaneTiltFill } from 'react-icons/pi'

import ExperienceCard from './ExperienceCard'
import { experiences } from './experience'

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })

  const planeY = useTransform(scrollYProgress, [0, 1], ['0%', '94%'])
  return (
    <section
      id='experience'
      className='relative overflow-hidden bg-[#070B17] py-28 lg:py-32'
    >
      {/* Background Glow */}

      <div className='absolute -left-52 top-24 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[170px]' />

      <div className='absolute -right-52 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]' />

      <div className='relative mx-auto max-w-7xl px-6'>
        {/* Badge */}

        <div className='mb-6 flex justify-center'>
          <div className='rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2'>
            <span className='text-xs font-semibold uppercase tracking-[3px] text-violet-300'>
              ✦ MY JOURNEY
            </span>
          </div>
        </div>

        {/* Heading */}

        <div className='mb-6 flex items-center justify-center gap-5'>
          <div className='h-[2px] w-20 bg-gradient-to-r from-transparent via-violet-500 to-violet-500' />

          <h2 className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl'>
            Experience
          </h2>

          <div className='h-[2px] w-20 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400' />
        </div>

        <p className='mx-auto mb-24 max-w-3xl text-center text-lg leading-8 text-gray-400'>
          My professional journey through internships, open-source contributions
          and real-world projects.
        </p>

        {/* ================= Timeline ================= */}

        <div ref={timelineRef} className='relative'>
          {/* ONE CONTINUOUS LINE */}

          <div className='absolute bottom-0 left-5 top-0 w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 md:left-1/2 md:-translate-x-1/2' />

          {/* Plane */}

          <motion.div
            style={{
              top: planeY,
            }}
            className='absolute left-5 z-40 -translate-x-1/2 md:left-1/2'
          >
            <div
              className='
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    border
    border-cyan-400/30
    bg-[#08111F]
    shadow-[0_0_35px_rgba(34,211,238,.45)]
    '
            >
              <PiAirplaneTiltFill
                size={24}
                className=' -rotate-220 text-cyan-400'
              />
            </div>
          </motion.div>

          {/* Cards */}

          <div className='space-y-28'>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                side={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
