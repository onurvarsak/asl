import Image from "next/image"
import { getImagePath } from "@/app/utils/image"

export default function TruckSection() {
  const services = [
    {
      image: getImagePath("/images/truck-1.png"),
      title: "Nationaler Transport",
      description:
        "Zuverlässige und pünktliche Transportlösungen innerhalb ganz Deutschlands."
    },
    {
      image: getImagePath("/images/truck-2.png"),
      title: "Internationaler Transport",
      description:
        "Sichere und effiziente Routenplanung für Logistikoperationen innerhalb Europas."
    },
    {
      image: getImagePath("/images/truck-3.png"),
      title: "Teil - Und Komplettladungen (LTL/FTL)",
      description:
        "Flexible Optionen für sowohl kleinere als auch vollständige Ladungen."
    }
  ]

  return (
    <section className='w-full bg-white pt-[20px] pb-16'>
      {/* Mobil ve tablet için scroll container */}
      <div className='overflow-x-auto lg:overflow-x-visible px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        <div className='flex gap-[18px] lg:justify-center lg:flex-wrap lg:max-w-7xl lg:mx-auto'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col shrink-0 w-[300px]'>
              <div className='w-[300px] h-auto mb-6 bg-white'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={574}
                  className='w-full h-auto'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
