"use client"

import { usePathname } from "next/navigation"
import { MapSection, ContactFormSection } from "./index"

export default function ConditionalSections() {
  const pathname = usePathname()
  const hideSections =
    pathname.includes("datenschutz") || pathname.includes("impressum")

  if (hideSections) {
    return null
  }

  return (
    <>
      <MapSection />
      <ContactFormSection />
    </>
  )
}
