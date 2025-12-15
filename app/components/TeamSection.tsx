export default function TeamSection() {
  const team = [
    {
      position: "Geschäftsführerin",
      name: "Gülsüm Aknur",
      email: "gulsumaknur@als-aknurgmbh.com",
      phone: ""
    },
    {
      position: "Disposition/Fuhrparkleiter",
      name: "Oguzhan Aknur",
      email: "oguzhanaknur@als-aknurgmbh.com",
      phone: "+49 173 167 36 75"
    },
    {
      position: "Disposition",
      name: "Yasin Karakuzu",
      email: "yasinkarakuzu@als-aknurgmbh.com",
      phone: "+49 163 866 50 76"
    },
    {
      position: "Gesellschafter und Prokurist",
      name: "Ayhan Aknur",
      email: "ayhanaknur@als-aknurgmbh.com",
      phone: ""
    },
    {
      position: "Buchhalterin",
      name: "Emine Karakuzu",
      email: "eminekarakuzu@als-aknurgmbh.com",
      phone: "+49 203 933 11 010"
    },
    {
      position: "Sekräterin",
      name: "Hayriye Nur Aknur",
      email: "hnuraknur@als-aknurgmbh.com",
      phone: "+49 203 933 11 010"
    }
  ]

  return (
    <section className='w-full bg-white py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='overflow-x-auto lg:overflow-x-visible px-8 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          <div className='flex gap-12 lg:grid lg:grid-cols-3'>
            {team.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center min-w-[300px] lg:min-w-0'
              >
                <p className='text-[24px] leading-[30px] font-light text-center mb-2'>
                  {member.position}
                </p>
                <h3 className='text-[58px] leading-[62px] font-bold text-center mb-3'>
                  {member.name}
                </h3>
                <a
                  href={`mailto:${member.email}`}
                  className='text-[20px] leading-[26px] font-light text-center mb-1 hover:underline'
                >
                  {member.email}
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className='text-base font-bold hover:underline'
                  >
                    {member.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className='text-center text-[21.57px] leading-[26.55px] font-light max-w-4xl mx-auto px-8'>
          Als Familienunternehmen verbinden wir traditionelle Werte mit moderner
          Logistikkompetenz und legen großen Wert auf langfristige
          Partnerschaften.
        </p>
      </div>
    </section>
  )
}
