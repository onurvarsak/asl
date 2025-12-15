import type { Metadata } from "next"
import LocationsSection from "../components/LocationsSection"

export const metadata: Metadata = {
  title: "Standorte",
  description: "Unsere Standorte in Duisburg. Besuchen Sie uns oder kontaktieren Sie uns für weitere Informationen."
}

export default function StandortePage() {
  return (
    <div className='flex flex-col bg-white font-sans'>
      <LocationsSection />
    </div>
  )
}
