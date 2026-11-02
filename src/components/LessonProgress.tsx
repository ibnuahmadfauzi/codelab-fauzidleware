"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Lesson {
  title: string;
  slug: string;
}

interface LessonProgressProps {
  classSlug: string;
  currentLessonSlug: string;
  lessons: Lesson[];
}

export default function LessonProgress({
  classSlug,
  currentLessonSlug,
  lessons,
}: LessonProgressProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const storageKey = `codelab-progress-${classSlug}`;

  // Membaca progres dari localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);

    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);

        if (Array.isArray(parsedProgress)) {
          setCompletedLessons(
            parsedProgress.filter((slug) =>
              lessons.some((lesson) => lesson.slug === slug),
            ),
          );
        }
      } catch {
        setCompletedLessons([]);
      }
    }

    setIsLoaded(true);
  }, [storageKey, lessons]);

  // Menyimpan progres ke localStorage
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(storageKey, JSON.stringify(completedLessons));
  }, [completedLessons, storageKey, isLoaded]);

  const toggleLesson = (slug: string) => {
    setCompletedLessons((previous) =>
      previous.includes(slug)
        ? previous.filter((item) => item !== slug)
        : [...previous, slug],
    );
  };

  const progress = lessons.length
    ? Math.round((completedLessons.length / lessons.length) * 100)
    : 0;

  const currentIsCompleted = completedLessons.includes(currentLessonSlug);

  return (
    <div className="space-y-6">
      {/* RINGKASAN PROGRES */}
      <div className="rounded-xl border bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">
            Progress Belajar
          </span>

          <span className="text-sm font-bold text-[#F08080]">
            {isLoaded ? `${progress}%` : "..."}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#F08080] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {completedLessons.length} dari {lessons.length} materi selesai
        </p>
      </div>

      {/* DAFTAR MATERI */}
      <div>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Daftar Materi
        </h2>

        <nav className="space-y-1">
          {lessons.map((lesson, index) => {
            const isActive = lesson.slug === currentLessonSlug;
            const isCompleted = completedLessons.includes(lesson.slug);

            return (
              <div
                key={lesson.slug}
                className={`flex items-center gap-2 rounded-lg px-3 py-3 ${
                  isActive ? "bg-[#FFF1F0]" : "hover:bg-gray-50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleLesson(lesson.slug)}
                  disabled={!isLoaded}
                  aria-label={
                    isCompleted
                      ? `Batalkan penyelesaian ${lesson.title}`
                      : `Tandai ${lesson.title} selesai`
                  }
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                    isCompleted
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 text-transparent hover:border-[#ED7778]"
                  }`}
                >
                  ✓
                </button>

                <Link
                  href={`/learn/${classSlug}/${lesson.slug}`}
                  className={`min-w-0 flex-1 text-sm ${
                    isActive ? "font-semibold text-[#E56B6F]" : "text-gray-600"
                  }`}
                >
                  <span className="mr-2 text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {lesson.title}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      {/* TOMBOL MATERI SAAT INI */}
      <button
        type="button"
        onClick={() => toggleLesson(currentLessonSlug)}
        disabled={!isLoaded}
        className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${
          currentIsCompleted
            ? "border border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
            : "bg-[#F08080] text-white hover:bg-[#E56B6F]"
        }`}
      >
        {currentIsCompleted
          ? "✓ Materi Sudah Selesai"
          : "Tandai Materi Selesai"}
      </button>
    </div>
  );
}
