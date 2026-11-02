import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";

interface LessonFrontmatter {
  title: string;
  description?: string;
  order?: number;
}

export interface ClassMetadata {
  title: string;
  slug: string;
  description: string;
  level: string;
  category: string;
  author: string;
  published: boolean;
}

export interface LessonMetadata {
  title: string;
  slug: string;
  description?: string;
  order?: number;
}

const contentDirectory = path.join(process.cwd(), "content", "classes");

const slugPattern = /^[a-z0-9-]+$/;

// Mengambil satu kelas berdasarkan slug
export async function getClass(classSlug: string) {
  if (!slugPattern.test(classSlug)) return null;

  try {
    const filePath = path.join(contentDirectory, classSlug, "class.json");

    const source = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(source) as ClassMetadata;

    if (!data.published || data.slug !== classSlug) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

// Mengambil semua kelas yang sudah dipublikasikan
export async function getAllClasses() {
  try {
    const folders = await fs.readdir(contentDirectory, {
      withFileTypes: true,
    });

    const classes = await Promise.all(
      folders
        .filter((folder) => folder.isDirectory())
        .map((folder) => getClass(folder.name)),
    );

    return classes.filter((item): item is ClassMetadata => item !== null);
  } catch {
    return [];
  }
}

// Mengambil seluruh materi dalam satu kelas
export async function getClassLessons(classSlug: string) {
  const classData = await getClass(classSlug);

  if (!classData) return [];

  try {
    const lessonsDirectory = path.join(contentDirectory, classSlug, "lessons");

    const files = await fs.readdir(lessonsDirectory);

    const lessons = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const source = await fs.readFile(
            path.join(lessonsDirectory, file),
            "utf8",
          );

          const { data } = matter(source);
          const frontmatter = data as LessonFrontmatter;

          return {
            title: frontmatter.title,
            slug: file.replace(/\.mdx$/, ""),
            description: frontmatter.description,
            order: frontmatter.order ?? 999,
          };
        }),
    );

    return lessons.sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

// Mengambil dan merender satu materi MDX
export async function getLesson(classSlug: string, lessonSlug: string) {
  if (!slugPattern.test(classSlug) || !slugPattern.test(lessonSlug)) {
    return null;
  }

  const filePath = path.join(
    contentDirectory,
    classSlug,
    "lessons",
    `${lessonSlug}.mdx`,
  );

  try {
    // Membaca file MDX
    const source = await fs.readFile(filePath, "utf8");

    // Mengambil isi Markdown tanpa frontmatter
    const { content: markdownContent } = matter(source);

    // Membuat daftar isi (TOC)
    const slugger = new GithubSlugger();

    const headings = markdownContent
      .split("\n")
      .map((line) => {
        const match = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);

        if (!match) return null;

        const text = match[2]
          .replace(/`([^`]+)`/g, "$1")
          .replace(/\*\*(.*?)\*\*/g, "$1")
          .replace(/\*(.*?)\*/g, "$1")
          .replace(/\[(.*?)\]\(.*?\)/g, "$1")
          .trim();

        return {
          depth: match[1].length,
          text,
          slug: slugger.slug(text),
        };
      })
      .filter((heading) => heading !== null);

    // Mengompilasi MDX menjadi komponen React
    const { content, frontmatter } = await compileMDX<LessonFrontmatter>({
      source: source,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
          ],
        },
      },
    });

    return {
      content,
      frontmatter,
      headings,
    };
  } catch (error) {
    console.error("Gagal membaca materi MDX:", error);
    return null;
  }
}
