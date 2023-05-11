import { Button } from './microComponents/Button'
import { Span } from './microComponents/Texts'

export function Section1() {
  return (
    <section className="px-5 py-20 bg-[#00263F] flex flex-col gap-10 lg:px-40 lg:py-20">
      <div className="lg:hidden">
        <div className="flex flex-col gap-10 text-justify">
          <Span style="text-slate-50 mt-2">
            Proteja seu veículo e seu bolso com um seguro automotivo. Em caso de
            acidentes, roubo ou danos, alguns seguros oferecem serviços extras,
            como assistência 24 horas e carro reserva.
          </Span>
        </div>

        <div className="flex items-center flex-col mt-14 pb-10 lg:mt-10">
          <Button>Solicitar cotação</Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-0">
        <div>
          <span className="text-white text-2xl lg:text-3xl">
            <span className="text-yellow-500">Evite prejuízo</span> financeiros
            <br />
            em caso de <span className="font-extrabold">imprevistos.</span>
          </span>
        </div>

        <div className="flex text-left text-lg font-normal text-white">
          <span>
            Garanta um atendimento humanizado, feito por
            <br className="hidden lg:block" /> corretores licenciados e receba
            sua cotação
            <br className="hidden lg:block" /> em minutos.
          </span>
        </div>
      </div>
    </section>
  )
}
