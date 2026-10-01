import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'

export default function NotFoundPage() {
  return (
    <>
      <PageBanner title="404" crumbs={[{ label: 'Page Not Found' }]} />
      <section className="section text-center">
        <div className="container">
          <p className="font-display text-[110px] font-extrabold leading-none text-accent/15 sm:text-[160px]">404</p>
          <h2 className="-mt-6 section-title">This Page Went Offline</h2>
          <p className="mx-auto mt-4 max-w-[520px]">
            The link may be out of date, or the page moved during a redesign. Head back and we will get you where you
            were going.
          </p>
          <Link to="/" className="btn-primary mt-9">
            <FiArrowLeft /> Back To Home
          </Link>
        </div>
      </section>
    </>
  )
}
