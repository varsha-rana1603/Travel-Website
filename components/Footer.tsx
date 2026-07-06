'use client'

import Link from 'next/link'
import { Mountain, Instagram, Youtube, Mail, MapPin, Phone, Heart } from 'lucide-react'

const footerLinks = {
  explore: [
    { label: 'Upcoming Treks', href: '/experiences' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  support: [
    { label: 'Contact', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Decorative mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,120 L0,80 L100,40 L200,70 L350,20 L500,60 L650,30 L800,50 L900,25 L1100,55 L1200,35 L1200,120 Z"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Mountain className="h-8 w-8 text-accent" />
              <span className="font-serif text-xl font-bold">
                <span className="text-foreground">Oh-</span>
                <span className="text-accent">Bhaisahab</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Crafting unforgettable Himalayan adventures where strangers become family and trails transform into tales.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Explore
              </h4>
              <ul className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Support
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:hello@ohbhaisahab.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                hello@ohbhaisahab.com
              </a>
              <a
                href="tel:+918800721201"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                +91 88007 21201
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Dehradun, Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Oh-Bhaisahab Experiences. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with{' '}
            <Heart className="h-4 w-4 fill-accent text-accent" />{' '}
            in the Himalayas
          </p>
        </div>
      </div>
    </footer>
  )
}
