import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Us | Competitive Edge Marketing',
    description: 'Contact Us for web development, web design, and content creation services.',
    }


export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>  
            <Navbar />
          {children}
          <Footer />
          </body>
      </html>
    )
  }
  