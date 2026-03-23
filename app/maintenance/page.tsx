import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MaintenanceForm from '@/components/MaintenanceForm'
import { Phone, Clock, AlertTriangle } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-18 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-2">For Current Tenants</p>
          <h1 className="text-4xl font-black text-[#0f172a] tracking-tight mb-2">Maintenance Request</h1>
          <p className="text-[#64748b]">Submit a repair or maintenance issue and we'll be in touch promptly.</p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {/* Emergency notice */}
          <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-5 mb-8 flex gap-4">
            <AlertTriangle size={20} className="text-[#ef4444] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#b91c1c] text-sm mb-1">Emergency? Call Us Directly</p>
              <p className="text-[#ef4444] text-sm">For gas leaks, flooding, fire, or loss of heat in extreme cold — do not use this form. Call <a href="tel:+12508280000" className="font-bold underline">(250) 828-0000</a> immediately.</p>
            </div>
          </div>

          {/* Response info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {icon: Clock, title:'24-Hour Response', desc:'We respond to all requests within 24 hours on business days.'},
              {icon: Phone, title:'Emergency Line', desc:'Call (250) 828-0000 for urgent after-hours issues.'},
              {icon: AlertTriangle, title:'Track Your Request', desc:'You'll receive an email confirmation with your request details.'},
            ].map(item => (
              <div key={item.title} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4">
                <item.icon size={16} className="text-[#2563eb] mb-2" />
                <p className="text-[12px] font-bold text-[#1e293b] mb-1">{item.title}</p>
                <p className="text-[11px] text-[#64748b]">{item.desc}</p>
              </div>
            ))}
          </div>

          <MaintenanceForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
