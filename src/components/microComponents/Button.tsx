import { ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
}

export function Button({ children }: buttonProps) {
  return (
    <button className="px-6 py-3 bg-amber-500 font-medium text-lg lg:max-w-[284px]  text-white w-full  flex items-center justify-center rounded-md shadow-lg">
      <a
        href="https://wa.me/5581999262970?text=Ol%C3%A1+Amanda%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+para+meu+seguro+de+autom%C3%B3vel"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </button>
  )
}
