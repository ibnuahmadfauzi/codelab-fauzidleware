import Link from "next/link";
import { notFound } from "next/navigation";
import { getClass, getClassLessons, getLesson } from "@/lib/mdx";
import LearningSidebar from "@/components/LearningSidebar";

export const instant = false;

interface PageProps {
  params: Promise<{
    classSlug: string;
    lessonSlug: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { classSlug, lessonSlug } = await params;

  const classData = await getClass(classSlug);

  if (!classData) notFound();

  const lessons = await getClassLessons(classSlug);
  const lesson = await getLesson(classSlug, lessonSlug);

  if (!lesson) notFound();

  const currentIndex = lessons.findIndex((item) => item.slug === lessonSlug);

  if (currentIndex === -1) notFound();

  const previousLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-[1440px]">
        {/* SIDEBAR */}
        <LearningSidebar
          classSlug={classSlug}
          currentLessonSlug={lessonSlug}
          classTitle={classData.title}
          lessons={lessons}
        />

        {/* KONTEN UTAMA */}
        <main className="min-w-0 flex-1 px-6 py-20 lg:px-12 lg:py-10">
          <div className="mx-auto max-w-3xl">
            {/* BREADCRUMB */}
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/classes" className="hover:text-[#F08080]">
                Kelas
              </Link>

              <span>/</span>

              <Link
                href={`/classes/${classSlug}`}
                className="hover:text-[#F08080]"
              >
                {classData.title}
              </Link>

              <span>/</span>

              <span className="text-gray-900">{lesson.frontmatter.title}</span>
            </div>

            {/* JUDUL MATERI */}
            <header className="mb-10 border-b pb-8">
              <p className="mb-3 text-sm font-semibold text-[#F08080]">
                {classData.title}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {lesson.frontmatter.title}
              </h1>

              {lesson.frontmatter.description && (
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  {lesson.frontmatter.description}
                </p>
              )}
            </header>

            {/* DAFTAR ISI */}
            {lesson.headings && lesson.headings.length > 0 && (
              <nav className="mb-10 rounded-xl border bg-gray-50 p-6">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
                  Daftar Isi
                </h2>

                <ul className="space-y-3">
                  {lesson.headings.map((heading) => (
                    <li
                      key={heading.slug}
                      className={heading.depth === 3 ? "ml-5" : ""}
                    >
                      <a
                        href={`#${heading.slug}`}
                        className="text-sm text-gray-600 transition hover:text-[#F08080]"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* ISI MATERI */}
            <article className="lesson-content">{lesson.content}</article>

            {/* NAVIGASI MATERI */}
            <div className="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2">
              {previousLesson ? (
                <Link
                  href={`/learn/${classSlug}/${previousLesson.slug}`}
                  className="rounded-xl border p-5 transition hover:border-[#ED7778] hover:bg-[#FFF1F0]"
                >
                  <span className="text-xs text-gray-500">
                    ← Materi Sebelumnya
                  </span>

                  <p className="mt-2 font-semibold text-gray-900">
                    {previousLesson.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  href={`/learn/${classSlug}/${nextLesson.slug}`}
                  className="rounded-xl border p-5 text-right transition hover:border-[#ED7778] hover:bg-[#FFF1F0]"
                >
                  <span className="text-xs text-gray-500">
                    Materi Berikutnya →
                  </span>

                  <p className="mt-2 font-semibold text-gray-900">
                    {nextLesson.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
