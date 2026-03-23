import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import listingsData from '@/data/listings.json'
import { MapPin, BedDouble, Bath, ArrowLeft, CheckCircle, PawPrint, Car, WashingMachine, Calendar, Maximize } from 'lucide-react'

type Listing = {
  id: string; slug: string; title: string; address: string; neighborhood: string
  price: number; bedrooms: number; bathrooms: number; sqft: number; type: string
  available: string; pets: boolean; parking: boolean; laundry: string
  featured: boolean; status: string; description: string; features: string[]
}

const listings = listingsData as Listing[]

export async function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }))
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const listing = listings.find((l) => l.slug === slug)

  if (!listing) return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Link href="/listings" className="text-[#2563eb] underline">Back to Listings</Link>
        </div>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#f8fafc] pt-16 md:pt-18">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/listings" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#64748b] hover:text-[#2563eb] transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2">
              {/* Image placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-[#e0f2fe] to-[#f1f5f9] rounded-xl mb-6 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#2563eb]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BedDouble size={24} className="text-[#2563eb]" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-[#64748b]">{listing.type} · {listing.neighborhood}</span>
                </div>
                <span className="absolute top-4 left-4 bg-[#2563eb] text-white text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full">{listing.status}</span>
              </div>

              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#2563eb] mb-1 flex items-center gap-1"><MapPin size={11} />{listing.neighborhood}</p>
                    <h1 className="text-2xl font-black text-[#0f172a] tracking-tight">{listing.title}</h1>
                    <p className="text-[#64748b] text-sm mt-1">{listing.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-[#0f172a]">${listing.price.toLocaleString()}</p>
                    <p className="text-sm text-[#64748b]">per month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-[#f1f5f9] mb-4">
                  {[
                    { icon: BedDouble, label: listing.bedrooms === 0 ? 'Bachelor' : `${listing.bedrooms} Bedrooms` },
                    { icon: Bath, label: `${listing.bathrooms} Bathrooms` },
                    { icon: Maximize, label: `${listing.sqft} sqft` },
                    { icon: Calendar, label: listing.available },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center text-center gap-1">
                      <item.icon size={16} className="text-[#2563eb]" />
                      <span className="text-[12px] font-semibold text-[#1e293b]">{item.label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[#64748b] leading-relaxed text-sm">{listing.description}</p>
              </div>

              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6">
                <h2 className="font-black text-[#0f172a] text-[15px] uppercase tracking-wide mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {listing.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-[#1e293b]">
                      <CheckCircle size={14} className="text-[#2563eb] flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm text-[#1e293b]">
                    {listing.pets ? <><PawPrint size={14} className="text-[#2563eb]" />Pets Welcome</> : <><PawPrint size={14} className="text-[#94a3b8]" /><span className="text-[#94a3b8]">No Pets</span></>}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1e293b]">
                    <Car size={14} className="text-[#2563eb] flex-shrink-0" />{listing.parking ? 'Parking Included' : 'No Parking'}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1e293b]">
                    <WashingMachine size={14} className="text-[#2563eb] flex-shrink-0" />Laundry: {listing.laundry}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 sticky top-24">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b] mb-1">Monthly Rent</p>
                <p className="text-4xl font-black text-[#0f172a] mb-1">${listing.price.toLocaleString()}</p>
                <p className="text-sm text-[#64748b] mb-6">Available: {listing.available}</p>

                <Link href="/apply" className="w-full flex items-center justify-center gap-2 bg-[#2563eb] text-white font-bold text-[13px] py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-colors mb-3">
                  Apply for This Unit
                </Link>
                <Link href="/contact" className="w-full flex items-center justify-center gap-2 border border-[#e2e8f0] text-[#1e293b] font-semibold text-[13px] py-3.5 rounded-lg hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                  Ask a Question
                </Link>

                <div className="mt-6 pt-6 border-t border-[#f1f5f9] space-y-3">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#64748b]">Property Details</p>
                  {[
                    { label: 'Type', value: listing.type },
                    { label: 'Neighbourhood', value: listing.neighborhood },
                    { label: 'Size', value: `${listing.sqft} sqft` },
                    { label: 'Laundry', value: listing.laundry },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-[#64748b]">{item.label}</span>
                      <span className="font-semibold text-[#1e293b]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
