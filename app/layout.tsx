import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import {
  NavBar,
  TopSection,
  MapSection,
  ContactFormSection,
  Footer
} from "./components"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: {
    default: "ALS AKNUR GmbH - Logistik Dienstleistungen",
    template: "%s | ALS AKNUR GmbH"
  },
  description:
    "Professionelle Logistikdienstleistungen mit modernster Flotte und erfahrenem Team. Ihre Fracht sicher und pünktlich."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <NavBar />
        <TopSection />
        {children}
        <MapSection />
        <ContactFormSection />
        <Footer />
      </body>
    </html>
  )
}
