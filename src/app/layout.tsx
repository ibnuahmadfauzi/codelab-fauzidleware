import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Codelab by Fauzidleware | Learn to Code, Build Your Future",
    template: "%s | Codelab",
  },
  description:
    "Belajar pemrograman secara bertahap melalui tutorial coding yang terstruktur, praktis, dan mudah dipahami bersama Codelab.",
  keywords: [
    "Codelab",
    "Fauzidleware",
    "Belajar Coding",
    "Belajar JavaScript",
    "Tutorial Pemrograman",
    "Web Development",
  ],
  authors: [
    {
      name: "Fauzidleware",
    },
  ],
  applicationName: "Codelab",
  openGraph: {
    title: "Codelab by Fauzidleware",
    description:
      "Learn to Code, Build Your Future. Belajar pemrograman secara bertahap dan praktis.",
    siteName: "Codelab",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
