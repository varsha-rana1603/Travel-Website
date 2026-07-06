'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Mountain,
  Heart,
  Compass,
  Users,
  Target,
  TreePine,
  Star,
  ArrowRight,
  Instagram,
  Linkedin,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const team = [
  {
    name: 'Arjun Rawat',
    role: 'Founder & Lead Guide',
    bio: 'Born in the mountains, Arjun has spent 15+ years exploring every trail in Uttarakhand. His grandmother\'s stories of the hills inspired the birth of Oh-Bhaisahab.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Meera Bisht',
    role: 'Operations Head',
    bio: 'The backbone of every trek. Meera ensures every camp is set, every meal is warm, and every trekker is safe.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Karan Singh',
    role: 'Senior Trek Leader',
    bio: 'A certified mountaineer with a love for storytelling. Karan\'s evening tales by the bonfire are legendary.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Anjali Thakur',
    role: 'Community Manager',
    bio: 'The voice behind our tribe. Anjali keeps the community alive with events, reunions, and mountain memories.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '#',
    linkedin: '#',
  },
]

const milestones = [
  { year: '2016', title: 'The First Step', description: 'Started with 8 trekkers and a dream' },
  { year: '2018', title: 'Growing Family', description: 'Hosted 100+ trekkers across 5 treks' },
  { year: '2020', title: 'Digital Push', description: 'Launched online bookings during pandemic' },
  { year: '2023', title: 'The Tribe', description: '500+ trekkers, 12 regions explored' },
  { year: '2025', title: 'New Horizons', description: 'Expanding to Himachal & beyond' },
]

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'We\'re building a tribe, not just organizing trips. Every trek is designed to forge lasting friendships.',
  },
  {
    icon: TreePine,
    title: 'Eco-Conscious',
    description: 'Leave no trace. We\'re committed to sustainable trekking and preserving the mountains we love.',
  },
  {
    icon: Target,
    title: 'Safety Always',
    description: 'Experienced guides, quality gear, and emergency protocols. Your safety is non-negotiable.',
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2901695/pexels-photo-2901695.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Mountain landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div
            className={cn(
              'mx-auto max-w-3xl text-center transition-all duration-700',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Mountain className="h-3.5 w-3.5" />
              Our Story
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              More than a trekking <span className="text-accent">company</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Oh-Bhaisahab was born from a simple belief: that the mountains have the power to transform lives. We\'re not just guides — we\'re storytellers, community builders, and passionate mountain lovers on a mission to share the magic of the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Story Text */}
            <div
              className={cn(
                'flex flex-col justify-center transition-all duration-700',
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                It All Started...
              </span>

              <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                With a grandmother\'s <span className="text-accent">tales</span>
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Growing up in a small village near Dehradun, Arjun would sit by his grandmother\'s side as she spun tales of mountain spirits, hidden valleys, and trails that led to the heavens. She called those places &quot;Bhaisahab ka raaj&quot; — the realm where nature reigns supreme.
                </p>
                <p>
                  Years later, leading corporate treks, Arjun realized something was missing. The magic his grandmother spoke of — the deep connection between people and places — was lost in commercialized tourism.
                </p>
                <p>
                  <strong className="text-foreground">Oh-Bhaisahab</strong> was founded in 2016 with a promise: to create experiences that honor the mountains, celebrate local culture, and build a community of like-minded adventurers.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="font-serif text-4xl font-bold text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">Trekkers hosted</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="font-serif text-4xl font-bold text-accent">12</p>
                  <p className="text-sm text-muted-foreground">Regions explored</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="font-serif text-4xl font-bold text-accent">9</p>
                  <p className="text-sm text-muted-foreground">Years of trust</p>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div
              className={cn(
                'relative transition-all duration-700 delay-200',
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-square lg:aspect-[4/5]">
                <Image
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Arjun leading a group of trekkers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-6 shadow-xl">
                <Compass className="h-8 w-8 text-accent" />
                <p className="mt-2 font-serif text-lg font-semibold text-foreground">
                  &quot;The mountain doesn\'t reveal its secrets to the hurried.&quot;
                </p>
                <p className="mt-1 text-sm text-muted-foreground">— Arjun\'s grandmother</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="relative bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Our Journey
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Milestones along the <span className="text-accent">trail</span>
            </h2>
          </div>

          {/* Interactive Timeline */}
          <div className="relative mx-auto max-w-3xl">
            {/* Line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-border md:left-8" />

            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={cn(
                  'group relative mb-8 cursor-pointer transition-all duration-300 last:mb-0',
                  i % 2 === 0 ? 'md:ml-auto md:w-[calc(50%-2rem)] md:pl-16' : 'md:mr-auto md:w-[calc(50%-2rem)] md:pr-16 md:text-right'
                )}
                onMouseEnter={() => setActiveMilestone(i)}
                onMouseLeave={() => setActiveMilestone(null)}
              >
                {/* Dot */}
                <div
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 rounded-full border-4 border-background bg-border p-1 transition-all md:left-8',
                    activeMilestone === i && 'bg-accent'
                  )}
                />

                <div
                  className={cn(
                    'rounded-2xl border border-border bg-card p-6 transition-all duration-300',
                    activeMilestone === i ? 'scale-105 border-accent shadow-lg' : 'hover:border-accent/50'
                  )}
                >
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {milestone.year}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              What We Stand For
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Our <span className="text-accent">values</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={i}
                className={cn(
                  'group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl'
                )}
              >
                <div className="mx-auto inline-flex rounded-2xl bg-accent/10 p-4 transition-colors group-hover:bg-accent/20">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Meet The Tribe
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The faces behind your <span className="text-accent">adventures</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Social Links - Reveal on hover */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-8 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={member.instagram}
                      className="rounded-full bg-accent p-2 text-accent-foreground transition-transform hover:scale-110"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="rounded-full bg-accent p-2 text-accent-foreground transition-transform hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Users className="mx-auto h-12 w-12 text-accent" />
            <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Ready to join the <span className="text-accent">tribe</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every great story begins with a single step into the unknown. Let us guide yours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group gap-2" asChild>
                <Link href="/experiences">
                  Explore Treks
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
