import { Button } from './microComponents/Button'
import { H1, Span } from './microComponents/Texts'

export function Section1() {
  return (
    <section className="px-5 py-20 bg-[#00263F] flex flex-col gap-10 lg:px-40 lg:py-20">
      <div className="lg:hidden">
        <div className="flex flex-col gap-10">
          <H1 style="text-slate-50">
            Para uso comum ou profissional, temos as melhores condições!
          </H1>
          <Span style="text-slate-50">
            Não conte apenas com a sorte na hora de proteger algo tão
            importante.
          </Span>
        </div>

        <div className="flex items-center flex-col gap-5">
          <Span style="text-center text-semibold text-[14px] text-white">
            Solicite uma cotação sem compromisso
          </Span>

          <Button>Solicitar cotação</Button>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between">
        <div>
          <span className="text-white text-3xl">
            <span className="text-yellow-500">Evite prejuízo</span> financeiros
            <br />
            em caso de <span className="font-extrabold">imprevistos.</span>
          </span>
        </div>

        <div className="hidden lg:flex text-left text-lg font-normal text-white">
          <span>
            Garanta um atendimento humanizado, feito por
            <br /> corretores licenciados e receba sua cotação
            <br /> em minutos.
          </span>
        </div>
      </div>
    </section>
  )
}
