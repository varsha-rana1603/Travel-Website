'use client'

import { useEffect, useRef, useState } from 'react'
import { Mountain, Heart, Tent, Camera, Shield, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Mountain,
    title: 'Local Mountain Experts',
    description: 'Our guides have spent years exploring these peaks. They know every trail, every view, and every hidden spot.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We\'re not just organizing treks — we\'re building a tribe. Strangers become friends, and friends become family.',
  },
  {
    icon: Tent,
    title: 'Premium Camps',
    description: 'Quality tents, sleeping bags, and equipment. We ensure your comfort doesn\'t compromise the adventure.',
  },
  {
    icon: Camera,
    title: 'Capture Memories',
    description: 'Professional photographer on every trek. Go home with stunning photos, not just stunning memories.',
  },
  {
    icon: Shield,
    title: 'Safety Always',
    description: 'First-aid trained staff, emergency protocols, and satellite communication on remote treks.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Maximum 15 trekkers per batch. More attention, better experience, stronger connections.',
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
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
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/30 py-24">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div
          className={cn(
            'mx-auto mb-14 max-w-2xl text-center',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transition: 'all 0.7s ease-out' }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Not your average <span className="text-accent">trek</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            We\'ve been where you want to go. Let us take you there in a way that only we can.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500',
                activeCard === i ? 'scale-[1.02]' : 'hover:scale-[1.02]',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background gradient on hover */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-300',
                  activeCard === i && 'opacity-100'
                )}
              />

              {/* Icon */}
              <div className="relative">
                <div
                  className={cn(
                    'inline-flex rounded-xl p-3 transition-colors duration-300',
                    activeCard === i ? 'bg-accent/10' : 'bg-secondary'
                  )}
                >
                  <feature.icon
                    className={cn(
                      'h-6 w-6 transition-colors duration-300',
                      activeCard === i ? 'text-accent' : 'text-foreground'
                    )}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className={cn(
                  'absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-500',
                  activeCard === i && 'scale-x-100'
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
