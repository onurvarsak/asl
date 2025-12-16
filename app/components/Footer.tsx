import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/app/utils/image"

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "X", icon: "x", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" }
  ]

  return (
    <footer className='w-full bg-black text-white py-12 px-8'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8'>
        {/* Logo */}
        <div className='shrink-0'>
          <Image
            src={getImagePath("/images/logo.png")}
            alt='ALS GmbH'
            width={200}
            height={80}
            priority
            sizes='100vw'
            quality={90}
            className='object-cover'
          />
        </div>

        {/* Right Side: Social Links and Address */}
        <div className='flex flex-col items-center lg:items-end gap-6'>
          {/* Social Media Links */}
          <div className='flex gap-4'>
            {socialLinks.map(social => {
              const iconMap: { [key: string]: string } = {
                facebook: "/images/icons/facebook.png",
                x: "/images/icons/twitter.png",
                instagram: "/images/icons/instagram.png",
                youtube: "/images/icons/youtube.png",
                linkedin: "/images/icons/linkedin.png"
              }

              return (
                <Link
                  key={social.name}
                  href={social.url}
                  className='w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity'
                  aria-label={social.name}
                >
                  <Image
                    src={getImagePath(iconMap[social.icon])}
                    alt={social.name}
                    width={32}
                    height={32}
                    className='object-contain brightness-0 invert'
                  />
                </Link>
              )
            })}
          </div>

          {/* Address */}
          <div className='text-center lg:text-right'>
            <p className='text-sm'>Friedrich-Alfredstr.182 47226 Duisburg</p>
          </div>

          {/* Copyright */}
          <div className='text-center lg:text-right'>
            <p className='text-sm'>
              © 2025 ALS-Aknur Logistik Service GmbH: Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Developer Credit */}
          <div className='text-center lg:text-right'>
            <p className='text-xs text-gray-400'>
              Entwickelt von Nomad Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
