import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function StarkeSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src={getImagePath('/images/starke-sm.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover md:hidden'
      />
      {/* MD */}
      <Image
        src={getImagePath('/images/starke-md.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src={getImagePath('/images/starke-lg.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src={getImagePath('/images/starke-xl.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src={getImagePath('/images/starke-2xl.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src={getImagePath('/images/starke-1800.png')}
        alt='Starke'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 3xl:block'
      />
    </section>
  )
}
