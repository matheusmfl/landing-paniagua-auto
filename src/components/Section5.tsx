import Image from 'next/image'
import image from '../../public/imgFinal.jpg'

export function Section5() {
  return (
    <section className="flex bg-slate-200 flex-col lg:flex-row-reverse  ">
      <div className="lg:w-full lg:h-full">
        <Image
          src={image}
          alt="Imagem de carros em trânsito"
          sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
        />
      </div>
      <div className="py-20 px-5 flex flex-col gap-5 lg:w-[90%] lg:py-14 lg:px-20">
        <h2 className="text-2xl text-slate-900 lg:text-2xl">
          A mais de <span className="font-bold text-yellow-600">22 anos</span>{' '}
          criando ambientes seguros com{' '}
          <span className="font-bold text-yellow-600">excelência</span> no que
          fazemos!
        </h2>

        <span className="text-base font-normal text-slate-900 lg:text-xl">
          Solicite uma cotação sem compromisso, e encontre as melhores condições
          para o seu veículo.
        </span>

        <button className="bg-amber-500 lg:max-w-[284px] mt-5 text-center flex justify-center py-3 text-white text-bold text-lg rounded-lg shadow-xl">
          <a
            href="https://wa.me/5581999262970?text=Ol%C3%A1+Amanda%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+para+meu+seguro+de+autom%C3%B3vel"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar cotação
          </a>
        </button>
      </div>
    </section>
  )
}
