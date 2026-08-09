import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sohambweb.in/",
      lastModified: new Date(),
    },
  ];
}