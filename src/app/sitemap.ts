import type { MetadataRoute } from "next";
import { getAllClasses, getClassLessons } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://codelab.fauzidleware.com";

  const classes = await getAllClasses();

  const staticPages = ["", "/about", "/classes"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicPages: MetadataRoute.Sitemap = [];

  for (const item of classes) {
    const lessons = await getClassLessons(item.slug);

    dynamicPages.push({
      url: `${baseUrl}/classes/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const lesson of lessons) {
      dynamicPages.push({
        url: `${baseUrl}/learn/${item.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return [...staticPages, ...dynamicPages];
}
