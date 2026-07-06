'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Users, Mountain, Compass, MapPin, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { label: 'Highest summit', value: '14,100 ft', icon: Mountain },
  { label: 'Treks completed', value: '45+', icon: Compass },
  { label: 'Regions explored', value: '12', icon: MapPin },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeStat, setActiveStat] = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden px-4 pt-16 md:px-6"
    >
      {/* Animated background gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Left copy */}
        <div className="relative z-10 flex flex-col justify-center">
          {/* Badge */}
          <span
            className={cn(
              'inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700',
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            )}
          >
            <span className="relative">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            Himalayan Treks & Experiences
          </span>

          {/* Headline */}
          <h1
            className={cn(
              'mt-6 text-balance font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-foreground transition-all duration-700 delay-100 sm:text-6xl lg:text-7xl',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            Adventure, the{' '}
            <span className="relative inline-block cursor-default italic text-accent transition-transform hover:scale-105">
              Bhaisahab
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent/40 transition-all duration-300"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            way.
          </h1>

          {/* Description */}
          <p
            className={cn(
              'mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            Authentic treks in the heart of the Himalayas — where strangers
            become a tribe and every trail turns into a story worth telling.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              'mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <Link
              href="/experiences"
              className="group relative inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-6 pr-2 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Book your adventure</span>
              <span className="relative flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              href="/about"
              className="group relative text-base font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-all duration-300 hover:text-accent"
            >
              Meet the tribe
            </Link>
          </div>

          {/* Social Proof */}
          <div
            className={cn(
              'mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 transition-all duration-700 delay-500',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <div className="group flex cursor-default items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground transition-all duration-300 group-hover:border-accent group-hover:shadow-lg"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <Users className="size-3.5" />
                  </span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="font-semibold text-foreground">500+</strong>{' '}
                trekkers hosted
              </span>
            </div>
            <div className="group flex cursor-default items-center gap-2 transition-transform duration-300 hover:scale-105">
              <span className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-current transition-transform duration-300 group-hover:scale-125"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="font-semibold text-foreground">4.9</strong>{' '}
                tribe rating
              </span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative z-10">
          <div
            className={cn(
              'relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border transition-all duration-700 delay-200 sm:aspect-[3/2] lg:aspect-auto lg:h-[500px]',
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            )}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 3}deg) rotateX(${-mousePosition.y * 3}deg)`,
            }}
          >
            <Image
              src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Trekker overlooking snow-capped Himalayan peaks at golden hour"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/30" />
                  <div className="relative flex size-16 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stats Cards */}
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'absolute cursor-pointer rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur-sm transition-all duration-300',
                i === 0 && 'bottom-6 -left-3 animate-obs-float sm:left-6',
                i === 1 && 'right-0 top-1/4 hidden rotate-3 lg:block',
                i === 2 && 'bottom-1/4 right-4 hidden -rotate-3 lg:block',
                activeStat === i ? 'scale-110 border-accent shadow-accent/20' : 'hover:scale-105 hover:border-accent/50'
              )}
              onMouseEnter={() => setActiveStat(i)}
              onMouseLeave={() => setActiveStat(null)}
              style={{
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <stat.icon className={cn(
                'mb-2 h-5 w-5 transition-colors duration-300',
                activeStat === i ? 'text-accent' : 'text-muted-foreground'
              )} />
              <p className="font-serif text-2xl font-semibold text-foreground lg:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Next trek badge */}
          <div
            className={cn(
              'absolute -right-2 top-6 hidden rounded-2xl bg-accent px-4 py-3 text-accent-foreground shadow-lg transition-all duration-700 delay-400 sm:block',
              isVisible ? 'translate-x-0 rotate-6 opacity-100' : 'translate-x-8 rotate-12 opacity-0'
            )}
          >
            <p className="font-serif text-lg font-semibold leading-tight">
              Next trek
            </p>
            <p className="text-sm font-medium">July 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
