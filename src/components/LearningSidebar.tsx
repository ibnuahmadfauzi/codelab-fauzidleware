"use client";

import { useState } from "react";
import Link from "next/link";
import LessonProgress from "@/components/LessonProgress";

interface Lesson {
  title: string;
  slug: string;
}

interface LearningSidebarProps {
  classSlug: string;
  currentLessonSlug: string;
  classTitle: string;
  lessons: Lesson[];
}

export default function LearningSidebar({
  classSlug,
  currentLessonSlug,
  classTitle,
  lessons,
}: LearningSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOMBOL MENU MOBILE */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Buka atau tutup daftar materi"
        className="fixed right-4 top-4 z-30 rounded-lg border bg-white px-4 py-2 text-sm font-semibold shadow-sm lg:hidden"
      >
        {isOpen ? "Tutup ✕" : "☰ Materi"}
      </button>

      {/* BACKDROP */}
      {isOpen && (
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-80 max-w-[85vw] overflow-y-auto border-r bg-white p-6 transition-transform duration-300 lg:sticky lg:top-0 lg:z-10 lg:h-screen lg:w-72 lg:max-w-none lg:shrink-0 lg:translate-x-0 lg:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/classes" className="text-lg font-bold">
          Codelab<span className="text-[#F08080]">.</span>
        </Link>

        <div className="mt-8">
          <Link
            href={`/classes/${classSlug}`}
            onClick={() => setIsOpen(false)}
            className="text-sm text-gray-500 hover:text-[#F08080]"
          >
            ← {classTitle}
          </Link>

          <div className="mt-6">
            <LessonProgress
              classSlug={classSlug}
              currentLessonSlug={currentLessonSlug}
              lessons={lessons}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
