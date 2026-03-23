import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import listingsData from '@/data/listings.json'
import { MapPin, BedDouble, Bath, ArrowRight, PawPrint, Car, CheckCircle } from 'lucide-react'

type Listing = {
  id: string; slug: string; title: string; address: string; neighborhood: string
  price: number; bedrooms: number; bathrooms: number; sqft: number; type: string
  available: string; pets: boolean; parking: boolean; laundry: string
  featured: boolean; status: string; description: string; features: string[]
}

const listings = listingsData as Listing[]

export default function ListingsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 md:pt-18 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#2563eb] mb-2">Kamloops, BC</p>
          <h1 className="text-4xl font-black text-[#0f172a] tracking-tight mb-1">Available Rentals</h1>
          <p className="text-[#64748b]">{listings.length} properties available</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          {['All', 'Apartment', 'House', 'Townhome', 'Pets OK', 'Parking'].map((f) => (
            <button key={f} className={`px-4 py-1.5 text-[12px] font-semibold rounded-full border transition-colors ${f === 'All' ? 'bg-[#2563eb] text-white border-[#2563eb]' : 'bg-white text-[#64748b] border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb]'}`}>
              {f}
            </button>
          ))}
          <select className="ml-auto text-[12px] font-semibold border border-[#e2e8f0] px-3 py-1.5 rounded-lg text-[#64748b] focus:outline-none focus:border-[#2563eb] bg-white">
            <option>Sort: Price ↑</option>
            <option>Sort: Price ↓</option>
            <option>Sort: Newest</option>
          </select>
        </div>
      </div>

      <section className="py-10 md:py-14 bg-[#f8fafc] min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Link key={listing.id} href={`/listings/${listing.slug}`} className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-[#2563eb]/30">
                <div className="h-44 bg-gradient-to-br from-[#e0f2fe] to-[#f1f5f9] relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BedDouble size={18} className="text-[#2563eb]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#64748b]">{listing.type}</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#2563eb] text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">{listing.status}</span>
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {listing.pets && <span className="bg-white text-[10px] font-bold text-[#64748b] px-2 py-1 rounded-full border border-[#e2e8f0] flex items-center gap-1"><PawPrint size={9} />Pets</span>}
                    {listing.parking && <span className="bg-white text-[10px] font-bold text-[#64748b] px-2 py-1 rounded-full border border-[#e2e8f0] flex items-center gap-1"><Car size={9} />Parking</span>}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold text-[#64748b] uppercase tracking-wide mb-1 flex items-center gap-1"><MapPin size={10} />{listing.neighborhood}</p>
                  <h3 className="font-bold text-[#0f172a] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug text-[15px]">{listing.title}</h3>
                  <div className="flex items-center gap-3 text-[12px] text-[#64748b] mb-3">
                    <span className="flex items-center gap-1"><BedDouble size={12} />{listing.bedrooms === 0 ? 'Bachelor' : `${listing.bedrooms} bed`}</span>
                    <span className="flex items-center gap-1"><Bath size={12} />{listing.bathrooms} bath</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f1f5f9]">
                    <div>
                      <span className="text-xl font-black text-[#0f172a]">${listing.price.toLocaleString()}</span>
                      <span className="text-xs text-[#64748b]">/mo</span>
                    </div>
                    <span className="text-[12px] font-semibold text-[#2563eb] group-hover:underline flex items-center gap-1">View <ArrowRight size={12} /></span>
                  </div>
                  <p className="text-[11px] text-[#94a3b8] mt-2">Available: {listing.available}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#2563eb] text-center">
        <h3 className="text-2xl font-black text-white mb-3">Don't See What You're Looking For?</h3>
        <p className="text-[#bfdbfe] mb-6 max-w-md mx-auto text-sm">Contact us and we'll let you know when something matching your needs becomes available.</p>
        <Link href="/contact" className="inline-block bg-white text-[#2563eb] font-bold text-[13px] px-8 py-3 rounded-lg hover:bg-[#f0f9ff] transition-colors">
          Get in Touch
        </Link>
      </section>

      <Footer />
    </>
  )
}
