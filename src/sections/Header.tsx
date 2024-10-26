import Image from "next/image";
import jessicaArvizu from '../public/img/jessica-arvizu.png';
import { FaInstagram, FaTiktok, FaEnvelope, FaAsterisk } from 'react-icons/fa';
import Star2 from "@/components/ui/star2-icon";

export default function Header() {

  return (
    <header className="inset-0 font-Lexend pt-16 p-10 lg:pt-36 flex w-full flex-col items-center justify-center bg-[#FF8ACD] bg-[linear-gradient(to_right,#FFC6E733_2px,transparent_1px),linear-gradient(to_bottom,#FFC6E733_2px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto max-w-full px-8 py-10 text-center bg-white rounded-xl border-4 border-black flex flex-col lg:flex-row h-full shadow-[8px_8px_0px_#000] relative">
        <div className="absolute -top-10 -left-10 lg:-top-20 lg:-left-20">
          <Star2 color='#FFEA80' size='150px' />
        </div>
        <div className="flex flex-col justify-between w-full mt-20 lg:mt-1 lg:w-2/3">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-heading md:text-3xl lg:text-5xl">
              Hola, soy
            </h2>
            <br />
            <h1 className="text-5xl font-Rocket font-heading rounded-full p-4 px-8 bg-mint border-2 border-black">
              JESSICA
            </h1>
            <div className="">
              <p className="mt-5 mb-5 lg:mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
                Creadora de contenido UGC
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 pb-8">
            <a href="https://linktr.ee/jessicaarvz"
              className="rounded-full p-2 bg-orange border-2 border-black shadow-[4px_4px_0px_#000]"
              target="_blank"
              rel="noopener noreferrer">
              <FaAsterisk className="text-black text-3xl" />
            </a>
            <a href="https://www.instagram.com/jessicaarvz/"
              className="rounded-full p-2 bg-blue border-2 border-black shadow-[4px_4px_0px_#000]"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-black text-3xl" />
            </a>
            <a href="https://www.tiktok.com/@jessicaarvz"
              className="rounded-full p-2 bg-yellow border-2 border-black shadow-[4px_4px_0px_#000]"
              target="_blank"
              rel="noopener noreferrer">
              <FaTiktok className="text-black text-3xl" />
            </a>
            <a href="mailto:jessica.arvizu.trabajo@gmail.com"
              className="rounded-full p-2 bg-darkLavender border-2 border-black shadow-[4px_4px_0px_#000]"
              target="_blank"
              rel="noopener noreferrer">
              <FaEnvelope className="text-black text-3xl" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-1/3 h-full">
          <Image
            className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#B377DF]"
            src={jessicaArvizu}
            alt="Jessica Arvizu"
            height={600}
          />
          <div className="absolute z-10 bottom-0 right-0 mb-4 -mr-4 h-20 w-20 bg-yellow rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_#FF8A50]">
            <span className="text-black text-lg font-bold font-Rocket">¡SOY YO!</span>
          </div>
        </div>
      </div>
    </header>
  );
}
