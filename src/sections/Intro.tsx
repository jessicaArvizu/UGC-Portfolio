import Image from "next/image";
import coffeeShot from '../public/img/IMG_0660.jpg';
import Marquee from 'react-fast-marquee';
import Star from "@/components/ui/star-icon";
import Star3 from "@/components/ui/star3-icon";

export default function Intro() {
  return (
    <section
      id='intro'
      className="border-t-border lg:h-screen border-t-2 bg-bg py-10 font-base">
      <Marquee
        className="border-y-border border-y-2 border-black bg-orange py-3 font-base sm:py-5"
        direction="left"
      >
        {['Hauls', 'Lifestyle', 'Beauty', 'Skincare', 'Food'].map((text, index) => (
          <div className="flex items-center mx-6" key={index}>
            <span className="text-xl font-heading sm:text-2xl lg:text-4xl mx-4">
              {text}
            </span>
            <Star3 color={'#FFEA80'} size={'40px'} />
          </div>
        ))}
      </Marquee>

      <div className="mx-auto my-14 grid w-container max-w-full grid-cols-1 gap-5 px-8 lg:px-[20] sm:grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-center justify-center lg:col-span-1">
          <Image
            className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FFD567]"
            src={coffeeShot}
            alt="Un vaso de latte frío"
            height={400}
          />

          <div className="absolute top-0 left-0 p-2">
            <Star color={'#FF8ACD'} size={'100px'} />
          </div>

          <div className="absolute bottom-0 right-0 p-2">
            <Star3 color={'#FF8A50'} size={'80px'} />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-1">
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            Hola, soy <span className="rounded-full p-1 px-8 bg-mint">Jessica Arvizu</span>, una creadora de contenido
            entusiasta y apasionada.
          </p>
          <br />
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            Me emociona compartir mi vida a través de vlogs, recetas,
            hauls, y reseñas de los mejores lugares para comer y
            disfrutar de un buen café.
          </p>
          <br />
          <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
            ¡Acompáñame en esta aventura llena de sabor, estilo, y
            momentos especiales!
          </p>
        </div>
      </div>
    </section>
  );
}
