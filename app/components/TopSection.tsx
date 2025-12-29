import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/app/utils/image"

export default function TopSection() {
  return (
    <section className='relative w-full h-[628px] overflow-hidden'>
      {/* Mobile image */}
      <div className='absolute inset-0 md:hidden'>
        <Image
          src={getImagePath("/images/truck-sm.png")}
          alt='Banner'
          fill
          priority
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* MD image */}
      <div className='absolute inset-0 hidden md:block lg:hidden'>
        <Image
          src={getImagePath("/images/truck-md.png")}
          alt='Banner'
          fill
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* LG image */}
      <div className='absolute inset-0 hidden lg:block xl:hidden'>
        <Image
          src={getImagePath("/images/truck-lg.png")}
          alt='Banner'
          fill
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* XL image */}
      <div className='absolute inset-0 hidden xl:block 2xl:hidden'>
        <Image
          src={getImagePath("/images/truck-xl.png")}
          alt='Banner'
          fill
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* 2XL image */}
      <div className='absolute inset-0 hidden 2xl:block 3xl:hidden!'>
        <Image
          src={getImagePath("/images/truck-2xl.png")}
          alt='Banner'
          fill
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* 1800px and up image */}
      <div className='absolute inset-0 hidden 3xl:block'>
        <Image
          src={getImagePath("/images/truck-1800.png")}
          alt='Banner'
          fill
          sizes='100vw'
          quality={90}
          className='object-cover'
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Content */}
      <div className='relative z-10 h-full max-w-7xl mx-auto pl-[71px] pr-4 sm:pr-6 lg:pr-8 flex items-start pt-[220px]'>
        <div className='text-white max-w-2xl'>
          <h1 className='text-[40px] font-bold leading-[100%] tracking-[0%] mb-6 '>
            Stark Durch Unsere Flotte
          </h1>
          <p className='font-poppins text-[24px] leading-[28px] tracking-[0%] mb-8 text-white'>
            Mit unserer großen Flotte und unserem erfahrenen Team transportieren
            wir Ihre Fracht sicher und pünktlich.
          </p>
          <Link href='/kontakt'>
            <button className='bg-transparent border border-white text-white w-[243px] h-[53px] rounded-[26.5px] hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300 font-medium text-lg opacity-100 cursor-pointer'>
              Mehr Informationen
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
