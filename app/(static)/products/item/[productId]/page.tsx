import { notFound } from 'next/navigation'
import { products } from '@/app/data/products'
import Image from 'next/image'

export async function generateStaticParams() {
  return products.map(product => ({
    productId: product.id
  }))
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find(p => p.id === params.productId)
  
  if (!product) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative h-96">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-semibold text-green-600 mb-4">৳{product.price}</div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">পণ্যের বিবরণ</h2>
            <p>{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">প্রধান বৈশিষ্ট্য</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto">
            অর্ডার করুন
          </button>
        </div>
      </div>
    </div>
  )
}