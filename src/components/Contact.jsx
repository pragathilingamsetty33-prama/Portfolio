import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, ShieldCheck, FileDown } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [submittedStatus, setSubmittedStatus] = useState(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct standard mailto url
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`)
    const bodyContent = encodeURIComponent(
      `Hello Pragathi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )
    
    // Launch mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`
    
    setSubmittedStatus('Email client opened! You can also copy your message below.')
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Contact & Connect
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Reach out directly for software engineering opportunities, technical discussions, or collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to contact me via email or phone. My details are authenticated directly from my resume.
              </p>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex-shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone Number</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Profiles Row */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-3">Online Profiles</span>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-2 text-xs font-medium text-slate-200 group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-white" />
                  </a>

                  {/* GitHub Profile */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center gap-2 text-xs font-medium text-slate-200 group"
                  >
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-500 group-hover:text-white" />
                  </a>

                </div>
              </div>

              {/* Download Resume Link in Contact box */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumePath}
                  download={personalInfo.resumeFileName}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-700 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Frontend-Only Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  Frontend Direct Client
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your note below to compose directly in your default mail application or copy the message. No third-party data tracking or hidden servers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / Interview Request"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or opportunity details here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {submittedStatus && (
                  <div className="p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/40 text-indigo-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{submittedStatus}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all flex-1"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const fullText = `To: ${personalInfo.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
                      navigator.clipboard.writeText(fullText)
                      setSubmittedStatus('Message copied to clipboard! You can paste it directly into Gmail or Outlook web.')
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Message</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Frontend-only submission. Directly interfaces with your email client.</span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
