import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Botón para abrir/cerrar el sidebar (visible en dispositivos pequeños y medianos) */}
            <button
                className="text-3xl p-4 lg:hidden fixed top-4 right-4 z-30 rounded-full border-black border-2 bg-lightYellow shadow-[4px_4px_0px_#000]"
                onClick={toggleSidebar}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar para pantallas pequeñas */}
            <div
                className={`fixed top-0 left-0 right-0 h-auto w-full bg-bg border-b-4 border-black transform transition-transform duration-300 ease-in-out z-20
                ${isOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden`}
            >
                <ul className="flex flex-col justify-center items-center space-y-6 py-6 text-xs">
                    <li><a href="#intro" className="hover:underline">Intro</a></li>
                    <li><a href="#about_me" className="hover:underline">Sobre mí</a></li>
                    <li><a href="#tiktok" className="hover:underline">TikTok</a></li>
                    <li><a href="#stats" className="hover:underline">Estadísticas</a></li>
                    <li><a href="#videos" className="hover:underline">Videos</a></li>
                    <li><a href="#services" className="hover:underline">Servicios</a></li>
                    <li><a href="#contact" className="hover:underline">Contacto</a></li>
                </ul>
            </div>

            {/* Navbar para pantallas grandes */}
            <nav className="hidden lg:flex lg:justify-center lg:items-center lg:w-full lg:bg-bg lg:border-b-2 lg:border-black lg:py-4 lg:px-10 lg:fixed lg:top-0 lg:left-0 lg:z-30">
                <ul className="flex space-x-6 text-xs">
                    <li><a href="#intro" className="hover:underline">Intro</a></li>
                    <li><a href="#about_me" className="hover:underline">Sobre mí</a></li>
                    <li><a href="#tiktok" className="hover:underline">TikTok</a></li>
                    <li><a href="#stats" className="hover:underline">Estadísticas</a></li>
                    <li><a href="#videos" className="hover:underline">Videos</a></li>
                    <li><a href="#services" className="hover:underline">Servicios</a></li>
                    <li><a href="#contact" className="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
}
