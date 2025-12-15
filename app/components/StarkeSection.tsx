import Image from "next/image"

export default function StarkeSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src='/images/starke-sm.png'
        alt='Starke'
        fill
        className='object-fill md:hidden'
        priority
      />
      {/* MD */}
      <Image
        src='/images/starke-md.png'
        alt='Starke'
        fill
        className='object-fill hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src='/images/starke-lg.png'
        alt='Starke'
        fill
        className='object-fill hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src='/images/starke-xl.png'
        alt='Starke'
        fill
        className='object-fill hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src='/images/starke-2xl.png'
        alt='Starke'
        fill
        className='object-fill hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src='/images/starke-1800.png'
        alt='Starke'
        fill
        className='object-fill hidden 3xl:block'
      />
    </section>
  )
}
