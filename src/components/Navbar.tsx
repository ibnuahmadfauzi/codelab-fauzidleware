import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Code<span className="text-[#F08080]">lab</span>
          <span className="text-[#F08080]">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-[#F08080]"
          >
            Beranda
          </Link>

          <Link
            href="/classes"
            className="text-sm font-medium text-gray-700 hover:text-[#F08080]"
          >
            Kelas
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-[#F08080]"
          >
            Tentang
          </Link>
        </div>

        {/* TOMBOL */}
        <Link
          href="/classes"
          className="rounded-lg bg-[#F08080] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E56B6F]"
        >
          Mulai Belajar
        </Link>
      </nav>
    </header>
  );
}
