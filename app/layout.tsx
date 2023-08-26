import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Competitive Edge Marketing',
  description: 'Marketing Agency specializing in Web Design, Web Development and Content Creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CrispProvider />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
