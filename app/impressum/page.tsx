import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der ALS-Aknur GmbH"
}

export default function ImpressumPage() {
  return (
    <div className='flex flex-col bg-white font-sans min-h-screen'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 min-[1920px]:px-[212px] pt-[117px] pb-16'>
        <h1 className='text-[46px] font-bold text-black mb-8 leading-[36px] font-poppins'>
          Impressum
        </h1>

        <div className='text-black'>
          <section>
            <h2 className='text-[28px] font-bold text-black mb-6 leading-[36px] font-poppins'>
              Angaben gemäß § 5 TMG
            </h2>
            <div className='space-y-3'>
              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Firmenname:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  ALS-Aknur GmbH
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Vertreten durch:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  Oguzhan Aknur
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Anschrift:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  Friedrich-Alfredstr.182 47226 Duisburg Deutschland
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Telefon:{" "}
                </span>
                <a
                  href='tel:+4920393311010'
                  className='text-[28px] font-normal text-black leading-[36px] font-poppins hover:underline'
                >
                  +49 203 933 11 010
                </a>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  E-Mail:{" "}
                </span>
                <a
                  href='mailto:info@als-aknurgmbh.com'
                  className='text-[28px] font-normal text-black leading-[36px] font-poppins hover:underline'
                >
                  info@als-aknurgmbh.com
                </a>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Registereintrag:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  Eintragung im Handelsregister
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Registergericht:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  [Amtsgericht + Stadt]
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Registernummer:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  [HRB-Nummer]
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  [USt-IdNr.]
                </span>
              </div>

              <div>
                <span className='text-[28px] font-bold text-black leading-[36px] font-poppins'>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:{" "}
                </span>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  [Name des Geschäftsführers]
                </span>
              </div>

              <div>
                <span className='text-[28px] font-normal text-black leading-[36px] font-poppins'>
                  [Adresse – kann identisch mit der Firmenadresse sein]
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
