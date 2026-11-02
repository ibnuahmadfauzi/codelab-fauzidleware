import Link from "next/link";

export const metadata = {
  title: "Tentang Codelab | Codelab by Fauzidleware",
  description:
    "Kenali Codelab, platform belajar pemrograman yang membantu siapa saja belajar coding secara bertahap dan praktis.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 pb-20 pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-[#FFF1F0] px-4 py-2 text-sm font-semibold text-[#E56B6F]">
            About Codelab
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 md:text-6xl">
            Belajar Coding,
            <span className="block text-[#F08080]">Bangun Masa Depan.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            Codelab adalah platform pembelajaran pemrograman yang dirancang
            untuk membantu siapa saja memahami coding melalui materi yang
            terstruktur, sederhana, dan mudah dipraktikkan.
          </p>

          <div className="mt-9">
            <Link
              href="/classes"
              className="inline-flex rounded-xl bg-[#F08080] px-7 py-3.5 font-semibold text-white transition hover:bg-[#E56B6F]"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang Codelab */}
      <section className="bg-[#FFF1F0] px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold text-[#E56B6F]">Mengenal Codelab</p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Apa itu Codelab?
            </h2>

            <p className="mt-5 leading-relaxed text-stone-600">
              Codelab merupakan ruang belajar digital yang berfokus pada
              pembelajaran pemrograman. Platform ini menyediakan materi belajar
              yang disusun secara bertahap, mulai dari konsep dasar hingga
              praktik pengembangan program.
            </p>

            <p className="mt-4 leading-relaxed text-stone-600">
              Kami percaya bahwa belajar coding tidak harus rumit. Dengan
              penjelasan yang mudah dipahami dan contoh kode yang relevan,
              setiap orang dapat mulai membangun kemampuan pemrogramannya.
            </p>
          </div>

          <div className="rounded-3xl border border-[#FDE2E0] bg-white p-8 shadow-sm">
            <div className="text-5xl">{"</>"}</div>
            <h3 className="mt-5 text-2xl font-bold text-stone-900">
              Learn to Code,
              <br />
              Build Your Future.
            </h3>
            <p className="mt-4 leading-relaxed text-stone-600">
              Belajar sedikit demi sedikit, berlatih secara konsisten, dan
              kembangkan kemampuan untuk menciptakan sesuatu yang bermanfaat.
            </p>
          </div>
        </div>
      </section>

      {/* Tujuan */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold text-[#E56B6F]">Mengapa Codelab?</p>
            <h2 className="mt-3 text-3xl font-bold text-stone-900">
              Belajar dengan Cara yang Lebih Mudah
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Codelab dikembangkan dengan beberapa prinsip pembelajaran berikut.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 p-7">
              <div className="text-3xl">📚</div>
              <h3 className="mt-5 text-xl font-bold text-stone-900">
                Materi Terstruktur
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Materi disusun secara berurutan agar proses belajar lebih
                terarah, mulai dari dasar hingga materi lanjutan.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-7">
              <div className="text-3xl">💻</div>
              <h3 className="mt-5 text-xl font-bold text-stone-900">
                Praktik Langsung
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Contoh kode dan latihan membantu pengguna memahami konsep
                melalui pengalaman praktik.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 p-7">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-5 text-xl font-bold text-stone-900">
                Belajar Bertahap
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Pengguna dapat belajar sesuai kemampuan dan menyelesaikan materi
                secara bertahap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pengembang */}
      <section className="bg-[#FFF1F0] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-[#E56B6F]">Behind Codelab</p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900">
            Dibangun oleh Fauzidleware
          </h2>

          <p className="mt-5 leading-relaxed text-stone-600">
            Codelab merupakan salah satu bagian dari Fauzidleware, sebuah brand
            personal yang berfokus pada teknologi, pengembangan web, dan berbagi
            pengetahuan.
          </p>

          <p className="mt-4 leading-relaxed text-stone-600">
            Platform ini dikembangkan sebagai media untuk berbagi ilmu
            pemrograman dan membantu lebih banyak orang mengenal dunia
            teknologi.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#F08080] px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Siap Memulai Perjalanan Coding?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/90">
            Mulai dari satu materi sederhana. Terus berlatih dan kembangkan
            kemampuanmu bersama Codelab.
          </p>

          <Link
            href="/classes"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-[#E56B6F] transition hover:bg-[#FFF1F0]"
          >
            Jelajahi Kelas
          </Link>
        </div>
      </section>
    </main>
  );
}
