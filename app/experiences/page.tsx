'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Mountain,
  Calendar,
  Clock,
  Users,
  MapPin,
  Filter,
  Grid3X3,
  LayoutList,
  ArrowUpRight,
  Search,
  X,
  ChevronDown,
  Flame,
  Snowflake,
  Sun,
  Leaf,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const allTreks = [
  {
    id: 1,
    title: 'Kedarkantha Winter Trek',
    location: 'Uttarakhand',
    duration: '6 days',
    altitude: '12,500 ft',
    date: 'Dec 15, 2025',
    groupSize: '12-15',
    price: 12999,
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    season: 'Winter',
    featured: true,
    description: 'Experience the magical snow-capped peaks and frozen lakes of Kedarkantha.',
  },
  {
    id: 2,
    title: 'Har Ki Dun Valley Trek',
    location: 'Uttarakhand',
    duration: '7 days',
    altitude: '11,700 ft',
    date: 'Jan 10, 2026',
    groupSize: '10-12',
    price: 14499,
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy-Moderate',
    season: 'Winter',
    featured: true,
    description: 'A valley frozen in time, surrounded by towering peaks and ancient villages.',
  },
  {
    id: 3,
    title: 'Brahmatal Lake Trek',
    location: 'Uttarakhand',
    duration: '5 days',
    altitude: '12,150 ft',
    date: 'Feb 5, 2026',
    groupSize: '12-16',
    price: 11999,
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy',
    season: 'Winter',
    featured: false,
    description: 'Witness the frozen Brahmatal lake with panoramic Himalayan views.',
  },
  {
    id: 4,
    title: 'Valley of Flowers',
    location: 'Uttarakhand',
    duration: '6 days',
    altitude: '14,100 ft',
    date: 'Jul 20, 2026',
    groupSize: '10-15',
    price: 15999,
    image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    season: 'Summer',
    featured: true,
    description: 'Walk through a UNESCO World Heritage site blooming with endemic flowers.',
  },
  {
    id: 5,
    title: 'Roopkund Lake Trek',
    location: 'Uttarakhand',
    duration: '8 days',
    altitude: '15,750 ft',
    date: 'May 15, 2026',
    groupSize: '8-12',
    price: 18499,
    image: 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Difficult',
    season: 'Summer',
    featured: false,
    description: 'The mysterious Skeleton Lake at the foot of Himalayan giants.',
  },
  {
    id: 6,
    title: 'Sandakphu Trek',
    location: 'West Bengal',
    duration: '7 days',
    altitude: '11,900 ft',
    date: 'Mar 10, 2026',
    groupSize: '10-12',
    price: 13999,
    image: 'https://images.pexels.com/photos/1421909/pexels-photo-1421909.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    season: 'Spring',
    featured: false,
    description: 'See four of the five highest peaks in the world from one viewpoint.',
  },
  {
    id: 7,
    title: 'Dayara Bugyal Trek',
    location: 'Uttarakhand',
    duration: '5 days',
    altitude: '11,750 ft',
    date: 'Apr 5, 2026',
    groupSize: '12-16',
    price: 10999,
    image: 'https://images.pexels.com/photos/1756956/pexels-photo-1756956.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Easy',
    season: 'Spring',
    featured: false,
    description: 'One of Asia\'s largest high-altitude meadows with stunning views.',
  },
  {
    id: 8,
    title: 'Hampta Pass Trek',
    location: 'Himachal Pradesh',
    duration: '6 days',
    altitude: '14,100 ft',
    date: 'Jun 8, 2026',
    groupSize: '10-14',
    price: 15499,
    image: 'https://images.pexels.com/photos/1680248/pexels-photo-1680248.jpeg?auto=compress&cs=tinysrgb&w=800',
    difficulty: 'Moderate',
    season: 'Summer',
    featured: true,
    description: 'Cross from lush Kullu valley to barren Lahaul in one epic trek.',
  },
]

const seasons = ['All', 'Winter', 'Spring', 'Summer', 'Monsoon']
const difficulties = ['All', 'Easy', 'Easy-Moderate', 'Moderate', 'Difficult']
const sortOptions = ['Date', 'Price: Low to High', 'Price: High to Low', 'Difficulty']

const seasonIcons: Record<string, React.ElementType> = {
  Winter: Snowflake,
  Spring: Leaf,
  Summer: Sun,
  Monsoon: Flame,
}

export default function ExperiencesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [sortBy, setSortBy] = useState('Date')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredTreks = allTreks.filter((trek) => {
    const matchesSearch = trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSeason = selectedSeason === 'All' || trek.season === selectedSeason
    const matchesDifficulty = selectedDifficulty === 'All' || trek.difficulty === selectedDifficulty
    return matchesSearch && matchesSeason && matchesDifficulty
  }).sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price
      case 'Price: High to Low':
        return b.price - a.price
      case 'Difficulty':
        const diffOrder = { 'Easy': 1, 'Easy-Moderate': 2, 'Moderate': 3, 'Difficult': 4 }
        return diffOrder[a.difficulty as keyof typeof diffOrder] - diffOrder[b.difficulty as keyof typeof diffOrder]
      default:
        return 0
    }
  })

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div
            className={cn(
              'mx-auto max-w-2xl text-center transition-all duration-700',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Find Your Adventure
            </span>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Explore all <span className="text-accent">experiences</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              From serene meadows to challenging peaks, find the perfect trek that calls to your soul.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center gap-4 py-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search treks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
            </Button>

            {/* View Toggle */}
            <div className="hidden items-center gap-1 rounded-xl border border-border bg-card p-1 sm:flex">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'rounded-lg p-2 transition-colors',
                  viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'rounded-lg p-2 transition-colors',
                  viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Extended Filters */}
          <div className={cn(
            'gap-4 pb-4 lg:flex lg:items-center',
            showFilters ? 'flex flex-wrap' : 'hidden'
          )}>
            {/* Season Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Season:</span>
              <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={cn(
                      'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                      selectedSeason === season
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {season !== 'All' && seasonIcons[season] && (
                      <span className="text-xs">
                        {/* Icon would render here */}
                      </span>
                    )}
                    {season}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Level:</span>
              <div className="flex gap-1 rounded-xl border border-border bg-card p-1">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={cn(
                      'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                      selectedDifficulty === diff
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground focus:border-accent focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Results count */}
            <span className="ml-auto text-sm text-muted-foreground">
              {filteredTreks.length} trek{filteredTreks.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </div>
      </section>

      {/* Treks Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className={cn(
            'gap-6',
            viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'
          )}>
            {filteredTreks.map((trek, i) => (
              <article
                key={trek.id}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10',
                  viewMode === 'list' && 'flex flex-row',
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className={cn(
                  'relative overflow-hidden',
                  viewMode === 'grid' ? 'aspect-[4/3]' : 'aspect-square w-48'
                )}>
                  <Image
                    src={trek.image}
                    alt={trek.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {trek.difficulty}
                    </span>
                    {trek.featured && (
                      <span className="rounded-full bg-accent/90 px-2.5 py-1 text-xs font-medium text-accent-foreground backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      {trek.altitude}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={cn('p-5', viewMode === 'list' && 'flex flex-1 flex-col justify-between')}>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {trek.location}
                      <span className="text-muted">|</span>
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      {trek.duration}
                      <span className="text-muted">|</span>
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {trek.date}
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {trek.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {trek.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="font-serif text-2xl font-bold text-foreground">
                        ₹{trek.price.toLocaleString()}
                      </p>
                    </div>
                    <Link
                      href={`/experiences/${trek.id}`}
                      className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredTreks.length === 0 && (
            <div className="py-16 text-center">
              <Mountain className="mx-auto h-16 w-16 text-muted-foreground/30" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">No treks found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your filters or search query.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedSeason('All')
                  setSelectedDifficulty('All')
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
