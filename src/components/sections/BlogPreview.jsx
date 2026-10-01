import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { posts } from '../../data/site'

export function PostCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="group h-full overflow-hidden rounded-xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-hover">
        <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-[240px] w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
            loading="lazy"
          />
          <span className="absolute left-5 top-5 rounded bg-accent px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-white">
            {post.category}
          </span>
        </Link>

        <div className="p-7">
          <div className="flex flex-wrap items-center gap-5 text-[14px] text-body">
            <span className="flex items-center gap-2">
              <FiCalendar className="text-accent" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FiUser className="text-accent" /> {post.author}
            </span>
          </div>

          <h3 className="mt-4 font-display text-[21px] font-bold leading-snug">
            <Link to={`/blog/${post.slug}`} className="transition-colors duration-300 hover:text-accent">
              {post.title}
            </Link>
          </h3>

          <p className="mt-3 text-[15px]">{post.excerpt}</p>

          <Link
            to={`/blog/${post.slug}`}
            className="mt-5 inline-flex items-center gap-2 font-display text-[14px] font-bold uppercase tracking-wide text-heading transition-colors duration-300 group-hover:text-accent"
          >
            Read More
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export default function BlogPreview() {
  return (
    <section className="section bg-mist">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Latest News & Blog"
          title="Get Every Single Update"
          text="Field notes from our engineers — what worked, what did not, and the numbers behind both."
          className="mb-14"
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
