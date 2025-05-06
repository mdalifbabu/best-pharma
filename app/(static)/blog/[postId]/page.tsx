import { notFound } from 'next/navigation'
import { blogPosts } from '@/app/data/blogPosts'
import Image from 'next/image'

interface PageProps {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    postId: post.id
  }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.id === params.postId)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </div>
        
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </article>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">সম্পর্কিত ব্লগ পোস্ট</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts
            .filter(p => p.id !== post.id)
            .slice(0, 3)
            .map(relatedPost => (
              <div key={relatedPost.id} className="border rounded-lg overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                  <a 
                    href={`/blog/${relatedPost.id}`}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    পড়ুন →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}