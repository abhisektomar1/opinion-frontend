"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { CheckIcon, MoonStar, SunMoon } from 'lucide-react'
import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import SparklesText from '@/components/ui/sparkles-text'
import gsap from 'gsap'
import { useTheme } from 'next-themes'

export default function Hero() {
    const [active, setActive] = useState<string | null>(null);
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();
    // Create refs for animated elements
    const headerRef = useRef<any>(null);
    const logoRef = useRef<any>(null);
    const navLinksRef = useRef<any>(null);
    const headerButtonsRef = useRef<any>(null);
    const headingRef = useRef<any>(null);
    const subheadingRef = useRef<any>(null);
    const ctaButtonsRef = useRef<any>(null);
    const disclaimerRef = useRef<any>(null);
    const imageRef = useRef<any>(null);
  
    // useEffect(() => {
    //   if (darkMode) {
    //     document.documentElement.classList.add("dark");
    //   } else {
    //     document.documentElement.classList.remove("dark");
    //   }
    // }, [darkMode]);

    useLayoutEffect(() => {
      // Hide elements initially
      gsap.set([
        headerRef.current,
        logoRef.current,
        navLinksRef.current?.children,
        headerButtonsRef.current?.children,
        headingRef.current,
        subheadingRef.current,
        ctaButtonsRef.current?.children,
        disclaimerRef.current,
        imageRef.current
      ], { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.4
        }
      });

      tl
        .to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: .5
        })
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }, "-=0.4")
        .to(navLinksRef.current?.children, {
          opacity: 1,
          y: 0,
          stagger: 0.1
        }, "-=0.2")
        .to(headerButtonsRef.current?.children, {
          opacity: 1,
          y: 0,
          stagger: 0.1
        }, "-=0.4")
        .to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: .5
        }, "-=0.2")
        .to(subheadingRef.current, {
          opacity: 1,
          y: 0
        }, "-=0.6")
        .to(ctaButtonsRef.current?.children, {
          opacity: 1,
          y: 0,
          stagger: 0.1
        }, "-=0.4")
        .to(disclaimerRef.current, {
          opacity: 1,
          y: 0
        }, "-=0.2")
        .to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: .5
        }, "-=0.8");

    }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header ref={headerRef} className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
        <div ref={logoRef}>
          <SparklesText className='text-2xl font-bold' text="•Trading•" />
        </div>
        <nav ref={navLinksRef} className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Trading</Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Team 11</Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Read</Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cares</Link>
          <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Careers</Link>
        </nav>
        <div ref={headerButtonsRef} className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">For 18 years and above only</span>
          <Button variant="outline" className="hidden md:inline-flex">Download App</Button>
          <Button variant="default" className="hidden md:inline-flex">Trade Online</Button>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark")
              setDarkMode(!darkMode)
            }}
            className={`
              p-2 rounded-lg
              ${darkMode ? "bg-gray-800 text-white" : " text-gray-800 bg-gray-100"}
              transition-colors duration-200
            `}
          >
            {darkMode ? <SunMoon /> : <MoonStar />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Invest in your point of view
            </h1>
            <p ref={subheadingRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Sports, Entertainment, Economy or Finance.
            </p>
            <div ref={ctaButtonsRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">Download App</Button>
              <Button size="lg" variant="outline">Trade Online</Button>
            </div>
            <div ref={disclaimerRef} className="mt-6 flex items-center">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">For 18 years and above only</span>
            </div>
          </div>
          <div ref={imageRef} className="relative mt-[-14px]">
          {/* <PinContainer
        title="Cool Spaces"
        href="https://twitter.com/mannupaaji"
        
      > */}
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[35rem] h-[35rem]">
          <Image
            src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.19c7be25.webp&w=640&q=75"
            width={700}
            height={700}
            alt={"logo"}
            className="rounded-lg shadow-lg"
          />
        </div>
      {/* </PinContainer> */}
            {/* <Image
              src="https://probo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.19c7be25.webp&w=640&q=75"
              alt="Probo Investment Concept"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </main>
      
    </div>
  )
}