import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function FeaturesGrid() {
  return (
    <div className="bg-white dark:bg-gray-900 h-[90vh] p-4">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
          {/* What's new in trading? */}
          <div className="bg-white dark:bg-gray-800 p-6 flex items-center justify-between col-span-1 row-span-1">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Whats new in<br />trading?</h2>
            <ArrowRight className="w-12 h-12 text-gray-900 dark:text-white" />
          </div>

          {/* trading Cares */}
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-6 col-span-2 row-span-1 flex justify-between overflow-hidden">
            <div className="w-1/2">
              <h2 className="text-3xl font-bold mb-4">trading Cares</h2>
              <p className="mb-4 text-sm">Be it loss protection or data security, trading is user first always. Check out the latest on responsible trading.</p>
              <a href="#" className="inline-flex items-center text-sm font-semibold hover:underline">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="trading Cares"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Exiting trades is your choice */}
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-6 col-span-1 row-span-1 flex flex-col justify-between overflow-hidden">
            <div>
              <h2 className="text-2xl font-bold mb-4">Exiting trades is your choice</h2>
              <p className="mb-4 text-sm">The Exit feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.</p>
            </div>
            <div className="flex justify-between items-end">
              <a href="#" className="inline-flex items-center text-sm font-semibold hover:underline">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Image
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Exit trade icons"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Market Orders and Instant Exit */}
          <div className="bg-gray-900 dark:bg-gray-800 text-white p-6 col-span-2 row-span-1 flex justify-between overflow-hidden">
            <div className="w-1/2">
              <h2 className="text-3xl font-bold mb-4">Market Orders and Instant Exit</h2>
              <p className="mb-4 text-sm">Market orders are a fast and reliable method to buy or exit a trade in a fast-moving market. With market orders, quantities are matched almost instantly after placing an order at the best available price. Come test drive.</p>
              <a href="#" className="inline-flex items-center text-sm font-semibold hover:underline">
                Read more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Market Orders visualization"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}