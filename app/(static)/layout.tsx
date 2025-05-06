import "@/app/assets/styles/globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "বেস্ট ফার্মা - পশুপালনের জন্য সেরা পণ্য",
  description:
    "গরু, ছাগল, ঘোড়া, হাঁস, মুরগির জন্য উন্নতমানের ওষুধ ও পশুপালন সামগ্রী",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
