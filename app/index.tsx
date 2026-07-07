import { Hero } from '@/components/Hero'
import { FeaturedExperiences } from '@/components/FeaturedExperiences'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedExperiences />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
