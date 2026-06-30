import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });


const BASE_URL = "https://rentals-kamloops2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rentals Kamloops — Apartments, Houses & Properties for Rent",
    template: "%s | Rentals Kamloops",
  },
  description:
    "Find rental properties in Kamloops, BC. Self-managed apartments, houses, and townhomes. Browse listings and apply online.",
  keywords: ["rentals Kamloops", "apartments Kamloops", "houses for rent Kamloops",
             "rental properties Kamloops BC", "Kamloops housing"],
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Rentals Kamloops",
    images: [{ url: "/og-image.png", width: 1200, height: 630,
               alt: "Rentals Kamloops — Quality rental properties in Kamloops BC" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Rentals Kamloops",
  description: "Rental property listings in Kamloops, BC. Apartments, houses, and townhomes.",
  url: "https://rentals-kamloops2.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kamloops",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  areaServed: { "@type": "City", name: "Kamloops" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
