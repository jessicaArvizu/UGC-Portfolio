import Image from "next/image"
import StatsOne from '../public/img/IMG_2857.jpg'
import StatsTwo from '../public/img/IMG_2858.jpg'
import StatsThree from '../public/img/IMG_2859.jpg'

export default function Stats() {

    return (
        <section className="bg-bg py-10 px-10">
            <div className="mx-auto w-container max-w-full pb-10">
                <h2 className="text-center text-2xl font-heading md:text-3xl lg:text-4xl rounded-full p-1 px-8 bg-mainPink">
                    Te comparto algunas estadísticas de mi TikTok
                </h2>
            </div>

            <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-10 px-20 sm:grid-cols-1 lg:grid-cols-3">
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FF8A50]"
                        src={StatsOne}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#FFD567]"
                        src={StatsTwo}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
                <div className="relative flex items-center justify-center lg:col-span-1">
                    <Image
                        className="rounded-lg border-4 border-black shadow-[8px_8px_0px_#2AC3A2]"
                        src={StatsThree}
                        alt="Un vaso de latte frío"
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}