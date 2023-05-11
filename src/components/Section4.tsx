import Image from 'next/image'
import { ReactNode } from 'react'
import icon1 from '../../public/icons/icon-guincho.svg'
import icon2 from '../../public/icons/icon-relogio.svg'
import icon3 from '../../public/icons/icon-escudo.svg'
import icon4 from '../../public/icons/icon-dinheiro.svg'

type iconProps = {
  children: ReactNode
}

function ItemIcon({ children }: iconProps) {
  return (
    <div className="rounded-full bg-stone-200 flex items-center justify-center shadow-xl w-20 h-20">
      {children}
    </div>
  )
}

export function Section4() {
  return (
    <section className=" flex flex-col bg-[#00263F] py-20 mt-[-60px] lg:mt-0 px-5 lg:px-80 gap-10">
      <h2 className="font-normal text-white text-center lg:text-2xl">
        São inúmeras <span className="font-bold">vantagens</span> para promovem
        o seu <span className="font-bold text-yellow-500">bem-estar</span>
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-y-10 lg:flex lg:gap-5 lg:cursor-pointer">
        <div className="flex flex-col gap-5 items-center">
          <ItemIcon>
            <Image src={icon1} alt="ícone de um Guincho" />
          </ItemIcon>
          <span className="text-center font-normal text-white text-base">
            Guincho 24 horas em tempo hábil
          </span>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <ItemIcon>
            <Image src={icon2} alt="ícone de um Guincho" />
          </ItemIcon>
          <span className="text-center font-normal text-white text-base">
            Conte com soluções ágeis
          </span>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <ItemIcon>
            <Image src={icon3} alt="ícone de um Guincho" />
          </ItemIcon>
          <span className="text-center font-normal text-white text-base">
            Mantenha seu patrimônio seguro
          </span>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <ItemIcon>
            <Image src={icon4} alt="ícone de um Guincho" />
          </ItemIcon>
          <span className="text-center font-normal text-white text-base">
            Melhor custo-benefício do mercado
          </span>
        </div>
      </div>
    </section>
  )
}
