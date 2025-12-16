import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function UnsereSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src={getImagePath('/images/unsere_sm.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover md:hidden'
      />
      {/* MD */}
      <Image
        src={getImagePath('/images/unsere_md.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src={getImagePath('/images/unsere_lg.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src={getImagePath('/images/unsere_xl.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src={getImagePath('/images/unsere_2xl.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src={getImagePath('/images/unsere_1800.png')}
        alt='Unsere'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 3xl:block'
      />
    </section>
  )
}
