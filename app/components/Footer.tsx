import bestpharma from "@/app/assets/images/bestpharma.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={bestpharma}
                alt="Best Pharma Logo"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-bold">বেস্ট ফার্মা</h3>
            </div>
            <p className="text-gray-300">পশুপালনের জন্য সেরা পণ্য</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">লিংক</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white"
                >
                  পণ্য
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">পণ্য বিভাগ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/cow"
                  className="text-gray-300 hover:text-white"
                >
                  গরু
                </Link>
              </li>
              <li>
                <Link
                  href="/products/goat"
                  className="text-gray-300 hover:text-white"
                >
                  ছাগল
                </Link>
              </li>
              <li>
                <Link
                  href="/products/horse"
                  className="text-gray-300 hover:text-white"
                >
                  ঘোড়া
                </Link>
              </li>
              <li>
                <Link
                  href="/products/duck"
                  className="text-gray-300 hover:text-white"
                >
                  হাঁস
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hen"
                  className="text-gray-300 hover:text-white"
                >
                  মুরগি
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <address className="text-gray-300 not-italic">
              <p>মালগ্রাম</p>
              <p>বগুড়া - ৫৮০০</p>
              <p>বাংলাদেশ</p>
              <p>ফোন: +৮৮০ ১৭১১৫৭১০৮৫</p>
              <p>ইমেইল: info@bestpharma.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} বেস্ট ফার্মা. সকল স্বত্ব সংরক্ষিত.
          </p>
        </div>
      </div>
    </footer>
  );
}
