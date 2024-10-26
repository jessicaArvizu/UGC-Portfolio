import Image from "next/image"
import StatsOne from '../public/img/IMG_4301.jpg'
import StatsTwo from '../public/img/IMG_4302.jpg'
import StatsThree from '../public/img/IMG_4303.jpg'

export default function Stats() {

    return (
        <section
            id='stats'
            className="font-Rocket inset-0 py-10 px-10 lg:py-20 flex w-full flex-col items-center justify-center bg-[#FFB587] bg-[linear-gradient(to_right,#FFF4DE33_2px,transparent_1px),linear-gradient(to_bottom,#FFF4DE33_2px,transparent_1px)] bg-[size:70px_70px]">
            <div className="mx-auto w-container max-w-full pb-10">
                <h2 className="text-center text-4xl font-heading lg:text-5xl">
                    TE COMPARTO ALGUNAS ESTADÍSTICAS DE MI TIKTOK
                </h2>
            </div>

            <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-10 lg:px-[20] sm:grid-cols-1 lg:grid-cols-3">
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#b377df]"
                        src={StatsOne}
                        alt="Analíticas generales"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#88FFD1]"
                        src={StatsTwo}
                        alt="Analítica de viewers"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FFEA80]"
                        src={StatsThree}
                        alt="Analítica de followers"
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}