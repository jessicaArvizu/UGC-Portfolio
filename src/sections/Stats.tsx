import Image from "next/image"
import StatsOne from '../public/img/IMG_2857.jpg'
import StatsTwo from '../public/img/IMG_2858.jpg'
import StatsThree from '../public/img/IMG_2859.jpg'

export default function Stats() {

    return (
        <section
            id='stats'
            className="inset-0 py-10 lg:py-20 flex w-full flex-col items-center justify-center bg-[#FFB587] bg-[linear-gradient(to_right,#FFF4DE33_2px,transparent_1px),linear-gradient(to_bottom,#FFF4DE33_2px,transparent_1px)] bg-[size:70px_70px]">
            <div className="mx-auto w-container max-w-full pb-10">
                <h2 className="text-center text-xl font-heading md:text-3xl lg:text-4xl">
                    Te comparto algunas estadísticas de mi TikTok
                </h2>
            </div>

            <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-10 px-8 lg:px-[20] sm:grid-cols-1 lg:grid-cols-3">
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#b377df]"
                        src={StatsOne}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#88FFD1]"
                        src={StatsTwo}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FFEA80]"
                        src={StatsThree}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}