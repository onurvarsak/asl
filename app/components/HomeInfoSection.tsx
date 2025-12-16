import React from "react"

export default function HomeInfoSection() {
  const features = [
    {
      title: "Erfahrung",
      description:
        "Seit 2006 bieten wir mit unserer starken Flotte zuverlässige Distributionsdienstleistungen an."
    },
    {
      title: "Stärke",
      description:
        "Mit unserer vielfältigen Flotte bieten wir flexible Transportlösungen."
    },
    {
      title: "Vertrauen",
      description:
        "Wir arbeiten seit Jahren mit starken Partnern wie Rhenus Logistics zusammen."
    }
  ]

  return (
    <section className='w-full h-auto  bg-white'>
      <div className='h-full px-4 sm:px-[110px] md:px-[174px] pt-[51px] sm:pt-[80px] md:pt-[106px] lg:pt-[116px] pb-[12px]'>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-[64px] sm:gap-[100px] md:gap-8 h-full'>
          {features.map((feature, index) => (
            <div key={index} className='text-center'>
              <h3 className='text-[66px] max-sm:text-[39.37px] font-bold leading-[1.2] max-sm:leading-[39.37px] tracking-[0%] mb-4 text-[#000000] text-center wrap-break-word hyphens-auto font-poppins'>
                {feature.title}
              </h3>
              <p className='text-[24px] max-sm:text-[14.32px] font-light leading-[30px] max-sm:leading-[17.9px] tracking-[0%] text-center text-[#000000] wrap-break-word hyphens-auto font-poppins'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
