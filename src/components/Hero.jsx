import React from 'react'
import { FileDown, ArrowRight, Mail, Sparkles, Shield, Database, Code2, Terminal, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineer & Java Developer Roles</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-gradient-primary">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono">
                {personalInfo.headline}
              </h2>
            </div>

            {/* Professional Introduction (strictly adhering to resume) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Software Engineer and Java Developer with a strong academic foundation in Computer Applications (MCA) and Computer Science. 
              Experienced in developing secure, end-to-end encrypted collaboration platforms, real-time messaging using STOMP over WebSockets, 
              and location-aware attendance systems with GPS geofencing and PostgreSQL database optimization.
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Prominent Download Resume Button */}
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-indigo-400"
                id="hero-download-resume"
              >
                <FileDown className="w-5 h-5 text-indigo-200" />
                <span>Download Resume</span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Tech Highlights Badge Row */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap gap-2 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> Java / OOP
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> PostgreSQL & ACID
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Zero-Knowledge E2EE
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> DSA & Complexity
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Teaser */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg -z-10" />

              <div className="glass-panel rounded-2xl p-5 border border-slate-700/60 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block flex-shrink-0" />
                    <span className="ml-1 text-slate-400 truncate text-[11px] sm:text-xs">SecurityAttendanceService.java</span>
                  </div>
                  <span className="text-indigo-400 font-semibold text-[10px] sm:text-xs flex-shrink-0 ml-2">Spring Boot</span>
                </div>

                {/* Code Content */}
                <pre className="font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto py-1">
                  <code>
                    <span className="text-purple-400">@Service</span>{'\n'}
                    <span className="text-purple-400">@Transactional</span>{'\n'}
                    <span className="text-blue-400">public class</span>{' '}
                    <span className="text-yellow-300">AttendanceService</span> {'{\n'}
                    {'  '}<span className="text-purple-400">@Autowired</span>{'\n'}
                    {'  '}<span className="text-blue-400">private</span> AttendanceRepository repo;{'\n\n'}
                    {'  '}<span className="text-blue-400">public</span> VerificationResult verifyCheckIn({'\n'}
                    {'    '}Coordinates coords, String hardwareId{'\n'}
                    {'  '}) {'{\n'}
                    {'    '}<span className="text-slate-500">// 1. Validate real-time GPS Geofence</span>{'\n'}
                    {'    '}boolean inBounds = GeofenceUtils.validate(coords);{'\n'}
                    {'    '}<span className="text-purple-400">if</span> (!inBounds) throw new GeofenceException();{'\n\n'}
                    {'    '}<span className="text-slate-500">// 2. Enforce Hardware ID check to stop proxy</span>{'\n'}
                    {'    '}Device device = repo.findActiveDevice(hardwareId);{'\n'}
                    {'    '}<span className="text-purple-400">return</span> repo.saveAttendanceRecord(device);{'\n'}
                    {'  }'}{'\n'}
                    {'}'}
                  </code>
                </pre>

                {/* Verified Metrics Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>PostgreSQL ACID Safe</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Zero-Knowledge E2EE</span>
                  </div>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -top-4 -right-2 sm:-top-4 sm:-right-4 glass-panel py-2 px-3.5 rounded-xl border border-indigo-500/40 bg-slate-950/90 flex items-center gap-3 shadow-xl backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-sm">
                  8.0
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">MCA Scholar</div>
                  <div className="text-[10px] text-slate-400">Vignan's University</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
