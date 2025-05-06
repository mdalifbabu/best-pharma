import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-70 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <h4 className="font-medium mb-1">বৈশিষ্ট্য:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {product.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">৳{product.price}</span>
          <Link
            href={`/products/item/${product.id}`}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            বিস্তারিত দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
