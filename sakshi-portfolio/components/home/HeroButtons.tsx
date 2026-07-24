"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import ResumeModal from "@/components/ui/ResumeModal";

export default function HeroButtons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
        {/* Resume Button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
        >
          <Download size={18} />
          Resume
        </button>

        {/* Projects Button */}
        <Link
          href="#projects"
          className="flex items-center gap-2 rounded-full border border-cyan-400 px-7 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#070B17] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          View Projects
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}