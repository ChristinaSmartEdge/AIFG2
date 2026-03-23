import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI for Local Good — Locally Implemented AI. Built for the Real World.',
  description: 'We train USF students in real agentic AI by pairing them with local small businesses and nonprofits. Community-funded. Mentor-guided. 100% free for local orgs.',
  openGraph: {
    title: 'AI for Local Good',
    description: 'Real Students. Real AI Projects. Real Community Impact.',
    url: 'https://aiforgood.us',
    siteName: 'AI for Local Good',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
