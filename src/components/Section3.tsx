import Image from 'next/image'
import hero from '../../public/sofaImg.jpg'

export function Section3() {
  return (
    <>
      <section className=" flex bg-slate-200">
        <div className="hidden lg:block w-full h-full">
          <Image src={hero} alt="Imagem ilustrativa" />
        </div>
        <div className="flex flex-col gap-5 pt-10 pb-10 px-4 lg:pt-24 lg:pr-10 lg:pl-24">
          <h2 className="text-2xl lg:text-4xl font-normal text-slate-800">
            <span className="font-extrabold">Contrate agora</span> seu seguro
            auto agora mesmo, sem sair de casa e{' '}
            <span className="font-bold text-yellow-500">sem complicação</span>
          </h2>

          <span className="font-normal text-base lg:text-lg text-slate-800 pb-5">
            Dê adeus a burocracia e demora para contratar o seu seguro, contamos
            com corretores credenciados que estão prontos para agilizar e
            atender qualquer dúvidas.
          </span>

          <button className="w-full text-bold text-lg text-white rounded-md bg-[#00263F] lg:max-w-[284px] py-3 shadow-lg">
            <a href="">Solicitar cotação</a>
          </button>
        </div>
      </section>

      <section className="relative lg:hidden h-[400px] lg:h-auto">
        <div className="absolute top-0 z-[-1]">
          <Image src={hero} alt="Imagem de homem no sofá contratando seguro" />
        </div>

        <div className="py-10 px-10 flex flex-col gap-5">
          <h2 className="text-2xl font-normal text-slate-800">
            <span className="font-extrabold">A segurança</span> que você precisa{' '}
            <span className="font-bold text-yellow-800">sem sair de casa</span>
          </h2>

          <span className="text-white lg:text-slate-900 font-normal">
            Sem dificuldades na hora da contratação.
          </span>
        </div>
      </section>
    </>
  )
}
