import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function WerWirSindSection() {
  return (
    <section className='relative w-full bg-white h-[718px] overflow-hidden'>
      {/* SM */}
      <Image
        src={getImagePath('/images/wws-sm.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill md:hidden'
        priority
      />
      {/* MD */}
      <Image
        src={getImagePath('/images/wws-md.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill hidden md:block lg:hidden'
      />
      {/* LG */}
      <Image
        src={getImagePath('/images/wws-lg.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill hidden lg:block xl:hidden'
      />
      {/* XL */}
      <Image
        src={getImagePath('/images/wws-xl.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill hidden xl:block 2xl:hidden'
      />
      {/* 2XL */}
      <Image
        src={getImagePath('/images/wws-2xl.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill hidden 2xl:block 3xl:hidden'
      />
      {/* 3XL (1800px+) */}
      <Image
        src={getImagePath('/images/wws-1800.png')}
        alt='Wer Wir Sind'
        fill
        className='object-fill hidden 3xl:block'
      />
    </section>
  )
}
