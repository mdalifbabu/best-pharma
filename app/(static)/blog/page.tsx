import { blogPosts } from '@/app/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">পশুপালন ব্লগ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-xl font-semibold my-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                href={`/blog/item/${post.id}`}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                আরও পড়ুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}