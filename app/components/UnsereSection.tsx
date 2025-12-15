import Image from "next/image"

export default function UnsereSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src='/images/unsere_sm.png'
        alt='Unsere'
        fill
        className='object-fill md:hidden'
        priority
      />
      {/* MD */}
      <Image
        src='/images/unsere_md.png'
        alt='Unsere'
        fill
        className='object-fill hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src='/images/unsere_lg.png'
        alt='Unsere'
        fill
        className='object-fill hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src='/images/unsere_xl.png'
        alt='Unsere'
        fill
        className='object-fill hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src='/images/unsere_2xl.png'
        alt='Unsere'
        fill
        className='object-fill hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src='/images/unsere_1800.png'
        alt='Unsere'
        fill
        className='object-fill hidden 3xl:block'
      />
    </section>
  )
}
