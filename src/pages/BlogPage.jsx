import { useState } from 'react'
import PageBanner from '../components/layout/PageBanner'
import { PostCard } from '../components/sections/BlogPreview'
import CtaBanner from '../components/sections/CtaBanner'
import { posts } from '../data/site'

const categories = ['All', ...new Set(posts.map((p) => p.category))]

export default function BlogPage() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <PageBanner title="Our Blog" crumbs={[{ label: 'Blog' }]} />

      <section className="section">
        <div className="container">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full px-6 py-2.5 font-display text-[14px] font-bold uppercase tracking-wide transition-all duration-300 ${
                  active === category
                    ? 'bg-accent text-white shadow-[0_8px_22px_rgba(8,106,215,.32)]'
                    : 'bg-mist text-heading hover:bg-heading hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <PostCard key={post.slug} post={post} delay={i * 110} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
