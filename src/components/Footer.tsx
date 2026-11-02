import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* IDENTITAS */}
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Code<span className="text-[#F08080]">lab</span>.
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Platform belajar pemrograman yang membantu kamu memahami konsep
              coding secara bertahap, praktis, dan menyenangkan.
            </p>
          </div>

          {/* NAVIGASI */}
          <div>
            <h3 className="font-semibold text-gray-900">Navigasi</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#F08080]">
                Beranda
              </Link>

              <Link href="/classes" className="hover:text-[#F08080]">
                Kelas
              </Link>

              <Link href="/about" className="hover:text-[#F08080]">
                Tentang
              </Link>
            </div>
          </div>

          {/* BRAND */}
          <div>
            <h3 className="font-semibold text-gray-900">Pengembang</h3>

            <p className="mt-4 text-sm text-gray-500">
              Codelab by Fauzidleware
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Learn to Code, Build Your Future.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Codelab by Fauzidleware. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
