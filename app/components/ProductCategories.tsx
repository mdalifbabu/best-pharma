import Link from 'next/link'
import Image from 'next/image'
import { categories } from '../data/categories'
import CategoryCarousel from './CategoryCarousel'

export default function ProductCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">পণ্য বিভাগসমূহ</h2>
        <CategoryCarousel />
      </div>
    </section>
  )
}