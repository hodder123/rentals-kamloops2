import Link from 'next/link'
import { Home, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
                <Home size={15} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-black text-white tracking-tight">Rentals</span>
                <span className="text-[10px] font-semibold text-[#64748b] tracking-wide uppercase">Kamloops</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">Quality rental properties in Kamloops, BC. Self-managed with a focus on responsive service.</p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#64748b] mb-4">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {[{href:'/listings',label:'All Listings'},{href:'/apply',label:'Apply Now'},{href:'/maintenance',label:'Maintenance'},{href:'/contact',label:'Contact'}].map(item => (
                <li key={item.href}><Link href={item.href} className="text-sm text-[#94a3b8] hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#64748b] mb-4">Neighbourhoods</h4>
            <ul className="flex flex-col gap-3">
              {['Downtown','Aberdeen','Sahali','Valleyview','North Shore','Westsyde'].map(n => (
                <li key={n}><Link href="/listings" className="text-sm text-[#94a3b8] hover:text-white transition-colors">{n}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-bold text-[#64748b] mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[#94a3b8]"><Phone size={13} /><a href="tel:+12508280000" className="hover:text-white transition-colors">(250) 828-0000</a></li>
              <li className="flex items-center gap-2 text-sm text-[#94a3b8]"><Mail size={13} /><a href="mailto:info@rentalskamloops.ca" className="hover:text-white transition-colors">info@rentalskamloops.ca</a></li>
              <li className="flex items-start gap-2 text-sm text-[#94a3b8]"><MapPin size={13} className="mt-0.5 flex-shrink-0" />Kamloops, BC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">© 2026 Rentals Kamloops. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#475569] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#475569] hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
