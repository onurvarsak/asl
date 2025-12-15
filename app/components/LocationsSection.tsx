import Image from "next/image"

export default function LocationsSection() {
  const locations = [
    {
      address: "Friedrich-Alfredstr.182",
      city: "47226 Duisburg",
      email: "info@als-aknurgmbh.com"
    },
    {
      address: "Paul-Eschstr.55-57",
      city: "47053 Duisburg",
      email: "info@als-aknurgmbh.com"
    }
  ]

  return (
    <section className='w-full bg-white py-16 px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {locations.map((location, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              {/* Location Pin Icon */}
              <div className='mb-6'>
                <Image
                  src='/images/location.png'
                  alt='Location'
                  width={60}
                  height={60}
                  className='object-contain'
                />
              </div>

              {/* Address */}
              <p className='text-[24px] leading-[30px] font-light mb-1'>
                {location.address}
              </p>
              <p className='text-[24px] leading-[30px] font-light mb-4'>
                {location.city}
              </p>

              {/* Email */}
              <a
                href={`mailto:${location.email}`}
                className='text-[24px] leading-[30px] font-light hover:underline'
              >
                {location.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
