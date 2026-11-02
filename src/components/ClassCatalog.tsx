"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowRight } from "lucide-react";

interface ClassItem {
  slug: string;
  title: string;
  description: string;
  level: string;
  category?: string;
  lessons?: number;
}

interface ClassCatalogProps {
  classes: ClassItem[];
}

export default function ClassCatalog({ classes }: ClassCatalogProps) {
  const [search, setSearch] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Semua");

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword) ||
        (item.category ?? "").toLowerCase().includes(keyword);

      const matchesLevel =
        selectedLevel === "Semua" ||
        item.level.toLowerCase() === selectedLevel.toLowerCase();

      return matchesSearch && matchesLevel;
    });
  }, [classes, search, selectedLevel]);

  return (
    <div>
      {/* Search and filter */}
      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Cari kelas pemrograman..."
            className="w-full rounded-xl border border-stone-200 bg-white py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#F08080] focus:ring-2 focus:ring-[#F08080]/20"
          />
        </div>

        <select
          value={selectedLevel}
          onChange={(event) => setSelectedLevel(event.target.value)}
          className="rounded-xl border border-stone-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#F08080]"
        >
          <option value="Semua">Semua Tingkat</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Result information */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-stone-500">
          Menampilkan <strong>{filteredClasses.length}</strong> dari{" "}
          <strong>{classes.length}</strong> kelas
        </p>
      </div>

      {/* Class cards */}
      {filteredClasses.length > 0 ? (
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.map((item) => (
            <article
              key={item.slug}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F4A6A1] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#FFF1F0] px-3 py-1 text-xs font-semibold text-[#E56B6F]">
                  {item.level}
                </span>

                <BookOpen size={20} className="text-[#F08080]" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-stone-900">
                {item.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                {item.category && (
                  <span className="rounded-lg bg-stone-100 px-3 py-1.5">
                    {item.category}
                  </span>
                )}

                {typeof item.lessons === "number" && (
                  <span className="rounded-lg bg-stone-100 px-3 py-1.5">
                    {item.lessons} Materi
                  </span>
                )}
              </div>

              <Link
                href={`/classes/${item.slug}`}
                className="mt-6 flex items-center justify-between rounded-xl bg-[#FFF1F0] px-4 py-3 text-sm font-semibold text-[#E56B6F] transition group-hover:bg-[#F08080] group-hover:text-white"
              >
                Pelajari Kelas
                <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-stone-300 px-6 py-16 text-center">
          <Search size={32} className="mx-auto text-stone-400" />
          <h3 className="mt-4 font-bold text-stone-800">
            Kelas tidak ditemukan
          </h3>
          <p className="mt-2 text-sm text-stone-500">
            Coba gunakan kata kunci atau filter yang berbeda.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedLevel("Semua");
            }}
            className="mt-5 rounded-lg bg-[#F08080] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#E56B6F]"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
}
