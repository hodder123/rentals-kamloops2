import { MetadataRoute } from "next/server";
export default function sitemap(): MetadataRoute.Sitemap {
  const b = "https://rentals-kamloops2.vercel.app";
  return [
    { url: b,              lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${b}/listings`, lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${b}/apply`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${b}/maintenance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${b}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
