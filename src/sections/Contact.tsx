import { FaInstagram, FaTiktok, FaEnvelope, FaAsterisk } from 'react-icons/fa';

export default function Contact() {
    return (
        <footer id='contact'
            className="font-Rocket inset-0 p-10 flex w-full flex-col items-center justify-center bg-bg">
            <div className="mx-auto max-w-full items-center justify-center px-8 py-10 text-center lg:py-[30px] bg-white rounded-xl border-4 border-black flex flex-col lg:flex-row h-full shadow-[8px_8px_0px_#FFB587] relative">

                <div className="flex flex-col items-center justify-center w-full lg:w-2/3 h-full space-y-3">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl mb-10 font-heading rounded-full p-2 px-4 bg-mainPink">
                            ¡TRABAJEMOS JUNTOS!
                        </h2>
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

                    <p className="font-normal leading-relaxed lg:text-2xl">
                        jessica.arvizu.trabajo@gmail.com
                    </p>
                </div>
            </div>
            <div className='mt-10 font-Lexend text-xs'>
                ¿Te gustó este sitio? También hago
                <a href='https://www.jessicaarvizu.com'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-mainPink hover:text-orange'>
                    {' '}páginas web
                </a>.
            </div>
        </footer>
    )
}
