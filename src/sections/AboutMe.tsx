import Image from "next/image";
import jessicaShot from '../public/img/IMG_Jess.jpg';
import Star4 from "@/components/ui/star4-icon";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <section
      id='about_me'
      className="flex flex-col lg:py-10 items-center justify-center bg-lavender bg-[linear-gradient(to_right,#b377df33_1px,transparent_2px),linear-gradient(to_bottom,#b377df33_2px,transparent_1px)] bg-[size:70px_70px] font-base"
    >
      <div className="mx-auto w-container max-w-full">
        <h2 className="text-center mt-10 text-2xl font-heading md:text-3xl lg:text-4xl">
          ¿Quién soy yo?
        </h2>
      </div>

      <div className="mx-auto my-14 grid w-container max-w-full grid-cols-1 gap-5 px-8 lg:px-[20] sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:col-span-1">
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            Soy una persona <span className="rounded-full p-1 px-4 bg-orange">creativa</span> que disfruta documentar cada experiencia,
            desde probar nuevas recetas hasta descubrir rincones únicos en mi ciudad.
          </p>
          <br />
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            Mi contenido abarca comida, belleza, skincare y lifestyle, siempre con un toque personal y auténtico.
            Me encanta conectar con mi audiencia de manera cercana y amigable, buscando tanto inspirar como ser inspirada.

          </p>
          <br />
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            Mi <span className="rounded-full p-1 px-4 bg-lightYellow">objetivo principal</span> es que cada pieza de contenido sea una representación genuina de mí misma,
            conectando con una comunidad que valora lo auténtico y lo cotidiano.
          </p>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-1">
          <Image
            className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#b377df]"
            src={jessicaShot}
            alt="Un vaso de latte frío"
            height={500}
          />

          <div className="absolute bottom-10 right-25 bg-white border-4 border-black p-4 rounded-lg shadow-[8px_8px_0px_#88FFD1]">
            <p className="text-base md:text-lg">
              29 años | México | Guadalajara
              <span className="inline-block ml-1">
                <FaLocationDot />
              </span>
            </p>
          </div>

          <div className="absolute top-4 right-4 hidden md:block">
            <Star4 color='#FF9AA2' size='100px' />
          </div>
        </div>
      </div>
    </section>
  );
}
