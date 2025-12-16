export default function FleetStatsSection() {
  const stats = [
    {
      number: "12",
      description: "40-Tonnen-Lkw\n(Sattelzugmaschinen)"
    },
    {
      number: "7",
      description: "3,5-Tonnen-Sprinter (Koffer + Hebebühne)"
    },
    {
      number: "12",
      description: "7,5-Tonnen-Lkw"
    },
    {
      number: "20",
      description: "12-Tonnen-Lkw"
    },
    {
      number: "6",
      description: "15-Tonnen-Lkw"
    },
    {
      number: "2",
      description: "18-Tonnen-Lkw"
    },
    {
      number: "4",
      description: "Tandemanhänger"
    },
    {
      number: "25+",
      description: "Koffer, Planen und Thermoauflieger"
    }
  ]

  return (
    <section className='w-full bg-white py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 place-items-center'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col items-center'>
              <h3 className='text-[106px] leading-[106px] font-bold text-center text-[#000000]'>
                {stat.number}
              </h3>
              <p className='text-[24px] leading-[30px] font-bold text-center mt-2 whitespace-pre-line text-[#000000]'>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
