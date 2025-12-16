import { getImagePath } from "@/app/utils/image"
import Image from "next/image"

export default function FiloSection() {
  return (
    <section className='relative w-full bg-white overflow-hidden'>
      {/* Text Overlay */}
      <div className='absolute inset-0 z-10 flex items-center sm:items-start justify-start pl-[20px] sm:pl-[44px] lg:pl-[59px] xl:pl-[106px] 2xl:pl-[84px] 3xl:pl-[212px] sm:pt-[78px] lg:pt-[77px]'>
        <h2 className='text-[#FFFFFF] text-[20px] min-[400px]:text-[28px] sm:text-[46px] md:text-[48px] lg:text-[46px] xl:text-[46px] 2xl:text-[46px] 3xl:text-[46px] font-bold leading-[24.11px] min-[400px]:leading-[34px] sm:leading-[52px] lg:leading-[52px] xl:leading-[52px] 2xl:leading-[52px] 3xl:leading-[52px] tracking-[0%] max-w-[600px] font-poppins'>
          Unser Moderner und
          <br />
          Leistungsstarker
          <br />
          Fuhrpark
        </h2>
      </div>

      {/* 300px altı */}
      <div className='relative w-full h-auto min-[300px]:hidden'>
        <Image
          src={getImagePath("/images/300/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={300}
          height={167}
        />
      </div>
      {/* 300px - md arası (640px) */}
      <div className='relative w-full h-auto hidden min-[300px]:block md:hidden'>
        <Image
          src={getImagePath("/images/640/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={640}
          height={356}
        />
      </div>
      {/* md - lg arası (768px) */}
      <div className='relative w-full h-auto hidden md:block lg:hidden'>
        <Image
          src={getImagePath("/images/768/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={768}
          height={427}
        />
      </div>
      {/* lg - xl arası (1024px) */}
      <div className='relative w-full h-auto hidden lg:block xl:hidden'>
        <Image
          src={getImagePath("/images/1024/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1024}
          height={569}
        />
      </div>
      {/* xl - 2xl arası (1280px) */}
      <div className='relative w-full h-auto hidden xl:block 2xl:hidden'>
        <Image
          src={getImagePath("/images/1280/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1280}
          height={711}
        />
      </div>
      {/* 2xl - 3xl arası (1536px) */}
      <div className='relative w-full h-auto hidden 2xl:block 3xl:hidden'>
        <Image
          src={getImagePath("/images/1536/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1536}
          height={854}
        />
      </div>
      {/* 3xl ve üzeri (1800px+) */}
      <div className='relative w-full h-auto hidden 3xl:block'>
        <Image
          src={getImagePath("/images/1800/filo 1.png")}
          alt='Filo'
          priority
          sizes='100vw'
          quality={90}
          className='w-full h-auto'
          width={1800}
          height={1000}
        />
      </div>
    </section>
  )
}
