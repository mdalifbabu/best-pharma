import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">আমাদের সম্পর্কে</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image 
            src="/assets/images/about.jpg" 
            alt="About Best Pharma" 
            width={600} 
            height={400} 
            className="rounded-lg"
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">বেস্ট ফার্মা - পশুপালনের বিশ্বস্ত সঙ্গী</h2>
          <p className="mb-4">
            ২০০৫ সাল থেকে আমরা পশুপালকদের সাথে কাজ করে আসছি। আমাদের লক্ষ্য হল পশুপালন শিল্পে উন্নতমানের ওষুধ ও পণ্য সরবরাহ করা।
          </p>
          <p className="mb-4">
            আমরা গরু, ছাগল, ঘোড়া, হাঁস, মুরগি সহ সকল প্রকার গৃহপালিত পশুপাখির জন্য উন্নতমানের ওষুধ ও পুষ্টি সরবরাহ করি।
          </p>
          <p className="mb-4">
            আমাদের পণ্য সমূহ আন্তর্জাতিক মান নিয়ন্ত্রণ সংস্থা দ্বারা অনুমোদিত এবং সম্পূর্ণ নিরাপদ।
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">আমাদের মিশন</h3>
          <p>
            পশুপালন শিল্পে উন্নতমানের পণ্য সরবরাহের মাধ্যমে কৃষকদের আয় বৃদ্ধি করা এবং দেশের প্রাণিসম্পদ উন্নয়নে ভূমিকা রাখা।
          </p>
        </div>
      </div>
    </div>
  )
}