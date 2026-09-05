import React from 'react'
import { Award, CheckCircle2, Shield, Brain, Users } from 'lucide-react'
import { certificationsData } from '../data/portfolioData'

const certIcons = [Brain, Users, Shield]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            Professional Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Certifications & Technical Badges
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Industry-recognized credentials in Artificial Intelligence principles, ethical tech practices, and professional engagement.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert, index) => {
            const IconComponent = certIcons[index % certIcons.length]
            return (
              <div
                key={cert.title}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Certified
                    </span>
                  </div>

                  {/* Issuer & Category */}
                  <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wide mb-1">
                    {cert.issuer}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Domain</span>
                  <span className="text-slate-200 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {cert.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
