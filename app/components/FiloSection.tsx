import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function FiloSection() {
  return (
    <section className='relative w-full bg-white h-[292px] overflow-hidden'>
      {/* SM */}
      <Image
        src={getImagePath("/images/filo-sm.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover md:hidden'
      />
      {/* MD */}
      <Image
        src={getImagePath("/images/filo-md.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src={getImagePath("/images/filo-lg.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src={getImagePath("/images/filo-xl.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src={getImagePath("/images/filo-2xl.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src={getImagePath("/images/filo-1800.png")}
        alt='Filo'
        fill
        priority
        sizes='100vw'
        quality={90}
        className='object-cover hidden 3xl:block'
      />
    </section>
  )
}
