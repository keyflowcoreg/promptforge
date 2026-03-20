import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://promptforge.ai"
  const now = new Date()

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/prompts`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/premium`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/success`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ]
}
