import Image from "next/image"

export default function TopSection() {
  return (
    <section className='relative w-full h-[628px] overflow-hidden'>
      {/* Mobile image */}
      <Image
        src='/images/truck-sm.png'
        alt='Banner'
        fill
        className='md:hidden'
      />
      {/* MD image */}
      <Image
        src='/images/truck-md.png'
        alt='Banner'
        fill
        className='hidden md:block lg:hidden'
      />
      {/* LG image */}
      <Image
        src='/images/truck-lg.png'
        alt='Banner'
        fill
        className='hidden lg:block xl:hidden'
      />
      {/* XL image */}
      <Image
        src='/images/truck-xl.png'
        alt='Banner'
        fill
        className='hidden xl:block 2xl:hidden'
      />
      {/* 2XL image */}
      <Image
        src='/images/truck-2xl.png'
        alt='Banner'
        fill
        className='hidden 2xl:block min-[1800px]:hidden'
      />
      {/* 1800px and up image */}
      <Image
        src='/images/truck-1800.png'
        alt='Banner'
        fill
        className='hidden min-[1800px]:block'
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
          <button className='bg-transparent border border-white text-white w-[243px] h-[53px] rounded-[26.5px] hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg opacity-100'>
            Mehr Informationen
          </button>
        </div>
      </div>
    </section>
  )
}
