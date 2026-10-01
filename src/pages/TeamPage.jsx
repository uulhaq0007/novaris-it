import PageBanner from '../components/layout/PageBanner'
import Team from '../components/sections/Team'
import Counters from '../components/sections/Counters'
import CtaBanner from '../components/sections/CtaBanner'

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" crumbs={[{ label: 'Team' }]} />
      <Team showCta={false} />
      <Counters />
      <CtaBanner />
    </>
  )
}
