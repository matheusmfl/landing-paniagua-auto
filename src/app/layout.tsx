import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/Header'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Paniagua Corretora de seguros',
  description: 'Seu seguro na palma da sua mão!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
