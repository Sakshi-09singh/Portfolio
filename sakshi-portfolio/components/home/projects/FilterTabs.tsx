'use client'

import { useState } from 'react'

const tabs = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            activeTab === tab
              ? 'border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-500/20'
              : 'border-white/10 bg-white/5 text-gray-400 hover:border-violet-500/40 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}