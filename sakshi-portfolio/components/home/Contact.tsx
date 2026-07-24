'use client'

import { motion } from 'framer-motion'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden bg-[#070B17] py-24 lg:py-28'
    >
      {/* Background Glow */}
      <div className='absolute -left-44 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[140px]' />

      <div className='absolute -right-44 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[140px]' />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-10'>
        {/* Heading */}
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
              ✦ GET IN TOUCH
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
            Contact
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
          Whether you have an opportunity, a collaboration, or just want to say
          hello, I&apos;d love to hear from you. Let&apos;s build something meaningful
          together.
        </motion.p>

        {/* Content */}
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.3fr]'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
