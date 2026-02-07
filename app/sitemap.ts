import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dimy.dev",
      lastModified: new Date()
    }
  ];
}
