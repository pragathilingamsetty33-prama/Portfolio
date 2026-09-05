import React from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { educationData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            Academic Track
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Consistent academic excellence in Computer Applications, Computer Science, and foundational sciences.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <div
              key={item.degree}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 glass-panel-hover flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Left Column: Degree & Institution */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-inner mt-1 sm:mt-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wide">
                    Milestone 0{index + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-300">
                    {item.institution}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 pt-2 max-w-xl leading-relaxed">
                    {item.highlights}
                  </p>
                </div>
              </div>

              {/* Right Column: Score Badge */}
              <div className="sm:self-center flex-shrink-0 pl-16 sm:pl-0">
                <div className="inline-flex sm:flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center min-w-[110px]">
                  <span className="text-xs font-mono text-slate-400 uppercase">{item.scoreLabel}</span>
                  <span className="text-xl sm:text-2xl font-black text-indigo-300 tracking-tight">{item.score}</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
                    <Award className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
