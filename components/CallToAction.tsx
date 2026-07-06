'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const benefits = [
  'First access to new treks',
  'Early bird discounts up to 20%',
  'Exclusive community group',
  'Travel tips & stories',
]

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/2901695/pexels-photo-2901695.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Mountain landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div
            className={cn(
              'flex flex-col justify-center',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
            style={{ transition: 'all 0.7s ease-out' }}
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Join the tribe
            </div>

            <h2 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Ready for your next{' '}
              <span className="text-accent">adventure</span>?
            </h2>

            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Subscribe to our newsletter and be the first to know about new treks, exclusive offers, and mountain stories.
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex items-center gap-3 text-foreground',
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  )}
                  style={{ transition: 'all 0.5s ease-out', transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div
            className={cn(
              'flex items-center justify-center lg:justify-end',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
            style={{ transition: 'all 0.7s ease-out 200ms' }}
          >
            <div className="w-full max-w-md rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Start your journey
              </h3>
              <p className="mt-2 text-muted-foreground">
                Enter your email and we\'ll keep you in the loop.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Join the tribe
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                No spam, unsubscribe anytime. Promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
