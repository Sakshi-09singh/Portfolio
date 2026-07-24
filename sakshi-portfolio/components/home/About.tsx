'use client'

import { motion } from 'framer-motion'
import { GraduationCap, CodeXml } from 'lucide-react'
import AboutCard from './AboutCard'

export default function About() {
  return (
    <section id='about' className='relative overflow-hidden bg-[#070B17] py-32'>
      {/* Background Glow */}
      <div className='absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]' />

      <div className='absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px]' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-10'>
        {/* Heading */}

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-6 flex justify-center'
        >
          <div className='rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2'>
            <span className='text-xs font-semibold uppercase tracking-[3px] text-violet-300'>
              ✦ ABOUT ME
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
            About
          </h2>

          <div className='h-[2px] w-16 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400 md:w-24' />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className='mx-auto mb-20 max-w-3xl text-center text-lg leading-8 text-gray-400'
        >
          Know more about my journey, experience, and passion for creating
          modern, responsive, and user-focused web applications with clean
          architecture and intuitive user experiences.
        </motion.p>

        <div className='grid gap-8 lg:grid-cols-[2fr_1fr]'>
          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-[linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.02))]
            p-12
            backdrop-blur-2xl
            '
          >
            {/* Purple Glow */}

            <div className='absolute -left-28 top-8 h-60 w-60 rounded-full bg-violet-500/20 blur-[120px]' />

            <div className='relative'>
              <h3 className='bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent'>
                Who I Am
              </h3>

              <div className='mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400' />

              <p className='mt-10 text-lg leading-10 text-gray-300'>
                As a{' '}
                <span className='font-semibold text-white'>
                  Frontend Developer Intern
                </span>{' '}
                at <span className='text-cyan-400'>MetaUpSpace</span>
                , I focus on building modern, responsive, and scalable web
                applications using React.js, Next.js, TypeScript, and Tailwind
                CSS.
                <br />
                <br />I enjoy solving real-world problems through clean code,
                intuitive user interfaces, and continuous learning while
                expanding my skills toward becoming a Full Stack Developer.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}

          <div className='space-y-8'>
            <AboutCard
              icon={<GraduationCap size={34} />}
              title='Current'
              heading='MCA Student | KIET'
              description='Pursuing Master of Computer Applications'
            />

            <AboutCard
              icon={<CodeXml size={34} />}
              title='Specialization'
              heading='Frontend Developer'
              description='React.js • Next.js • TypeScript • Tailwind CSS'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
