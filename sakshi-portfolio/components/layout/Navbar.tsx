'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navbar'
import ResumeModal from '@/components/ui/ResumeModal'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <header className='fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070B17]/70 backdrop-blur-xl'>
        <nav className='mx-auto flex h-20 max-w-7xl items-center justify-between px-6'>
          {/* Logo */}
          <Link href='/' className='text-4xl font-bold tracking-tight'>
            <span className='text-white'>Sakshi</span>
            <span className='text-violet-500'>.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden items-center gap-10 lg:flex'>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='relative text-[15px] font-medium text-gray-300 transition duration-300 hover:text-cyan-400'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className='text-white lg:hidden'
          >
            <Menu size={30} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Blur Background */}
        <div
          onClick={() => setIsOpen(false)}
          className='absolute inset-0 bg-black/50 backdrop-blur-sm'
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-screen w-[72%] max-w-[340px] bg-[#0B1120] border-r border-white/10 p-8 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Top */}
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-bold'>
              <span className='text-white'>Sakshi</span>
              <span className='text-violet-500'>.</span>
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-300 hover:text-white'
            >
              <X size={30} />
            </button>
          </div>

          {/* Links */}

          <ul className='mt-14 space-y-3'>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='flex rounded-xl px-5 py-4 text-lg font-medium text-gray-300 transition hover:bg-violet-600/20 hover:text-white'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom */}

          <div className='absolute bottom-10 left-8 right-8'>
            <button
              onClick={() => {
                setIsOpen(false) // Drawer close
                setIsResumeOpen(true) // Resume Modal open
              }}
              className='flex w-full justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white transition hover:shadow-[0_0_25px_rgba(139,92,246,.5)]'
            >
              Download Resume
            </button>
          </div>
        </aside>
      </div>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  )
}
