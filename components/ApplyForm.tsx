"use client"
import { useState } from 'react'

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) return (
    <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-10 text-center">
      <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h3 className="text-xl font-black text-[#166534] mb-2">Application Submitted!</h3>
      <p className="text-[#16a34a]">Thank you for applying. We'll review your application and be in touch within 2 business days.</p>
    </div>
  )

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
      <div>
        <h3 className="text-[12px] font-black uppercase tracking-[0.1em] text-[#64748b] mb-4 pb-2 border-b border-[#e2e8f0]">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[{label:'First Name',type:'text',placeholder:'First'},{label:'Last Name',type:'text',placeholder:'Last'},{label:'Email Address',type:'email',placeholder:'you@example.com'},{label:'Phone Number',type:'tel',placeholder:'(250) 000-0000'}].map(field => (
            <div key={field.label}>
              <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} required
                className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[12px] font-black uppercase tracking-[0.1em] text-[#64748b] mb-4 pb-2 border-b border-[#e2e8f0]">Rental Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Property of Interest</label>
            <input type="text" placeholder="e.g. 820 Victoria St — or leave blank for general inquiry"
              className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Desired Move-In Date</label>
            <input type="date" required className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Number of Occupants</label>
            <select className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
              <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Do you have pets?</label>
            <select className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
              <option>No pets</option><option>1 cat</option><option>1 dog</option><option>Multiple pets</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[12px] font-black uppercase tracking-[0.1em] text-[#64748b] mb-4 pb-2 border-b border-[#e2e8f0]">Employment & Income</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Employment Status</label>
            <select className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
              <option>Employed full-time</option><option>Employed part-time</option><option>Self-employed</option><option>Student</option><option>Retired</option><option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Employer / School</label>
            <input type="text" placeholder="Employer or school name"
              className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Monthly Income (before tax)</label>
            <input type="text" placeholder="e.g. $4,000"
              className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Current Address</label>
            <input type="text" placeholder="Current street address"
              className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Additional Notes</label>
        <textarea rows={4} placeholder="Anything else you'd like us to know..."
          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors resize-none" />
      </div>

      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 text-xs text-[#64748b] leading-relaxed">
        By submitting this application, you consent to a credit and reference check as part of the rental review process.
      </div>

      <button type="submit"
        className="w-full bg-[#2563eb] text-white font-bold text-[13px] tracking-wide py-4 rounded-lg hover:bg-[#1d4ed8] transition-colors">
        Submit Application
      </button>
    </form>
  )
}
