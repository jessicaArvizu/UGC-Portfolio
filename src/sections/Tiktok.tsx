import Image from "next/image"
import tiktokShot from '../public/img/IMG_2860.jpg'
import Star3 from "@/components/ui/star3-icon"
import Star2 from "@/components/ui/star2-icon"
import Star4 from "@/components/ui/star4-icon"

export default function TikTok() {
    return (
        <section
            id='tiktok'
            className="bg-bg py-10 lg:py-20">
            <div className="mx-auto w-container max-w-full pb-10">
                <h2 className="text-center text-2xl font-heading md:text-3xl lg:text-4xl">
                    TikTok <a href="https://www.tiktok.com/@jessicaarvz" target="_blank" rel="noopener noreferrer">@jessicaarvz</a>
                </h2>
            </div>

            <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-8 lg:px-[20] sm:grid-cols-1 lg:grid-cols-2">
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FFD567]"
                        src={tiktokShot}
                        alt="Un vaso de latte frío"
                        height={500}
                    />

                    <div className="absolute bottom-10 right-16 lg:right-48 bg-white border-4 border-black p-4 rounded-lg shadow-[8px_8px_0px_#FF8ACD]">
                        <ul className="text-base list-none space-y-2">
                            <li className="flex items-center">
                                <Star3 color='#FF8ACD' size='20px' />
                                <span className="ml-2">Comunidad: 4.4K</span>
                            </li>
                            <li className="flex items-center">
                                <Star2 color='#b377df' size='20px' />
                                <span className="ml-2">Likes: 113K</span>
                            </li>
                            <li className="flex items-center">
                                <Star4 color='#FF8ACD' size='20px' />
                                <span className="ml-2">Engagement Rate: 10.47%</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col justify-center lg:col-span-1">
                    <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                        <span className="rounded-full p-1 px-8 bg-mainPink"> TikTok</span> es la plataforma donde más me encanta crear
                        contenido y conectar con mi audiencia. Aquí es donde
                        comparto la mayor parte de mis vlogs, recetas, hauls, y
                        reseñas de restaurantes y cafeterías.
                    </p>
                    <br />
                    <p className="text-sm font-normal leading-relaxed md:text-lg lg:text-xl xl:text-2xl">
                        Estoy profundamente comprometida en hacer crecer esta
                        comunidad, ya que es donde me siento más en casa y donde
                        puedo ser yo misma y acercarme a quienes me siguen.
                    </p>
                </div>
            </div>

        </section>
    )
}