import React from 'react'
import { Calendar, ShieldCheck, Layers, Cpu, Server, CheckCircle2, Lock } from 'lucide-react'
import { projectsData } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Engineering Projects & Implementations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-security collaboration architectures, hardware-validated attendance engines, and payment fraud research.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 glass-panel-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Main Content Area */}
                <div className="space-y-4 max-w-3xl">
                  
                  {/* Category Badge & Timeline */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Architecture & Engineering Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Key Highlights & Architecture:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.keyPoints.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-700/80 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Side Info Box */}
                <div className="lg:w-72 flex-shrink-0 p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4 text-xs font-mono">
                  <div className="text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>PROJECT METADATA</span>
                    <span className="text-indigo-400 font-semibold">#{idx + 1}</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Timeline:</span>
                      <span className="text-slate-300 text-right">{project.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Focus:</span>
                      <span className="text-slate-300 text-right">{project.badge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Security:</span>
                      <span className="text-emerald-400 text-right">Verified Specs</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Implemented as detailed in candidate resume. Code repository links currently private.</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
