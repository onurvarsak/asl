import type { Metadata } from "next"
import ContactInfoSection from "../components/ContactInfoSection"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie uns für Transportanfragen, Partnerschaften oder allgemeine Informationen. Wir sind jederzeit für Sie da."
}

export default function KontaktPage() {
  return (
    <div className='flex flex-col bg-white font-sans'>
      <ContactInfoSection />
    </div>
  )
}
