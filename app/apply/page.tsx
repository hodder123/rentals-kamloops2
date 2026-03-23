import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ApplyForm from '@/components/ApplyForm'
import { CheckCircle } from 'lucide-react'

export default function ApplyPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-18 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-2">Rental Application</p>
          <h1 className="text-4xl font-black text-[#0f172a] tracking-tight mb-2">Apply Now</h1>
          <p className="text-[#64748b]">Fill out the form below and we'll review your application within 2 business days.</p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[{title:'Quick Process',desc:'Takes about 5 minutes to complete.'},{title:'2-Day Response',desc:'We review and respond within 2 business days.'},{title:'Secure',desc:'Your information is kept confidential.'}].map(item => (
              <div key={item.title} className="bg-[#eff6ff] rounded-lg p-4 flex gap-3">
                <CheckCircle size={16} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[12px] font-bold text-[#1e293b]">{item.title}</p>
                  <p className="text-[11px] text-[#64748b]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ApplyForm />
        </div>
      </section>
      <Footer />
    </>
  )
}
