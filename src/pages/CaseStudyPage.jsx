import PageBanner from '../components/layout/PageBanner'
import CaseStudies from '../components/sections/CaseStudies'
import CtaBanner from '../components/sections/CtaBanner'

export default function CaseStudyPage() {
  return (
    <>
      <PageBanner title="Case Study" crumbs={[{ label: 'Case Study' }]} />
      <CaseStudies />
      <CtaBanner />
    </>
  )
}
