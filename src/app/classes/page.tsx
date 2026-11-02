import { getAllClasses } from "@/lib/mdx";
import ClassCatalog from "@/components/ClassCatalog";

export const instant = false;

export default async function ClassesPage() {
  const classes = await getAllClasses();

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 pb-16 pt-28">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#FFF1F0] px-4 py-2 text-sm font-semibold text-[#E56B6F]">
              Explore Classes
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
              Temukan Kelas
              <span className="text-[#F08080]"> Pemrograman.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Pelajari berbagai materi pemrograman secara bertahap. Pilih kelas
              yang sesuai dengan kebutuhan dan tingkat kemampuanmu.
            </p>
          </div>

          {/* Search, filter, and class list */}
          <ClassCatalog classes={classes} />
        </div>
      </section>
    </main>
  );
}
