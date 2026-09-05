import React from 'react'
import { Code2, Binary, Database, Layout, Check, Sparkles } from 'lucide-react'
import { skillsData } from '../data/portfolioData'

const iconMap = {
  Code2: Code2,
  Binary: Binary,
  Database: Database,
  Layout: Layout,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Skills & Core Engineering Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured foundation covering backend systems, algorithmic efficiency, robust databases, and modular client interfaces.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((categoryGroup, index) => {
            const IconComponent = iconMap[categoryGroup.icon] || Code2
            return (
              <div
                key={categoryGroup.category}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {categoryGroup.category}
                      </h3>
                      <span className="text-xs text-indigo-400 font-mono">
                        {categoryGroup.skills.length} Competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {categoryGroup.description}
                  </p>

                  {/* Skills Pills List */}
                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs sm:text-sm transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Insight */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Verified via Resume & Projects</span>
                  <span className="text-indigo-400 font-semibold">Production-Tested</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed Algorithmic & Data Integrity Summary Strip */}
        <div className="mt-10 glass-panel rounded-2xl p-6 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">01.</span> OOP & Exception Handling
            </div>
            <p className="text-slate-400 text-xs">
              Clean inheritance, polymorphism, defensive validation, and centralized exception handlers for enterprise reliability.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">02.</span> Complexity & Data Structures
            </div>
            <p className="text-slate-400 text-xs">
              Rigorous Big-O time and space complexity evaluations across linear and hierarchical graph/tree implementations.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono">03.</span> PostgreSQL & ACID Reliability
            </div>
            <p className="text-slate-400 text-xs">
              Normalized schema modeling, foreign key constraints, indexing for speed, and atomic transaction safeguards.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
