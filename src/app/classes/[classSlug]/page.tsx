import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  PlayCircle,
} from "lucide-react";

import { getClass, getClassLessons } from "@/lib/mdx";

export const instant = false;

interface PageProps {
  params: Promise<{
    classSlug: string;
  }>;
}

export default async function ClassDetailPage({ params }: PageProps) {
  const { classSlug } = await params;

  const classData = await getClass(classSlug);

  if (!classData || !classData.published) {
    notFound();
  }

  const lessons = await getClassLessons(classSlug);
  const firstLesson = lessons[0];

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 pb-20 pt-28">
        <div className="mx-auto max-w-5xl">
          {/* Back navigation */}
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-[#F08080]"
          >
            <ArrowLeft size={17} />
            Kembali ke Katalog Kelas
          </Link>

          {/* Class header */}
          <div className="mt-10 rounded-3xl border border-[#FDE2E0] bg-[#FFF1F0] p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#E56B6F]">
                {classData.level}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-600">
                {classData.category}
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
              {classData.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              {classData.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#E56B6F]" />
                {lessons.length} Materi Pembelajaran
              </div>

              <div className="flex items-center gap-2">
                <GraduationCap size={19} className="text-[#E56B6F]" />
                {classData.author}
              </div>
            </div>

            {firstLesson && (
              <Link
                href={`/learn/${classSlug}/${firstLesson.slug}`}
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#F08080] px-6 py-3.5 font-semibold text-white transition hover:bg-[#E56B6F]"
              >
                <PlayCircle size={20} />
                Mulai Belajar
                <ArrowRight size={18} />
              </Link>
            )}
          </div>

          {/* Lesson list */}
          <div className="mt-16">
            <div>
              <p className="font-semibold text-[#E56B6F]">Learning Materials</p>

              <h2 className="mt-2 text-3xl font-bold text-stone-900">
                Daftar Materi
              </h2>

              <p className="mt-3 text-stone-600">
                Pelajari setiap materi secara berurutan untuk memahami konsep
                pemrograman dengan lebih baik.
              </p>
            </div>

            {lessons.length > 0 ? (
              <div className="mt-8 space-y-4">
                {lessons.map((lesson, index) => (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${classSlug}/${lesson.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-stone-200 p-5 transition hover:border-[#F4A6A1] hover:bg-[#FFF1F0]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F0] font-bold text-[#E56B6F] transition group-hover:bg-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-stone-900 transition group-hover:text-[#E56B6F]">
                        {lesson.title}
                      </h3>

                      <p className="mt-1 text-sm text-stone-500">
                        Materi {index + 1}
                      </p>
                    </div>

                    <ArrowRight
                      size={20}
                      className="shrink-0 text-stone-400 transition group-hover:translate-x-1 group-hover:text-[#F08080]"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-stone-300 p-10 text-center">
                <BookOpen size={32} className="mx-auto text-stone-400" />
                <p className="mt-4 font-semibold text-stone-800">
                  Belum ada materi
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Materi untuk kelas ini akan segera tersedia.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
