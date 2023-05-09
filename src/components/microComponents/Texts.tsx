import { ReactNode } from 'react'

type titleProps = {
  children: ReactNode
  style: string
}

export function H1({ children, style }: titleProps) {
  return (
    <h1
      className={`lg:font-semibold lg:
lg:text-6xl text-[#212121] font-medium text-3xl ${style}`}
    >
      {children}
    </h1>
  )
}

export function H2({ children, style }: titleProps) {
  return (
    <h2
      className={`lg:font-semibold 
lg:text-4xl text-[#212121] font-medium text-2xl  ${style}`}
    >
      {children}
    </h2>
  )
}

export function H3({ children, style }: titleProps) {
  return (
    <h3
      className={`font-semibold lg:
lg:text-2xl text-[#212121] lg:font-medium text-lg ${style}`}
    >
      {children}
    </h3>
  )
}

export function Span({ children, style }: titleProps) {
  return (
    <span
      className={`font-normal lg:
lg:text-xl text-[#212121] text-lg ${style}`}
    >
      {children}
    </span>
  )
}
