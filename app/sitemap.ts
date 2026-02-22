import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohayman-rayed-portfolio.vercel.app";

  // Static pages
  const routes = [
    // Root redirects to /home, so we only include /home in the sitemap
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1, // Highest priority since it's the main landing page
    },
  ];
  return [...routes];
}
