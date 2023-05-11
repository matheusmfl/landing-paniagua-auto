import { AccordionPani } from './Accordeon'

export function SectionAccordion() {
  return (
    <section className="bg-slate-100 flex flex-col py-10 px-5 items-center justify-center gap-10 lg:py-20 lg:px-80">
      <div className="py-5 px-[10px] bg-slate-50 flex items-center justify-center border-l-8 border-amber-500 box-border shadow-md shadow-black/50">
        <span className="font-medium text-yellow-600 text-2xl">
          Tire suas dúvidas! <br className="lg:hidden" />
          <strong className="text-cyan-900">
            Confira as principais coberturas para seu veículo!
          </strong>
        </span>
      </div>

      <div className="lg:w-full lg:shadow-md lg:shadow-slate-600/60">
        <AccordionPani />
      </div>
    </section>
  )
}
