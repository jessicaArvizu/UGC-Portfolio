import { FaInstagram, FaTiktok, FaEnvelope, FaAsterisk } from 'react-icons/fa';

export default function Contact() {
    return (
        <footer id='contact' className="inset-0 p-10 flex w-full flex-col items-center justify-center bg-[#FFB587] bg-[linear-gradient(to_right,#FFF4DE33_2px,transparent_1px),linear-gradient(to_bottom,#FFF4DE33_2px,transparent_1px)] bg-[size:70px_70px]">
            <div className="mx-auto max-w-full items-center justify-center px-8 py-10 text-center lg:py-[30px] bg-white rounded-xl border-4 border-black flex flex-col lg:flex-row h-full shadow-[8px_8px_0px_#000] relative">

                <div className="flex flex-col items-center justify-center w-full lg:w-2/3 h-full space-y-3">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-md mb-10 font-heading md:text-3xl lg:text-xl rounded-full p-2 px-4lg:p-4 lg:px-8 bg-lightYellow border-2 border-black shadow-[8px_8px_0px_#E27F2E]">
                            ¡Trabajemos juntos!
                        </h2>
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

                    <div className="">
                        <p className="text-[8px] font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
                            jessica.arvizu.trabajo@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
