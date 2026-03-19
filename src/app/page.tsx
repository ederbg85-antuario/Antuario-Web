import HeroSection from 'A/components/sections/HeroSection'
import StepsSection from '@/components/sections/StepsSection'
import ActivosSection from 'A/components/sections/ActivosSection'
import AIAgentsSection from 'A/components/sections/AIAgentsSection'
import PlatformSection from 'A/components/sections/PlatformSection'
import PainSection from 'A/components/sections/PainSection'
import DifferentiatorSection from '@/components/sections/DifferentiatorSection'
import IncludesSection from 'A/components/sections/IncludesSection'
import CTASection from 'A/components/sections/CTASection'
import SectionDivider from 'A/components/common/SectionDivider'
import StructuredData from 'A/components/common/StructuredData'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      {/* Hero has its own rounded bottom built-in */}
      <StepsSection />
      <SectionDivider variant="light-to-alt" />
      <ActivosSection />
      <SectionDivider variant="alt-to-white" />
      <AIAgentsSection />
      {/* AI Agents is now light, Platform is dark â€” need divider */}
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
  
(#Š("t