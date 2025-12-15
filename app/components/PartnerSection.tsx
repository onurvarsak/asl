import Image from "next/image"

export default function PartnerSection() {
  const partners = [
    {
      name: "Rhenus Logistics",
      logo: "/images/logo-rhenusl 1.png",
      width: 300,
      height: 100
    },
    {
      name: "AMM",
      logo: "/images/logo-amm.png",
      width: 300,
      height: 100
    },
    {
      name: "Obeta Eldis Häusler",
      logo: "/images/logo-obeta.jpg",
      width: 300,
      height: 100
    },
    {
      name: "Hellmann Worldwide Logistics",
      logo: "/images/logo-hellmann.png",
      width: 434,
      height: 222
    }
  ]

  return (
    <section className='w-full bg-white py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-[26px] leading-[32px] font-light text-center  mx-auto'>
            Wir arbeiten seit vielen Jahren eng mit unserem wichtigsten
            Logistikpartner zusammen Diese Partnerschaft stärkt die Qualität und
            Zuverlässigkeit unserer täglichen Abläufe zusätzlich
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center'>
          {partners.map((partner, index) => (
            <div
              key={index}
              className='flex items-center justify-center w-full h-[150px]'
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className='object-contain max-w-full max-h-full'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
