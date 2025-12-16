"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { getImagePath } from "@/app/utils/image"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { title: "Start", href: "/" },
    { title: "Karriere", href: "/karriere" },
    { title: "Standorte", href: "/standorte" },
    { title: "Kontakt", href: "/kontakt" }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isMenuOpen ? "bg-black" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className=' mx-auto pl-[42px] md:pl-[62px] lg:pl-[78px] [@media(min-width:1800px)]:pl-[210px]'>
        <div className='flex justify-between items-center h-[103px]'>
          <div className='shrink-0'>
            <Link href='/' className='flex items-center'>
              {/* Desktop Logo */}
              <Image
                src={getImagePath("/images/logo.png")}
                alt='Logo'
                width={113}
                height={63}
                priority
                sizes='100vw'
                quality={90}
                className='object-cover'
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex gap-[76px] h-full items-center mr-[78px] [@media(min-width:1800px)]:mr-[210px]'>
            {menuItems.map(item => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className='relative h-full flex items-center'
                >
                  <span
                    className={`text-[22px] font-bold font-poppins leading-[100%] tracking-[0%] transition-colors duration-200 px-3 ${
                      isActive ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <span className='absolute bottom-0 left-0 w-full h-[4px] bg-white'></span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden mr-[42px] md:mr-[62px]'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-white hover:text-blue-400 focus:outline-none'
            >
              {isMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <div className='flex flex-col gap-[8px] items-end w-[32px]'>
                  <div className='h-[5px] w-[32px] bg-white rounded-full'></div>
                  <div className='h-[5px] w-[22.5px] bg-white rounded-full ml-auto'></div>
                  <div className='h-[5px] w-[27.2px] bg-white rounded-full'></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-black z-50'>
          <div className='flex justify-between items-center h-[103px] pl-[42px] md:pl-[62px] pr-[42px] md:pr-[62px]'>
            {/* Logo */}
            <Link
              href='/'
              className='flex items-center'
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src={getImagePath("/images/logo.png")}
                alt='Logo'
                width={113}
                height={63}
                priority
                sizes='100vw'
                quality={90}
                className='object-cover'
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className='text-white hover:text-gray-300 focus:outline-none relative w-[30px] h-[30px]'
            >
              <div className='absolute top-1/2 left-0 w-[30px] h-[5px] bg-white rounded-[4px] -rotate-45'></div>
              <div className='absolute top-1/2 left-0 w-[30px] h-[5px] bg-white rounded-[4px] rotate-135 opacity-100'></div>
            </button>
          </div>

          {/* Menu Items */}
          <div className='pl-[42px] md:pl-[62px] pr-[42px] md:pr-[62px] pt-[60px]'>
            {menuItems.map(item => {
              const isActive = pathname === item.href
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block font-bold text-[36px] leading-[100%] tracking-[0%] transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div
                    className={`h-px mt-[12px] mb-[47px] ${
                      isActive ? "bg-white" : "bg-white/30"
                    }`}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
