"use client"
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-18 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-2">Get in Touch</p>
          <h1 className="text-4xl font-black text-[#0f172a] tracking-tight">Contact Us</h1>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-black text-[#0f172a] mb-6">We&apos;re Here to Help</h2>
              <p className="text-[#64748b] leading-relaxed mb-8">Whether you&apos;re looking for a rental, have a question about an existing tenancy, or want to discuss property management — get in touch and we&apos;ll get back to you quickly.</p>
              <div className="space-y-5">
                {[
                  {icon: Phone, label:'Phone', value:'(250) 828-0000', href:'tel:+12508280000'},
                  {icon: Mail, label:'Email', value:'info@rentalskamloops.ca', href:'mailto:info@rentalskamloops.ca'},
                  {icon: MapPin, label:'Location', value:'Kamloops, BC', href:'#'},
                  {icon: Clock, label:'Office Hours', value:'Mon–Fri, 9am–5pm', href:'#'},
                ].map(item => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={15} className="text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#64748b]">{item.label}</p>
                      <a href={item.href} className="text-sm font-semibold text-[#1e293b] hover:text-[#2563eb] transition-colors">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-8 text-center">
                  <div className="w-12 h-12 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-black text-[#166534] mb-2">Message Sent!</h3>
                  <p className="text-[#16a34a] text-sm">We&apos;ll get back to you within 1–2 business days.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">First Name</label>
                      <input type="text" placeholder="First" className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Last Name</label>
                      <input type="text" placeholder="Last" className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Email</label>
                    <input type="email" placeholder="you@example.com" required className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Subject</label>
                    <select className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] bg-white">
                      <option>General Inquiry</option>
                      <option>Viewing Request</option>
                      <option>Existing Tenancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wide text-[#1e293b] mb-1.5">Message</label>
                    <textarea rows={5} placeholder="How can we help?" required className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#2563eb] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#2563eb] text-white font-bold text-[13px] tracking-wide py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-colors">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
