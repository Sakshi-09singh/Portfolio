'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-[#0B1020] via-[#101B33] to-[#0B5F69]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-gray-300">
            © {new Date().getFullYear()} Sakshi Singh.
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Crafting scalable and beautiful web experiences.
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}