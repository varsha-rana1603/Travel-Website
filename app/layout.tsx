import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Oh-Bhaisahab Experiences | Himalayan Treks & Adventures',
  description: 'Authentic treks in the heart of the Himalayas - where strangers become a tribe and every trail turns into a story worth telling.',
  openGraph: {
    title: 'Oh-Bhaisahab Experiences | Himalayan Treks & Adventures',
    description: 'Authentic treks in the heart of the Himalayas - where strangers become a tribe and every trail turns into a story worth telling.',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Himalayan mountain peaks at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oh-Bhaisahab Experiences | Himalayan Treks & Adventures',
    description: 'Authentic treks in the heart of the Himalayas - where strangers become a tribe and every trail turns into a story worth telling.',
    images: ['https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
