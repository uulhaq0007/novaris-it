import { Link, useParams } from 'react-router-dom'
import { FiCalendar, FiTag, FiUser } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import CtaBanner from '../components/sections/CtaBanner'
import Reveal from '../components/ui/Reveal'
import { posts } from '../data/site'

export default function BlogDetailsPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <>
        <PageBanner title="Post Not Found" crumbs={[{ label: 'Blog', to: '/blog' }, { label: 'Not Found' }]} />
        <section className="section">
          <div className="container text-center">
            <p className="mb-8">That article has been moved or removed.</p>
            <Link to="/blog" className="btn-primary">
              Back To Blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner title="Blog Details" crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]} />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="lg:col-span-8">
              <Reveal>
                <div className="overflow-hidden rounded-2xl">
                  <img src={post.image} alt={post.title} className="h-[380px] w-full object-cover" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-8 flex flex-wrap items-center gap-6 text-[14px]">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-accent" /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiUser className="text-accent" /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiTag className="text-accent" /> {post.category}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-[28px] font-bold leading-tight sm:text-[36px]">{post.title}</h2>

                <div className="mt-6 space-y-5 text-[16px] leading-[1.9]">
                  <p>{post.excerpt}</p>
                  <p>
                    Most teams reach for tooling first. They pick a component library, wire up a token pipeline, publish
                    a docs site — and six months later the product still looks like four different products stitched
                    together. The tooling was never the constraint.
                  </p>
                  <blockquote className="rounded-xl border-l-4 border-accent bg-mist px-8 py-7 font-display text-[19px] font-medium leading-relaxed text-heading">
                    A system only holds when the people using it agree on what counts as a decision — and who gets to
                    make it.
                  </blockquote>
                  <p>
                    Start with the decisions instead. Write down the ten choices your team argues about most: spacing
                    scale, when a modal is allowed, how errors are worded, what a primary action looks like. Agree on
                    those in a room. The library that follows is then just a record of the agreement, and it stays
                    accurate because everyone helped write it.
                  </p>
                  <h3 className="pt-2 font-display text-[23px] font-bold">Where teams usually stall</h3>
                  <p>
                    Adoption is the hard part, not authoring. Ship the system into one real feature before you announce
                    it, measure how long that feature took against the previous one, and use the difference as your
                    argument. Nothing converts a sceptical engineering manager faster than a shorter cycle time.
                  </p>
                </div>
              </Reveal>
            </article>

            <aside className="lg:col-span-4">
              <Reveal delay={150}>
                <div className="rounded-xl bg-mist p-7">
                  <h3 className="mb-5 font-display text-[20px] font-bold">Recent Posts</h3>
                  <ul className="space-y-5">
                    {related.map((item) => (
                      <li key={item.slug} className="flex gap-4">
                        <Link to={`/blog/${item.slug}`} className="shrink-0 overflow-hidden rounded-lg">
                          <img src={item.image} alt="" className="h-[74px] w-[84px] object-cover" loading="lazy" />
                        </Link>
                        <div>
                          <span className="text-[13px] text-body">{item.date}</span>
                          <h4 className="font-display text-[15px] font-bold leading-snug">
                            <Link to={`/blog/${item.slug}`} className="transition hover:text-accent">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-7 rounded-xl bg-heading p-8 text-white/70">
                  <h3 className="mb-3 font-display text-[21px] font-bold text-white">Need A Second Opinion?</h3>
                  <p className="mb-6 text-[15px]">
                    Book a free 45-minute review of your architecture, security posture or roadmap.
                  </p>
                  <Link to="/contact" className="btn-primary w-full">
                    Book A Call
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
