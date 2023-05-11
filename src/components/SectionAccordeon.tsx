import { AccordionPani } from './Accordeon'

export function SectionAccordion() {
  return (
    <section className="bg-slate-300 flex flex-col py-10 px-5 items-center justify-center gap-10 lg:py-20 lg:px-80">
      <div className="py-[10px] rounded-md px-10 bg-slate-50 flex items-center justify-center border-l-8 border-amber-500 box-border shadow-md">
        <span className="font-medium text-yellow-600 text-2xl">
          Principais{' '}
          <strong className="text-cyan-900 font-normal">
            coberturas para seu <strong>veículo!</strong>
          </strong>
        </span>
      </div>

      <div className="lg:w-full lg:shadow-md lg:shadow-slate-600/60">
        <AccordionPani />
      </div>
    </section>
  )
}
