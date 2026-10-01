import PageBanner from '../components/layout/PageBanner'
import Services from '../components/sections/Services'
import Pricing from '../components/sections/Pricing'
import Counters from '../components/sections/Counters'
import CtaBanner from '../components/sections/CtaBanner'

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumbs={[{ label: 'Services' }]} />
      <Services limit={0} className="!bg-white" />
      <Counters />
      <Pricing />
      <CtaBanner />
    </>
  )
}
