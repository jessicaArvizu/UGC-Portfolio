import Image from "next/image";
import jessicaArvizu from '../public/img/jessica-arvizu.png';
import { FaInstagram, FaTiktok, FaEnvelope, FaAsterisk } from 'react-icons/fa'; // Importa iconos de redes sociales si usas react-icons
import Star2 from "@/components/ui/star2-icon";
import Star3 from "@/components/ui/star3-icon";

export default function Contact() {
    return (
        <footer className="inset-0 py-10 flex min-h-[80dvh] w-full flex-col items-center justify-center text-center bg-[#FFB587] bg-[linear-gradient(to_right,#FFF4DE33_2px,transparent_1px),linear-gradient(to_bottom,#FFF4DE33_2px,transparent_1px)] bg-[size:70px_70px]">
            <div className="mx-auto max-w-full px-8 py-10 text-center lg:py-[30px] bg-white rounded-xl border-4 border-black flex flex-col lg:flex-row items-center justify-center h-full shadow-[8px_8px_0px_#000] relative">

                <div className="absolute -top-10 -left-10 lg:-top-20 lg:-left-20">
                    <Star3 color='#b377df' size='150px' />
                </div>

                <div className="flex flex-col items-center justify-center w-full lg:w-2/3 h-full space-y-3">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-heading md:text-4xl lg:text-5xl rounded-full p-4 px-8 bg-lightYellow border-2 border-black shadow-[8px_8px_0px_#E27F2E]">
                            ¡Trabajemos juntos!
                        </h2>
                    </div>

                    <div className="">
                        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
                            jessica.arvizu.trabajo@gmail.com
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4 pb-8">
                        <a href="https://linktr.ee/jessicaarvz" target="_blank" rel="noopener noreferrer">
                            <FaAsterisk className="text-black text-3xl" />
                        </a>
                        <a href="https://www.instagram.com/jessicaarvz/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-black text-3xl" />
                        </a>
                        <a href="https://www.tiktok.com/@jessicaarvz" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-black text-3xl" />
                        </a>
                        <a href="mailto:jessica.arvizu.trabajo@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="text-black text-3xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
