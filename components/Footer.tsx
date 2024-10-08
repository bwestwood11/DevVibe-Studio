import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Services', href: '/services' },
  ],
  social: [
     {
      name: 'Instagram',
      href: 'https://www.instagram.com/competitive_edge_digital/',
      icon: FaInstagram
     },
      {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100069638836367',
      icon: FaFacebook
      },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] border-t-2">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
               <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Competitive Edge Digital, All rights reserved.
        </p>
      </div>
    </footer>
  )
}