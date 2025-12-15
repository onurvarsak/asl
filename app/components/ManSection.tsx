import Image from "next/image"

export default function ManSection() {
  return (
    <section className='relative w-full bg-white h-[356px] md:h-[440px] overflow-hidden'>
      <Image
        src='/images/man-sm.png'
        alt='Man'
        fill
        className='object-fill md:hidden'
        priority
      />
      <Image
        src='/images/man-md.png'
        alt='Man'
        fill
        className='object-fill hidden md:block lg:hidden'
      />
      <Image
        src='/images/man-lg.png'
        alt='Man'
        fill
        className='object-fill hidden lg:block xl:hidden'
      />
      <Image
        src='/images/man-xl.png'
        alt='Man'
        fill
        className='object-fill hidden xl:block 2xl:hidden'
      />
      <Image
        src='/images/man-2xl.png'
        alt='Man'
        fill
        className='object-fill hidden 2xl:block 3xl:hidden'
      />
      <Image
        src='/images/man-1800.png'
        alt='Man'
        fill
        className='object-fill hidden 3xl:block'
      />
      <div className='relative z-10'>{/* İçerik buraya eklenecek */}</div>
    </section>
  )
}
