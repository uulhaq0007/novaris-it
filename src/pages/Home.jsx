import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Counters from '../components/sections/Counters'
import Team from '../components/sections/Team'
import CaseStudies from '../components/sections/CaseStudies'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import BlogPreview from '../components/sections/BlogPreview'
import CtaBanner from '../components/sections/CtaBanner'
import BrandMarquee from '../components/sections/BrandMarquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <BrandMarquee />
      <Services />
      <Counters />
      <Team />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
