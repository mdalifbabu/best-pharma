import HeroSection from '@/app/components/HeroSection'
import ProductCategories from '@/app/components/ProductCategories'
import FeaturedProducts from '@/app/components/FeaturedProducts'
import Testimonials from '@/app/components/Testimonials'
import BlogSection from '@/app/components/BlogSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <BlogSection />
    </div>
  )
}