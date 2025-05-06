import anicidplus from "@/app/assets/images/products/anicid-plus.webp";
import apsovet from "@/app/assets/images/products/apsovet.png";
import avianad3e from "@/app/assets/images/products/avian-ad3e.png";
import basel from "@/app/assets/images/products/ba-sel.png";
import bestheat from "@/app/assets/images/products/best-heat.png";
import bestruchi from "@/app/assets/images/products/best-ruchi.png";
import feplus from "@/app/assets/images/products/fe-plus.png";
import growboost from "@/app/assets/images/products/grow-boost.webp";
import liverbooster from "@/app/assets/images/products/liver-booster.png";
import megacal from "@/app/assets/images/products/mega-cal.png";
import mucoph from "@/app/assets/images/products/muco-ph.webp";
import tmolder from "@/app/assets/images/products/t-molder.webp";
import zyncvet from "@/app/assets/images/products/zync-vet.png";

export interface Product {
  id: string;
  name: string;
  name_en: string;
  category: string;
  price: number;
  description: string;
  description_en: string;
  image: any;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "অ্যাপসভেট (লেন্থেনাইড ১০%, অ্যাসিটিক অ্যাসিড ৩%)",
    name_en: "Apsovet (Lanthenide 10%, Acitic acid 3%)",
    category: "cow",
    price: 500,
    description:
      "লেন্থেনাইড ও অ্যাসিটিক অ্যাসিড সমৃদ্ধ টনিক যা পশুর স্বাস্থ্যের উন্নতিতে সহায়তা করে।",
    description_en:
      "Supplement with Lanthenide and Acitic acid that supports livestock health.",
    image: apsovet,
    features: [
      "লেন্থেনাইড ১০% ও অ্যাসিটিক অ্যাসিড ৩% সমৃদ্ধ",
      "পাচন প্রক্রিয়া উন্নত করে",
      "শরীরের ভারসাম্য রক্ষা করে",
    ],
  },
  {
    id: "2",
    name: "বেস্ট হিট পাউডার",
    name_en: "Best Heat Powder",
    category: "cow",
    price: 400,
    description: "গাভীর গরম আসার সময় নিয়ন্ত্রণে সহায়ক পাউডার।",
    description_en: "Powder to support and regulate heat cycles in cows.",
    image: bestheat,
    features: [
      "উষ্ণতা নিয়ন্ত্রণে কার্যকর",
      "প্রাকৃতিক উপাদানসমূহ",
      "সহজে মিশে যায়",
    ],
  },
  {
    id: "3",
    name: "এভিয়ান এডি৩ই ১০০ মি.লি.",
    name_en: "Avian AD3E 100ml",
    category: "hen",
    price: 200,
    description: "পাখিদের জন্য ভিটামিন A, D3 এবং E সমৃদ্ধ তরল সাপ্লিমেন্ট।",
    description_en:
      "Liquid supplement for birds containing vitamins A, D3, and E.",
    image: avianad3e,
    features: [
      "ভিটামিন A, D3, ও E সমৃদ্ধ",
      "হাড় ও ডিমের মান উন্নত করে",
      "দৈনিক ব্যবহারে উপযোগী",
    ],
  },
  {
    id: "4",
    name: "গ্রো বুস্ট",
    name_en: "Grow Boost",
    category: "all",
    price: 350,
    description: "প্রাণীদের বৃদ্ধির জন্য উপযুক্ত পুষ্টি সমৃদ্ধ সাপ্লিমেন্ট।",
    description_en:
      "Nutritional supplement ideal for promoting growth in animals.",
    image: growboost,
    features: [
      "দ্রুত বৃদ্ধিতে সহায়তা করে",
      "শক্তি বৃদ্ধি করে",
      "বিভিন্ন ভিটামিন ও খনিজ সমৃদ্ধ",
    ],
  },
  {
    id: "5",
    name: "জিঙ্ক ভেট (আয়রন সিরাপ)",
    name_en: "Zync Vet (Iron Syrup)",
    category: "goat",
    price: 320,
    description: "আয়রন সমৃদ্ধ সিরাপ যা পশুর রক্তস্বল্পতা দূর করে।",
    description_en: "Iron-rich syrup that helps prevent anemia in livestock.",
    image: zyncvet,
    features: ["আয়রন সমৃদ্ধ", "রক্তস্বল্পতা কমায়", "রুচি বৃদ্ধি করে"],
  },
  {
    id: "6",
    name: "এফই প্লাস (আয়রন টনিক)",
    name_en: "Fe Plus (Iron Tonic)",
    category: "horse",
    price: 340,
    description: "শক্তি ও রক্ত তৈরিতে সহায়ক আয়রন টনিক।",
    description_en:
      "Iron tonic that helps in boosting energy and blood production.",
    image: feplus,
    features: ["আয়রন ও খনিজ সমৃদ্ধ", "রোগ প্রতিরোধে সহায়ক", "সহজে হজমযোগ্য"],
  },
  {
    id: "7",
    name: "বেস্ট রুচি (পাচন ও রুচি বৃদ্ধিকারক পাউডার)",
    name_en: "Best Ruchi (Digestion & Appetite Enhancer Powder)",
    category: "all",
    price: 280,
    description: "রুচি ও পাচন প্রক্রিয়া বৃদ্ধির জন্য কার্যকর পাউডার।",
    description_en: "Effective powder for improving digestion and appetite.",
    image: bestruchi,
    features: [
      "পাচন প্রক্রিয়া উন্নত করে",
      "রুচি বাড়ায়",
      "প্রাকৃতিক উপাদানসমূহ",
    ],
  },
  {
    id: "8",
    name: "লিভার বুস্টার (পশুর লিভার টনিক)",
    name_en: "Liver Booster (Liver Tonic for Livestock)",
    category: "duck",
    price: 360,
    description: "পশুর লিভার সুস্থ রাখার জন্য উপযুক্ত টনিক।",
    description_en:
      "Tonic for maintaining healthy liver function in livestock.",
    image: liverbooster,
    features: ["লিভার পরিষ্কার করে", "টক্সিন দূর করে", "পাচনে সহায়তা করে"],
  },
  {
    id: "9",
    name: "বিএ সেল লিকুইড (ভিটামিন ই + সোডিয়াম সেলেনাইট)",
    name_en: "BA Sel Liquid (Vitamin E + S. Selenite)",
    category: "cat",
    price: 390,
    description: "ভিটামিন ই ও সোডিয়াম সেলেনাইট সমৃদ্ধ সাপ্লিমেন্ট।",
    description_en: "Supplement with Vitamin E and Sodium Selenite.",
    image: basel,
    features: [
      "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ",
      "প্রজনন ক্ষমতা উন্নত করে",
      "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
    ],
  },
  {
    id: "10",
    name: "মুকো পিএইচ (অ্যাসিডিফায়ার ও কন্ডিশনার)",
    name_en: "Muco pH (Liquid Acidifier & Conditioner)",
    category: "hen",
    price: 310,
    description: "পানির পিএইচ নিয়ন্ত্রণ এবং পরিবেশ উন্নয়নে সহায়ক তরল।",
    description_en:
      "Liquid acidifier and conditioner for water pH control and environment support.",
    image: mucoph,
    features: [
      "পিএইচ ব্যালেন্স বজায় রাখে",
      "ব্যাকটেরিয়া দমন করে",
      "হজমে সহায়ক",
    ],
  },
  {
    id: "11",
    name: "টি-মোল্ডার লিকুইড (টক্সিন বাইন্ডার ও ছাঁচনাশক)",
    name_en: "T-MOLDER liquid (Toxin Binder & Mould Inhibitor)",
    category: "all",
    price: 450,
    description: "ফিডের টক্সিন দূর করে এবং ছাঁচ প্রতিরোধে সহায়ক।",
    description_en: "Eliminates feed toxins and prevents mold growth.",
    image: tmolder,
    features: [
      "টক্সিন বাইন্ডিং করে",
      "ছাঁচ প্রতিরোধ করে",
      "খাদ্য মান রক্ষা করে",
    ],
  },
  {
    id: "12",
    name: "অ্যানিসিড প্লাস (প্রাকৃতিক স্যালমোনেলা প্রতিরোধক)",
    name_en: "ANICID Plus (Natural Salmonella Preventor)",
    category: "hen",
    price: 370,
    description: "পোলট্রির জন্য প্রাকৃতিক স্যালমোনেলা প্রতিরোধক তরল।",
    description_en: "Natural liquid solution to prevent salmonella in poultry.",
    image: anicidplus,
    features: [
      "স্যালমোনেলা প্রতিরোধে কার্যকর",
      "প্রাকৃতিক উপাদান",
      "অ্যান্টিব্যাকটেরিয়াল",
    ],
  },
  {
    id: "13",
    name: "মেগা ক্যাল ডি এস",
    name_en: "Mega CAL DS",
    category: "all",
    price: 390,
    description: "ক্যালসিয়াম এবং ভিটামিন ডি সমৃদ্ধ ফিড সাপ্লিমেন্ট।",
    description_en: "Feed supplement enriched with calcium and vitamin D.",
    image: megacal,
    features: ["হাড় মজবুত করে", "ডিমের গঠন উন্নত করে", "ভিটামিন ডি সহায়ক"],
  },
];
