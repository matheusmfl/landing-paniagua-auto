import { ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
}

export function Button({ children }: buttonProps) {
  return (
    <button className="px-6 py-3 bg-amber-500 font-medium text-lg  text-white w-full lg:w-[85%]  flex items-center justify-center rounded-md shadow-lg">
      <a href="" target="_blank">
        {children}
      </a>
    </button>
  )
}
