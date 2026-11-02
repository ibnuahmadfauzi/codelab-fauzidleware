import Link from "next/link";
import { getAllClasses } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const instant = false;

export default async function HomePage() {
  const classes = await getAllClasses();
  const featuredClasses = classes.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <span className="inline-flex rounded-full border border-[#FDE2E0] bg-[#FFF1F0] px-4 py-2 text-sm font-semibold text-[#E56B6F]">
              Welcome to Codelab
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Learn to Code,
              <span className="block text-[#F08080]">Build Your Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Mulai perjalanan belajar pemrograman dari dasar. Pelajari berbagai
              bahasa pemrograman melalui materi yang terstruktur, praktis, dan
              mudah dipahami.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/classes"
                className="rounded-xl bg-[#F08080] px-7 py-3.5 font-semibold text-white transition hover:bg-[#E56B6F]"
              >
                Mulai Belajar →
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Tentang Codelab
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ Materi terstruktur</span>
              <span>✓ Belajar mandiri</span>
              <span>✓ Praktik coding</span>
            </div>
          </div>

          {/* HERO CODE CARD */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[#FDE2E0]/70 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-gray-800 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-400">
                  hello-world.js
                </span>
              </div>

              <div className="overflow-x-auto p-6 text-sm leading-8 sm:p-8 sm:text-base">
                <p className="text-gray-500">
                  // Your coding journey starts here
                </p>

                <p className="mt-4">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-[#F4A6A1]">nama</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-300">"Developer"</span>;
                </p>

                <p className="mt-2">
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-yellow-300">belajar</span>() {"{"}
                </p>

                <p className="pl-6">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-green-300">
                    "Masa depan dimulai hari ini!"
                  </span>
                  ;
                </p>

                <p>{"}"}</p>

                <p className="mt-4">
                  <span className="text-[#F4A6A1]">console</span>.
                  <span className="text-yellow-300">log</span>(
                  <span className="text-yellow-300">belajar</span>());
                </p>

                <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900 p-4">
                  <p className="text-xs text-gray-500">OUTPUT</p>
                  <p className="mt-2 text-green-400">
                    Masa depan dimulai hari ini!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#F08080]">
            Start Your Journey
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Belajar Coding Jadi Lebih Mudah
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Tidak harus langsung menjadi ahli untuk mulai belajar. Pahami konsep
            dasarnya, praktikkan setiap materi, dan kembangkan kemampuanmu
            secara bertahap.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Materi Terstruktur",
              description:
                "Pelajari pemrograman dari konsep dasar hingga materi yang lebih kompleks.",
            },
            {
              number: "02",
              title: "Contoh Praktis",
              description:
                "Pahami konsep melalui contoh kode dan penerapannya dalam program.",
            },
            {
              number: "03",
              title: "Belajar Mandiri",
              description:
                "Atur proses belajarmu sendiri dan pantau kemajuan setiap materi.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-gray-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#F08080]">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CLASSES */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#F08080]">
                Explore Classes
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Mulai Belajar Pemrograman
              </h2>

              <p className="mt-3 text-gray-600">
                Temukan materi yang sesuai dengan perjalanan belajarmu.
              </p>
            </div>

            <Link
              href="/classes"
              className="font-semibold text-[#F08080] hover:text-[#E56B6F]"
            >
              Lihat Semua Kelas →
            </Link>
          </div>

          {featuredClasses.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredClasses.map((item) => (
                <Link
                  key={item.slug}
                  href={`/classes/${item.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#F4A6A1] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-[#FFF1F0] px-3 py-1.5 text-xs font-semibold text-[#E56B6F]">
                      {item.category}
                    </span>

                    <span className="text-xs text-gray-500">{item.level}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-gray-900 transition group-hover:text-[#F08080]">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t pt-5">
                    <span className="text-sm text-gray-500">{item.author}</span>

                    <span className="font-semibold text-[#F08080]">
                      Pelajari →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed bg-white p-10 text-center">
              <p className="font-semibold text-gray-700">
                Belum ada kelas yang tersedia.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Kelas baru akan ditampilkan di sini setelah dipublikasikan.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-[#F08080] px-7 py-16 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Siap Memulai Perjalanan Coding?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#FDE2E0]">
            Mulai dari satu materi sederhana. Terus belajar, terus mencoba, dan
            bangun kemampuan pemrogramanmu.
          </p>

          <Link
            href="/classes"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-[#E56B6F] transition hover:bg-[#FFF1F0]"
          >
            Jelajahi Kelas
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
