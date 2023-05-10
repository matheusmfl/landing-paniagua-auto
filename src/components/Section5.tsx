import Image from 'next/image'
import image from '../../public/imgFinal.jpg'

export function Section5() {
  return (
    <section className="flex bg-slate-200 flex-col lg:flex-row-reverse">
      <div className="lg:w-full lg:h-full">
        <Image src={image} alt="Imagem de carros em trânsito" />
      </div>
      <div className="py-20 px-5 flex flex-col gap-5 lg:pt-20 lg:pb-0 lg:px-10">
        <h2 className="text-2xl text-slate-900 lg:text-4xl">
          A mais de <span className="font-bold text-yellow-600">22 anos</span>{' '}
          criando ambientes seguros com{' '}
          <span className="font-bold text-yellow-600">excelência</span> no que
          fazemos!
        </h2>

        <span className="text-base font-normal text-slate-900 lg:text-xl">
          Solicite uma cotação sem compromisso, e encontre as melhores condições
          para o seu veículo.
        </span>

        <button className="bg-amber-500 lg:w-48 mt-5 text-center flex justify-center py-3 text-white text-bold text-lg rounded-lg shadow-xl">
          <a href="" target="_blank">
            Solicitar cotação
          </a>
        </button>
      </div>
    </section>
  )
}
