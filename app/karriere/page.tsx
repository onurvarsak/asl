import type { Metadata } from "next"
import CareerInfoSection from "../components/CareerInfoSection"
import ValueCardsSection from "../components/ValueCardsSection"

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Werden Sie Teil unseres Teams. Attraktive Konditionen, starkes Team und Entwicklungsmöglichkeiten warten auf Sie."
}

export default function KarrierePage() {
  return (
    <div className='flex  flex-col bg-white font-sans'>
      <CareerInfoSection />
      <ValueCardsSection />
    </div>
  )
}
