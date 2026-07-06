'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    trek: 'Kedarkantha Winter Trek',
    quote: 'This wasn\'t just a trek — it was a transformation. The way Bhaisahab team took care of everything, I could focus purely on the experience. Made friends for life!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Mumbai',
    trek: 'Har Ki Dun Valley',
    quote: 'I\'ve done many treks before, but this was something else. The attention to detail, the local stories from guides, the food — everything was perfect.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Krishnan',
    location: 'Bangalore',
    trek: 'Brahmatal Lake Trek',
    quote: 'As a solo female traveler, safety was my top concern. The team made me feel so comfortable and welcomed. The sunrise at Brahmatal was magical!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="relative py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div
          className={cn(
            'mb-12 text-center',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transition: 'all 0.7s ease-out' }}
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            From The Tribe
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Stories from the <span className="text-accent">mountains</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={cn(
            'relative',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
          style={{ transition: 'all 0.7s ease-out 200ms' }}
        >
          {/* Large Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
            <div className="rounded-full bg-accent p-4 text-accent-foreground">
              <Quote className="h-8 w-8 rotate-180" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card p-8 pt-16 md:p-12 md:pt-16">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className={cn(
                  'transition-all duration-500',
                  i === activeIndex ? 'opacity-100' : 'hidden opacity-0'
                )}
              >
                {/* Quote */}
                <blockquote className="text-center text-lg leading-relaxed text-foreground md:text-xl md:text-left">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-accent">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location} &bull; {testimonial.trek}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 md:ml-auto">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-border hover:bg-accent/50'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
