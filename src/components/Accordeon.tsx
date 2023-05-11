'use client'
import * as Accordion from '@radix-ui/react-accordion'

import { accordeonItems } from '@/utils/accordeon'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export function AccordionPani() {
  return (
    <div className="flex w-[300px] lg:w-full shadow-[0_2px_10px] shadow-black/5">
      <div className="lg:w-full">
        <Accordion.Root type="single" collapsible className="lg:w-full">
          {accordeonItems.map((item) => {
            return (
              <Accordion.Item
                key={item.id}
                value={`cobertura ${item.id}`}
                className="first:mt-0 overflow-hidden focus-within:shadow-[0_0_0_1px] focus-within:shadow-slate-600  focus-within:z-10 focus-within:relative first:rounded-t last:rounded-b"
              >
                <Accordion.Trigger className="w-[300px] lg:w-full group leading-none shadow-[0_1px_0] shadow-slate-600 outline-none ">
                  <div className="flex p-[10px] bg-slate-100 w-full justify-between hover:bg-slate-500 hover:text-white text-sm font-normal text-slate-900 ">
                    <span>{item.title}</span>
                    <div className="flex items-center justify-center text-inherit ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDownIcon aria-hidden />
                    </div>
                  </div>
                </Accordion.Trigger>

                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden w-[300px] lg:w-full">
                  <div className="flex bg-slate-400">
                    <div className="p-[10px]  text-left">
                      <span className="text-sm font-normal text-white">
                        {item.content}
                      </span>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            )
          })}
        </Accordion.Root>
      </div>
    </div>
  )
}
