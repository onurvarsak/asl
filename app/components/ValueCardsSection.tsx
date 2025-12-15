import Image from "next/image"

export default function ValueCardsSection() {
  const values = [
    {
      icon: "/images/objects-1.png",
      title: "Stabilität",
      subtitle: "Sichere Perspektive",
      description:
        "Wir bieten langfristige Arbeitsverhältnisse, faire Bedingungen und ein solides Unternehmensfundament, das seit 2006 stetig wächst."
    },
    {
      icon: "/images/objects-2.png",
      title: "Entwicklung",
      subtitle: "Wachstum Möglich",
      description:
        "Bei uns haben Sie die Möglichkeit, sich fachlich weiterzuentwickeln, neue Aufgaben zu übernehmen und mit der Firma gemeinsam zu wachsen."
    },
    {
      icon: "/images/objects-3.png",
      title: "Teamgeist",
      subtitle: "Gemeinsam Stark",
      description:
        "Wir leben ein familiäres Miteinander, unterstützen uns gegenseitig und schaffen ein Arbeitsumfeld, in dem Respekt und Zusammenhalt im Mittelpunkt stehen."
    }
  ]

  return (
    <section className='w-full bg-white py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='overflow-x-auto md:overflow-x-visible px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          <div className='flex gap-12 md:grid md:grid-cols-3'>
            {values.map((value, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center min-w-[350px] max-w-[350px] md:min-w-0 md:max-w-none shrink-0'
              >
                {/* Icon */}
                <div className='mb-6'>
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={120}
                    height={120}
                    className='object-contain'
                  />
                </div>

                {/* Title */}
                <h3 className='text-[46px] leading-[66px] font-bold mb-4'>
                  {value.title}
                </h3>

                {/* Subtitle */}
                <h4 className='text-[24px] leading-[30px] font-bold mb-4'>
                  {value.subtitle}
                </h4>

                {/* Description */}
                <p className='text-[24px] leading-[30px] font-light'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
