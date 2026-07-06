'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock, Users, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    id: 1,
    title: 'Kedarkantha Winter Trek',
    location: 'Uttarakhand',
    duration: '6 days',
    altitude: '12,500 ft',
    date: 'Dec 15, 2025',
    groupSize: '12-15',
    price: '₹12,999',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    featured: true,
  },
  {
    id: 2,
    title: 'Har Ki Dun Valley Trek',
    location: 'Uttarakhand',
    duration: '7 days',
    altitude: '11,700 ft',
    date: 'Jan 10, 2026',
    groupSize: '10-12',
    price: '₹14,499',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy-Moderate',
    featured: false,
  },
  {
    id: 3,
    title: 'Brahmatal Lake Trek',
    location: 'Uttarakhand',
    duration: '5 days',
    altitude: '12,150 ft',
    date: 'Feb 5, 2026',
    groupSize: '12-16',
    price: '₹11,999',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy',
    featured: false,
  },
]

export function FeaturedExperiences() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div
          className={cn(
            'mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transition: 'all 0.7s ease-out' }}
        >
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Upcoming Adventures
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Experiences that <span className="text-accent">transform</span>
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Handcrafted treks designed to challenge, inspire, and connect you with the mountains.
            </p>
          </div>
          <Button variant="outline" className="group gap-2" asChild>
            <Link href="/experiences">
              View all treks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <article
              key={exp.id}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                {/* Difficulty Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {exp.difficulty}
                  </span>
                </div>

                {/* Altitude Badge */}
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground backdrop-blur-sm">
                    {exp.altitude}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {exp.title}
                </h3>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-accent" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    {exp.groupSize}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-serif text-2xl font-bold text-foreground">{exp.price}</p>
                  </div>
                  <Link
                    href={`/experiences/${exp.id}`}
                    className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
