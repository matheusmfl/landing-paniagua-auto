import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { Section3 } from '@/components/Section3'
import { Section4 } from '@/components/Section4'
import { Section5 } from '@/components/Section5'
import { SectionAccordion } from '@/components/SectionAccordeon'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Section1 />
      <Section2 />
      <SectionAccordion />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  )
}
