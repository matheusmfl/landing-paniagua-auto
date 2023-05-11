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
            <a href="https://wa.me/5581999262970?text=Ol%C3%A1+Amanda%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+para+meu+seguro+de+autom%C3%B3vel">
              Solicitar cotação
            </a>
          </button>
        </div>
      </section>

      <section className="lg:hidden">
        <Image src={hero} alt="Imagem de homem no sofá contratando seguro" />
      </section>
    </>
  )
}
