import { products } from '@/app/data/products'
import ProductCard from '@/app/components/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 6) // Show first 6 products as featured
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">আমাদের সেরা পণ্য</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/products" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            সব পণ্য দেখুন
          </a>
        </div>
      </div>
    </section>
  )
}