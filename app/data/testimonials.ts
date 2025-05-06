export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "রফিকুল ইসলাম",
    role: "গরু খামারি",
    content:
      "বেস্ট ফার্মার ভিটামিন ব্যবহার করে আমার গরুগুলোর স্বাস্থ্য অনেক উন্নত হয়েছে। দুধের উৎপাদনও বেড়েছে।",
    rating: 5,
  },
  {
    id: 2,
    name: "সালমা খাতুন",
    role: "মুরগি খামারি",
    content:
      "তাদের কৃমিনাশক ওষুধ খুবই কার্যকরী। ব্যবহারের পর থেকে আমার মুরগির মৃত্যুর হার অনেক কমে গেছে।",
    rating: 4,
  },
  {
    id: 3,
    name: "জাহিদ হাসান",
    role: "ছাগল খামারি",
    content:
      "বেস্ট ফার্মার পণ্যের গুণগত মান খুব ভালো। দামও সহনীয়। আমি নিয়মিত তাদের কাছ থেকে পণ্য কিনি।",
    rating: 5,
  },
];
