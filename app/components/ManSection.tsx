export default function ManSection() {
  return (
    <section
      className='relative w-full bg-white bg-[url("/images/man-sm.png")] md:bg-[url("/images/man-md.png")] lg:bg-[url("/images/man-lg.png")] xl:bg-[url("/images/man-xl.png")] 2xl:bg-[url("/images/man-2xl.png")] 3xl:bg-[url("/images/man-1800.png")] bg-no-repeat h-[356px] md:h-[440px]'
      style={{ backgroundSize: "100% 100%" }}
    >
      <div className='relative z-10'>{/* İçerik buraya eklenecek */}</div>
    </section>
  )
}
