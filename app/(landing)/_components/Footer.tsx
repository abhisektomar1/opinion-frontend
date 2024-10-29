import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

export default function tradingFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">•trading.</span>
            <span className="text-sm">For 18 years and above only</span>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700">
              Download App
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
              Trade Online
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">Culture</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">Help Centre</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">Whats New</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Careers</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="#" className="hover:text-gray-900 dark:hover:text-white">Open Roles</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="mailto:help@trading.in" className="hover:text-gray-900 dark:hover:text-white">help@trading.in</a></li>
              <li><a href="mailto:communication@trading.in" className="hover:text-gray-900 dark:hover:text-white">communication@trading.in</a></li>
            </ul>
          </div>
        </div>

        {/* Partnerships */}
        {/* <div className="py-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">trading Partnerships</h3>
          <p className="mb-4">
            Our experience is made possible by our partnerships with <strong>TradingView</strong> (track upcoming events with Economic Calendar or browse stocks in the Screener), <strong>Authbridge</strong> for verification technology, <strong>DataMuni</strong> for data & analytics, <strong>Google Firebase</strong>, <strong>Google Cloud</strong> & <strong>AWS</strong>. trading is also a member of <strong>FICCI</strong> and <strong>ASSOCHAM</strong>.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <Image src="/placeholder.svg" alt="TradingView" width={40} height={40} />
            <Image src="/placeholder.svg" alt="Authbridge" width={40} height={40} />
            <Image src="/placeholder.svg" alt="DataMuni" width={40} height={40} />
            <Image src="/placeholder.svg" alt="Google Cloud" width={40} height={40} />
            <Image src="/placeholder.svg" alt="AWS" width={40} height={40} />
          </div>
        </div> */}

        {/* Social Links */}
        <div className="py-8 flex justify-center space-x-6 border-t border-gray-200 dark:border-gray-700">
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">YouTube</span>
            <Youtube className="h-6 w-6" />
          </Link>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <Link href="#" className="text-sm hover:text-gray-900 dark:hover:text-white">Terms and Conditions</Link>
            <Link href="#" className="text-sm hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link>
          </div>
          <p className="text-sm">&copy; copyright 2024 by trading Media Technologies Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}