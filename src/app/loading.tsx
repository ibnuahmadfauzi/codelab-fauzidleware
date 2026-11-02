export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#FDE2E0] border-t-[#F08080]" />

        <h2 className="mt-6 text-lg font-bold text-stone-900">
          Memuat Codelab...
        </h2>

        <p className="mt-2 text-sm text-stone-500">
          Sebentar ya, kami sedang menyiapkan materi untukmu.
        </p>
      </div>
    </main>
  );
}
