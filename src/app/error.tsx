"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-lg text-center">
        <div className="text-6xl">😥</div>

        <h1 className="mt-6 text-3xl font-bold text-stone-900">
          Terjadi Kesalahan
        </h1>

        <p className="mt-4 leading-relaxed text-stone-600">
          Maaf, sepertinya ada masalah saat memuat halaman ini. Silakan coba
          muat ulang halaman.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F08080] px-6 py-3 font-semibold text-white transition hover:bg-[#E56B6F]"
        >
          <RefreshCw size={18} />
          Coba Lagi
        </button>
      </div>
    </main>
  );
}
