import herobg from "@/app/assets/images/animals-landscape.png";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-green-700 text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src={herobg}
        alt="Animal Care Background"
        fill
        className="object-cover"
      />

      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            পশুপালনের জন্য সেরা পণ্য
          </h1>
          <p className="text-xl mb-8">
            গরু, ছাগল, ঘোড়া, হাঁস ও মুরগির জন্য উন্নতমানের ওষুধ ও পুষ্টি
            সরবরাহকারী
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              আমাদের পণ্য দেখুন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-800 transition-colors"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
