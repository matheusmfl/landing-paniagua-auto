import { Button } from './microComponents/Button'
import { H1, Span } from './microComponents/Texts'

export function Section1() {
  return (
    <section className="px-5 py-20 bg-[#00263F] flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <H1 style="text-slate-50">
          Para uso comum ou profissional, temos as melhores condições!
        </H1>
        <Span style="text-slate-50">
          Não conte apenas com a sorte na hora de proteger algo tão importante.
        </Span>
      </div>

      <div className="flex items-center flex-col gap-5">
        <Span style="text-center text-semibold text-[14px] text-white">
          Solicite uma cotação sem compromisso
        </Span>

        <Button>Solicitar cotação</Button>
      </div>
    </section>
  )
}
