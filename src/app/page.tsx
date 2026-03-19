import HeroSection from '@/components/sections/HeroSection'
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner'
import StepsSection from '@/components/sections/StepsSection'
import ActivosSection from '@/components/sections/ActivosSection'
import AIAgentsSection from '@/components/sections/AIAgentsSection'
import PlatformSection from '@/components/sections/PlatformSection'
import PainSection from '@/components/sections/PainSection'
import DifferentiatorSection from '@/components/sections/DifferentiatorSection'
import IncludesSection from '@/components/sections/IncludesSection'
import CTASection from '@/components/sections/CTASection'
import SectionDivider from '@/components/common/SectionDivider'
import StructuredData from '@/components/common/StructuredData'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <DifferentiatorBanner />
      <StepsSection />
      <SectionDivider variant="light-to-alt" />
      <ActivosSection />
      <SectionDivider variant="alt-to-white" />
      <AIAgentsSection />
      {/* AI Agents is now light, Platform is dark — need divider */}
      <SectionDivider variant="white-to-dark" />
      <PlatformSection />
      <SectionDivider variant="dark-to-light" />
      <PainSection />
      <DifferentiatorSection />
      <SectionDivider variant="light-to-alt" />
      <IncludesSection />
      <SectionDivider variant="alt-to-dark" />
      <CTASection />
    </>
  )
}
