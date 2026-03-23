"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home } from 'lucide-react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/listings', label: 'Listings' },
    { href: '/apply', label: 'Apply Now' },
    { href: '/maintenance', label: 'Maintenance' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-[#e2e8f0]' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#2563eb] rounded-lg flex items-center justify-center">
            <Home size={16} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-black text-[#0f172a] tracking-tight">Rentals</span>
            <span className="text-[10px] font-semibold text-[#64748b] tracking-wide uppercase">Kamloops</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`px-4 py-2 text-[13px] font-semibold rounded-lg transition-colors ${link.label === 'Apply Now' ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]' : 'text-[#1e293b] hover:bg-[#f1f5f9]'}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-[#1e293b]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className="py-2.5 text-[14px] font-semibold text-[#1e293b] hover:text-[#2563eb] transition-colors"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
