import Image from "next/image"
import jessicaArvizu from '../public/img/jessica-arvizu.png'

export default function Header() {
  return (
    <header className="inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-[#FF8ACD] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[30px] text-center lg:py-[50px] bg-white rounded-xl border-4 border-black columns-2">
        <div className="text-center bg-red-500 w-full">
          <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
            Hola, soy Jessica
          </h1>
          <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
            Creadora de contenido UGC
          </p>
        </div>
        <div className="text-center bg-blue-500 w-full">
          <Image
          className="rounded-lg border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            src={jessicaArvizu}
            alt="Jessica Arvizu"
            height={400}
          />        </div>
      </div>
    </header>
  )
}