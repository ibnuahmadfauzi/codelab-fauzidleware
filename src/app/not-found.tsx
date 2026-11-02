import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-8xl font-extrabold tracking-tight text-[#F08080]">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold text-stone-900">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-4 leading-relaxed text-stone-600">
          Sepertinya halaman yang kamu cari tidak tersedia atau sudah
          dipindahkan. Jangan khawatir, kamu bisa kembali menjelajahi Codelab.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F08080] px-6 py-3 font-semibold text-white transition hover:bg-[#E56B6F]"
          >
            <Home size={18} />
            Beranda
          </Link>

          <Link
            href="/classes"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-200 px-6 py-3 font-semibold text-stone-700 transition hover:bg-[#FFF1F0]"
          >
            <ArrowLeft size={18} />
            Jelajahi Kelas
          </Link>
        </div>
      </div>
    </main>
  );
}
