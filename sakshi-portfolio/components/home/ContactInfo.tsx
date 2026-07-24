'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/80 p-8 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10">
        <h3 className="mb-4 text-3xl font-bold text-white">
          Let&apos;s Connect
        </h3>

        <p className="mb-8 leading-7 text-gray-400">
          Whether you&apos;re looking for a Frontend Developer Intern, have an
          exciting project opportunity, or simply want to chat about web
          development, feel free to reach out. I respond within 24 hours!
        </p>

        <div className="space-y-5">
          {/* Email Card */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
              <Mail size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                Email Address
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                sakshisingh9906@gmail.com
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-500/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-gray-500">
                Location & Availability
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Ghaziabad, Uttar Pradesh • Remote / On-site
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}