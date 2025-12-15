import Image from "next/image"

export default function FiloSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src='/images/filo-sm.png'
        alt='Filo'
        fill
        className='object-fill md:hidden'
        priority
      />
      {/* MD */}
      <Image
        src='/images/filo-md.png'
        alt='Filo'
        fill
        className='object-fill hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src='/images/filo-lg.png'
        alt='Filo'
        fill
        className='object-fill hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src='/images/filo-xl.png'
        alt='Filo'
        fill
        className='object-fill hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src='/images/filo-2xl.png'
        alt='Filo'
        fill
        className='object-fill hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src='/images/filo-1800.png'
        alt='Filo'
        fill
        className='object-fill hidden 3xl:block'
      />
    </section>
  )
}
