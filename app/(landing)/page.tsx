import FeaturesGrid from './_components/Bento'
import Features from './_components/Featutures'
import ProboFooter from './_components/Footer'
import Hero from './_components/Hero'
import { List } from './_components/List'
import Phone from './_components/Phone'
import { HeroScroll } from './_components/Scroll'

export default function Landing(){
  return(
    <>
    <Hero />
    <Phone />
    <HeroScroll />
    <Features />
    <List />
    <FeaturesGrid />
    <ProboFooter />
    </>
  )
}