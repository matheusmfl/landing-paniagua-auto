import Image from 'next/image'
import heroImg from '../../public/heroImg.jpg'
import { H2, H3, Span } from './microComponents/Texts'
import { Button } from './microComponents/Button'

export function HeroSection() {
  return (
    <section className="relative w-full pt-7 px-14 pb-60 lg:py-0 lg:px-0 flex items-start justify-center lg:justify-between lg:bg-slate-200">
      <div className="hidden lg:flex px-40 pt-40 items-start">
        <div className="w-[500px] flex flex-col gap-5">
          <H2 style="text-cyan-900 font-semibold">
            <span className="font-bold">Tranquilidade </span>para suas viagens,{' '}
            <span className="font-semibold text-yellow-600">só com seguro</span>{' '}
            automotivo em dia.
          </H2>
          <Span style="text-cyan-900">
            Proteja seu veículo e seu bolso com um seguro automotivo. Em caso de
            acidentes, roubo ou danos, alguns seguros oferecem serviços extras,
            como assistência 24 horas e carro reserva.
          </Span>
          <Button>Solicitar Cotação</Button>
        </div>
      </div>
      <div className="absolute lg:static lg:shadow-xl bg-slate-900 top-[-2px] bottom-0 left-0 right-0">
        <Image src={heroImg} alt="Foto de background com carro" />
      </div>
      <div className="px-5 py-2 flex flex-col lg:hidden items-center justify-center bg-slate-100 shadow-lg rounded-lg z-20">
        <H2 style="text-cyan-900">Tranquilidade ao viajar</H2>
        <H3 style="text-cyan-900 text-center">
          O seguro é o seu amigo para as horas mais incertas
        </H3>
      </div>
    </section>
  )
}
