import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Sangeetha V D - Software Development Engineer',
  description: 'Full Stack Developer specializing in React, Angular, Node.js, and cloud technologies. View my portfolio, projects, and experience.',
  keywords: 'Software Engineer, Full Stack Developer, React, Angular, Node.js, Bangalore',
  openGraph: {
    title: 'Sangeetha V D - Software Development Engineer',
    description: 'Full Stack Developer specializing in React, Angular, Node.js, and cloud technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://my-portfolio-url.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {children}
      </body>
    </html>
  )
}