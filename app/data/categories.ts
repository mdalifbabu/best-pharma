import cat from "@/app/assets/images/category/cat.avif";
import cow from "@/app/assets/images/category/cow.jpg";
import dog from "@/app/assets/images/category/dog.jpg";
import duck from "@/app/assets/images/category/duck.jpeg";
import goat from "@/app/assets/images/category/goat.jpg";
import hen from "@/app/assets/images/category/hen.jpg";
import horse from "@/app/assets/images/category/horse.webp";

export interface Category {
  id: string;
  name: string;
  image: any;
  description: string;
}

export const categories: Category[] = [
  {
    id: "cow",
    name: "গরু",
    image: cow,
    description: "গরুর জন্য উন্নতমানের ওষুধ ও ভিটামিন",
  },
  {
    id: "goat",
    name: "ছাগল",
    image: goat,
    description: "ছাগলের স্বাস্থ্য সুরক্ষার পণ্য",
  },
  {
    id: "horse",
    name: "ঘোড়া",
    image: horse,
    description: "ঘোড়ার যত্ন ও চিকিৎসা সামগ্রী",
  },
  {
    id: "duck",
    name: "হাঁস",
    image: duck,
    description: "হাঁসের খাদ্য ও ওষুধ",
  },
  {
    id: "hen",
    name: "মুরগি",
    image: hen,
    description: "মুরগির রোগ প্রতিরোধক",
  },
  {
    id: "cat",
    name: "বিড়াল",
    image: cat,
    description: "বিড়ালের যত্ন ও পুষ্টিকর পণ্য",
  },
  {
    id: "dog",
    name: "কুকুর",
    image: dog,
    description: "কুকুরের স্বাস্থ্য ও পরিচর্যার সামগ্রী",
  },
];
