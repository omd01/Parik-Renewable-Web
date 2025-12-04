import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.parikhrenewable.com'),
  title: {
    default: 'Parikh Renewable - Sustainable Energy Solutions',
    template: '%s | Parikh Renewable'
  },
  description: 'Leading Solar EPC company in Aurangabad & Maharashtra. We provide end-to-end solar solutions for industrial, commercial, and residential sectors. Get a quote today!',
  keywords: ['Solar EPC India', 'Rooftop Solar Aurangabad', 'Industrial Solar Solutions', 'Commercial Solar Panels', 'Parikh Renewable', 'Solar Power Plant', 'Net Metering', 'Renewable Energy Maharashtra'],
  authors: [{ name: 'Parikh Renewable' }],
  creator: 'Parikh Renewable',
  publisher: 'Parikh Renewable',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Parikh Renewable - Sustainable Energy Solutions',
    description: 'Leading Solar EPC company in Aurangabad & Maharashtra. We provide end-to-end solar solutions for industrial, commercial, and residential sectors.',
    url: 'https://www.parikhrenewable.com',
    siteName: 'Parikh Renewable',
    images: [
      {
        url: '/og-image.png', // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: 'Parikh Renewable Solar Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parikh Renewable - Sustainable Energy Solutions',
    description: 'Leading Solar EPC company in Aurangabad & Maharashtra. We provide end-to-end solar solutions for industrial, commercial, and residential sectors.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Parikh Renewable',
  image: 'https://www.parikhrenewable.com/icon.png',
  '@id': 'https://www.parikhrenewable.com',
  url: 'https://www.parikhrenewable.com',
  telephone: '+917083366625',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. 401, D Tower, Freedom Tower, Akashwani Chowk',
    addressLocality: 'Sambhaji Nagar',
    postalCode: '431005',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.8762, // Approximate coords for Aurangabad
    longitude: 75.3433
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '09:00',
    closes: '18:00'
  },
  sameAs: [
    'https://www.linkedin.com/company/parikh-renewable',
    // Add other social links here
  ],
  priceRange: '₹₹₹',
  areaServed: [
    {
      '@type': 'City',
      name: 'Aurangabad'
    },
    {
      '@type': 'State',
      name: 'Maharashtra'
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-50 text-zinc-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
