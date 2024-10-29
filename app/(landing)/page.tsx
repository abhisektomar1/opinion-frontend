import FeaturesGrid from './_components/Bento'
import Features from './_components/Featutures'
import Hero from './_components/Hero'
import Phone from './_components/Phone'
import { HeroScroll } from './_components/Scroll'

export default function Landing(){
  return(
    <>
    <Hero />
    <Phone />
    <HeroScroll />
    <Features />
    <FeaturesGrid />
    </>
  )
}