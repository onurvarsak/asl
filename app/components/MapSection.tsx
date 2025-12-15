export default function MapSection() {
  const address = "Friedrich-Alfredstr. 182, 47226 Duisburg"
  const encodedAddress = encodeURIComponent(address)

  return (
    <section className='w-full bg-white'>
      <div className='w-full h-[473px]'>
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </section>
  )
}
