import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function WerWirSindSection() {
  return (
    <section className='relative w-full bg-white overflow-hidden'>
      {/* 300px altı */}
      <div className='relative w-full h-auto min-[300px]:hidden'>
        <Image
          src={getImagePath("/images/wws-300.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={300}
          height={167}
        />
      </div>
      {/* 300px - md arası */}
      <div className='relative w-full h-auto hidden min-[300px]:block md:hidden'>
        <Image
          src={getImagePath("/images/wws-sm.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={640}
          height={356}
        />
      </div>
      <div className='relative w-full h-auto hidden md:block lg:hidden'>
        <Image
          src={getImagePath("/images/wws-md.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={768}
          height={356}
        />
      </div>
      <div className='relative w-full h-auto hidden lg:block xl:hidden'>
        <Image
          src={getImagePath("/images/wws-lg.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1024}
          height={356}
        />
      </div>
      <div className='relative w-full h-auto hidden xl:block 2xl:hidden'>
        <Image
          src={getImagePath("/images/wws-xl.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1280}
          height={356}
        />
      </div>
      <div className='relative w-full h-auto hidden 2xl:block 3xl:hidden'>
        <Image
          src={getImagePath("/images/wws-2xl.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1536}
          height={356}
        />
      </div>
      <div className='relative w-full h-auto hidden 3xl:block'>
        <Image
          src={getImagePath("/images/wws-1800.png")}
          alt='Wer Wir Sind'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1800}
          height={356}
        />
      </div>
      <div className='relative z-10'>{/* İçerik buraya eklenecek */}</div>
    </section>
  )
}
