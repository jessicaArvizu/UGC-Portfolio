import Star2 from '@/components/ui/star2-icon'
import Star3 from '@/components/ui/star3-icon'
import Star4 from '@/components/ui/star4-icon'

export default function Services() {
  return (
    <section
      id='services'
      className="inset-0 py-10 lg:py-20 flex w-full flex-col items-center justify-center bg-[#FFD567] bg-[linear-gradient(to_right,#E27F2E33_2px,transparent_1px),linear-gradient(to_bottom,#E27F2E33_2px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full">
        <h2 className="text-center text-2xl font-heading md:text-3xl lg:text-4x">
          Servicios
        </h2>
      </div>

      <div className="mx-auto my-14 grid w-container max-w-full grid-cols-1 gap-20 px-8 lg:px-[20] md:grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-center lg:col-span-1">
          <div className="w-full bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_#b377df] relative">
            <h2 className="text-xl text-center font-semibold md:mb-4 lg:mb-4">Videos</h2>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-2">
              <div className="w-16 h-16 lg:w-32 lg:h-32 bg-blue text-black rounded-full flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_#FF8ACD]">
                <span className="text-[8px] lg:text-xs">Precios</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                Videos de 30 segundos en adelante, en formato vertical (9:16), basados en mi experiencia con el producto o en guía de campaña
              </p>
              <ul className="list-disc list-inside text-base space-y-2">
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  1 Video - $350 MXN
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  2 Videos - $600 MXN
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  3 Videos - $960 MXN
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  5 Videos - $1,680 MXN
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  7 Videos - $2,400 MXN
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  10 Videos - $4,500 MXN
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex items-center lg:col-span-1 lg:mt-5">
          <div className="w-full bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_#FF8ACD] relative">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-2 md:mb-4 lg:mb-4">
              <div className="w-16 h-16 lg:w-32 lg:h-32 bg-[#FFB587] text-black rounded-full flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_#d9beff]">
                <span className="text-[6px] lg:text-xs">Negociable</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl text-center mt-6 lg:mt-1 font-semibold mb-4">Intercambio de producto</h2>
              <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                Incluye edición básica:
                Cortes, texto, voiceover, voz en off, subtítulos, transiciones.
              </p>
              <ul className="list-disc mt-10 list-inside text-base space-y-2">
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Unboxing
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Vlogs
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Testimonio
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  GRWM
                </li>
                <li className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Tutoriales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-14 grid w-container max-w-full grid-cols-1 lg:gap-20 px-8 lg:px-[20]">
        <div className="w-full bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_#7df9ff] relative">
          <div className="flex flex-col justify-center lg:col-span-1">
            <ul className="text-base list-none space-y-2 md:mb-4 lg:mb-4">
              <li className="flex items-center">
                <Star3 color='#88FFD1' size='20px' />
                <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Propuesta de contenido
                </span>
              </li>
              <li className="flex items-center">
                <Star2 color='#b377df' size='20px' />
                <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Entrega de guiones
                </span>
              </li>
              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <Star3 color='#FF8ACD' size='20px' />
                  <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                    Creación de contenido
                  </span>
                </div>
                <span className="ml-8 text-xs lg:text-sm my-2">
                  Incluye edición básica (cortes, texto, voiceover, voz en off, subtítulos, transiciones)
                </span>
              </li>
              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <Star2 color='#FFD567' size='20px' />
                  <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                    Testimonio y Reviews
                  </span>
                </div>
                <span className="ml-8 text-xs lg:text-sm my-2">
                  Incluye unboxings y tutoriales.
                </span>
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold mb-4">Extras</h2>
            <ul className="text-base list-none space-y-2">
              <li className="flex items-center">
                <Star4 color='#88FFD1' size='20px' />
                <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                  Contenido RAW: 30% de la tarifa.
                </span>
              </li>
              <li className="flex flex-col items-start">
                <div className="flex items-center">
                  <Star2 color='#FF8ACD' size='20px' />
                  <span className="ml-2 text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                    Derechos de uso: 20% valor por video (mensual).
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
