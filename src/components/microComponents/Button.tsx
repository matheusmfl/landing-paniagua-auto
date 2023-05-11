import { ReactNode } from 'react'

type buttonProps = {
  children: ReactNode
}

export function Button({ children }: buttonProps) {
  return (
    <button className="px-6 py-3 bg-amber-500 font-medium text-lg lg:max-w-[284px]  text-white w-full  flex items-center justify-center rounded-md shadow-lg">
      <a href="" target="_blank">
        {children}
      </a>
    </button>
  )
}
