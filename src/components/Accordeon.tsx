'use client'
import * as Accordion from '@radix-ui/react-accordion'
import Image from 'next/image'
import arrow from '../../public/acordeonArrow.png'

export function AccordionPani() {
  return (
    <div className="flex bg-orange-300">
      <div>
        <Accordion.Root
          type="single"
          collapsible
          className="bg-zinc-900 w-[300px] rounded-md shadow-[0_2px_10px] border-t-2 border-b-2 border-white shadow-black/5"
        >
          <Accordion.Item value="cobertura-1">
            <Accordion.Trigger className="w-full">
              <div className="flex bg-slate-400 w-full justify-between">
                <div className="p-[10px]">
                  <span className="text-sm font-normal">
                    Carros 0KM com FIPE segura
                  </span>
                </div>
                <div className="h-full bg-orange-600 w-11">
                  <Image src={arrow} alt="Arrow" />
                </div>
              </div>
            </Accordion.Trigger>

            <Accordion.Content>
              <div className="flex bg-slate-400">
                <div className="p-[10px]">
                  <span className="text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    dicta minima, ipsa quis pariatur, velit, necessitatibus quos
                    saepe accusamus nostrum cum animi sit. Alias est iusto
                    corrupti blanditiis unde illum. Dicta minima cumque facilis,
                    libero quisquam illum? Voluptate exercitationem veritatis
                    adipisci facere non, sequi impedit at, accusantium fugiat
                    totam recusandae cupiditate ipsum repellendus quae delectus
                    officia! Dolores cumque corrupti assumenda.
                  </span>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  )
}
