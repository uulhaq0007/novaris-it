import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CaseStudyPage from './pages/CaseStudyPage'
import TeamPage from './pages/TeamPage'
import FaqPage from './pages/FaqPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

/** Jump to the top on every navigation — a router default the browser does not give us. */
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTopOnNavigate />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
