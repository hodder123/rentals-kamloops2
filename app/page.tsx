import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import listingsData from '@/data/listings.json'
import { Search, MapPin, BedDouble, Bath, ArrowRight, CheckCircle, Wrench, FileText } from 'lucide-react'

type Listing = {
  id: string; slug: string; title: string; address: string; neighborhood: string
  price: number; bedrooms: number; bathrooms: number; sqft: number; type: string
  available: string; pets: boolean; parking: boolean; laundry: string
  featured: boolean; status: string; description: string; features: string[]
}

const listings = listingsData as Listing[]
const featured = listings.filter(l => l.featured).slice(0, 3)

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-16 md:pt-18 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] min-h-[580px] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 text-[#93c5fd] text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full mb-6">
              <MapPin size={11} /> Kamloops, BC
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 tracking-tight">
              Find Your Next<br /><span className="text-[#60a5fa]">Home in Kamloops</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 max-w-lg">
              Quality rental properties across Kamloops — self-managed, responsive, and well-maintained. Browse available listings and apply online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/listings" className="flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold text-[13px] tracking-wide px-7 py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-colors">
                <Search size={15} /> Browse Listings
              </Link>
              <Link href="/apply" className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-[13px] tracking-wide px-7 py-3.5 rounded-lg hover:bg-white/15 transition-colors">
                Apply Now <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#2563eb]">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-3 gap-4 text-center">
          {[{num: `${listings.length}+`, label:'Active Listings'},{num:'6+', label:'Neighbourhoods'},{num:'Self', label:'Managed'}].map(s => (
            <div key={s.label}>
              <p className="text-xl font-black text-white">{s.num}</p>
              <p className="text-[11px] text-[#bfdbfe] uppercase tracking-wide font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Listings */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-1">Available Now</p>
              <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">Featured Listings</h2>
            </div>
            <Link href="/listings" className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-[#2563eb] hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((listing) => (
              <Link key={listing.id} href={`/listings/${listing.slug}`} className="group border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-[#2563eb]/30">
                <div className="h-48 bg-gradient-to-br from-[#e0f2fe] to-[#f1f5f9] relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BedDouble size={20} className="text-[#2563eb]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">{listing.type}</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#2563eb] text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                    {listing.status}
                  </div>
                  {listing.pets && (
                    <div className="absolute top-3 right-3 bg-white text-[10px] font-bold text-[#64748b] px-2 py-1 rounded-full border border-[#e2e8f0]">
                      Pets OK
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wide mb-1 flex items-center gap-1">
                    <MapPin size={11} />{listing.neighborhood}
                  </p>
                  <h3 className="font-bold text-[#0f172a] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug">{listing.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[#64748b] mb-4">
                    <span className="flex items-center gap-1"><BedDouble size={13} />{listing.bedrooms === 0 ? 'Bachelor' : `${listing.bedrooms} bed`}</span>
                    <span className="flex items-center gap-1"><Bath size={13} />{listing.bathrooms} bath</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#0f172a]">${listing.price.toLocaleString()}<span className="text-sm font-normal text-[#64748b]">/mo</span></span>
                    <span className="text-[12px] font-semibold text-[#2563eb] group-hover:underline flex items-center gap-1">View <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link href="/listings" className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold text-[13px] px-7 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
              View All Listings <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-2">Simple Process</p>
            <h2 className="text-3xl font-black text-[#0f172a] tracking-tight">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Browse Listings', desc: 'Filter by bedrooms, neighbourhood, and price to find the right place.', icon: Search },
              { num: '02', title: 'Apply Online', desc: 'Fill out our simple rental application form — no printing required.', icon: FileText },
              { num: '03', title: 'Move In', desc: "We'll review your application and get back to you within 2 business days.", icon: CheckCircle },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-[#e2e8f0] rounded-xl p-8">
                <div className="w-10 h-10 bg-[#eff6ff] rounded-lg flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-[#2563eb]" />
                </div>
                <p className="text-[11px] font-black text-[#2563eb] tracking-[0.15em] uppercase mb-2">{step.num}</p>
                <h3 className="font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance CTA */}
      <section className="py-14 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-[#2563eb] rounded-xl flex items-center justify-center mx-auto mb-5">
            <Wrench size={22} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Current Tenant?</h2>
          <p className="text-[#94a3b8] mb-7 max-w-md mx-auto">Submit a maintenance request online and we'll follow up within 24 hours on non-emergency issues.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/maintenance" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold text-[13px] px-8 py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-colors">
              <Wrench size={15} /> Submit Maintenance Request
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold text-[13px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
