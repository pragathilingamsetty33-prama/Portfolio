import React from 'react'
import { GraduationCap, Award, MapPin, Activity, Puzzle, Headphones, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react'
import { personalInfo, interestsData, educationData, certificationsData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Engineering Rigor & Dedicated Craftsmanship
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A software engineer grounded in object-oriented principles, robust database design, and algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio & Background (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
                Professional Background
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a dedicated Software Engineer and Java Developer holding a Master's degree in Computer Applications (MCA) from Vignan's Foundation for Science, Technology & Research. My academic journey has instilled in me a rigorous analytical mindset and a structured approach to problem solving.
                </p>
                <p>
                  My practical project development has focused on mission-critical system design: building zero-knowledge, end-to-end encrypted collaboration applications utilizing browser-side cryptography and STOMP over WebSockets, as well as architecting smart attendance systems utilizing Java, Spring Boot, PostgreSQL, and GPS geofencing to guarantee hardware verification and stop proxy check-ins.
                </p>
                <p>
                  I prioritize code readability, strong object-oriented principles, optimal time and space complexity, and bulletproof database schemas with ACID transaction compliance.
                </p>
              </div>

              {/* Core Strengths Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Java & Systems Backend</h4>
                    <p className="text-xs text-slate-400 mt-0.5">OOP, robust exception handling, Spring Boot, and REST API integrations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Data Structures & Analysis</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Time & space complexity mastery, linear structures, trees, and graphs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">PostgreSQL & Data Integrity</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Relational schemas, foreign keys, table constraints, and ACID transactions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Security & Location Services</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Browser-side payload encryption, GPS geofencing, and hardware validation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Declaration Banner */}
            <div className="glass-panel rounded-2xl p-5 border border-indigo-500/20 bg-indigo-950/20 shadow-lg">
              <div className="flex items-start gap-3.5">
                <FileCheck className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                <div className="text-xs sm:text-sm">
                  <span className="font-semibold text-indigo-300 block mb-1">Official Candidate Declaration</span>
                  <p className="text-slate-300 italic">
                    "{personalInfo.declaration}"
                  </p>
                  <div className="mt-2 text-xs font-mono text-slate-400">
                    — Pragathi Lingamsetty • Guntur, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Snapshot & Interests (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Profile Overview Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs font-mono text-slate-400">
                Quick Snapshot
              </h3>
              
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {personalInfo.location}
                  </span>
                </li>

                <li className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Highest Degree</span>
                  <span className="text-slate-200 font-medium">MCA (8.0 CGPA)</span>
                </li>

                <li className="flex items-center justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="text-indigo-300 font-medium">Java / Software Eng</span>
                </li>

                <li className="flex items-center justify-between py-2">
                  <span className="text-slate-400">Certifications</span>
                  <span className="text-emerald-400 font-medium">3 Verified</span>
                </li>
              </ul>
            </div>

            {/* Interests Card (Directly from Resume) */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 shadow-xl">
              <h3 className="text-base font-bold text-white mb-3">
                Interests & Activities
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Disciplines that cultivate strategic decision-making and mental sharpness.
              </p>

              <div className="space-y-3">
                {interestsData.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      {interest.name.includes('Badminton') && <Activity className="w-4 h-4" />}
                      {interest.name.includes('Puzzle') && <Puzzle className="w-4 h-4" />}
                      {interest.name.includes('Music') && <Headphones className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{interest.name}</div>
                      <div className="text-xs text-slate-400">{interest.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
