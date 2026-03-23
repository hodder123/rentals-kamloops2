"use client"
import { useState } from 'react'

export default function MaintenanceForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) return (
    <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-10 text-center">
      <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-xl font-black text-[#166534] mb-2">Request Submitted!</h3>
      <p className="text-[#16a34a]">We've received your maintenance request. We'll follow up within 24 hours for non-emergency issues. For emergencies, please call us directly.</p>
    </div>
  )

  return (
    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Your Name</label>
          <input type="text" placeholder="Full name" required
            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Phone Number</label>
          <input type="tel" placeholder="(250) 000-0000" required
            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Email Address</label>
          <input type="email" placeholder="you@example.com" required
            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Your Unit Address</label>
          <input type="text" placeholder="e.g. 820 Victoria St, Unit 3" required
            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Issue Category</label>
          <select required className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
            <option value="">Select a category...</option>
            <option>Plumbing</option>
            <option>Heating / Cooling</option>
            <option>Electrical</option>
            <option>Appliances</option>
            <option>Doors / Windows / Locks</option>
            <option>Flooring</option>
            <option>Pest Issue</option>
            <option>Exterior / Common Area</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Priority Level</label>
          <select required className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
            <option value="">Select priority...</option>
            <option>🔴 Emergency — Immediate safety risk</option>
            <option>🟠 Urgent — Affects daily living</option>
            <option>🟡 Routine — Non-urgent repair</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Describe the Issue</label>
        <textarea rows={5} required placeholder="Please describe the issue in as much detail as possible — what happened, when it started, and any steps you've already taken..."
          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors resize-none" />
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Best Time to Contact / Access Unit</label>
        <input type="text" placeholder="e.g. Weekday mornings, or after 5pm"
          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
      </div>

      <button type="submit"
        className="w-full bg-[#2563eb] text-white font-bold text-[13px] tracking-wide py-4 rounded-lg hover:bg-[#1d4ed8] transition-colors">
        Submit Maintenance Request
      </button>
    </form>
  )
}
