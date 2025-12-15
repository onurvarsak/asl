import type { Metadata } from "next"
import HomeInfoSection from "./components/HomeInfoSection"
import ManSection from "./components/ManSection"
import TruckSection from "./components/TruckSection"
import WerWirSindSection from "./components/WerWirSindSection"
import CompanyInfoSection from "./components/CompanyInfoSection"
import FiloSection from "./components/FiloSection"
import FleetStatsSection from "./components/FleetStatsSection"
import UnsereSection from "./components/UnsereSection"
import TeamSection from "./components/TeamSection"
import StarkeSection from "./components/StarkeSection"
import PartnerSection from "./components/PartnerSection"

export const metadata: Metadata = {
  title: "Start",
  description:
    "ALS AKNUR GmbH - Ihr zuverlässiger Partner für Logistikdienstleistungen. Mit unserer großen Flotte und erfahrenem Team transportieren wir Ihre Fracht sicher und pünktlich."
}

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black'>
      <HomeInfoSection />
      <ManSection />
      <TruckSection />
      <WerWirSindSection />
      <CompanyInfoSection />
      <FiloSection />
      <FleetStatsSection />
      <UnsereSection />
      <TeamSection />
      <StarkeSection />
      <PartnerSection />
    </div>
  )
}
