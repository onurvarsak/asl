import Image from "next/image"
import Link from "next/link"
import { getImagePath } from "@/app/utils/image"

export default function TopSection() {
  return (
    <section className='relative w-full h-[628px] overflow-hidden'>
      {/* Mobile image */}
      <Image
        src={getImagePath("/images/truck-sm.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover md:hidden'
      />
      {/* MD image */}
      <Image
        src={getImagePath("/images/truck-md.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden md:block lg:hidden'
      />
      {/* LG image */}
      <Image
        src={getImagePath("/images/truck-lg.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden lg:block xl:hidden'
      />
      {/* XL image */}
      <Image
        src={getImagePath("/images/truck-xl.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden xl:block 2xl:hidden'
      />
      {/* 2XL image */}
      <Image
        src={getImagePath("/images/truck-2xl.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 2xl:block 3xl:hidden'
      />
      {/* 1800px and up image */}
      <Image
        src={getImagePath("/images/truck-1800.png")}
        alt='Banner'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 3xl:block'
      />
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
