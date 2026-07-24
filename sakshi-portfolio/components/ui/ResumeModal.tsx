"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X, ExternalLink, FileText, Sparkles, Briefcase, GraduationCap, Code } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"pdf" | "summary">("pdf");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] shadow-[0_0_50px_rgba(139,92,246,0.3)] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#070B17] px-6 py-4 gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Resume Preview</span>
                    <span className="rounded-full bg-violet-500/20 text-violet-300 text-xs px-2.5 py-0.5 font-medium border border-violet-500/30">
                      Sakshi Singh
                    </span>
                  </h2>
                  <p className="text-xs text-gray-400">
                    Frontend Developer Intern • MCA @ KIET Ghaziabad
                  </p>
                </div>
              </div>

              {/* Tab Switcher & Actions */}
              <div className="flex items-center gap-3">
                <div className="flex rounded-xl bg-white/5 p-1 border border-white/10">
                  <button
                    onClick={() => setActiveTab("pdf")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      activeTab === "pdf"
                        ? "bg-violet-600 text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <FileText size={14} />
                    PDF Document
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      activeTab === "summary"
                        ? "bg-violet-600 text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Sparkles size={14} />
                    Quick Highlights
                  </button>
                </div>

                <a
                  href="/SAKSHI__.pdf"
                  download="Sakshi_Singh_Resume.pdf"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:scale-105"
                >
                  <Download size={15} />
                  Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 overflow-y-auto min-h-[60vh] max-h-[70vh] bg-[#070B17]">
              {activeTab === "pdf" ? (
                <iframe
                  src="/SAKSHI__.pdf#toolbar=1"
                  className="h-full min-h-[65vh] w-full border-none"
                  title="Sakshi Singh Resume PDF"
                />
              ) : (
                <div className="p-8 space-y-6 text-gray-200">
                  {/* Highlights Banner */}
                  <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-900/20 via-cyan-900/20 to-transparent p-6 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sparkles size={20} className="text-cyan-400" />
                      Sakshi Singh — Executive Summary
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      Frontend Developer Intern at MetaUpSpace and MCA student at KIET with strong foundations in React.js, Next.js, TypeScript, Tailwind CSS, Java, and Data Structures. Solved 200+ problems on LeetCode.
                    </p>
                  </div>

                  {/* 3 Column Grid */}
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Education */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-base mb-3">
                        <GraduationCap size={18} />
                        Education
                      </div>
                      <div className="space-y-3 text-xs">
                        <div>
                          <p className="font-semibold text-white">MCA (2023-2025)</p>
                          <p className="text-gray-400">KIET Group of Institutions</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">B.Sc Computer Science</p>
                          <p className="text-gray-400">Undergraduate Degree</p>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <div className="flex items-center gap-2 text-violet-400 font-bold text-base mb-3">
                        <Briefcase size={18} />
                        Work Experience
                      </div>
                      <div className="space-y-2 text-xs">
                        <p className="font-semibold text-white">Frontend Developer Intern</p>
                        <p className="text-violet-300 font-medium">MetaUpSpace (2024 - Present)</p>
                        <p className="text-gray-400 leading-relaxed">
                          Building responsive UI components, optimizing Next.js performance & API integration.
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-base mb-3">
                        <Code size={18} />
                        Core Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Java", "Node.js", "MongoDB", "Git"].map((tech) => (
                          <span key={tech} className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Bar */}
            <div className="flex flex-wrap items-center justify-between border-t border-white/10 bg-[#070B17] px-6 py-4">
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <span>Direct Resume File:</span>
                <span className="font-mono text-cyan-400">SAKSHI__.pdf</span>
              </p>

              <div className="flex items-center gap-4 text-xs">
                <a
                  href="/SAKSHI__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition underline"
                >
                  Open in New Tab <ExternalLink size={13} />
                </a>
                <a
                  href="/SAKSHI__.pdf"
                  download="Sakshi_Singh_Resume.pdf"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-xs font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <Download size={15} />
                  Download Resume PDF
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}