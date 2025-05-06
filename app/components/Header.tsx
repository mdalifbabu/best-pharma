import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/bestpharma.png"

export default function Header() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Best Pharma Logo"
            width={50}
            height={50}
          />
          <Link href="/" className="text-2xl font-bold">
            বেস্ট ফার্মা
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-200">
            হোম
          </Link>
          <Link href="/products" className="hover:text-green-200">
            পণ্য
          </Link>
          <Link href="/about" className="hover:text-green-200">
            আমাদের সম্পর্কে
          </Link>
          <Link href="/blog" className="hover:text-green-200">
            ব্লগ
          </Link>
          <Link href="/contact" className="hover:text-green-200">
            যোগাযোগ
          </Link>
        </nav>

        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
