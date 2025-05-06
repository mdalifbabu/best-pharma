import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return [
    { category: "cow" },
    { category: "goat" },
    { category: "horse" },
    { category: "duck" },
    { category: "hen" },
    { category: "cat" },
    { category: "dog" },
  ];
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (p) => p.category === category || p.category === "all"
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    cow: "গরু",
    goat: "ছাগল",
    horse: "ঘোড়া",
    duck: "হাঁস",
    hen: "মুরগি",
    cat: "বিড়াল",
    dog: "কুকুর",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {categoryNames[category]} এর জন্য পণ্য
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
